import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import { gemstones, journalArticles } from '../data/products'
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
        ctaPrimary={{ label: "Discover Gemstones", href: "/gemstones" }}
        videoSrc="/videos/hero-loop.mp4"
        fallbackImage="/images/hero-banner.jpg"
      />

      {/* FEATURED COLLECTION */}
      <section className="featured-collection-hero">
        <div className="container">
          <div className="collection-story">
            <span className="collection-label">FEATURED COLLECTION</span>
            <h2>The Ceylon Sapphire Vault</h2>
            <p className="collection-narrative">
              For over 2,000 years, Ceylon sapphires have been revered for their unparalleled blue saturation, 
              crystalline clarity, and transformative brilliance. Each stone in this vault represents the pinnacle of 
              gemstone rarity and craftsmanship—hand-selected for collectors who understand that true luxury is measured 
              in exclusivity, not quantity.
            </p>
            <Link to="/gemstones?category=blue-sapphires" className="btn btn-primary">
              Explore the Collection
            </Link>
          </div>
          <div className="collection-showcase">
            {gemstones.filter(g => g.type === 'sapphire').slice(0, 4).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="category-browse">
        <div className="container">
          <h2 className="category-browse__title">Shop Our Collections</h2>
          <div className="category-grid">
            <Link to="/gemstones?category=blue-sapphires" className="category-card">
              <div className="category-card__image" style={{ background: 'linear-gradient(135deg, #0b1a30 0%, #173361 50%, #29539b 100%)' }}>
                <span className="category-icon">💎</span>
              </div>
              <h3>Royal Blue Sapphires</h3>
              <p>Cornflower to deep royal blues</p>
            </Link>
            <Link to="/gemstones?category=pink-sapphires" className="category-card">
              <div className="category-card__image" style={{ background: 'linear-gradient(135deg, #421820 0%, #7d3345 50%, #d46b7a 100%)' }}>
                <span className="category-icon">✨</span>
              </div>
              <h3>Pink Sapphires</h3>
              <p>Vivid to delicate pink hues</p>
            </Link>
            <Link to="/engagement-rings" className="category-card">
              <div className="category-card__image" style={{ background: 'linear-gradient(135deg, #241c14 0%, #3d2f21 50%, #5e4732 100%)' }}>
                <span className="category-icon">💍</span>
              </div>
              <h3>Engagement Rings</h3>
              <p>Bespoke designs for love stories</p>
            </Link>
            <Link to="/fine-jewellery" className="category-card">
              <div className="category-card__image" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #5a5a5a 100%)' }}>
                <span className="category-icon">👑</span>
              </div>
              <h3>Haute Joaillerie</h3>
              <p>Exceptional fine jewelry pieces</p>
            </Link>
          </div>
        </div>
      </section>

      {/* GIFTING */}
      <section className="gifting-hero">
        <div className="gifting-hero__content">
          <div className="container">
            <span className="gifting-label">TIMELESS MOMENTS</span>
            <h2 className="gifting-title">The Art of Gifting</h2>
            <p className="gifting-description">
              Personalized jewelry and gifts are especially meaningful and become heirlooms over time. 
              Celebrate every facet of the ones you love with iconic designs that transcend moments 
              and endure as symbols of connection, commitment, and care.
            </p>
            <div className="gifting-ctas">
              <Link to="/engagement-rings" className="btn btn-primary">
                Explore Bridal
              </Link>
              <Link to="/bespoke/enquiry" className="btn btn-outline">
                Bespoke Commission
              </Link>
            </div>
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
          <p>Our gemologist is here to help with consultations, custom inquiries, or any questions</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Gemologist
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
