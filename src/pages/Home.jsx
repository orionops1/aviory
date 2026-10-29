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

      {/* GEMSTONES */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title">
            <h2>Exceptional Gemstones</h2>
            <p className="section-subtitle">Hand-selected rare stones from Ceylon</p>
          </div>
          <div className="product-grid">
            {gemstones.slice(0, 6).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/gemstones" className="btn btn-outline">
              View All Gemstones
            </Link>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT RINGS */}
      <section className="featured-products" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-gray-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Engagement Rings</h2>
            <p className="section-subtitle">Bespoke designs crafted for your love story</p>
          </div>
          <div className="product-grid">
            {fineJewellery.slice(0, 6).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/engagement-rings" className="btn btn-outline">
              View Engagement Rings
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
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
