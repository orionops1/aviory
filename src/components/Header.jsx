import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import './Header.css'

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" style={{ fontFamily: "var(--font-brand)" }}>
            AVIORY & CO.
          </Link>

          <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
            <ul>
              <li><Link to="/gemstones">Gemstones</Link></li>
              <li><Link to="/fine-jewellery">Fine Jewellery</Link></li>
              <li><Link to="/engagement-rings">Engagement Rings</Link></li>
              <li><Link to="/bespoke">Bespoke</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/our-house">Our House</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
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
