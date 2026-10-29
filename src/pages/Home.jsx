import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../components/LanguageSwitcher'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import { gemstones, fineJewellery, journalArticles } from '../data/products'
import { bespokeProcess } from '../data/content'
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
      {/* LANGUAGE SELECTOR - TOP OF PAGE */}
      <section className="language-selector-section">
        <div className="container">
          <LanguageSwitcher variant="light" expanded={true} />
        </div>
      </section>

      {/* ─── TIFFANY-STYLE CINEMATIC HERO (Video + Image fallback + Controls) ─── */}
      <HeroBanner 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        tagline="MAISON DE HAUTE JOAILLERIE"
        ctaPrimary={{ label: t('hero.exploreGemstones'), href: "/gemstones" }}
        ctaSecondary={{ label: t('common.bookConsultation'), href: "/private-consultations" }}
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-sparkling-diamond-ring-under-spotlight-41875-large.mp4"
        fallbackImage="/images/hero-banner.jpg"
      />

      {/* ─── BRAND PROVENANCE STRIP (Tiffany-inspired Trust Bar) ─── */}
      <section className="provenance-strip">
        <div className="container provenance-strip__inner">
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>Ceylon Provenance</h4>
            <p>100% ethically sourced from ancient Sri Lankan gem fields</p>
          </div>
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>GIA Certified</h4>
            <p>Every exceptional stone accompanied by world-standard verification</p>
          </div>
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>Natural & Unheated</h4>
            <p>Untreated natural gemstones exhibiting pure crystalline color</p>
          </div>
          <div className="provenance-item">
            <span className="provenance-icon">◆</span>
            <h4>Atelier Craftsmanship</h4>
            <p>Hand-wrought bespoke settings by master goldsmiths</p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION 1: EXCEPTIONAL CEYLON SAPPHIRES ─── */}
      <section className="featured-collection featured-collection--editorial">
        <div className="container">
          <div className="collection-split">
            <div className="collection-content">
              <div className="collection-header">
                <span className="collection-label">THE HIGH JEWELLERY EDIT</span>
                <h2>Royal Ceylon Sapphires</h2>
                <p className="collection-description">
                  Celebrated for millennia by emperors, royalty, and international collectors. 
                  Our Ceylon sapphires possess the legendary cornflower and royal blue saturation 
                  unmatched anywhere in the geological world.
                </p>
              </div>
              <div className="collection-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Direct mine-to-market traceability</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Unheated, untreated optical purity</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Independent GIA & Gubelin documentation</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/gemstones?category=blue-sapphires" className="btn btn-primary">
                  Explore Sapphire Collection
                </Link>
              </div>
            </div>
            
            <div className="collection-visual">
              <div className="collection-visual__card">
                <div className="collection-visual__tag">HIGHLIGHT PIECE</div>
                <h3 className="collection-visual__title">Royal Ceylon Blue</h3>
                <p className="collection-visual__meta">2.15 ct • VVS1 • GIA Certified</p>
                <Link to="/gemstones/bs-001" className="collection-visual__link">
                  View Gemstone Specifications →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CURATED GALLERY: NEW ARRIVALS ─── */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title">
            <span className="collection-label">EXQUISITE SELECTIONS</span>
            <h2>New Gemstone Acquisitions</h2>
            <p className="section-subtitle">
              Rare unheated sapphires, vivid rubies, and collector stones newly released from our Ceylon vault.
            </p>
          </div>
          
          <div className="product-grid">
            {gemstones.slice(0, 4).map(gem => (
              <ProductCard key={gem.id} product={gem} type="gemstone" />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/gemstones" className="btn btn-outline">
              View All Rare Gemstones
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION 2: BESPOKE ENGAGEMENT RINGS ─── */}
      <section className="featured-collection featured-collection-2">
        <div className="container">
          <div className="collection-split reverse">
            <div className="collection-visual collection-visual--bridal">
              <div className="collection-visual__card">
                <div className="collection-visual__tag">BESPOKE BRIDAL</div>
                <h3 className="collection-visual__title">The Solitaire Sapphire</h3>
                <p className="collection-visual__meta">Handcrafted in Platinum & 18K Yellow Gold</p>
                <Link to="/engagement-rings" className="collection-visual__link">
                  Explore Engagement Styles →
                </Link>
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-header">
                <span className="collection-label">LOVE & COMMITTMENT</span>
                <h2>Bespoke Engagement Rings</h2>
                <p className="collection-description">
                  Move beyond the ordinary. A coloured gemstone engagement ring tells an authentic story of individuality and lasting devotion, engineered with durability to withstand lifetimes of daily wear.
                </p>
              </div>
              <div className="collection-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Personal consultation with master gemologist</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom 3D CAD modeling & wax prototypes</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Lifetime warranty & complimentary annual cleaning</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/engagement-rings" className="btn btn-primary">
                  Explore Engagement Rings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINE JEWELLERY HIGHLIGHTS ─── */}
      <section className="featured-products" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-gray-light)' }}>
        <div className="container">
          <div className="section-title">
            <span className="collection-label">ATELIER MASTERPIECES</span>
            <h2>Signature Fine Jewellery</h2>
            <p className="section-subtitle">
              Intricately wrought necklaces, bracelets, earrings, and limited edition creations.
            </p>
          </div>
          <div className="product-grid">
            {fineJewellery.slice(0, 4).map(item => (
              <ProductCard key={item.id} product={item} type="jewellery" />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/fine-jewellery" className="btn btn-outline">
              Explore Fine Jewellery
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BESPOKE PROCESS SECTION ─── */}
      <section className="bespoke-process">
        <div className="container">
          <div className="section-title">
            <span className="collection-label">HOW WE WORK</span>
            <h2>The 5-Stage Creation Journey</h2>
            <p className="section-subtitle">
              From an initial conversation in our private atelier to the unveiling of an enduring heirloom.
            </p>
          </div>
          <div className="process-grid">
            {bespokeProcess.map(stage => (
              <Link key={stage.id} to="/bespoke/process" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="process-card">
                  <div className="process-number">0{stage.number}</div>
                  <h4>{stage.title}</h4>
                  <p>{stage.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Link to="/bespoke/enquiry" className="btn btn-primary">
              Begin Your Bespoke Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ─── JOURNAL & EDUCATION ─── */}
      <section className="journal-preview">
        <div className="container">
          <div className="section-title">
            <span className="collection-label">EDUCATION & HERITAGE</span>
            <h2>From The Aviory Journal</h2>
            <p className="section-subtitle">
              Expert articles on gemstone science, mine-to-market ethics, and luxury craftsmanship.
            </p>
          </div>
          <div className="journal-grid">
            {journalArticles.slice(0, 3).map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="journal-card">
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
            <Link to="/journal" className="btn btn-outline">
              Read All Journal Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <span className="collection-label" style={{ color: 'var(--color-champagne)' }}>PRIVATE CIRCLE</span>
            <h2>Join The Aviory Society</h2>
            <p>
              Receive early invitations to rare gemstone releases, atelier exhibitions, and gemological insights.
            </p>
            {subscribed && <div className="alert alert-success">{t('home.subscribeSuccess')}</div>}
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder={t('home.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                {t('common.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── CONCIERGE / APPOINTMENT CTA ─── */}
      <section className="cta-section">
        <div className="container">
          <span className="collection-label">PERSONALIZED CONSULTATIONS</span>
          <h2>Experience Haute Joaillerie in Person</h2>
          <p>
            Meet with our chief gemologist and artisans at our Colombo atelier, or arrange a private virtual showcase wherever you are in the world.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/private-consultations" className="btn btn-primary">
              Book a Private Showing
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
