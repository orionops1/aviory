import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings } from '../data/products'
import './LoveAndCelebration.css'

export default function LoveAndCelebration() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedStone, setSelectedStone] = useState('all')
  const [selectedShape, setSelectedShape] = useState('all')

  const styles = ['all', ...new Set(engagementRings.map(r => r.style))]
  const stoneTypes = ['all', ...new Set(engagementRings.map(r => r.stoneType))]
  const shapes = ['all', ...new Set(engagementRings.map(r => r.shape))]

  useEffect(() => {
    const styleParam = searchParams.get('style')
    const stoneParam = searchParams.get('stone')
    const shapeParam = searchParams.get('shape')

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

    if (shapeParam) {
      const match = shapes.find(s => s.toLowerCase() === shapeParam.toLowerCase())
      if (match) setSelectedShape(match)
    } else {
      setSelectedShape('all')
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return engagementRings.filter(ring => {
      if (selectedStyle !== 'all' && ring.style.toLowerCase() !== selectedStyle.toLowerCase()) return false
      if (selectedStone !== 'all' && ring.stoneType.toLowerCase() !== selectedStone.toLowerCase()) return false
      if (selectedShape !== 'all' && ring.shape.toLowerCase() !== selectedShape.toLowerCase()) return false
      return true
    })
  }, [selectedStyle, selectedStone, selectedShape])

  const handleStyleChange = (style) => {
    setSelectedStyle(style)
    const params = new URLSearchParams(searchParams)
    if (style === 'all') {
      params.delete('style')
    } else {
      params.set('style', style)
    }
    setSearchParams(params)
  }

  const handleStoneChange = (stone) => {
    setSelectedStone(stone)
    const params = new URLSearchParams(searchParams)
    if (stone === 'all') {
      params.delete('stone')
    } else {
      params.set('stone', stone)
    }
    setSearchParams(params)
  }

  const handleShapeChange = (shape) => {
    setSelectedShape(shape)
    const params = new URLSearchParams(searchParams)
    if (shape === 'all') {
      params.delete('shape')
    } else {
      params.set('shape', shape)
    }
    setSearchParams(params)
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
            AVIORY LOVE COLLECTION
          </span>
          <h1 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>Rings for Every Love Story</h1>
          <p style={{ fontSize: '1.05rem', marginTop: 'var(--spacing-sm)', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            We believe every love story deserves an exceptional beginning. Each piece in the AVIORY Love Collection is handcrafted to celebrate the moments that matter most—from first meetings to lifetime commitments.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filter by Moment, Gemstone & Shape</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                handleStyleChange('all')
                handleStoneChange('all')
                handleShapeChange('all')
              }}
            >
              Clear All
            </button>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Moment</h4>
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

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Gemstone</h4>
            <div className="filter-group">
              {stoneTypes.map(stone => (
                <button
                  key={stone}
                  className={`filter-option ${selectedStone.toLowerCase() === stone.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleStoneChange(stone)}
                >
                  {stone.charAt(0).toUpperCase() + stone.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Gemstone Shape</h4>
            <div className="filter-group">
              {shapes.map(shape => (
                <button
                  key={shape}
                  className={`filter-option ${selectedShape.toLowerCase() === shape.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleShapeChange(shape)}
                >
                  {shape.charAt(0).toUpperCase() + shape.slice(1)}
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
                handleStoneChange('all')
                handleShapeChange('all')
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
