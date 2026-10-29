import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" style={{ fontFamily: "var(--font-brand)" }}>
            AVIORY & CO.
          </Link>

          <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
            <ul>
              <li><Link to="/gemstones">{t('common.gemstones')}</Link></li>
              <li><Link to="/fine-jewellery">{t('common.fineJewellery')}</Link></li>
              <li><Link to="/engagement-rings">{t('common.engagementRings')}</Link></li>
              <li><Link to="/bespoke">{t('common.bespoke')}</Link></li>
              <li><Link to="/journal">{t('common.journal')}</Link></li>
              <li><Link to="/our-house">{t('common.ourHouse')}</Link></li>
              <li><Link to="/contact">{t('common.contact')}</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <Link to="/contact" className="search-icon" title="Contact">
              ✉
            </Link>
            <Link to="/contact" className="cart-icon" title="Cart">
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
              🛍
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
