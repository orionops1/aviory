import apiClient from './api'

// Posts API
export const fetchPosts = async (params = {}) => {
  try {
    const response = await apiClient.get('/wp/v2/posts', {
      params: {
        per_page: 10,
        _embed: true, // Include featured images and author info
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const fetchPost = async (id) => {
  try {
    const response = await apiClient.get(`/wp/v2/posts/${id}`, {
      params: {
        _embed: true,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error)
    throw error
  }
}

// Pages API
export const fetchPages = async (params = {}) => {
  try {
    const response = await apiClient.get('/wp/v2/pages', {
      params: {
        per_page: 100,
        _embed: true,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching pages:', error)
    throw error
  }
}

export const fetchPage = async (id) => {
  try {
    const response = await apiClient.get(`/wp/v2/pages/${id}`, {
      params: {
        _embed: true,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching page ${id}:`, error)
    throw error
  }
}

// Categories API
export const fetchCategories = async () => {
  try {
    const response = await apiClient.get('/wp/v2/categories', {
      params: {
        per_page: 100,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// Media API
export const fetchMediaLibrary = async (params = {}) => {
  try {
    const response = await apiClient.get('/wp/v2/media', {
      params: {
        per_page: 100,
        _embed: true,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching media:', error)
    throw error
  }
}

export const fetchMedia = async (id) => {
  try {
    const response = await apiClient.get(`/wp/v2/media/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching media ${id}:`, error)
    throw error
  }
}

// Settings API (if accessible)
export const fetchSettings = async () => {
  try {
    const response = await apiClient.get('/wp/v2/settings')
    return response.data
  } catch (error) {
    console.warn('Settings API not accessible (requires authentication)')
    return null
  }
}

// Menu API (if available)
export const fetchMenus = async () => {
  try {
    const response = await apiClient.get('/menus/v1/menus')
    return response.data
  } catch (error) {
    console.warn('Menus API not available')
    return null
  }
}
