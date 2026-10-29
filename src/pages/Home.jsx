import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones, fineJewellery, journalArticles } from '../data/products'
import { bespokeProcess, shopInfo } from '../data/content'
import './Home.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content container">
          <h1 style={{ fontFamily: "var(--font-brand)", fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '0.12em', marginBottom: 'var(--spacing-lg)' }}>AVIORY & CO.</h1>
          <p className="hero-subtitle">Exceptional Gemstones & Fine Jewellery</p>
          <div className="hero-cta">
            <Link to="/gemstones" className="btn btn-primary">Explore Gemstones</Link>
            <Link to="/bespoke" className="btn btn-secondary">Create Bespoke</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES SHOWCASE */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          <Link to="/gemstones" style={{ textDecoration: 'none' }}>
            <div style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              transition: 'var(--transition)',
              cursor: 'pointer',
              minHeight: '300px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #2B2B2B 0%, #111111 100%)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)'}
            >
              <h3 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>💎</h3>
              <h3 style={{ color: '#F8F4EF', fontSize: '1.5rem' }}>Gemstones</h3>
              <p style={{ color: '#E8E3DC', fontSize: '0.875rem', marginTop: 'var(--spacing-md)' }}>9 Categories</p>
            </div>
          </Link>

          <Link to="/fine-jewellery" style={{ textDecoration: 'none' }}>
            <div style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              transition: 'var(--transition)',
              cursor: 'pointer',
              minHeight: '300px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #2B2B2B 0%, #111111 100%)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)'}
            >
              <h3 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>👑</h3>
              <h3 style={{ color: '#F8F4EF', fontSize: '1.5rem' }}>Fine Jewellery</h3>
              <p style={{ color: '#E8E3DC', fontSize: '0.875rem', marginTop: 'var(--spacing-md)' }}>8 Collections</p>
            </div>
          </Link>

          <Link to="/engagement-rings" style={{ textDecoration: 'none' }}>
            <div style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              transition: 'var(--transition)',
              cursor: 'pointer',
              minHeight: '300px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #2B2B2B 0%, #111111 100%)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)'}
            >
              <h3 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>💍</h3>
              <h3 style={{ color: '#F8F4EF', fontSize: '1.5rem' }}>Engagement Rings</h3>
              <p style={{ color: '#E8E3DC', fontSize: '0.875rem', marginTop: 'var(--spacing-md)' }}>8 Styles</p>
            </div>
          </Link>

          <Link to="/bespoke" style={{ textDecoration: 'none' }}>
            <div style={{
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              transition: 'var(--transition)',
              cursor: 'pointer',
              minHeight: '300px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #2B2B2B 0%, #111111 100%)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)'}
            >
              <h3 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>✨</h3>
              <h3 style={{ color: '#F8F4EF', fontSize: '1.5rem' }}>Bespoke</h3>
              <p style={{ color: '#E8E3DC', fontSize: '0.875rem', marginTop: 'var(--spacing-md)' }}>Custom Creation</p>
            </div>
          </Link>
        </div>
      </section>

      {/* FEATURED GEMSTONES */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Featured Gemstones</h2>
            <p className="section-subtitle">Discover our most exceptional pieces</p>
          </div>
          <div className="product-grid">
            {gemstones.slice(0, 6).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/gemstones" className="btn btn-primary">View All Gemstones</Link>
          </div>
        </div>
      </section>

      {/* BESPOKE PROCESS */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="section-title">
          <h2>Our 5-Stage Bespoke Process</h2>
          <p className="section-subtitle">From vision to masterpiece</p>
        </div>
        <div className="process-grid">
          {bespokeProcess.map(stage => (
            <Link key={stage.id} to="/bespoke/process" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="process-card">
                <div className="process-number">{stage.number}</div>
                <h4>{stage.title}</h4>
                <p>{stage.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/bespoke" className="btn btn-primary">Start Your Bespoke Journey</Link>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Journal</h2>
            <p className="section-subtitle">Insights on gemstones, craftsmanship, and luxury</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {journalArticles.slice(0, 3).map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'var(--spacing-lg)',
                  border: '1px solid #D0CCBE',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF7F'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 127, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#D0CCBE'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A68563', marginBottom: 'var(--spacing-sm)' }}>
                    {article.category}
                  </div>
                  <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem', fontWeight: 600 }}>{article.title}</h3>
                  <p style={{ marginBottom: 'var(--spacing-md)', color: '#2B2B2B' }}>{article.excerpt}</p>
                  <div style={{ fontSize: '0.875rem', color: '#A68563' }}>
                    By {article.author} • {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/journal" className="btn btn-primary">Read Journal</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join Our Newsletter</h2>
            <p>Receive curated updates on new collections, insights from our journal, and exclusive offers.</p>
            {subscribed && <div className="alert alert-success">Thank you for subscribing!</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Experience Luxury</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', color: '#2B2B2B', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
          Visit our atelier for a private consultation or explore our complete collection online. Every piece represents centuries of expertise and a commitment to uncompromising quality.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/private-consultations" className="btn btn-primary">Book Consultation</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
