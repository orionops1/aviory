import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { fineJewellery } from '../data/products'
import './JewelleryDetail.css'

export default function JewelleryDetail() {
  const { id } = useParams()
  const item = fineJewellery.find(j => j.id === id)
  const addItem = useCartStore((state) => state.addItem)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  if (!item) {
    return (
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
        <h2>Item not found</h2>
        <Link to="/fine-jewellery" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
          Back to Fine Jewellery
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
        <div className="breadcrumbs">
          <Link to="/fine-jewellery" className="breadcrumb-item">Fine Jewellery</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">{item.collection}</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">{item.name}</span>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="detail-container">
          <div className="detail-gallery">
            <div className="detail-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-category">{item.collection}</div>
            <h1>{item.name}</h1>
            {item.price !== 'POA' && <div className="detail-price">${typeof item.price === 'number' ? item.price.toLocaleString() : item.price}</div>}
            {item.price === 'POA' && <div className="detail-price">Price Upon Availability</div>}

            <div className="detail-specs">
              <div className="spec-group">
                <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Specifications
                </h4>
                <div className="spec-row">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">{item.material}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Main Stone:</span>
                  <span className="spec-value">{item.mainStone}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Side Stones:</span>
                  <span className="spec-value">{item.sideStones}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">{item.weight}</span>
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/contact" className="btn btn-outline">
                Inquire
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
                  className={`tab-button ${activeTab === 'care' ? 'active' : ''}`}
                  onClick={() => setActiveTab('care')}
                >
                  Care
                </button>
              </div>

              <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                <p>{item.longDescription}</p>
              </div>

              <div className={`tab-content ${activeTab === 'care' ? 'active' : ''}`}>
                <h4>Care Instructions</h4>
                <ul>
                  <li>Clean regularly with warm soapy water and a soft brush</li>
                  <li>Avoid harsh chemicals and extreme temperature changes</li>
                  <li>Store in a soft cloth or jewelry box when not wearing</li>
                  <li>Remove during sports, strenuous activities, or bathing</li>
                  <li>Have settings checked professionally every 2-3 years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Can't find what you're looking for?</h3>
          <p style={{ marginBottom: 'var(--spacing-lg)' }}>Create a custom fine jewellery piece tailored to your unique vision.</p>
          <Link to="/bespoke" className="btn btn-primary">Create Bespoke Piece</Link>
        </div>
      </section>
    </>
  )
}
