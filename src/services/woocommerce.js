import apiClient from './api'

// Products API
export const fetchProducts = async (params = {}) => {
  try {
    const response = await apiClient.get('/wc/v3/products', {
      params: {
        per_page: 20,
        orderby: 'date',
        order: 'desc',
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const fetchProduct = async (id) => {
  try {
    const response = await apiClient.get(`/wc/v3/products/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error
  }
}

// Product Categories API
export const fetchProductCategories = async (params = {}) => {
  try {
    const response = await apiClient.get('/wc/v3/products/categories', {
      params: {
        per_page: 100,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching product categories:', error)
    throw error
  }
}

// Get products by category
export const fetchProductsByCategory = async (categoryId, params = {}) => {
  try {
    const response = await apiClient.get('/wc/v3/products', {
      params: {
        category: categoryId,
        per_page: 20,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error)
    throw error
  }
}

// Product Tags API
export const fetchProductTags = async () => {
  try {
    const response = await apiClient.get('/wc/v3/products/tags', {
      params: {
        per_page: 100,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching product tags:', error)
    throw error
  }
}

// Featured products
export const fetchFeaturedProducts = async (limit = 8) => {
  try {
    const response = await apiClient.get('/wc/v3/products', {
      params: {
        featured: true,
        per_page: limit,
        orderby: 'date',
        order: 'desc',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching featured products:', error)
    throw error
  }
}

// Search products
export const searchProducts = async (search, params = {}) => {
  try {
    const response = await apiClient.get('/wc/v3/products', {
      params: {
        search,
        per_page: 20,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error searching products with "${search}":`, error)
    throw error
  }
}

// Orders API (requires authentication)
export const createOrder = async (orderData) => {
  try {
    const response = await apiClient.post('/wc/v3/orders', orderData)
    return response.data
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export const fetchOrder = async (id) => {
  try {
    const response = await apiClient.get(`/wc/v3/orders/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error)
    throw error
  }
}

// Customer API (requires authentication)
export const fetchCustomer = async (id) => {
  try {
    const response = await apiClient.get(`/wc/v3/customers/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching customer ${id}:`, error)
    throw error
  }
}
