import { tmq as customerEngagement } from '../../common/static_codegen/tmq/CustomerEngagement';

/**
 * Client-side CustomerEngagement class that interfaces with CustomerEngagementService
 * Uses hex values internally as defined in references.const
 * Handles protobuf serialization/deserialization
 */
class CustomerEngagementClient {
    constructor(callFunction) {
        if (typeof callFunction !== 'function') {
            throw new Error('callFunction must be a function');
        }
        this.callFunction = callFunction;
    }

    // ===== WEBHOOK PROCESSING METHODS =====

    /**
     * Process webhook data
     * @param {Object} webhookData - Webhook data
     * @param {string} webhookData.payload - Webhook payload
     * @param {Object} webhookData.headers - Webhook headers
     * @param {string} webhookData.source - Webhook source
     * @param {string} webhookData.userId - User ID
     * @returns {Promise<Object>} Processing result
     */
    async processWebhook(webhookData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookEventRequest();
        const social = webhookData.social ? new customerEngagement.SocialMediaInfo() : undefined;
        
        // Set the main request fields
        request.setAccountId(webhookData.accountId);
        request.setType(webhookData.type);
        request.setSource(webhookData.source);
        request.setData(webhookData.payload ? new Uint8Array(Object.values(webhookData.payload)) : undefined);
        request.setTags(webhookData.tags || []);
        request.setPriority(webhookData.priority || 0);
        request.setMetadata(webhookData.metadata ? new Uint8Array(Object.values(webhookData.metadata)) : undefined);
        
        // Set social media info if provided
        if (social) {
            social.setPlatform(webhookData.social.platform);
            social.setHandle(webhookData.social.handle);
            social.setIdentifier(webhookData.social.identifier);
            request.setSocial(social);
        }

        // Send request
        const response = await this.callFunction(0xd04e7a73, request);
        
        // Deserialize response
        if (response && response.result) {
            const webhookResponse = customerEngagement.WebhookEventResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(webhookResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: webhookResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                type: objData.type,
                source: objData.source,
                social: objData.social,
                data: objData.data,
                tags: objData.tags,
                priority: objData.priority,
                status: objData.status,
                processedAt: objData.processedAt,
                createdAt: objData.createdAt
            };
        }
        
        return response;
    }

    /**
     * Process webhook with validation
     * @param {Object} webhookData - Webhook data with validation
     * @param {string} webhookData.payload - Webhook payload
     * @param {Object} webhookData.headers - Webhook headers
     * @param {string} webhookData.source - Webhook source
     * @param {string} webhookData.signature - Webhook signature for validation
     * @param {string} webhookData.userId - User ID
     * @returns {Promise<Object>} Processing result with validation
     */
    async processWebhookWithValidation(webhookData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookEventRequest();
        const social = webhookData.social ? new customerEngagement.SocialMediaInfo() : undefined;
        
        // Set the main request fields
        request.setAccountId(webhookData.accountId);
        request.setType(webhookData.type);
        request.setSource(webhookData.source);
        request.setData(webhookData.payload ? new Uint8Array(Object.values(webhookData.payload)) : undefined);
        request.setTags(webhookData.tags || []);
        request.setPriority(webhookData.priority || 0);
        request.setMetadata(webhookData.metadata ? new Uint8Array(Object.values(webhookData.metadata)) : undefined);
        
        // Set social media info if provided
        if (social) {
            social.setPlatform(webhookData.social.platform);
            social.setHandle(webhookData.social.handle);
            social.setIdentifier(webhookData.social.identifier);
            request.setSocial(social);
        }

        // Send request
        const response = await this.callFunction(0xad93357b, request);
        
        // Deserialize response
        if (response && response.result) {
            const webhookResponse = customerEngagement.WebhookEventResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(webhookResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: webhookResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                type: objData.type,
                source: objData.source,
                social: objData.social,
                data: objData.data,
                tags: objData.tags,
                priority: objData.priority,
                status: objData.status,
                processedAt: objData.processedAt,
                createdAt: objData.createdAt
            };
        }
        
        return response;
    }

    /**
     * Process comment data
     * @param {Object} commentData - Comment data
     * @param {string} commentData.content - Comment content
     * @param {string} commentData.authorId - Author ID
     * @param {string} commentData.postId - Post ID
     * @param {string} commentData.parentId - Parent comment ID (for replies)
     * @param {Object} commentData.metadata - Additional metadata
     * @returns {Promise<Object>} Processing result
     */
    async processComment(commentData) {
        // Create protobuf request
        const request = new customerEngagement.CommentWebhookRequest();
        request.setAccountid(commentData.accountId);
        request.setContent(commentData.content);
        request.setPlatform(commentData.platform);
        request.setHandle(commentData.handle);
        request.setTags(commentData.tags || []);
        request.setPriority(commentData.priority || 0);

        // Send request
        const response = await this.callFunction(0xce4e3f49, request);
        
        // Deserialize response
        if (response && response.result) {
            const commentResponse = customerEngagement.CommentResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(commentResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: commentResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                content: objData.content,
                platform: objData.platform,
                handle: objData.handle,
                status: objData.status
            };
        }
        
        return response;
    }

    /**
     * Process like/reaction data
     * @param {Object} likeData - Like data
     * @param {string} likeData.userId - User ID who liked
     * @param {string} likeData.targetId - Target ID (post, comment, etc.)
     * @param {string} likeData.targetType - Target type (post, comment, etc.)
     * @param {string} likeData.reactionType - Type of reaction (like, love, etc.)
     * @returns {Promise<Object>} Processing result
     */
    async processLike(likeData) {
        // Create protobuf request
        const request = new customerEngagement.LikeWebhookRequest();
        request.setAccountid(likeData.accountId);
        request.setPlatform(likeData.platform);
        request.setIdentifier(likeData.identifier);
        request.setTags(likeData.tags || []);
        request.setPriority(likeData.priority || 0);

        // Send request
        const response = await this.callFunction(0xf984ffb7, request);
        
        // Deserialize response
        if (response && response.result) {
            const likeResponse = customerEngagement.LikeResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(likeResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: likeResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                platform: objData.platform,
                identifier: objData.identifier,
                status: objData.status
            };
        }
        
        return response;
    }

    // ===== WEBHOOK HEALTH & STATISTICS METHODS =====

    /**
     * Get webhook health status
     * @param {Object} healthData - Health check parameters
     * @param {string} healthData.service - Service to check
     * @param {string} healthData.userId - User ID
     * @returns {Promise<Object>} Health status
     */
    async getWebhookHealth(healthData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookEventRequest();
        request.setAccountId(healthData.accountId);
        request.setType(healthData.service);
        request.setSource('health-check');
        request.setData(new Uint8Array());
        request.setTags([]);
        request.setPriority(0);

        // Send request
        const response = await this.callFunction(0x5eddd55c, request);
        
        // Deserialize response
        if (response && response.result) {
            const healthResponse = customerEngagement.WebhookHealthResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(healthResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: healthResponse.getSuccess(),
                health: objData.health,
                message: healthResponse.getMessage()
            };
        }
        
        return response;
    }

    /**
     * Get webhook statistics
     * @param {Object} statsData - Statistics parameters
     * @param {number} statsData.hours - Hours to look back
     * @param {string} statsData.userId - User ID
     * @param {string} statsData.accountId - Account ID
     * @returns {Promise<Object>} Webhook statistics
     */
    async getWebhookStats(statsData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookStatsRequest();
        request.setHours(statsData.hours || 24);

        // Send request
        const response = await this.callFunction(0xefacb9a5, request);
        
        // Deserialize response
        if (response && response.result) {
            const statsResponse = customerEngagement.WebhookStatsResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(statsResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: statsResponse.getSuccess(),
                stats: objData.stats,
                timePeriod: objData.timePeriod,
                message: statsResponse.getMessage()
            };
        }
        
        return response;
    }

    // ===== WEBHOOK EVENT MANAGEMENT METHODS =====

    /**
     * Get webhook event by ID
     * @param {Object} eventData - Event data
     * @param {string} eventData.webhookId - Webhook event ID
     * @param {string} eventData.userId - User ID
     * @returns {Promise<Object>} Webhook event data
     */
    async getWebhookEvent(eventData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookEventByIdRequest();
        request.setWebhookid(eventData.webhookId);

        // Send request
        const response = await this.callFunction(0x8345d4a8, request);
        
        // Deserialize response
        if (response && response.result) {
            const webhookResponse = customerEngagement.WebhookEventResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(webhookResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: webhookResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                type: objData.type,
                source: objData.source,
                social: objData.social,
                data: objData.data,
                tags: objData.tags,
                priority: objData.priority,
                status: objData.status,
                processedAt: objData.processedAt,
                createdAt: objData.createdAt
            };
        }
        
        return response;
    }

    /**
     * List webhook events with filtering
     * @param {Object} listData - List parameters
     * @param {Object} listData.filters - Event filters
     * @param {string} listData.filters.status - Filter by status
     * @param {string} listData.filters.source - Filter by source
     * @param {Date} listData.filters.startDate - Start date filter
     * @param {Date} listData.filters.endDate - End date filter
     * @param {number} listData.limit - Maximum number of events
     * @param {number} listData.offset - Offset for pagination
     * @param {string} listData.userId - User ID
     * @returns {Promise<Object>} List of webhook events
     */
    async listWebhookEvents(listData) {
        // Create protobuf request
        const request = new customerEngagement.ListWebhookEventsRequest();
        const filters = new customerEngagement.WebhookEventFilters();
        
        // Set the filters
        filters.setAccountid(listData.filters?.accountId);
        filters.setType(listData.filters?.type);
        filters.setSource(listData.filters?.source);
        filters.setStatus(listData.filters?.status);
        filters.setMinpriority(listData.filters?.minPriority);
        
        // Attach filters to request
        request.setFilters(filters);

        // Send request
        const response = await this.callFunction(0x77523ff2, request);
        
        // Deserialize response
        if (response && response.result) {
            const listResponse = customerEngagement.WebhookEventListResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(listResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: listResponse.getSuccess(),
                webhooks: objData.webhooks,
                count: objData.count,
                message: listResponse.getMessage()
            };
        }
        
        return response;
    }

    /**
     * Update webhook event
     * @param {Object} updateData - Update data
     * @param {string} updateData.webhookId - Webhook event ID
     * @param {string} updateData.status - New status
     * @param {Object} updateData.metadata - Additional metadata
     * @param {string} updateData.userId - User ID
     * @returns {Promise<Object>} Updated webhook event
     */
    async updateWebhookEvent(updateData) {
        // Create protobuf request
        const request = new customerEngagement.UpdateWebhookEventRequest();
        const updateDataObj = new customerEngagement.WebhookEventUpdateData();
        
        // Set the update data
        updateDataObj.setStatus(updateData.status);
        updateDataObj.setTags(updateData.tags || []);
        updateDataObj.setPriority(updateData.priority || 0);
        updateDataObj.setMetadata(updateData.metadata ? new Uint8Array(Object.values(updateData.metadata)) : undefined);
        
        // Set the main request fields
        request.setWebhookid(updateData.webhookId);
        request.setUpdatedata(updateDataObj);

        // Send request
        const response = await this.callFunction(0x9b7d1ef6, request);
        
        // Deserialize response
        if (response && response.result) {
            const webhookResponse = customerEngagement.WebhookEventResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(webhookResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: webhookResponse.getSuccess(),
                id: objData.id,
                webhookId: objData.webhookId,
                accountId: objData.accountId,
                type: objData.type,
                source: objData.source,
                social: objData.social,
                data: objData.data,
                tags: objData.tags,
                priority: objData.priority,
                status: objData.status,
                processedAt: objData.processedAt,
                createdAt: objData.createdAt
            };
        }
        
        return response;
    }

    // ===== WEBHOOK ANALYTICS METHODS =====

    /**
     * Get webhook analytics
     * @param {Object} analyticsData - Analytics parameters
     * @param {string} analyticsData.accountId - Account ID
     * @param {number} analyticsData.days - Number of days to analyze
     * @param {string} analyticsData.userId - User ID
     * @returns {Promise<Object>} Webhook analytics data
     */
    async getWebhookAnalytics(analyticsData) {
        // Create protobuf request
        const request = new customerEngagement.WebhookAnalyticsRequest();
        request.setAccountid(analyticsData.accountId);
        request.setDays(analyticsData.days || 30);

        // Send request
        const response = await this.callFunction(0x4d86ff7d, request);
        
        // Deserialize response
        if (response && response.result) {
            const analyticsResponse = customerEngagement.WebhookAnalyticsResponse.deserializeBinary(response.result);
            const stringData = new TextDecoder().decode(analyticsResponse.getData());
            const objData = JSON.parse(stringData);
            return {
                success: analyticsResponse.getSuccess(),
                analytics: objData.analytics,
                message: analyticsResponse.getMessage()
            };
        }
        
        return response;
    }

    // ===== CUSTOMER MANAGEMENT METHODS =====

    /**
     * Get customer information
     * @param {Object} customerData - Customer data
     * @param {string} customerData.customerId - Customer ID
     * @param {string} customerData.userId - User ID
     * @returns {Promise<Object>} Customer information
     */
    async getCustomer(customerData) {
        // For customer methods, we might not have protobuf classes
        // Pass the data directly
        const response = await this.callFunction(0x6967a01c, customerData);
        return response;
    }
}

export default CustomerEngagementClient;
