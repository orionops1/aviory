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
    { 
      label: t('common.gemstones'), 
      href: '/gemstones',
      submenu: [
        { label: 'Diamonds', href: '/gemstones?type=diamond' },
        { label: 'Emeralds', href: '/gemstones?type=emerald' },
        { label: 'Sapphires', href: '/gemstones?type=sapphire' },
        { label: 'Rubies', href: '/gemstones?type=ruby' },
        { label: 'Colored Stones', href: '/gemstones?type=colored' },
        { label: 'Pearls', href: '/gemstones?type=pearl' },
      ]
    },
    { 
      label: t('common.fineJewellery'), 
      href: '/fine-jewellery',
      submenu: [
        { label: 'Necklaces', href: '/fine-jewellery?type=necklaces' },
        { label: 'Bracelets', href: '/fine-jewellery?type=bracelets' },
        { label: 'Earrings', href: '/fine-jewellery?type=earrings' },
        { label: 'Rings', href: '/fine-jewellery?type=rings' },
        { label: 'Pendants', href: '/fine-jewellery?type=pendants' },
      ]
    },
    { 
      label: t('common.engagementRings'), 
      href: '/engagement-rings',
      submenu: [
        { label: 'Solitaire', href: '/engagement-rings?style=solitaire' },
        { label: 'Halo', href: '/engagement-rings?style=halo' },
        { label: 'Three Stone', href: '/engagement-rings?style=three-stone' },
        { label: 'Vintage', href: '/engagement-rings?style=vintage' },
        { label: 'Modern', href: '/engagement-rings?style=modern' },
      ]
    },
    { label: t('common.bespoke'), href: '/bespoke' },
    { label: t('common.journal'), href: '/journal' },
    { label: t('common.ourHouse'), href: '/our-house' },
    { label: t('common.contact'), href: '/contact' },
  ]

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo Section - Top */}
      <div className="header-logo-section">
        <div className="container">
          <div className="logo-container">
            <Link to="/" className="logo">
              AVIORY & CO.
            </Link>
            <div className="header-actions">
              <LanguageSwitcher />
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

      {/* Navigation Section - Bottom */}
      <nav className="header-nav">
        <div className="container">
          <ul className="nav-menu">
            {menuItems.map((item, idx) => (
              <li key={idx} className="nav-item" onMouseEnter={() => setOpenDropdown(idx)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link to={item.href} className="nav-link">
                  {item.label}
                  {item.submenu && <span className="submenu-arrow">▼</span>}
                </Link>
                {item.submenu && openDropdown === idx && (
                  <ul className="dropdown-menu">
                    {item.submenu.map((sub, sidx) => (
                      <li key={sidx}>
                        <Link to={sub.href}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          <ul className="nav-menu-mobile">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <div className="mobile-nav-item">
                  <Link to={item.href} onClick={() => !item.submenu && setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <button 
                      className="mobile-submenu-toggle"
                      onClick={() => toggleDropdown(idx)}
                    >
                      {openDropdown === idx ? '▲' : '▼'}
                    </button>
                  )}
                </div>
                {item.submenu && openDropdown === idx && (
                  <ul className="mobile-submenu">
                    {item.submenu.map((sub, sidx) => (
                      <li key={sidx}>
                        <Link to={sub.href} onClick={() => setMobileMenuOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
