import React from 'react'
import { Link } from 'react-router-dom'
import AvioryLogo from './AvioryLogo'
import { contactInfo } from '../data/content'
import { useLanguage } from '../hooks/useLanguage'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <AvioryLogo variant="footer" />
              </Link>
              <p className="footer-tagline">
                Maison de Haute Joaillerie specializing in unheated Ceylon sapphires, natural rubies, and bespoke commissions since 2009.
              </p>
              <div className="social-links">
                <a href="#instagram" title="Instagram" className="social-icon">IG</a>
                <a href="#facebook" title="Facebook" className="social-icon">FB</a>
                <a href="#pinterest" title="Pinterest" className="social-icon">PI</a>
                <a href="#youtube" title="YouTube" className="social-icon">YT</a>
              </div>
            </div>

            {/* Collections */}
            <div className="footer-section">
              <h4>{t('footer.collections')}</h4>
              <ul>
                <li><Link to="/gemstones">Royal Ceylon Sapphires</Link></li>
                <li><Link to="/gemstones?category=padparadscha">Padparadscha &amp; Spinels</Link></li>
                <li><Link to="/fine-jewellery">Haute Joaillerie Suites</Link></li>
                <li><Link to="/engagement-rings">AVIORY Love Collection</Link></li>
                <li><Link to="/gemstones?category=collector">Collector Vault Pieces</Link></li>
              </ul>
            </div>

            {/* The Maison */}
            <div className="footer-section">
              <h4>The Maison</h4>
              <ul>
                <li><Link to="/our-house">Heritage &amp; Artisans</Link></li>
                <li><Link to="/bespoke/process">The 5-Stage Bespoke Journey</Link></li>
                <li><Link to="/journal">The Aviory Journal</Link></li>
                <li><Link to="/journal/sustainable-luxury-and-ethical-sourcing">Mine-to-Market Provenance</Link></li>
                <li><Link to="/private-consultations">Private Atelier Showing</Link></li>
              </ul>
            </div>

            {/* Concierge & Contact */}
            <div className="footer-section">
              <h4>Concierge</h4>
              <ul className="footer-contact">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    concierge@aviory.com
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    +94 11 234 5678
                  </a>
                </li>
                <li>Atelier: Colombo 03, Sri Lanka</li>
                <li className="contact-hours">Private showings by appointment only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} AVIORY &amp; CO. All Rights Reserved. GIA&reg; is a registered trademark of Gemological Institute of America.</p>
            </div>
            <div className="footer-links">
              <Link to="/contact">Privacy Policy</Link>
              <Link to="/contact">Terms of Guarantee</Link>
              <Link to="/contact">Armoured Courier Details</Link>
              <Link to="/contact">Gemological Certification</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
