import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

/* ──────────────────────────────────────────────────────────
   SVG Icon Components – crisp, thin-stroke luxury icons
   ────────────────────────────────────────────────────────── */

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const BagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const ChevronDown = ({ className }) => (
  <svg className={className} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ──────────────────────────────────────────────────────────
   Mega-Menu Data – rich editorial structure per Tiffany style
   ────────────────────────────────────────────────────────── */

function useMegaMenuData(t) {
  return [
    {
      key: 'gemstones',
      label: t('common.gemstones'),
      href: '/gemstones',
      mega: {
        columns: [
          {
            heading: 'By Stone',
            links: [
              { label: 'Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
              { label: 'Pink Sapphires', href: '/gemstones?category=pink-sapphires' },
              { label: 'Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
              { label: 'Padparadscha', href: '/gemstones?category=padparadscha' },
              { label: 'Rubies', href: '/gemstones?category=rubies' },
              { label: 'Spinels', href: '/gemstones?category=spinels' },
            ],
          },
          {
            heading: 'Collector\'s Edit',
            links: [
              { label: 'Collector Stones', href: '/gemstones?category=collector' },
              { label: 'Other Gemstones', href: '/gemstones?category=other' },
              { label: 'All Gemstones', href: '/gemstones', accent: true },
            ],
          },
          {
            heading: 'The Aviory Difference',
            links: [
              { label: 'GIA Certified', href: '/our-house' },
              { label: 'Unheated & Natural', href: '/journal/the-science-of-sapphire' },
              { label: 'Ceylon Provenance', href: '/journal/the-heritage-of-ceylon-gemstones' },
            ],
          },
        ],
        feature: {
          title: 'The Ceylon Heritage',
          subtitle: 'Exceptional unheated sapphires from the island that gave the world its finest gemstones.',
          cta: { label: 'Explore Origins', href: '/our-house' },
          accent: 'sapphire',
        },
      },
    },
    {
      key: 'fine-jewellery',
      label: t('common.fineJewellery'),
      href: '/fine-jewellery',
      mega: {
        columns: [
          {
            heading: 'By Category',
            links: [
              { label: 'Rings', href: '/fine-jewellery?collection=Rings' },
              { label: 'Earrings', href: '/fine-jewellery?collection=Earrings' },
              { label: 'Necklaces', href: '/fine-jewellery?collection=Necklaces' },
              { label: 'Bracelets', href: '/fine-jewellery?collection=Bracelets' },
              { label: 'Brooches', href: '/fine-jewellery?collection=Brooches' },
            ],
          },
          {
            heading: 'Collections',
            links: [
              { label: 'Limited Edition', href: '/fine-jewellery?collection=Limited+Edition' },
              { label: 'Custom Pieces', href: '/fine-jewellery?collection=Custom' },
              { label: 'All Fine Jewellery', href: '/fine-jewellery', accent: true },
            ],
          },
          {
            heading: 'Services',
            links: [
              { label: 'Bespoke Creation', href: '/bespoke' },
              { label: 'Private Consultation', href: '/private-consultations' },
              { label: 'Care & Maintenance', href: '/journal/caring-for-your-sapphires' },
            ],
          },
        ],
        feature: {
          title: 'Artisanal Excellence',
          subtitle: 'Every piece is handcrafted by master artisans using time-honored techniques passed down through generations.',
          cta: { label: 'Discover Craftsmanship', href: '/journal/the-art-of-bespoke-jewellery' },
          accent: 'gold',
        },
      },
    },
    {
      key: 'engagement',
      label: t('common.engagementRings'),
      href: '/engagement-rings',
      mega: {
        columns: [
          {
            heading: 'By Style',
            links: [
              { label: 'Solitaire', href: '/engagement-rings?style=solitaire' },
              { label: 'Halo', href: '/engagement-rings?style=halo' },
              { label: 'Three Stone', href: '/engagement-rings?style=three-stone' },
              { label: 'Cushion', href: '/engagement-rings?style=cushion' },
              { label: 'Oval', href: '/engagement-rings?style=oval' },
              { label: 'Emerald Cut', href: '/engagement-rings?style=emerald' },
              { label: 'Pear', href: '/engagement-rings?style=pear' },
            ],
          },
          {
            heading: 'By Stone',
            links: [
              { label: 'Blue Sapphire Rings', href: '/engagement-rings?stone=blue-sapphire' },
              { label: 'Ruby Rings', href: '/engagement-rings?stone=ruby' },
              { label: 'Pink Sapphire Rings', href: '/engagement-rings?stone=pink-sapphire' },
              { label: 'Padparadscha Rings', href: '/engagement-rings?stone=padparadscha' },
            ],
          },
          {
            heading: 'Planning',
            links: [
              { label: 'Ring Sizing Guide', href: '/engagement-rings' },
              { label: 'Book an Appointment', href: '/private-consultations' },
              { label: 'All Engagement Rings', href: '/engagement-rings', accent: true },
            ],
          },
        ],
        feature: {
          title: 'Begin Your Story',
          subtitle: 'A coloured gemstone engagement ring is as unique as your love. Let our gemologists help you find the perfect stone.',
          cta: { label: 'Start Your Journey', href: '/bespoke/enquiry' },
          accent: 'rose',
        },
      },
    },
    {
      key: 'bespoke',
      label: t('common.bespoke'),
      href: '/bespoke',
      mega: {
        columns: [
          {
            heading: 'Bespoke Services',
            links: [
              { label: 'Our Process', href: '/bespoke/process' },
              { label: 'Begin Your Enquiry', href: '/bespoke/enquiry' },
              { label: 'Private Consultations', href: '/private-consultations' },
            ],
          },
          {
            heading: 'Inspiration',
            links: [
              { label: 'Designing Your Dream Ring', href: '/journal/designing-your-dream-ring' },
              { label: 'The Art of Bespoke', href: '/journal/the-art-of-bespoke-jewellery' },
              { label: 'Sustainable Luxury', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
            ],
          },
        ],
        feature: {
          title: 'From Vision to Masterpiece',
          subtitle: 'Our 5-stage bespoke process transforms your vision into an heirloom crafted to last generations.',
          cta: { label: 'Explore the Process', href: '/bespoke/process' },
          accent: 'champagne',
        },
      },
    },
    {
      key: 'journal',
      label: t('common.journal'),
      href: '/journal',
    },
    {
      key: 'our-house',
      label: t('common.ourHouse'),
      href: '/our-house',
    },
  ]
}

/* ──────────────────────────────────────────────────────────
   Header Component
   ────────────────────────────────────────────────────────── */

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()
  const location = useLocation()
  const megaTimeoutRef = useRef(null)
  const headerRef = useRef(null)

  const menuItems = useMegaMenuData(t)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMega(null)
    setMobileAccordion(null)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // Close mega-menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveMega(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleMegaEnter = useCallback((key) => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(key)
  }, [])

  const handleMegaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setActiveMega(null)
    }, 200)
  }, [])

  const handleMegaPanelEnter = useCallback(() => {
    clearTimeout(megaTimeoutRef.current)
  }, [])

  const toggleMobileAccordion = (key) => {
    setMobileAccordion(prev => prev === key ? null : key)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${scrolled ? 'header--scrolled' : ''} ${activeMega ? 'header--mega-open' : ''}`}
      >
        {/* ─── Utility Bar ─── */}
        <div className="header__utility">
          <div className="header__utility-inner container">
            <span className="header__utility-message">
              Complimentary Shipping on All Orders &nbsp;|&nbsp; GIA Certified Gemstones
            </span>
            <div className="header__utility-actions">
              <LanguageSwitcher />
              <Link to="/contact" className="header__utility-link">Client Care</Link>
              <Link to="/private-consultations" className="header__utility-link">Book Appointment</Link>
            </div>
          </div>
        </div>

        {/* ─── Main Header ─── */}
        <div className="header__main">
          <div className="header__main-inner container">
            {/* Left: hamburger (mobile) */}
            <button
              className="header__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`header__hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`header__hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`header__hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
            </button>

            {/* Center: Logo */}
            <Link to="/" className="header__logo" aria-label="AVIORY & CO. Home">
              <span className="header__logo-text">AVIORY & CO.</span>
            </Link>

            {/* Right: Icons */}
            <div className="header__icons">
              <Link to="/contact" className="header__icon" title="Search" aria-label="Search">
                <SearchIcon />
              </Link>
              <Link to="/contact" className="header__icon" title="Account" aria-label="Account">
                <UserIcon />
              </Link>
              <Link to="/contact" className="header__icon header__icon--bag" title="Shopping Bag" aria-label="Shopping Bag">
                <BagIcon />
                {itemCount > 0 && <span className="header__bag-count">{itemCount}</span>}
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Desktop Navigation ─── */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <div className="header__nav-inner container">
            <ul className="header__nav-list">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`header__nav-item ${activeMega === item.key ? 'header__nav-item--active' : ''}`}
                  onMouseEnter={() => item.mega ? handleMegaEnter(item.key) : setActiveMega(null)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link to={item.href} className="header__nav-link">
                    <span className="header__nav-label">{item.label}</span>
                    {item.mega && <ChevronDown className="header__nav-chevron" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ─── Mega-Menu Panels (rendered outside header for full-width) ─── */}
      {menuItems.map((item) =>
        item.mega ? (
          <div
            key={item.key}
            className={`mega ${activeMega === item.key ? 'mega--visible' : ''}`}
            onMouseEnter={handleMegaPanelEnter}
            onMouseLeave={handleMegaLeave}
            role="menu"
            aria-label={`${item.label} menu`}
          >
            <div className="mega__inner container">
              {/* Link Columns */}
              <div className="mega__columns">
                {item.mega.columns.map((col, ci) => (
                  <div key={ci} className="mega__column">
                    <h3 className="mega__column-heading">{col.heading}</h3>
                    <ul className="mega__column-links">
                      {col.links.map((link, li) => (
                        <li key={li}>
                          <Link
                            to={link.href}
                            className={`mega__link ${link.accent ? 'mega__link--accent' : ''}`}
                            onClick={() => setActiveMega(null)}
                          >
                            {link.label}
                            {link.accent && <ArrowRight />}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Editorial Feature Tile */}
              {item.mega.feature && (
                <div className={`mega__feature mega__feature--${item.mega.feature.accent}`}>
                  <div className="mega__feature-content">
                    <h4 className="mega__feature-title">{item.mega.feature.title}</h4>
                    <p className="mega__feature-subtitle">{item.mega.feature.subtitle}</p>
                    <Link
                      to={item.mega.feature.cta.href}
                      className="mega__feature-cta"
                      onClick={() => setActiveMega(null)}
                    >
                      {item.mega.feature.cta.label}
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null
      )}

      {/* ─── Mega-Menu Backdrop ─── */}
      <div
        className={`mega-backdrop ${activeMega ? 'mega-backdrop--visible' : ''}`}
        onClick={() => setActiveMega(null)}
      />

      {/* ─── Mobile Navigation Overlay ─── */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__header">
          <Link to="/" className="mobile-nav__logo" onClick={() => setMobileMenuOpen(false)}>
            AVIORY & CO.
          </Link>
          <button
            className="mobile-nav__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mobile-nav__body">
          <ul className="mobile-nav__list">
            {menuItems.map((item) => (
              <li key={item.key} className="mobile-nav__item">
                <div className="mobile-nav__item-header">
                  <Link
                    to={item.href}
                    className="mobile-nav__link"
                    onClick={() => !item.mega && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <button
                      className={`mobile-nav__toggle ${mobileAccordion === item.key ? 'mobile-nav__toggle--open' : ''}`}
                      onClick={() => toggleMobileAccordion(item.key)}
                      aria-expanded={mobileAccordion === item.key}
                      aria-label={`Expand ${item.label}`}
                    >
                      <ChevronDown />
                    </button>
                  )}
                </div>

                {item.mega && mobileAccordion === item.key && (
                  <div className="mobile-nav__submenu">
                    {item.mega.columns.map((col, ci) => (
                      <div key={ci} className="mobile-nav__group">
                        <span className="mobile-nav__group-heading">{col.heading}</span>
                        {col.links.map((link, li) => (
                          <Link
                            key={li}
                            to={link.href}
                            className={`mobile-nav__sublink ${link.accent ? 'mobile-nav__sublink--accent' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-nav__footer">
          <Link to="/contact" className="mobile-nav__footer-link" onClick={() => setMobileMenuOpen(false)}>
            Client Care
          </Link>
          <Link to="/private-consultations" className="mobile-nav__footer-link" onClick={() => setMobileMenuOpen(false)}>
            Book Appointment
          </Link>
          <div className="mobile-nav__footer-lang">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* ─── Mobile Nav Backdrop ─── */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'mobile-nav-backdrop--visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
