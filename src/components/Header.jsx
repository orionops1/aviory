import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import { useLanguage } from '../hooks/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const itemCount = useCartStore((state) => state.getItemCount())
  const { t } = useLanguage()

  const menuItems = [
    { label: t('common.gemstones'), href: '/gemstones' },
    { label: t('common.fineJewellery'), href: '/fine-jewellery' },
    { label: t('common.engagementRings'), href: '/engagement-rings' },
    { label: t('common.bespoke'), href: '/bespoke' },
    { label: t('common.journal'), href: '/journal' },
    { label: t('common.ourHouse'), href: '/our-house' },
    { label: t('common.contact'), href: '/contact' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="header-utility">
        <div className="container">
          <div className="utility-content">
            <Link to="/our-house" className="location-link">
              🏪 Find a Store
            </Link>
            <div className="utility-actions">
              <LanguageSwitcher />
              <Link to="/contact" className="utility-link">
                Contact
              </Link>
              <Link to="#account" className="utility-link">
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              AVIORY & CO.
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <ul className="nav-menu">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <Link to="/contact" className="action-icon search-icon" title="Search">
                🔍
              </Link>
              <Link to="/contact" className="action-icon cart-icon" title="Shopping Bag">
                {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
                🛍
              </Link>
              <button
                className="menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          <ul className="nav-menu-mobile">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
