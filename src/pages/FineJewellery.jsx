import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fineJewellery } from '../data/products'
import './FineJewellery.css'

export default function FineJewellery() {
  const [selectedCollection, setSelectedCollection] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const collections = ['all', ...new Set(fineJewellery.map(j => j.collection))]
  const types = ['all', ...new Set(fineJewellery.map(j => j.type))]

  const filtered = useMemo(() => {
    return fineJewellery.filter(item => {
      if (selectedCollection !== 'all' && item.collection !== selectedCollection) return false
      if (selectedType !== 'all' && item.type !== selectedType) return false
      return true
    })
  }, [selectedCollection, selectedType])

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>Fine Jewellery</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            Exquisite pieces crafted with exceptional gemstones and precious metals
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                setSelectedCollection('all')
                setSelectedType('all')
              }}
            >
              Clear All
            </button>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Collection</h4>
            <div className="filter-group">
              {collections.map(col => (
                <button
                  key={col}
                  className={`filter-option ${selectedCollection === col ? 'active' : ''}`}
                  onClick={() => setSelectedCollection(col)}
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</h4>
            <div className="filter-group">
              {types.map(type => (
                <button
                  key={type}
                  className={`filter-option ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p style={{ color: '#2B2B2B' }}>
            Showing <strong>{filtered.length}</strong> pieces
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}>
            <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-lg)' }}>No items match your filters.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedCollection('all')
                setSelectedType('all')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <section style={{ marginTop: 'var(--spacing-3xl)', backgroundColor: '#F8F4EF', padding: 'var(--spacing-2xl)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Custom Fine Jewellery</h3>
          <p style={{ marginBottom: 'var(--spacing-lg)' }}>
            Don't see exactly what you're looking for? We create custom fine jewellery pieces tailored to your preferences. 
            Contact us to begin your bespoke journey.
          </p>
          <Link to="/bespoke" className="btn btn-primary">Create Custom Piece</Link>
        </section>
      </div>
    </>
  )
}
