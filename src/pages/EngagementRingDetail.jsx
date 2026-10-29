import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { engagementRings } from '../data/products'
import './EngagementRingDetail.css'

export default function EngagementRingDetail() {
  const { id } = useParams()
  const ring = engagementRings.find(r => r.id === id)
  const addItem = useCartStore((state) => state.addItem)
  const [added, setAdded] = useState(false)
  const [selectedSize, setSelectedSize] = useState('7')
  const [activeTab, setActiveTab] = useState('description')

  if (!ring) {
    return (
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
        <h2>Ring not found</h2>
        <Link to="/engagement-rings" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
          Back to Engagement Rings
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({ ...ring, selectedSize })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
        <div className="breadcrumbs">
          <Link to="/engagement-rings" className="breadcrumb-item">Engagement Rings</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">{ring.style}</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">{ring.name}</span>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="detail-container">
          <div className="detail-gallery">
            <div className="detail-image">
              <img src={ring.image} alt={ring.name} />
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-category">{ring.style}</div>
            <h1>{ring.name}</h1>
            <div className="detail-price">${ring.price.toLocaleString()}</div>

            <div className="detail-specs">
              <div className="spec-group">
                <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Ring Details
                </h4>
                <div className="spec-row">
                  <span className="spec-label">Style:</span>
                  <span className="spec-value">{ring.style}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">{ring.material}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Stone:</span>
                  <span className="spec-value">{ring.stone}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">{ring.specs.material_weight}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Warranty:</span>
                  <span className="spec-value">{ring.specs.warranty}</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="size">Ring Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {['4', '5', '6', '7', '8', '9', '10', '11', '12', '13'].map(size => (
                  <option key={size} value={size}>Size {size}</option>
                ))}
              </select>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/contact" className="btn btn-outline">
                Request Size Guide
              </Link>
            </div>

            {added && <div className="alert alert-success">Added to cart!</div>}

            <div className="detail-tabs">
              <div className="tabs-nav">
                <button
                  className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`tab-button ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Specifications
                </button>
                <button
                  className={`tab-button ${activeTab === 'care' ? 'active' : ''}`}
                  onClick={() => setActiveTab('care')}
                >
                  Care
                </button>
              </div>

              <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                <p>{ring.longDescription}</p>
              </div>

              <div className={`tab-content ${activeTab === 'specs' ? 'active' : ''}`}>
                <ul>
                  <li>Stone Carat: {ring.specs.stone_carat}</li>
                  <li>Material Weight: {ring.specs.material_weight}</li>
                  <li>Warranty: {ring.specs.warranty}</li>
                  <li>Available in all standard sizes</li>
                  <li>Custom sizing available</li>
                </ul>
              </div>

              <div className={`tab-content ${activeTab === 'care' ? 'active' : ''}`}>
                <h4>Care Instructions</h4>
                <ul>
                  <li>Clean regularly with warm soapy water and a soft brush</li>
                  <li>Avoid harsh chemicals and extreme temperature changes</li>
                  <li>Remove during sports and strenuous activities</li>
                  <li>Have settings checked professionally annually</li>
                  <li>Store in a soft cloth when not wearing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Want to customize this ring?</h3>
          <p style={{ marginBottom: 'var(--spacing-lg)' }}>We can modify any aspect to create your perfect engagement ring.</p>
          <Link to="/bespoke/enquiry" className="btn btn-primary">Customize This Ring</Link>
        </div>
      </section>
    </>
  )
}
