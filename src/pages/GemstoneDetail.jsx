import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { gemstones } from '../data/products'
import './GemstoneDetail.css'

export default function GemstoneDetail() {
  const { id } = useParams()
  const gem = gemstones.find(g => g.id === id)
  const addItem = useCartStore((state) => state.addItem)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('specs')

  if (!gem) {
    return (
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
        <h2>Gemstone not found</h2>
        <Link to="/gemstones" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
          Back to Gemstones
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(gem)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // Get related gemstones
  const related = gemstones
    .filter(g => g.category === gem.category && g.id !== gem.id)
    .slice(0, 4)

  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
        <div className="breadcrumbs">
          <Link to="/gemstones" className="breadcrumb-item">Gemstones</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/gemstones?category=${gem.categorySlug}`} className="breadcrumb-item">{gem.category}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">{gem.name}</span>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="detail-container">
          <div className="detail-gallery">
            <div className="detail-image">
              <img src={gem.image} alt={gem.name} />
            </div>
            <div className="detail-thumbnails">
              <div className="detail-thumbnail active">
                <img src={gem.image} alt={gem.name} />
              </div>
              <div className="detail-thumbnail">
                <div style={{ width: '100%', height: '100%', backgroundColor: '#E8E3DC' }} />
              </div>
              <div className="detail-thumbnail">
                <div style={{ width: '100%', height: '100%', backgroundColor: '#E8E3DC' }} />
              </div>
              <div className="detail-thumbnail">
                <div style={{ width: '100%', height: '100%', backgroundColor: '#E8E3DC' }} />
              </div>
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-category">{gem.category}</div>
            <h1>{gem.name}</h1>
            <div className="detail-price">${gem.price.toLocaleString()}</div>

            <div className="detail-specs">
              <div className="spec-group">
                <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Key Specifications
                </h4>
                <div className="spec-row">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">{gem.specs.weight}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Dimensions:</span>
                  <span className="spec-value">{gem.specs.dimensions}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Color:</span>
                  <span className="spec-value">{gem.color}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Clarity:</span>
                  <span className="spec-value">{gem.clarity}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Treatment:</span>
                  <span className="spec-value">{gem.treatment}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Certification:</span>
                  <span className="spec-value">{gem.certification}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Origin:</span>
                  <span className="spec-value">{gem.origin}</span>
                </div>
              </div>

              <div className="spec-group">
                <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Physical Properties
                </h4>
                <div className="spec-row">
                  <span className="spec-label">Refractive Index:</span>
                  <span className="spec-value">{gem.specs.refractive_index}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Density:</span>
                  <span className="spec-value">{gem.specs.density}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Hardness:</span>
                  <span className="spec-value">{gem.specs.hardness}</span>
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/bespoke" className="btn btn-outline">
                Use in Bespoke
              </Link>
            </div>

            {added && <div className="alert alert-success">Added to cart!</div>}

            <div className="detail-tabs">
              <div className="tabs-nav">
                <button
                  className={`tab-button ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Description
                </button>
                <button
                  className={`tab-button ${activeTab === 'cert' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cert')}
                >
                  Certification
                </button>
              </div>

              <div className={`tab-content ${activeTab === 'specs' ? 'active' : ''}`}>
                <p>{gem.longDescription}</p>
              </div>

              <div className={`tab-content ${activeTab === 'cert' ? 'active' : ''}`}>
                <p>
                  This gemstone has been certified by {gem.certification}. The certification verifies the gemstone's characteristics, 
                  treatment status, and authenticity. All AVIORY & CO gemstones include detailed certification documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED GEMSTONES */}
      {related.length > 0 && (
        <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
          <div className="container">
            <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Similar Gemstones</h2>
            <div className="product-grid">
              {related.map(g => (
                <Link key={g.id} to={`/gemstones/${g.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D0CCBE',
                    overflow: 'hidden',
                    transition: 'var(--transition-slow)',
                    cursor: 'pointer'
                  }}>
                    <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#E8E3DC', overflow: 'hidden' }}>
                      <img src={g.image} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'var(--spacing-lg)' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A68563', marginBottom: 'var(--spacing-xs)' }}>
                        {g.category}
                      </div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)', fontWeight: 600 }}>{g.name}</h3>
                      <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#D4AF7F' }}>${g.price.toLocaleString()}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
