import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
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

  // Hero section with single looping video (Tiffany/Harry Winston style)
  const heroVideo = {
    video: '/videos/hero-luxury.mp4',
    poster: '/images/hero-banner.jpg',
    title: t('hero.title'),
    subtitle: t('hero.subtitle'),
    cta: { label: 'Discover Gemstones', href: '/gemstones' }
  }

  return (
    <>
      {/* HERO VIDEO */}
      <HeroVideo 
        video={heroVideo.video}
        poster={heroVideo.poster}
        title={heroVideo.title}
        subtitle={heroVideo.subtitle}
        cta={heroVideo.cta}
      />

      {/* DUAL LIFESTYLE IMAGE SECTION (Tiffany Style) */}
      <section className="lifestyle-dual-section">
        <div className="container">
          <div className="lifestyle-dual-grid">
            {/* LEFT: GIFTS FOR HER */}
            <div className="lifestyle-dual-card">
              <div className="lifestyle-dual-image" style={{ backgroundImage: 'url(/images/gifts-for-her.jpg)' }}>
                <div className="lifestyle-dual-overlay" />
              </div>
              <div className="lifestyle-dual-content">
                <h3>Gifts for Her</h3>
                <p>Discover curated collections designed for the modern woman</p>
                <Link to="/gemstones" className="btn btn-primary btn-small">
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* RIGHT: MOST POPULAR GIFTS */}
            <div className="lifestyle-dual-card">
              <div className="lifestyle-dual-image" style={{ backgroundImage: 'url(/images/most-popular-gifts.jpg)' }}>
                <div className="lifestyle-dual-overlay" />
              </div>
              <div className="lifestyle-dual-content">
                <h3>Most Popular Gifts</h3>
                <p>Timeless pieces loved by our most discerning collectors</p>
                <Link to="/fine-jewellery" className="btn btn-primary btn-small">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED HERO - FULL WIDTH WITH TEXT OVERLAY (Gifts to Engrave) */}
      <section className="featured-hero-section">
        <div className="featured-hero-grid">
          <div className="featured-hero-image" style={{ backgroundImage: 'url(/images/gifts-to-engrave.jpg)' }}>
            <div className="featured-hero-overlay" />
          </div>
          <div className="featured-hero-content">
            <h2>Gifts to Engrave</h2>
            <p>Personalized jewelry represents an especially meaningful moment. Create timeless heirlooms with custom inscriptions that become beloved for a lifetime.</p>
            <Link to="/bespoke/enquiry" className="btn btn-primary">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED HERO - SPLIT LAYOUT (The Art of Gifting) */}
      <section className="featured-hero-split">
        <div className="featured-hero-split-grid">
          <div className="featured-hero-split-image" style={{ backgroundImage: 'url(/images/art-of-gifting.jpg)' }}>
            <div className="featured-hero-overlay" />
          </div>
          <div className="featured-hero-split-content">
            <h2>The Art of Gifting</h2>
            <p>Celebrate every facet of the ones you love with iconic designs this holiday season. From engagement moments to anniversary milestones, find the perfect piece to express your deepest feelings.</p>
            <Link to="/engagement-rings" className="btn btn-primary">
              EXPLORE COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: AVIORY LOVE COLLECTION - LIFESTYLE + PRODUCTS (50/50) */}
      <section className="lifestyle-section lifestyle-section--rings">
        <div className="lifestyle-grid lifestyle-grid--2col lifestyle-grid--reverse">
          <div className="lifestyle-content">
            <span className="lifestyle-label">AVIORY LOVE COLLECTION</span>
            <h2>Rings for Every Love Story</h2>
            <p>We believe every love story deserves an exceptional beginning. Each piece in the AVIORY Love Collection is handcrafted to celebrate the moments that matter most—from first meetings to lifetime commitments.</p>
            <Link to="/engagement-rings" className="btn btn-primary">
              Explore the Collection
            </Link>
          </div>
          <div className="lifestyle-image">
            <div className="lifestyle-placeholder" style={{ background: 'linear-gradient(135deg, #241c14 0%, #3d2f21 50%, #5e4732 100%)' }}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>💍</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED GEMSTONES - LIFESTYLE + PRODUCTS (50/50) */}
      <section className="lifestyle-section lifestyle-section--gemstones">
        <div className="lifestyle-grid lifestyle-grid--2col lifestyle-grid--reverse">
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

      {/* SECTION 3: FEATURED PRODUCTS SHOWCASE (4-COLUMN GRID) */}
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

      {/* SECTION 4: FINE JEWELLERY SHOWCASE */}
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

      {/* SECTION 5: JOURNAL PREVIEW */}
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

      {/* SECTION 6: NEWSLETTER */}
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

      {/* SECTION 7: FINAL CTA */}
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
