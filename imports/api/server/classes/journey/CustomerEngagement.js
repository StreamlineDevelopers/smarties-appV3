
import { CustomerEngagementClient } from '@customer-engagement/client';
import { Core } from "@tmq-dev-ph/tmq-dev-core-server";

class CustomerEngagement {
    constructor(config) {
        this.config = config;
        this.client = new CustomerEngagementClient(config);
        this.db = Core.getDB("customer_engagement", true);
    }

    /**
     * Set the API key for the client
     * @param {string} apiKey - JWT token or API key
     */
    setApiKey(apiKey) {
        this.client.setApiKey(apiKey);
    }

    /**
     * Get the axios instance from the client
     * @returns {Object} Axios instance
     */
    getAxiosInstance() {
        return this.client.getAxiosInstance();
    }

    /**
     * Get webhook health status
     * @returns {Object} Webhook health information
     */
    async getWebhookHealth() {
        try {
            const response = await this.client.webhooks.getWebhookHealth();
            
            if (response.data) {
                return {
                    status: "success",
                    health: response.data
                };
            } else {
                throw new Error('Failed to get webhook health via client');
            }
        } catch (error) {
            console.error('Error getting webhook health:', error);
            throw new Error(`Failed to get webhook health: ${error.message}`);
        }
    }

    /**
     * Process a webhook event
     * @param {Object} webhookEvent - Webhook event data
     * @param {string} webhookEvent.account_id - Account ID
     * @param {string} webhookEvent.type - Event type (comment, like, etc.)
     * @param {string} webhookEvent.source - Event source
     * @param {Object} webhookEvent.social - Social media information
     * @param {Object} webhookEvent.data - Event data
     * @param {Array} webhookEvent.tags - Event tags
     * @param {number} webhookEvent.priority - Event priority
     * @returns {Object} Processing result
     */
    async processWebhook(webhookEvent) {
        if (!webhookEvent.account_id || !webhookEvent.type || !webhookEvent.source) {
            throw new Error('Account ID, type, and source are required');
        }

        try {
            const response = await this.client.webhooks.processWebhook(webhookEvent);
            
            if (response.data) {
                // Store webhook event in local database
                const now = new Date().valueOf();
                const webhookRecord = {
                    _id: Core.generateId(),
                    webhookId: response.data._id || response.data.id,
                    accountId: webhookEvent.account_id,
                    type: webhookEvent.type,
                    source: webhookEvent.source,
                    social: webhookEvent.social || null,
                    data: webhookEvent.data || null,
                    tags: webhookEvent.tags || [],
                    priority: webhookEvent.priority || 0.5,
                    status: response.data.status || 'processed',
                    processedAt: now,
                    createdAt: now,
                    metadata: webhookEvent.metadata || {}
                };

                await this.db.insertOne(webhookRecord);

                return {
                    status: "success",
                    webhook: {
                        id: webhookRecord._id,
                        webhookId: response.data._id || response.data.id,
                        accountId: webhookEvent.account_id,
                        type: webhookEvent.type,
                        source: webhookEvent.source,
                        status: response.data.status || 'processed',
                        processedAt: webhookRecord.processedAt,
                        success: response.data.success || true
                    }
                };
            } else {
                throw new Error('Failed to process webhook via client');
            }
        } catch (error) {
            console.error('Error processing webhook:', error);
            throw new Error(`Failed to process webhook: ${error.message}`);
        }
    }

    /**
     * Process a comment webhook using convenience method
     * @param {string} accountId - Account ID
     * @param {string} content - Comment content
     * @param {string} platform - Social platform
     * @param {string} handle - User handle or identifier
     * @param {Array} tags - Event tags
     * @param {number} priority - Event priority
     * @returns {Object} Processing result
     */
    async processComment(accountId, content, platform, handle, tags = [], priority = 0.5) {
        if (!accountId || !content || !platform || !handle) {
            throw new Error('Account ID, content, platform, and handle are required');
        }

        try {
            const response = await this.client.webhooks.processComment(
                accountId,
                content,
                platform,
                handle,
                tags,
                priority
            );
            
            if (response.data) {
                // Store comment event in local database
                const now = new Date().valueOf();
                const commentRecord = {
                    _id: Core.generateId(),
                    webhookId: response.data._id || response.data.id,
                    accountId: accountId,
                    type: 'comment',
                    source: platform,
                    social: {
                        platform: platform,
                        handle: handle
                    },
                    data: {
                        content: content
                    },
                    tags: tags,
                    priority: priority,
                    status: response.data.status || 'processed',
                    processedAt: now,
                    createdAt: now
                };

                await this.db.insertOne(commentRecord);

                return {
                    status: "success",
                    comment: {
                        id: commentRecord._id,
                        webhookId: response.data._id || response.data.id,
                        accountId: accountId,
                        content: content,
                        platform: platform,
                        handle: handle,
                        status: response.data.status || 'processed',
                        success: response.data.success || true
                    }
                };
            } else {
                throw new Error('Failed to process comment via client');
            }
        } catch (error) {
            console.error('Error processing comment:', error);
            throw new Error(`Failed to process comment: ${error.message}`);
        }
    }

    /**
     * Process a like webhook using convenience method
     * @param {string} accountId - Account ID
     * @param {string} platform - Social platform
     * @param {string} identifier - User identifier (email, phone, etc.)
     * @param {Array} tags - Event tags
     * @param {number} priority - Event priority
     * @returns {Object} Processing result
     */
    async processLike(accountId, platform, identifier, tags = [], priority = 0.5) {
        if (!accountId || !platform || !identifier) {
            throw new Error('Account ID, platform, and identifier are required');
        }

        try {
            const response = await this.client.webhooks.processLike(
                accountId,
                platform,
                identifier,
                tags,
                priority
            );
            
            if (response.data) {
                // Store like event in local database
                const now = new Date().valueOf();
                const likeRecord = {
                    _id: Core.generateId(),
                    webhookId: response.data._id || response.data.id,
                    accountId: accountId,
                    type: 'like',
                    source: platform,
                    social: {
                        platform: platform,
                        identifier: identifier
                    },
                    tags: tags,
                    priority: priority,
                    status: response.data.status || 'processed',
                    processedAt: now,
                    createdAt: now
                };

                await this.db.insertOne(likeRecord);

                return {
                    status: "success",
                    like: {
                        id: likeRecord._id,
                        webhookId: response.data._id || response.data.id,
                        accountId: accountId,
                        platform: platform,
                        identifier: identifier,
                        status: response.data.status || 'processed',
                        success: response.data.success || true
                    }
                };
            } else {
                throw new Error('Failed to process like via client');
            }
        } catch (error) {
            console.error('Error processing like:', error);
            throw new Error(`Failed to process like: ${error.message}`);
        }
    }

    /**
     * Process webhook with validation
     * @param {Object} webhookEvent - Webhook event data
     * @returns {Object} Processing result
     */
    async processWebhookWithValidation(webhookEvent) {
        if (!webhookEvent.account_id || !webhookEvent.type || !webhookEvent.source) {
            throw new Error('Account ID, type, and source are required for webhook validation');
        }

        try {
            const response = await this.client.webhooks.processWebhookWithValidation(webhookEvent);
            
            if (response.data) {
                return {
                    status: "success",
                    webhook: response.data
                };
            } else {
                throw new Error('Failed to process webhook with validation via client');
            }
        } catch (error) {
            console.error('Error processing webhook with validation:', error);
            throw new Error(`Failed to process webhook with validation: ${error.message}`);
        }
    }

    /**
     * Get webhook statistics for a specific time period
     * @param {number} hours - Number of hours to look back
     * @returns {Object} Webhook statistics
     */
    async getWebhookStats(hours) {
        if (!hours || hours <= 0) {
            throw new Error('Hours must be a positive number');
        }

        try {
            const response = await this.client.webhooks.getWebhookStats(hours);
            
            if (response.data) {
                return {
                    status: "success",
                    stats: response.data,
                    timePeriod: `${hours} hours`
                };
            } else {
                throw new Error('Failed to get webhook stats via client');
            }
        } catch (error) {
            console.error('Error getting webhook stats:', error);
            throw new Error(`Failed to get webhook stats: ${error.message}`);
        }
    }

    /**
     * Get webhook event by ID
     * @param {string} webhookId - Webhook event ID
     * @returns {Object} Webhook event object
     */
    async getWebhookEvent(webhookId) {
        if (!webhookId) {
            throw new Error('Webhook ID is required');
        }

        try {
            const webhookEvent = await this.db.findOne({ _id: webhookId });
            
            if (!webhookEvent) {
                throw new Error('Webhook event not found');
            }

            return {
                status: "success",
                webhook: {
                    id: webhookEvent._id,
                    webhookId: webhookEvent.webhookId,
                    accountId: webhookEvent.accountId,
                    type: webhookEvent.type,
                    source: webhookEvent.source,
                    social: webhookEvent.social,
                    data: webhookEvent.data,
                    tags: webhookEvent.tags,
                    priority: webhookEvent.priority,
                    status: webhookEvent.status,
                    processedAt: webhookEvent.processedAt,
                    createdAt: webhookEvent.createdAt
                }
            };
        } catch (error) {
            console.error('Error getting webhook event:', error);
            throw new Error(`Failed to get webhook event: ${error.message}`);
        }
    }

    /**
     * List webhook events with optional filtering
     * @param {Object} filters - Optional filters
     * @param {string} filters.accountId - Filter by account ID
     * @param {string} filters.type - Filter by event type
     * @param {string} filters.source - Filter by source
     * @param {string} filters.status - Filter by status
     * @param {number} filters.minPriority - Filter by minimum priority
     * @returns {Object} List of webhook events
     */
    async listWebhookEvents(filters = {}) {
        try {
            const query = {};
            
            if (filters.accountId) {
                query.accountId = filters.accountId;
            }
            
            if (filters.type) {
                query.type = filters.type;
            }
            
            if (filters.source) {
                query.source = filters.source;
            }
            
            if (filters.status) {
                query.status = filters.status;
            }
            
            if (filters.minPriority !== undefined) {
                query.priority = { $gte: filters.minPriority };
            }

            const webhookEvents = await this.db.find(query).toArray();
            
            return {
                status: "success",
                webhooks: webhookEvents.map(webhook => ({
                    id: webhook._id,
                    webhookId: webhook.webhookId,
                    accountId: webhook.accountId,
                    type: webhook.type,
                    source: webhook.source,
                    tags: webhook.tags,
                    priority: webhook.priority,
                    status: webhook.status,
                    processedAt: webhook.processedAt,
                    createdAt: webhook.createdAt
                })),
                count: webhookEvents.length
            };
        } catch (error) {
            console.error('Error listing webhook events:', error);
            throw new Error(`Failed to list webhook events: ${error.message}`);
        }
    }

    /**
     * Update webhook event status
     * @param {string} webhookId - Webhook event ID to update
     * @param {Object} updateData - Data to update
     * @returns {Object} Updated webhook event object
     */
    async updateWebhookEvent(webhookId, updateData) {
        if (!webhookId) {
            throw new Error('Webhook ID is required');
        }

        try {
            // Get existing webhook record
            const existingWebhook = await this.db.findOne({ _id: webhookId });
            if (!existingWebhook) {
                throw new Error('Webhook event not found');
            }

            const allowedFields = [
                'status', 'tags', 'priority', 'metadata'
            ];

            const updateFields = {};
            allowedFields.forEach(field => {
                if (updateData[field] !== undefined) {
                    updateFields[field] = updateData[field];
                }
            });

            if (Object.keys(updateFields).length === 0) {
                throw new Error('No valid fields to update');
            }

            updateFields.updatedAt = new Date().valueOf();

            // Update local database
            const result = await this.db.updateOne(
                { _id: webhookId },
                { $set: updateFields }
            );

            if (result.modifiedCount > 0) {
                const updatedWebhook = await this.db.findOne({ _id: webhookId });
                return {
                    status: "success",
                    webhook: {
                        id: updatedWebhook._id,
                        webhookId: updatedWebhook.webhookId,
                        accountId: updatedWebhook.accountId,
                        type: updatedWebhook.type,
                        source: updatedWebhook.source,
                        tags: updatedWebhook.tags,
                        priority: updatedWebhook.priority,
                        status: updatedWebhook.status,
                        updatedAt: updatedWebhook.updatedAt
                    }
                };
            } else {
                throw new Error('No changes were made to the webhook event');
            }
        } catch (error) {
            console.error('Error updating webhook event:', error);
            throw new Error(`Failed to update webhook event: ${error.message}`);
        }
    }

    /**
     * Get webhook event analytics
     * @param {string} accountId - Account ID (optional)
     * @param {number} days - Number of days to analyze
     * @returns {Object} Analytics data
     */
    async getWebhookAnalytics(accountId = null, days = 30) {
        try {
            const query = {};
            
            if (accountId) {
                query.accountId = accountId;
            }
            
            const cutoffDate = new Date(Date.now() - (days * 24 * 60 * 60 * 1000)).valueOf();
            query.createdAt = { $gte: cutoffDate };

            const webhookEvents = await this.db.find(query).toArray();
            
            // Calculate analytics
            const analytics = {
                totalEvents: webhookEvents.length,
                eventsByType: {},
                eventsBySource: {},
                averagePriority: 0,
                eventsByDay: {},
                topTags: {}
            };

            let totalPriority = 0;

            webhookEvents.forEach(webhook => {
                // Count by type
                analytics.eventsByType[webhook.type] = (analytics.eventsByType[webhook.type] || 0) + 1;
                
                // Count by source
                analytics.eventsBySource[webhook.source] = (analytics.eventsBySource[webhook.source] || 0) + 1;
                
                // Sum priority
                totalPriority += webhook.priority || 0;
                
                // Count by day
                const day = new Date(webhook.createdAt).toISOString().split('T')[0];
                analytics.eventsByDay[day] = (analytics.eventsByDay[day] || 0) + 1;
                
                // Count tags
                if (webhook.tags && Array.isArray(webhook.tags)) {
                    webhook.tags.forEach(tag => {
                        analytics.topTags[tag] = (analytics.topTags[tag] || 0) + 1;
                    });
                }
            });

            // Calculate average priority
            analytics.averagePriority = webhookEvents.length > 0 ? totalPriority / webhookEvents.length : 0;

            // Sort top tags
            analytics.topTags = Object.entries(analytics.topTags)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10)
                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

            return {
                status: "success",
                analytics: {
                    ...analytics,
                    timePeriod: `${days} days`,
                    accountId: accountId || 'all'
                }
            };
        } catch (error) {
            console.error('Error getting webhook analytics:', error);
            throw new Error(`Failed to get webhook analytics: ${error.message}`);
        }
    }
}

export default CustomerEngagement;