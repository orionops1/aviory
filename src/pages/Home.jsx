import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { gemstones, fineJewellery, journalArticles } from '../data/products'
import { bespokeProcess, shopInfo } from '../data/content'
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
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <>
      {/* HERO SECTION - LUXURY TIFFANY STYLE */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text-block">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <div className="hero-cta">
              <Link to="/gemstones" className="btn btn-primary">{t('hero.exploreGemstones')}</Link>
              <Link to="/bespoke" className="btn btn-secondary">{t('hero.createBespoke')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION 1 - DIAMONDS */}
      <section className="featured-collection featured-collection-1">
        <div className="container">
          <div className="collection-split">
            <div className="collection-content">
              <div className="collection-header">
                <span className="collection-label">FEATURED COLLECTION</span>
                <h2>Exceptional Diamonds</h2>
                <p className="collection-description">
                  Hand-selected diamonds of the highest quality, each certified for brilliance, clarity, and color. 
                  Discover pieces that capture light and admiration in equal measure.
                </p>
              </div>
              <div className="collection-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>GIA Certified</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Ethically Sourced</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Lifetime Authenticity</span>
                </div>
              </div>
              <Link to="/gemstones?type=diamond" className="btn btn-primary">Explore Diamonds</Link>
            </div>
            <div className="collection-visual">
              <div className="collection-image">💎 Premium Diamonds</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS GRID */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title">
            <h2>New Arrivals</h2>
            <p className="section-subtitle">Discover our latest luxury collections</p>
          </div>
          <div className="product-grid">
            {gemstones.slice(0, 4).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
          <div className="product-grid">
            {fineJewellery.slice(0, 4).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION 2 - ENGAGEMENT RINGS */}
      <section className="featured-collection featured-collection-2">
        <div className="container">
          <div className="collection-split reverse">
            <div className="collection-visual">
              <div className="collection-image">💍 Engagement Rings</div>
            </div>
            <div className="collection-content">
              <div className="collection-header">
                <span className="collection-label">TIMELESS ELEGANCE</span>
                <h2>Engagement Rings</h2>
                <p className="collection-description">
                  Celebrate your love with an exquisite engagement ring. From classic solitaires to modern designs, 
                  each piece tells your unique story.
                </p>
              </div>
              <div className="collection-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom Design Available</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Lifetime Warranty</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Expert Consultation</span>
                </div>
              </div>
              <Link to="/engagement-rings" className="btn btn-primary">View Rings</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SHOWCASE - REFINED */}
      <section className="categories-grid">
        <div className="container">
          <div className="section-title">
            <h2>Collections</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <Link to="/gemstones" className="category-card">
              <div className="category-icon">💎</div>
              <h3>{t('categories.gemstones')}</h3>
              <p>{t('categories.gemstonesCount')}</p>
            </Link>

            <Link to="/fine-jewellery" className="category-card">
              <div className="category-icon">👑</div>
              <h3>{t('categories.fineJewellery')}</h3>
              <p>{t('categories.fineJewelleryCount')}</p>
            </Link>

            <Link to="/engagement-rings" className="category-card">
              <div className="category-icon">💍</div>
              <h3>{t('categories.engagementRings')}</h3>
              <p>{t('categories.engagementRingsCount')}</p>
            </Link>

            <Link to="/bespoke" className="category-card">
              <div className="category-icon">✨</div>
              <h3>{t('categories.bespoke')}</h3>
              <p>{t('categories.bespokeDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* BESPOKE PROCESS */}
      <section className="bespoke-process">
        <div className="container">
          <div className="section-title">
            <h2>{t('home.bespokeProcess')}</h2>
            <p className="section-subtitle">{t('home.fromVisionToMasterpiece')}</p>
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
            <Link to="/bespoke" className="btn btn-primary">{t('home.startBespokeJourney')}</Link>
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="journal-preview">
        <div className="container">
          <div className="section-title">
            <h2>{t('home.journal')}</h2>
            <p className="section-subtitle">{t('home.insightsOnGemstones')}</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {journalArticles.slice(0, 3).map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="journal-card"
                >
                  <div className="journal-category">
                    {article.category}
                  </div>
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
            <Link to="/journal" className="btn btn-primary">{t('home.readJournal')}</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Receive updates on new collections, exclusive events, and gemstone insights.</p>
            {subscribed && <div className="alert alert-success">{t('home.subscribeSuccess')}</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder={t('home.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">{t('common.subscribe')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience Luxury & Craftsmanship</h2>
          <p>Visit our atelier for personalized consultations and private appointments</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/our-house" className="btn btn-primary">Book an Appointment</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
