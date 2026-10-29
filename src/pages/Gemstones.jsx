import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones } from '../data/products'
import './Gemstones.css'

export default function Gemstones() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 10000])

  const categories = ['all', ...new Set(gemstones.map(g => g.category))]
  const colors = ['all', ...new Set(gemstones.map(g => g.color))]

  const filteredGemstones = useMemo(() => {
    return gemstones.filter(gem => {
      if (selectedCategory !== 'all' && gem.category !== selectedCategory) return false
      if (selectedColor !== 'all' && gem.color !== selectedColor) return false
      if (gem.price < priceRange[0] || gem.price > priceRange[1]) return false
      return true
    })
  }, [selectedCategory, selectedColor, priceRange])

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>Gemstones</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            Discover our exceptional collection of natural, unheated gemstones from Ceylon and beyond
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        {/* FILTERS */}
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                setSelectedCategory('all')
                setSelectedColor('all')
                setPriceRange([0, 10000])
              }}
            >
              Clear All
            </button>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</h4>
            <div className="filter-group">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-option ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Color</h4>
            <div className="filter-group">
              {colors.map(col => (
                <button
                  key={col}
                  className={`filter-option ${selectedColor === col ? 'active' : ''}`}
                  onClick={() => setSelectedColor(col)}
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price Range</h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
              <input
                type="number"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                style={{ width: '100px' }}
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                style={{ width: '100px' }}
              />
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p style={{ color: '#2B2B2B' }}>
            Showing <strong>{filteredGemstones.length}</strong> gemstones
          </p>
        </div>

        {/* GRID */}
        {filteredGemstones.length > 0 ? (
          <div className="product-grid">
            {filteredGemstones.map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}>
            <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-lg)' }}>No gemstones match your filters.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedCategory('all')
                setSelectedColor('all')
                setPriceRange([0, 10000])
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
