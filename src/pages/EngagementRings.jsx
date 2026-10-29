import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { engagementRings } from '../data/products'
import './EngagementRings.css'

export default function EngagementRings() {
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedStone, setSelectedStone] = useState('all')

  const styles = ['all', ...new Set(engagementRings.map(r => r.style))]
  const stoneTypes = ['all', ...new Set(engagementRings.map(r => r.stoneType))]

  const filtered = useMemo(() => {
    return engagementRings.filter(ring => {
      if (selectedStyle !== 'all' && ring.style !== selectedStyle) return false
      if (selectedStone !== 'all' && ring.stoneType !== selectedStone) return false
      return true
    })
  }, [selectedStyle, selectedStone])

  return (
    <>
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>Engagement Rings</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            Timeless designs featuring exceptional sapphires and precious gemstones
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="filters-section">
          <div className="filters-header">
            <h3>Filter by Style & Stone</h3>
            <button
              className="btn btn-small"
              onClick={() => {
                setSelectedStyle('all')
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
                  className={`filter-option ${selectedStyle === style ? 'active' : ''}`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stone Type</h4>
            <div className="filter-group">
              {stoneTypes.map(type => (
                <button
                  key={type}
                  className={`filter-option ${selectedStone === type ? 'active' : ''}`}
                  onClick={() => setSelectedStone(type)}
                >
                  {type}
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
                setSelectedStyle('all')
                setSelectedStone('all')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* RING SIZING GUIDE */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Ring Sizing Guide</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--spacing-lg)', border: '1px solid #D0CCBE' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Size Chart</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {['4', '5', '6', '7', '8', '9', '10'].map(size => (
                    <tr key={size} style={{ borderBottom: '1px solid #E8E3DC' }}>
                      <td style={{ padding: 'var(--spacing-sm)', fontWeight: 600 }}>Size {size}</td>
                      <td style={{ padding: 'var(--spacing-sm)' }}>Diameter</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--spacing-lg)', border: '1px solid #D0CCBE' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>How to Measure</h4>
              <ol style={{ marginLeft: 'var(--spacing-md)', color: '#2B2B2B' }}>
                <li>Measure an existing ring that fits comfortably</li>
                <li>Measure the inside diameter in millimeters</li>
                <li>Use a ring size chart to find your size</li>
                <li>Contact us for professional sizing</li>
              </ol>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--spacing-lg)', border: '1px solid #D0CCBE' }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Professional Sizing</h4>
              <p style={{ marginBottom: 'var(--spacing-md)', color: '#2B2B2B' }}>
                We offer professional ring sizing services. Visit our atelier or contact us to arrange a fitting.
              </p>
              <Link to="/contact" className="btn btn-primary btn-small">
                Request Fitting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Design Your Perfect Ring</h3>
        <p style={{ marginBottom: 'var(--spacing-lg)' }}>Create a bespoke engagement ring that's uniquely yours.</p>
        <Link to="/bespoke/enquiry" className="btn btn-primary">Start Design Process</Link>
      </section>
    </>
  )
}
