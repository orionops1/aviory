import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import { gemstones, fineJewellery, journalArticles } from '../data/products'
import { useLanguage } from '../hooks/useLanguage'
import './Home.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLanguage()

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3500)
  }

  return (
    <>
      {/* HERO */}
      <HeroBanner 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaPrimary={{ label: t('hero.exploreGemstones'), href: "/gemstones" }}
        ctaSecondary={{ label: t('common.engagementRings'), href: "/engagement-rings" }}
        videoSrc="/videos/hero-loop.mp4"
        fallbackImage="/images/hero-banner.jpg"
      />

      {/* TRUST BAR */}
      <section className="provenance-strip">
        <div className="container provenance-strip__inner">
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>Ceylon Provenance</h4>
            <p>Ethically sourced from Sri Lankan gem fields</p>
          </div>
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>GIA Certified</h4>
            <p>Every stone verified to world standards</p>
          </div>
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>Natural & Unheated</h4>
            <p>Untreated natural gemstones</p>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION - STORYTELLING FIRST */}
      <section className="featured-collection">
        <div className="featured-collection__header">
          <div className="container">
            <span className="collection-label">FEATURED COLLECTION</span>
            <h2 className="collection-title">The Ceylon Sapphire Vault</h2>
            <p className="collection-description">
              Revered for over 2,000 years for their unparalleled blue saturation and brilliance, Ceylon sapphires represent the pinnacle of luxury gemstone collecting. Each stone in this vault has been hand-selected for its rarity, clarity, and transformative beauty.
            </p>
            <div className="collection-cta">
              <Link to="/gemstones?category=blue-sapphires" className="btn btn-primary">
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="featured-collection__showcase">
          <div className="container">
            <div className="product-grid">
              {gemstones.filter(g => g.type === 'sapphire').slice(0, 4).map(gem => (
                <ProductCard key={gem.id} product={gem} type="gemstone" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE ART OF GIFTING - EDITORIAL SECTION */}
      <section className="gifting-editorial">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="editorial-label">TIMELESS MOMENTS</span>
            <h2 className="editorial-title">The Art of Gifting</h2>
            <p className="editorial-description">
              Personalized jewelry and gifts are especially meaningful and become heirlooms over time. Celebrate every facet of the ones you love with iconic designs that transcend moments and endure as symbols of connection, commitment, and care.
            </p>
            <p className="editorial-subtext">
              Whether marking an engagement, anniversary, or milestone, our gemstones and bespoke creations are crafted to tell your story.
            </p>
            
            <div className="gifting-options" style={{ marginTop: 'var(--spacing-3xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
              <Link to="/engagement-rings" className="gifting-card" style={{ textDecoration: 'none', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-gray-light)', textAlign: 'center', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>💎</div>
                <h4>Gifts to Engrave</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', marginTop: 'var(--spacing-sm)' }}>
                  Personalized jewelry that becomes a cherished heirloom
                </p>
              </Link>
              
              <Link to="/fine-jewellery" className="gifting-card" style={{ textDecoration: 'none', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-gray-light)', textAlign: 'center', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>✨</div>
                <h4>Haute Joaillerie</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', marginTop: 'var(--spacing-sm)' }}>
                  Extraordinary pieces for extraordinary moments
                </p>
              </Link>
              
              <Link to="/gemstones" className="gifting-card" style={{ textDecoration: 'none', padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-gray-light)', textAlign: 'center', transition: 'all 0.3s ease' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>🌟</div>
                <h4>Rare Collector Pieces</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', marginTop: 'var(--spacing-sm)' }}>
                  Investment-grade gemstones for connoisseurs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL - BRAND VOICE */}
      <section className="journal-preview">
        <div className="container">
          <div className="section-title">
            <h2>From Our Journal</h2>
            <p className="section-subtitle">Gemstone expertise and luxury craftsmanship</p>
          </div>
          <div className="journal-grid">
            {journalArticles.slice(0, 3).map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="journal-card">
                  <div className="journal-category">{article.category}</div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="journal-meta">
                    By {article.author} • {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/journal" className="btn btn-outline">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join Our Circle</h2>
            <p>Exclusive access to rare gemstones and special collections</p>
            {subscribed && <div className="alert alert-success">{t('home.subscribeSuccess')}</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder={t('home.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>We're here to help with any questions about our gemstones and jewellery</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/our-house" className="btn btn-outline">
              Visit Our Atelier
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
