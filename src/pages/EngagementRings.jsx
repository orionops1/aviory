import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings } from '../data/products'
import './EngagementRings.css'

export default function EngagementRings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedStone, setSelectedStone] = useState('all')

  const styles = ['all', ...new Set(engagementRings.map(r => r.style))]
  const stoneTypes = ['all', ...new Set(engagementRings.map(r => r.stoneType))]

  useEffect(() => {
    const styleParam = searchParams.get('style')
    const stoneParam = searchParams.get('stone')

    if (styleParam) {
      const match = styles.find(s => s.toLowerCase() === styleParam.toLowerCase())
      if (match) setSelectedStyle(match)
    } else {
      setSelectedStyle('all')
    }

    if (stoneParam) {
      const match = stoneTypes.find(s => s.toLowerCase().includes(stoneParam.toLowerCase()))
      if (match) setSelectedStone(match)
    } else {
      setSelectedStone('all')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return engagementRings.filter(ring => {
      if (selectedStyle !== 'all' && ring.style.toLowerCase() !== selectedStyle.toLowerCase()) return false
      if (selectedStone !== 'all' && ring.stoneType.toLowerCase() !== selectedStone.toLowerCase()) return false
      return true
    })
  }, [selectedStyle, selectedStone])

  const handleStyleChange = (style) => {
    setSelectedStyle(style)
    if (style === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ style })
    }
  }

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-champagne)', marginBottom: '0.5rem', fontWeight: 700 }}>
            CELEBRATE LOVE
          </span>
          <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>Engagement Rings</h1>
          <p style={{ fontSize: '1.05rem', marginTop: 'var(--spacing-sm)', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Timeless designs featuring exceptional unheated Ceylon sapphires and hand-crafted mountings.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filter by Style &amp; Stone</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                handleStyleChange('all')
                setSelectedStone('all')
              }}
            >
              Clear All
            </button>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Style</h4>
            <div className="filter-group">
              {styles.map(style => (
                <button
                  key={style}
                  className={`filter-option ${selectedStyle.toLowerCase() === style.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleStyleChange(style)}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <p style={{ color: '#2B2B2B' }}>
            Showing <strong>{filtered.length}</strong> rings
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map(ring => (
              <ProductCard key={ring.id} product={ring} type="ring" />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}>
            <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-lg)' }}>No rings match your filters.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleStyleChange('all')
                setSelectedStone('all')
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
