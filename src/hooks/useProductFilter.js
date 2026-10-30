import { useState, useCallback, useEffect, useMemo } from 'react';

/**
 * useProductFilter Hook
 * Manages product filtering, sorting, and search across multiple product types
 * 
 * @param {array} products - Array of products to filter
 * @returns {object} - { filteredProducts, categories, colors, priceRange, searchQuery, sortBy, ... }
 */
const useProductFilter = (products = []) => {
  // State for all filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRangeState] = useState([0, 10000]);
  const [searchQuery, setSearchQueryState] = useState('');
  const [sortBy, setSortByState] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter setter functions
  const setCategory = useCallback((category, selected) => {
    setSelectedCategories((prev) =>
      selected
        ? [...prev, category]
        : prev.filter((c) => c !== category)
    );
  }, []);

  const setColor = useCallback((color, selected) => {
    setSelectedColors((prev) =>
      selected
        ? [...prev, color]
        : prev.filter((c) => c !== color)
    );
  }, []);

  const setPriceRange = useCallback((min, max) => {
    setPriceRangeState([min, max]);
  }, []);

  const setSearch = useCallback((query) => {
    setSearchQueryState(query);
  }, []);

  const setSort = useCallback((type) => {
    setSortByState(type);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRangeState([0, 10000]);
    setSearchQueryState('');
    setSortByState('featured');
  }, []);

  // Apply filters and sorting when any filter changes
  useEffect(() => {
    let result = [...products];

    // 1. Filter by search query (substring match, case-insensitive)
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }

    // 2. Filter by categories (AND logic - product must be in selected categories)
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // 3. Filter by colors (AND logic - product must have one of selected colors)
    if (selectedColors.length > 0) {
      result = result.filter((p) => {
        // Handle both p.color (single) and p.colors (array)
        const productColors = Array.isArray(p.colors) ? p.colors : [p.color];
        return selectedColors.some((c) =>
          productColors.some((pc) =>
            pc && pc.toLowerCase() === c.toLowerCase()
          )
        );
      });
    }

    // 4. Filter by price range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // 5. Apply sorting (sort after filtering)
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'carat':
        result.sort((a, b) => (b.carat || 0) - (a.carat || 0));
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [
    products,
    selectedCategories,
    selectedColors,
    priceRange,
    searchQuery,
    sortBy,
  ]);

  // Extract unique categories and colors from products (memoized)
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))].filter(Boolean),
    [products]
  );

  const colors = useMemo(
    () => {
      const allColors = new Set();
      products.forEach((p) => {
        if (Array.isArray(p.colors)) {
          p.colors.forEach((c) => c && allColors.add(c));
        } else if (p.color) {
          allColors.add(p.color);
        }
      });
      return [...allColors];
    },
    [products]
  );

  // Calculate price range from products (memoized)
  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price || 0), 10000),
    [products]
  );

  return {
    filteredProducts,
    categories,
    colors,
    priceRange,
    maxPrice,
    searchQuery,
    sortBy,
    selectedCategories,
    selectedColors,
    setCategory,
    setColor,
    setPriceRange,
    setSearch,
    setSort,
    clearFilters,
  };
};

export default useProductFilter;
