import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import ProductCard from '../components/ProductCard'
import { gemstones, journalArticles, engagementRings, fineJewellery } from '../data/products'
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

  // Hero carousel slides with lifestyle imagery
  const heroSlides = [
    {
      image: '/images/hero-sapphire-lifestyle.jpg',
      title: 'Ceylon Sapphires',
      subtitle: 'Rare gemstones from the Indian Ocean',
      cta: { label: 'Explore Gemstones', href: '/gemstones' }
    },
    {
      image: '/images/hero-engagement-couple.jpg',
      title: 'Engagement Rings',
      subtitle: 'Crafted for a lifetime of love',
      cta: { label: 'View Collections', href: '/engagement-rings' }
    },
    {
      image: '/images/hero-fine-jewellery.jpg',
      title: 'Haute Joaillerie',
      subtitle: 'Exceptional pieces, timeless elegance',
      cta: { label: 'Discover More', href: '/fine-jewellery' }
    }
  ]

  return (
    <>
      {/* HERO CAROUSEL */}
      <HeroCarousel 
        slides={heroSlides}
        defaultTitle={t('hero.title')}
        defaultSubtitle={t('hero.subtitle')}
        autoplayInterval={5000}
        transitionDuration={0.8}
      />

      {/* SECTION 1: FEATURED GEMSTONES - LIFESTYLE + PRODUCTS (50/50) */}
      <section className="lifestyle-section lifestyle-section--gemstones">
        <div className="lifestyle-grid lifestyle-grid--2col">
          <div className="lifestyle-image">
            <div className="lifestyle-placeholder" style={{ background: 'linear-gradient(135deg, #2c1810 0%, #5a3d2a 100%)' }}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>✨</span>
            </div>
          </div>
          <div className="lifestyle-content">
            <span className="lifestyle-label">RARE GEMSTONES</span>
            <h2>Ceylon Sapphires</h2>
            <p>Discover exceptional gemstones hand-selected from Sri Lanka's most prestigious mines. Each stone represents generations of expertise and uncompromising quality standards.</p>
            <Link to="/gemstones?category=blue-sapphires" className="btn btn-primary">
              Shop Gemstones
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: DUAL PRODUCT GRID (2 COLUMNS) */}
      <section className="dual-product-grid">
        <div className="container">
          <div className="grid-2col">
            <div className="product-group">
              <div className="product-group__image">
                <div style={{ background: 'linear-gradient(135deg, #421820 0%, #7d3345 50%, #d46b7a 100%)', height: '400px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.4 }}>
                  💎
                </div>
              </div>
              <h3 className="product-group__title">Pink Sapphires</h3>
              <p className="product-group__desc">Vivid and delicate hues</p>
              <Link to="/gemstones?category=pink-sapphires" className="btn btn-link">
                SHOP NOW
              </Link>
            </div>

            <div className="product-group">
              <div className="product-group__image">
                <div style={{ background: 'linear-gradient(135deg, #0c2b18 0%, #1a5732 50%, #2e8b53 100%)', height: '400px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.4 }}>
                  ✨
                </div>
              </div>
              <h3 className="product-group__title">Emeralds</h3>
              <p className="product-group__desc">Rich and radiant green</p>
              <Link to="/gemstones?category=emeralds" className="btn btn-link">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENGAGEMENT RINGS - LIFESTYLE + PRODUCTS (50/50) */}
      <section className="lifestyle-section lifestyle-section--rings">
        <div className="lifestyle-grid lifestyle-grid--2col lifestyle-grid--reverse">
          <div className="lifestyle-content">
            <span className="lifestyle-label">TIMELESS MOMENTS</span>
            <h2>Engagement Rings</h2>
            <p>Celebrate love with bespoke engagement rings. Each design is crafted to tell your unique story, combining exceptional gemstones with master artistry.</p>
            <Link to="/engagement-rings" className="btn btn-primary">
              Explore Rings
            </Link>
          </div>
          <div className="lifestyle-image">
            <div className="lifestyle-placeholder" style={{ background: 'linear-gradient(135deg, #241c14 0%, #3d2f21 50%, #5e4732 100%)' }}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>💍</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS SHOWCASE (4-COLUMN GRID) */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-heading">Featured Pieces</h2>
          <div className="products-showcase">
            {gemstones.slice(0, 4).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GIFTING HERO - LIFESTYLE + LIFESTYLE */}
      <section className="lifestyle-section lifestyle-section--gifting">
        <div className="lifestyle-grid lifestyle-grid--2col">
          <div className="lifestyle-image">
            <div className="lifestyle-placeholder" style={{ background: 'linear-gradient(135deg, #1a5732 0%, #2e8b53 50%, #45b880 100%)' }}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>🎁</span>
            </div>
          </div>
          <div className="lifestyle-image">
            <div className="lifestyle-placeholder" style={{ background: 'linear-gradient(135deg, #173361 0%, #29539b 50%, #4a7ec1 100%)' }}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>✨</span>
            </div>
          </div>
        </div>
        <div className="lifestyle-content lifestyle-content--overlay">
          <span className="lifestyle-label">THE ART OF GIFTING</span>
          <h2>Celebrate Every Moment</h2>
          <p>Personalized jewelry becomes heirlooms. Gift exceptional pieces that express love, commitment, and lasting connection.</p>
          <div className="gifting-ctas">
            <Link to="/engagement-rings" className="btn btn-primary">
              Explore Gifts
            </Link>
            <Link to="/bespoke/enquiry" className="btn btn-outline">
              Commission a Piece
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINE JEWELLERY SHOWCASE */}
      <section className="jewellery-showcase">
        <div className="container">
          <h2 className="section-heading">Haute Joaillerie</h2>
          <div className="products-showcase">
            {fineJewellery.slice(0, 4).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: JOURNAL PREVIEW */}
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

      {/* SECTION 8: NEWSLETTER */}
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

      {/* SECTION 9: FINAL CTA */}
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
