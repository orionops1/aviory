import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import { contactInfo } from '../data/content'
import { megaMenuData } from '../data/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import AvioryLogo from './AvioryLogo'
import CartDrawer from './CartDrawer'
import SearchModal from './SearchModal'
import AppointmentModal from './AppointmentModal'
import './Header.css'

/* ──────────────────────────────────────────────────────────
   Thin-Stroke Luxury Vector Icons
   ────────────────────────────────────────────────────────── */

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const BagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const ChevronDown = ({ className }) => (
  <svg className={className} width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ──────────────────────────────────────────────────────────
   Mega-Menu Editorial Structure with i18n
   Translates labelKey values from centralized navigation config
   ────────────────────────────────────────────────────────── */

function useMegaMenuData(t) {
  return useMemo(() => 
    megaMenuData.map((item) => ({
      ...item,
      label: t(item.labelKey),
    })),
    [t]
  )
}

/* ──────────────────────────────────────────────────────────
   Main Header Component
   ────────────────────────────────────────────────────────── */

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()
  const location = useLocation()
  const megaTimeoutRef = useRef(null)
  const headerRef = useRef(null)

  const menuItems = useMegaMenuData(t)

  // Route change reset
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMega(null)
    setMobileAccordion(null)
  }, [location.pathname, location.search])

  // Prevent scroll when mobile menu or modals open
  useEffect(() => {
    if (mobileMenuOpen || cartDrawerOpen || searchModalOpen || appointmentModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen, cartDrawerOpen, searchModalOpen, appointmentModalOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMega(null)
        setMobileMenuOpen(false)
        setCartDrawerOpen(false)
        setSearchModalOpen(false)
        setAppointmentModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
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

  const handleNavClick = () => {
    clearTimeout(megaTimeoutRef.current)
    setActiveMega(null)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`tiffany-header ${scrolled ? 'tiffany-header--scrolled' : ''} ${activeMega ? 'tiffany-header--mega-open' : ''}`}
      >
        {/* ─── UNIFIED PRIMARY ROW (Tiffany Standard 2-Tier) ─── */}
        <div className="tiffany-header__primary">
          <div className="container tiffany-header__primary-inner">
            {/* Left: Mobile hamburger */}
            <button
              type="button"
              className="tiffany-header__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`tiffany-hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>

            {/* Left-Center: Logo */}
            <Link 
              to="/" 
              className="tiffany-header__logo-link" 
              onClick={handleNavClick}
              aria-label="AVIORY & CO. Homepage"
            >
              <AvioryLogo variant="compact" showSubtitle={false} />
            </Link>

            {/* Center: Navigation Items (Inline) */}
            <nav className="tiffany-header__nav-inline" aria-label="Primary Categories">
              <ul className="tiffany-header__nav-list">
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    className={`tiffany-header__nav-item ${activeMega === item.key ? 'tiffany-header__nav-item--active' : ''}`}
                    onMouseEnter={() => item.mega ? handleMegaEnter(item.key) : setActiveMega(null)}
                    onMouseLeave={handleMegaLeave}
                  >
                    <Link 
                      to={item.href} 
                      className="tiffany-header__nav-link"
                      onClick={handleNavClick}
                    >
                      <span>{item.label}</span>
                      {item.mega && <ChevronDown className="tiffany-nav-chevron" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Icons Cluster */}
            <div className="tiffany-header__actions">
              <button
                type="button"
                className="tiffany-header__action-btn"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search"
                title="Search"
              >
                <SearchIcon />
              </button>

              <button 
                type="button" 
                className="tiffany-header__action-btn"
                onClick={() => setAppointmentModalOpen(true)}
                aria-label="Book Consultation"
                title="Book Consultation"
              >
                <span className="tiffany-header__action-text">Consult</span>
              </button>

              <button
                type="button"
                className="tiffany-header__action-btn tiffany-header__action-btn--bag"
                onClick={() => setCartDrawerOpen(true)}
                aria-label="View Shopping Bag"
                title="Shopping Bag"
              >
                <BagIcon />
                {itemCount > 0 && (
                  <span className="tiffany-header__bag-badge">{itemCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── FULL-WIDTH MEGA-MENU PANELS ─── */}
      {menuItems.map((item) =>
        item.mega ? (
          <div
            key={item.key}
            className={`tiffany-mega ${activeMega === item.key ? 'tiffany-mega--visible' : ''}`}
            onMouseEnter={() => clearTimeout(megaTimeoutRef.current)}
            onMouseLeave={handleMegaLeave}
            role="menu"
          >
            <div className="container tiffany-mega__inner">
              {/* Featured Collections Grid (Option A) */}
              {item.mega.featuredCollections && (
                <div className="tiffany-mega__featured-grid">
                  {item.mega.featuredCollections.map((collection, fc) => (
                    <Link
                      key={fc}
                      to={collection.href}
                      className="tiffany-mega__featured-card"
                      onClick={handleNavClick}
                    >
                      <div className="tiffany-mega__featured-icon">{collection.icon}</div>
                      <h4 className="tiffany-mega__featured-title">{collection.title}</h4>
                      <p className="tiffany-mega__featured-desc">{collection.description}</p>
                    </Link>
                  ))}
                </div>
              )}

              <div className="tiffany-mega__columns">
                {item.mega.columns.map((col, ci) => (
                  <div key={ci} className="tiffany-mega__column">
                    <h3 className="tiffany-mega__heading">{col.heading}</h3>
                    <ul className="tiffany-mega__links">
                      {col.links.map((link, li) => (
                        <li key={li}>
                          <Link
                            to={link.href}
                            className={`tiffany-mega__link ${link.accent ? 'tiffany-mega__link--accent' : ''}`}
                            onClick={handleNavClick}
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

              {item.mega.feature && (
                <div className={`tiffany-mega__feature tiffany-mega__feature--${item.mega.feature.accent}`}>
                  <h4 className="tiffany-mega__feature-title">{item.mega.feature.title}</h4>
                  <p className="tiffany-mega__feature-sub">{item.mega.feature.subtitle}</p>
                  <Link
                    to={item.mega.feature.cta.href}
                    className="tiffany-mega__feature-cta"
                    onClick={handleNavClick}
                  >
                    {item.mega.feature.cta.label}
                    <ArrowRight />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : null
      )}

      {/* Mega Backdrop */}
      <div
        className={`tiffany-mega-backdrop ${activeMega ? 'tiffany-mega-backdrop--visible' : ''}`}
        onClick={() => setActiveMega(null)}
      />

      {/* ─── MOBILE DRAWER NAVIGATION ─── */}
      <div className={`tiffany-mobile-drawer ${mobileMenuOpen ? 'tiffany-mobile-drawer--open' : ''}`}>
        <div className="tiffany-mobile-drawer__header">
          <AvioryLogo variant="minimal" />
          <button
            type="button"
            className="tiffany-mobile-drawer__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="tiffany-mobile-drawer__body">
          <ul className="tiffany-mobile-drawer__list">
            {menuItems.map((item) => (
              <li key={item.key} className="tiffany-mobile-drawer__item">
                <div className="tiffany-mobile-drawer__item-bar">
                  <Link
                    to={item.href}
                    className="tiffany-mobile-drawer__link"
                    onClick={() => {
                      if (!item.mega) setMobileMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <button
                      type="button"
                      className="tiffany-mobile-drawer__toggle"
                      onClick={() => setMobileAccordion(mobileAccordion === item.key ? null : item.key)}
                      aria-label="Expand submenu"
                    >
                      <ChevronDown className={mobileAccordion === item.key ? 'open' : ''} />
                    </button>
                  )}
                </div>

                {item.mega && mobileAccordion === item.key && (
                  <div className="tiffany-mobile-drawer__sub">
                    {item.mega.columns.map((col, ci) => (
                      <div key={ci} className="tiffany-mobile-sub-group">
                        <span className="tiffany-mobile-sub-heading">{col.heading}</span>
                        {col.links.map((link, li) => (
                          <Link
                            key={li}
                            to={link.href}
                            className="tiffany-mobile-sub-link"
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

        <div className="tiffany-mobile-drawer__footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={() => {
              setMobileMenuOpen(false)
              setAppointmentModalOpen(true)
            }}
          >
            {t('common.bookConsultation')}
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/contact" className="tiffany-header__utility-link" onClick={() => setMobileMenuOpen(false)}>
              {t('common.contact')}
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="tiffany-mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* ─── INTEGRATED MODALS ─── */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />
    </>
  )
}
