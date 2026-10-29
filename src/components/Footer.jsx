import React from 'react'
import { Link } from 'react-router-dom'
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
              <h3 className="footer-logo">AVIORY & CO.</h3>
              <p className="footer-tagline">
                Luxury gemstones and fine jewellery crafted with precision and passion since 2009.
              </p>
              <div className="social-links">
                <a href="#" title="Instagram" className="social-icon">Instagram</a>
                <a href="#" title="Facebook" className="social-icon">Facebook</a>
                <a href="#" title="Pinterest" className="social-icon">Pinterest</a>
              </div>
            </div>

            {/* Collections */}
            <div className="footer-section">
              <h4>{t('footer.collections')}</h4>
              <ul>
                <li><Link to="/gemstones">{t('common.gemstones')}</Link></li>
                <li><Link to="/fine-jewellery">{t('common.fineJewellery')}</Link></li>
                <li><Link to="/engagement-rings">{t('common.engagementRings')}</Link></li>
                <li><Link to="/bespoke">{t('common.bespoke')}</Link></li>
              </ul>
            </div>

            {/* Experience */}
            <div className="footer-section">
              <h4>Experience</h4>
              <ul>
                <li><Link to="/journal">{t('common.journal')}</Link></li>
                <li><Link to="/our-house">{t('common.ourHouse')}</Link></li>
                <li><Link to="/private-consultations">Private Consultations</Link></li>
                <li><Link to="/contact">Book an Appointment</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </li>
                <li>{contactInfo.address}</li>
                <li className="contact-hours">{contactInfo.hours}</li>
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
              <p>{t('footer.rights')}</p>
            </div>
            <div className="footer-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Shipping Info</Link>
              <Link to="#">Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
