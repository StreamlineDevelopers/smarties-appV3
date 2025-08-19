import { SalesEnablementClient } from '@sales-enablement/client';
import { Core } from "@tmq-dev-ph/tmq-dev-core-server";
import { Customer } from "../dbTemplates/Customer";

class SalesEnablement {
    constructor(config) {
        this.config = config;
        this.client = new SalesEnablementClient(config);
        this.db = Core.getDB("sales", true);
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
     * Add a new customer
     * @param {Object} customerData - Customer information
     * @param {string} customerData.email - Customer email
     * @param {string} customerData.firstName - Customer first name
     * @param {string} customerData.lastName - Customer last name
     * @param {string} customerData.phone - Customer phone number
     * @param {Object} customerData.billingAddress - Billing address information
     * @param {string} customerData.userId - Associated user ID
     * @returns {Object} Created customer object
     */
    async addCustomer(customerData) {
        if (!customerData.email || !customerData.firstName || !customerData.lastName) {
            throw new Error('Email, firstName, and lastName are required');
        }

        try {
            // Use the Stripe OAuth customer endpoint via the client
            const response = await this.client.getAxiosInstance().post(
                `/api/stripe-oauth/customers?userId=${customerData.userId || 'default'}`,
                {
                    email: customerData.email,
                    name: `${customerData.firstName} ${customerData.lastName}`,
                    phone: customerData.phone,
                    metadata: {
                        source: 'sales_enablement_class',
                        firstName: customerData.firstName,
                        lastName: customerData.lastName,
                        userId: customerData.userId
                    },
                    description: `Customer created via SalesEnablement class`
                }
            )

            if (response.data && response.data.customer) {
                const stripeCustomer = response.data.customer;
                const databaseCustomer = response.data.newCustomer || response.data.existingCustomer;

                // Create or update customer using the Customer template
                let customer = await Customer.findByStripeCustomerId(stripeCustomer.id);
                
                if (!customer) {
                    // Create new customer
                    customer = new Customer({
                        customerId: stripeCustomer.id, // Use Stripe ID as external customer ID
                        accountId: customerData.accountId || 'default',
                        userId: customerData.userId || null,
                        customerType: 'sales',
                        source: 'stripe',
                        firstName: customerData.firstName,
                        lastName: customerData.lastName,
                        email: customerData.email,
                        phone: customerData.phone || null,
                        billingAddress: customerData.billingAddress || null,
                        stripeCustomerId: stripeCustomer.id,
                        status: 'active',
                        lifecycleStage: 'customer',
                        tags: ['stripe', 'sales'],
                        metadata: customerData.metadata || {}
                    });
                } else {
                    // Update existing customer
                    customer.firstName = customerData.firstName;
                    customer.lastName = customerData.lastName;
                    customer.email = customerData.email;
                    customer.phone = customerData.phone || customer.phone;
                    customer.billingAddress = customerData.billingAddress || customer.billingAddress;
                    customer.metadata = { ...customer.metadata, ...customerData.metadata };
                }

                // Save customer to database
                await customer.save();

                return {
                    status: "success",
                    customer: {
                        id: customer.id,
                        customerId: customer.customerId,
                        stripeCustomerId: customer.stripeCustomerId,
                        email: customer.email,
                        firstName: customer.firstName,
                        lastName: customer.lastName,
                        phone: customer.phone,
                        billingAddress: customer.billingAddress,
                        status: customer.status,
                        customerType: customer.customerType,
                        createdAt: customer.createdAt
                    }
                };
            } else {
                throw new Error('Failed to create customer via Stripe OAuth');
            }
        } catch (error) {
            console.error('Error creating customer:', error);
            throw new Error(`Failed to create customer: ${error.message}`);
        }
    }

    /**
     * Update an existing customer
     * @param {string} customerId - Customer ID to update
     * @param {Object} updateData - Data to update
     * @returns {Object} Updated customer object
     */
    async updateCustomer(customerId, updateData) {
        if (!customerId) {
            throw new Error('Customer ID is required');
        }

        try {
            // Get existing customer using Customer template
            const customer = await Customer.findByStripeCustomerId(customerId) || 
                           await Customer.findByCustomerId(customerId);
            
            if (!customer) {
                throw new Error('Customer not found');
            }

            // Update customer fields
            if (updateData.firstName !== undefined) customer.firstName = updateData.firstName;
            if (updateData.lastName !== undefined) customer.lastName = updateData.lastName;
            if (updateData.phone !== undefined) customer.phone = updateData.phone;
            if (updateData.billingAddress !== undefined) customer.billingAddress = updateData.billingAddress;
            if (updateData.status !== undefined) customer.status = updateData.status;
            if (updateData.metadata !== undefined) {
                customer.metadata = { ...customer.metadata, ...updateData.metadata };
            }

            // If Stripe customer ID exists, update Stripe as well
            if (customer.stripeCustomerId) {
                try {
                    await this.client.getAxiosInstance().post(
                        `/api/stripe-oauth/customers/${customer.stripeCustomerId}?userId=${customer.userId || 'default'}`,
                        {
                            name: customer.firstName && customer.lastName ? 
                                `${customer.firstName} ${customer.lastName}` : 
                                `${customer.firstName} ${customer.lastName}`,
                            phone: customer.phone,
                            metadata: {
                                ...customer.metadata,
                                updatedAt: new Date().valueOf()
                            }
                        }
                    );
                } catch (stripeError) {
                    console.warn('Failed to update Stripe customer, but local update succeeded:', stripeError.message);
                }
            }

            // Save updated customer
            await customer.save();

            return {
                status: "success",
                customer: {
                    id: customer.id,
                    customerId: customer.customerId,
                    stripeCustomerId: customer.stripeCustomerId,
                    email: customer.email,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phone: customer.phone,
                    billingAddress: customer.billingAddress,
                    status: customer.status,
                    updatedAt: customer.updatedAt
                }
            };
        } catch (error) {
            console.error('Error updating customer:', error);
            throw new Error(`Failed to update customer: ${error.message}`);
        }
    }

    /**
     * Create a new discount code
     * @param {Object} discountData - Discount code information
     * @param {string} discountData.name - Discount name
     * @param {string} discountData.code - Discount code
     * @param {string} discountData.type - Discount type (percentage or fixed)
     * @param {number} discountData.value - Discount value
     * @param {string} discountData.currency - Currency code
     * @param {number} discountData.maxUses - Maximum number of uses
     * @param {Date} discountData.expiresAt - Expiration date
     * @param {number} discountData.minimumAmount - Minimum order amount
     * @param {string} discountData.userId - Creator user ID
     * @returns {Object} Created discount code object
     */
    async createDiscountCode(discountData) {
        if (!discountData.name || !discountData.code || !discountData.type || 
            !discountData.value || !discountData.currency) {
            throw new Error('Name, code, type, value, and currency are required');
        }

        if (!['percentage', 'fixed'].includes(discountData.type)) {
            throw new Error('Type must be either "percentage" or "fixed"');
        }

        try {
            // Use the client's transactions.createDiscountCode method
            const response = await this.client.transactions.createDiscountCode(discountData, discountData.userId);
            
            if (response.data) {
                // Store additional discount data in local database
                const now = new Date().valueOf();
                const discountRecord = {
                    _id: Core.generateId(),
                    discountId: response.data._id || response.data.id,
                    name: discountData.name,
                    code: discountData.code.toUpperCase(),
                    type: discountData.type,
                    value: discountData.value,
                    currency: discountData.currency.toLowerCase(),
                    maxUses: discountData.maxUses || null,
                    currentUses: 0,
                    expiresAt: discountData.expiresAt || null,
                    minimumAmount: discountData.minimumAmount || 0,
                    isActive: true,
                    createdBy: discountData.userId || null,
                    createdAt: now,
                    updatedAt: now,
                    metadata: discountData.metadata || {}
                };

                await this.db.insertOne(discountRecord);

                return {
                    status: "success",
                    discount: {
                        id: discountRecord._id,
                        discountId: response.data._id || response.data.id,
                        name: response.data.name || discountData.name,
                        code: response.data.code || discountData.code,
                        type: response.data.type || discountData.type,
                        value: response.data.value || discountData.value,
                        currency: response.data.currency || discountData.currency,
                        maxUses: response.data.maxUses || discountData.maxUses,
                        currentUses: response.data.currentUses || 0,
                        expiresAt: response.data.expiresAt || discountData.expiresAt,
                        minimumAmount: response.data.minimumAmount || discountData.minimumAmount,
                        isActive: response.data.isActive !== false,
                        createdAt: response.data.createdAt || discountRecord.createdAt
                    }
                };
            } else {
                throw new Error('Failed to create discount code via client');
            }
        } catch (error) {
            console.error('Error creating discount code:', error);
            throw new Error(`Failed to create discount code: ${error.message}`);
        }
    }

    /**
     * Update an existing discount code
     * @param {string} discountId - Discount code ID to update
     * @param {Object} updateData - Data to update
     * @returns {Object} Updated discount code object
     */
    async updateDiscountCode(discountId, updateData) {
        if (!discountId) {
            throw new Error('Discount code ID is required');
        }

        try {
            // Get existing discount record
            const existingDiscount = await this.db.findOne({ _id: discountId });
            if (!existingDiscount) {
                throw new Error('Discount code not found');
            }

            const allowedFields = [
                'name', 'type', 'value', 'currency', 'maxUses', 
                'expiresAt', 'minimumAmount', 'isActive', 'metadata'
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

            // Validate type if being updated
            if (updateFields.type && !['percentage', 'fixed'].includes(updateFields.type)) {
                throw new Error('Type must be either "percentage" or "fixed"');
            }

            updateFields.updatedAt = new Date().valueOf();

            // Update local database
            const result = await this.db.updateOne(
                { _id: discountId },
                { $set: updateFields }
            );

            if (result.modifiedCount > 0) {
                // If we have the original discount ID, try to update via client
                if (existingDiscount.discountId) {
                    try {
                        // Note: This would require the client to have an updateDiscountCode method
                        // For now, we'll just update the local database
                        console.log('Local discount code updated. Client update method not implemented.');
                    } catch (clientError) {
                        console.warn('Failed to update discount code via client, but local update succeeded:', clientError.message);
                    }
                }

                const updatedDiscount = await this.db.findOne({ _id: discountId });
                return {
                    status: "success",
                    discount: {
                        id: updatedDiscount._id,
                        discountId: updatedDiscount.discountId,
                        name: updatedDiscount.name,
                        code: updatedDiscount.code,
                        type: updatedDiscount.type,
                        value: updatedDiscount.value,
                        currency: updatedDiscount.currency,
                        maxUses: updatedDiscount.maxUses,
                        currentUses: updatedDiscount.currentUses,
                        expiresAt: updatedDiscount.expiresAt,
                        minimumAmount: updatedDiscount.minimumAmount,
                        isActive: updatedDiscount.isActive,
                        updatedAt: updatedDiscount.updatedAt
                    }
                };
            } else {
                throw new Error('No changes were made to the discount code');
            }
        } catch (error) {
            console.error('Error updating discount code:', error);
            throw new Error(`Failed to update discount code: ${error.message}`);
        }
    }

    /**
     * Create a new invoice
     * @param {Object} invoiceData - Invoice information
     * @param {string} invoiceData.customerId - Customer ID
     * @param {Array} invoiceData.products - Array of products
     * @param {number} invoiceData.totalAmount - Total amount in cents
     * @param {string} invoiceData.currency - Currency code
     * @param {string} invoiceData.discountCode - Applied discount code
     * @param {number} invoiceData.discountAmount - Discount amount in cents
     * @param {Date} invoiceData.dueDate - Invoice due date
     * @param {Object} invoiceData.billingAddress - Billing address
     * @param {string} invoiceData.userId - Creator user ID
     * @returns {Object} Created invoice object
     */
    async createInvoice(invoiceData) {
        if (!invoiceData.customerId || !invoiceData.products || 
            !invoiceData.totalAmount || !invoiceData.currency) {
            throw new Error('Customer ID, products, total amount, and currency are required');
        }

        if (!Array.isArray(invoiceData.products) || invoiceData.products.length === 0) {
            throw new Error('Products array is required and must not be empty');
        }

        try {
            // Use the client's transactions.generateInvoice method
            const response = await this.client.transactions.generateInvoice(invoiceData);
            
            if (response.data) {
                // Store additional invoice data in local database
                const now = new Date().valueOf();
                const invoiceRecord = {
                    _id: Core.generateId(),
                    invoiceId: response.data._id || response.data.id,
                    invoiceNumber: response.data.invoiceNumber || `INV-${Date.now()}`,
                    customerId: invoiceData.customerId,
                    products: invoiceData.products,
                    subtotalAmount: invoiceData.subtotalAmount || invoiceData.totalAmount,
                    totalAmount: invoiceData.totalAmount,
                    currency: invoiceData.currency.toLowerCase(),
                    discountCode: invoiceData.discountCode || null,
                    discountAmount: invoiceData.discountAmount || 0,
                    taxAmount: invoiceData.taxAmount || 0,
                    dueDate: invoiceData.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    billingAddress: invoiceData.billingAddress || null,
                    status: response.data.status || 'pending',
                    paymentStatus: response.data.paymentStatus || 'unpaid',
                    createdBy: invoiceData.userId || null,
                    createdAt: now,
                    updatedAt: now,
                    metadata: invoiceData.metadata || {}
                };

                await this.db.insertOne(invoiceRecord);

                return {
                    status: "success",
                    invoice: {
                        id: invoiceRecord._id,
                        invoiceId: response.data._id || response.data.id,
                        invoiceNumber: response.data.invoiceNumber || invoiceRecord.invoiceNumber,
                        customerId: invoiceData.customerId,
                        products: invoiceData.products,
                        subtotalAmount: invoiceRecord.subtotalAmount,
                        totalAmount: invoiceData.totalAmount,
                        currency: invoiceData.currency,
                        discountCode: invoiceData.discountCode,
                        discountAmount: invoiceData.discountAmount,
                        taxAmount: invoiceData.taxAmount,
                        dueDate: invoiceRecord.dueDate,
                        status: response.data.status || 'pending',
                        paymentStatus: response.data.paymentStatus || 'unpaid',
                        createdAt: response.data.createdAt || invoiceRecord.createdAt
                    }
                };
            } else {
                throw new Error('Failed to create invoice via client');
            }
        } catch (error) {
            console.error('Error creating invoice:', error);
            throw new Error(`Failed to create invoice: ${error.message}`);
        }
    }

    /**
     * Get customer by ID
     * @param {string} customerId - Customer ID
     * @returns {Object} Customer object
     */
    async getCustomer(customerId) {
        if (!customerId) {
            throw new Error('Customer ID is required');
        }

        try {
            // Try to find customer by various IDs
            let customer = await Customer.findByStripeCustomerId(customerId) || 
                          await Customer.findByCustomerId(customerId) ||
                          await Customer.findByEmail(customerId);
            
            if (!customer) {
                throw new Error('Customer not found');
            }

            return {
                status: "success",
                customer: {
                    id: customer.id,
                    customerId: customer.customerId,
                    stripeCustomerId: customer.stripeCustomerId,
                    email: customer.email,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phone: customer.phone,
                    billingAddress: customer.billingAddress,
                    status: customer.status,
                    customerType: customer.customerType,
                    createdAt: customer.createdAt,
                    updatedAt: customer.updatedAt
                }
            };
        } catch (error) {
            console.error('Error getting customer:', error);
            throw new Error(`Failed to get customer: ${error.message}`);
        }
    }

    /**
     * Get discount code by ID
     * @param {string} discountId - Discount code ID
     * @returns {Object} Discount code object
     */
    async getDiscountCode(discountId) {
        if (!discountId) {
            throw new Error('Discount code ID is required');
        }

        try {
            const discount = await this.db.findOne({ _id: discountId });
            
            if (!discount) {
                throw new Error('Discount code not found');
            }

            return {
                status: "success",
                discount: {
                    id: discount._id,
                    discountId: discount.discountId,
                    name: discount.name,
                    code: discount.code,
                    type: discount.type,
                    value: discount.value,
                    currency: discount.currency,
                    maxUses: discount.maxUses,
                    currentUses: discount.currentUses,
                    expiresAt: discount.expiresAt,
                    minimumAmount: discount.minimumAmount,
                    isActive: discount.isActive,
                    createdAt: discount.createdAt,
                    updatedAt: discount.updatedAt
                }
            };
        } catch (error) {
            console.error('Error getting discount code:', error);
            throw new Error(`Failed to get discount code: ${error.message}`);
        }
    }

    /**
     * Get invoice by ID
     * @param {string} invoiceId - Invoice ID
     * @returns {Object} Invoice object
     */
    async getInvoice(invoiceId) {
        if (!invoiceId) {
            throw new Error('Invoice ID is required');
        }

        try {
            const invoice = await this.db.findOne({ _id: invoiceId });
            
            if (!invoice) {
                throw new Error('Invoice not found');
            }

            return {
                status: "success",
                invoice: {
                    id: invoice._id,
                    invoiceId: invoice.invoiceId,
                    invoiceNumber: invoice.invoiceNumber,
                    customerId: invoice.customerId,
                    products: invoice.products,
                    subtotalAmount: invoice.subtotalAmount,
                    totalAmount: invoice.totalAmount,
                    currency: invoice.currency,
                    discountCode: invoice.discountCode,
                    discountAmount: invoice.discountAmount,
                    taxAmount: invoice.taxAmount,
                    dueDate: invoice.dueDate,
                    status: invoice.status,
                    paymentStatus: invoice.paymentStatus,
                    createdAt: invoice.createdAt,
                    updatedAt: invoice.updatedAt
                }
            };
        } catch (error) {
            console.error('Error getting invoice:', error);
            throw new Error(`Failed to get invoice: ${error.message}`);
        }
    }

    /**
     * List all customers with optional filtering
     * @param {Object} filters - Optional filters
     * @param {string} filters.status - Filter by status
     * @param {string} filters.userId - Filter by user ID
     * @returns {Object} List of customers
     */
    async listCustomers(filters = {}) {
        try {
            let customers = [];
            
            if (filters.status && filters.userId) {
                // Use Customer template static methods
                customers = await Customer.findByStatus(filters.status);
                customers = customers.filter(customer => customer.userId === filters.userId);
            } else if (filters.status) {
                customers = await Customer.findByStatus(filters.status);
            } else if (filters.userId) {
                // Find by userId (this would need a new static method)
                const db = Core.getDB("customers", false);
                if (db) {
                    const docs = await db.findAsync({ userId: filters.userId });
                    customers = docs.map(doc => new Customer(doc));
                }
            } else {
                // Get all sales customers
                customers = await Customer.findSalesCustomers();
            }
            
            return {
                status: "success",
                customers: customers.map(customer => ({
                    id: customer.id,
                    customerId: customer.customerId,
                    stripeCustomerId: customer.stripeCustomerId,
                    email: customer.email,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phone: customer.phone,
                    status: customer.status,
                    customerType: customer.customerType,
                    createdAt: customer.createdAt
                })),
                count: customers.length
            };
        } catch (error) {
            console.error('Error listing customers:', error);
            throw new Error(`Failed to list customers: ${error.message}`);
        }
    }

    /**
     * List all discount codes with optional filtering
     * @param {Object} filters - Optional filters
     * @param {boolean} filters.isActive - Filter by active status
     * @param {string} filters.createdBy - Filter by creator user ID
     * @returns {Object} List of discount codes
     */
    async listDiscountCodes(filters = {}) {
        try {
            const query = {};
            
            if (filters.isActive !== undefined) {
                query.isActive = filters.isActive;
            }
            
            if (filters.createdBy) {
                query.createdBy = filters.createdBy;
            }

            const discounts = await this.db.find(query).toArray();
            
            return {
                status: "success",
                discounts: discounts.map(discount => ({
                    id: discount._id,
                    discountId: discount.discountId,
                    name: discount.name,
                    code: discount.code,
                    type: discount.type,
                    value: discount.value,
                    currency: discount.currency,
                    maxUses: discount.maxUses,
                    currentUses: discount.currentUses,
                    expiresAt: discount.expiresAt,
                    isActive: discount.isActive,
                    createdAt: discount.createdAt
                })),
                count: discounts.length
            };
        } catch (error) {
            console.error('Error listing discount codes:', error);
            throw new Error(`Failed to list discount codes: ${error.message}`);
        }
    }

    /**
     * List all invoices with optional filtering
     * @param {Object} filters - Optional filters
     * @param {string} filters.customerId - Filter by customer ID
     * @param {string} filters.status - Filter by status
     * @param {string} filters.paymentStatus - Filter by payment status
     * @returns {Object} List of invoices
     */
    async listInvoices(filters = {}) {
        try {
            const query = {};
            
            if (filters.customerId) {
                query.customerId = filters.customerId;
            }
            
            if (filters.status) {
                query.status = filters.status;
            }
            
            if (filters.paymentStatus) {
                query.paymentStatus = filters.paymentStatus;
            }

            const invoices = await this.db.find(query).toArray();
            
            return {
                status: "success",
                invoices: invoices.map(invoice => ({
                    id: invoice._id,
                    invoiceId: invoice.invoiceId,
                    invoiceNumber: invoice.invoiceNumber,
                    customerId: invoice.customerId,
                    totalAmount: invoice.totalAmount,
                    currency: invoice.currency,
                    status: invoice.status,
                    paymentStatus: invoice.paymentStatus,
                    dueDate: invoice.dueDate,
                    createdAt: invoice.createdAt
                })),
                count: invoices.length
            };
        } catch (error) {
            console.error('Error listing invoices:', error);
            throw new Error(`Failed to list invoices: ${error.message}`);
        }
    }

    /**
     * Create loyalty points for a customer
     * @param {Object} loyaltyData - Loyalty data
     * @param {string} loyaltyData.customerId - Customer ID
     * @param {number} loyaltyData.totalAmount - Total amount spent
     * @param {string} loyaltyData.orderId - Order ID
     * @param {string} loyaltyData.invoiceId - Invoice ID
     * @param {string} loyaltyData.transactionId - Transaction ID
     * @returns {Object} Loyalty points result
     */
    async createLoyaltyPoints(loyaltyData) {
        if (!loyaltyData.customerId || !loyaltyData.totalAmount) {
            throw new Error('Customer ID and total amount are required');
        }

        try {
            // Use the client's loyalty.earnPointsFromPurchase method
            const response = await this.client.loyalty.earnPointsFromPurchase(loyaltyData);
            
            if (response.data) {
                return {
                    status: "success",
                    loyalty: response.data
                };
            } else {
                throw new Error('Failed to create loyalty points via client');
            }
        } catch (error) {
            console.error('Error creating loyalty points:', error);
            throw new Error(`Failed to create loyalty points: ${error.message}`);
        }
    }

    /**
     * Get customer loyalty status
     * @param {string} customerId - Customer ID
     * @returns {Object} Loyalty status
     */
    async getCustomerLoyaltyStatus(customerId) {
        if (!customerId) {
            throw new Error('Customer ID is required');
        }

        try {
            // Use the client's loyalty.getCustomerLoyaltyStatus method
            const response = await this.client.loyalty.getCustomerLoyaltyStatus(customerId);
            
            if (response.data) {
                return {
                    status: "success",
                    loyaltyStatus: response.data
                };
            } else {
                throw new Error('Failed to get loyalty status via client');
            }
        } catch (error) {
            console.error('Error getting loyalty status:', error);
            throw new Error(`Failed to get loyalty status: ${error.message}`);
        }
    }

    /**
     * Create or update customer from engagement data
     * @param {Object} engagementData - Engagement customer data
     * @param {string} engagementData.customerId - External customer ID
     * @param {string} engagementData.accountId - Account ID
     * @param {string} engagementData.userId - User ID
     * @param {string} engagementData.email - Customer email
     * @param {string} engagementData.firstName - First name
     * @param {string} engagementData.lastName - Last name
     * @param {string} engagementData.company - Company name
     * @param {Object} engagementData.leadQualification - Lead qualification data
     * @returns {Object} Customer object
     */
    async createCustomerFromEngagement(engagementData) {
        if (!engagementData.customerId || !engagementData.accountId) {
            throw new Error('Customer ID and Account ID are required');
        }

        try {
            // Check if customer already exists
            let customer = await Customer.findByCustomerId(engagementData.customerId);
            
            if (!customer) {
                // Create new customer from engagement data
                customer = new Customer({
                    customerId: engagementData.customerId,
                    accountId: engagementData.accountId,
                    userId: engagementData.userId || null,
                    customerType: 'engagement',
                    source: 'webhook',
                    firstName: engagementData.firstName || '',
                    lastName: engagementData.lastName || '',
                    email: engagementData.email || '',
                    company: engagementData.company || '',
                    status: 'active',
                    lifecycleStage: 'prospect',
                    tags: ['engagement', 'webhook'],
                    metadata: engagementData.metadata || {}
                });

                // Set lead qualification if available
                if (engagementData.leadQualification) {
                    customer.leadQuality = engagementData.leadQualification.leadQuality || 'unknown';
                    customer.leadScore = engagementData.leadQualification.leadScore || 0;
                    customer.confidence = engagementData.leadQualification.confidence || 0;
                }
            } else {
                // Update existing customer with engagement data
                if (engagementData.firstName) customer.firstName = engagementData.firstName;
                if (engagementData.lastName) customer.lastName = engagementData.lastName;
                if (engagementData.email) customer.email = engagementData.email;
                if (engagementData.company) customer.company = engagementData.company;
                
                // Update lead qualification if available
                if (engagementData.leadQualification) {
                    customer.leadQuality = engagementData.leadQualification.leadQuality || customer.leadQuality;
                    customer.leadScore = engagementData.leadQualification.leadScore || customer.leadScore;
                    customer.confidence = engagementData.leadQualification.confidence || customer.confidence;
                }

                // Add engagement tag if not present
                if (!customer.tags.includes('engagement')) {
                    customer.addTag('engagement');
                }
            }

            // Save customer
            await customer.save();

            return {
                status: "success",
                customer: {
                    id: customer.id,
                    customerId: customer.customerId,
                    accountId: customer.accountId,
                    email: customer.email,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    company: customer.company,
                    customerType: customer.customerType,
                    leadQuality: customer.leadQuality,
                    leadScore: customer.leadScore,
                    confidence: customer.confidence,
                    status: customer.status,
                    lifecycleStage: customer.lifecycleStage,
                    createdAt: customer.createdAt,
                    updatedAt: customer.updatedAt
                }
            };
        } catch (error) {
            console.error('Error creating customer from engagement:', error);
            throw new Error(`Failed to create customer from engagement: ${error.message}`);
        }
    }

    /**
     * Convert engagement customer to sales customer
     * @param {string} customerId - Customer ID to convert
     * @param {Object} salesData - Sales-specific data
     * @param {string} salesData.stripeCustomerId - Stripe customer ID
     * @param {Object} salesData.billingAddress - Billing address
     * @param {string} salesData.phone - Phone number
     * @returns {Object} Converted customer object
     */
    async convertToSalesCustomer(customerId, salesData) {
        if (!customerId || !salesData.stripeCustomerId) {
            throw new Error('Customer ID and Stripe Customer ID are required');
        }

        try {
            const customer = await Customer.findByCustomerId(customerId);
            if (!customer) {
                throw new Error('Customer not found');
            }

            // Convert customer type
            customer.customerType = 'sales';
            customer.source = 'conversion';
            customer.stripeCustomerId = salesData.stripeCustomerId;
            customer.billingAddress = salesData.billingAddress || customer.billingAddress;
            customer.phone = salesData.phone || customer.phone;
            customer.lifecycleStage = 'customer';
            
            // Update tags
            customer.removeTag('engagement');
            customer.addTag('sales');
            customer.addTag('converted');

            // Save changes
            await customer.save();

            return {
                status: "success",
                customer: {
                    id: customer.id,
                    customerId: customer.customerId,
                    stripeCustomerId: customer.stripeCustomerId,
                    email: customer.email,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phone: customer.phone,
                    billingAddress: customer.billingAddress,
                    customerType: customer.customerType,
                    lifecycleStage: customer.lifecycleStage,
                    status: customer.status,
                    updatedAt: customer.updatedAt
                }
            };
        } catch (error) {
            console.error('Error converting customer to sales:', error);
            throw new Error(`Failed to convert customer to sales: ${error.message}`);
        }
    }
}

export default SalesEnablement;