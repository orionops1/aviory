import React from 'react'
import { Link } from 'react-router-dom'
import AvioryLogo from './AvioryLogo'
import { contactInfo } from '../data/content'
import { footerLinks } from '../data/navigation'
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
                {footerLinks.collections.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div className="footer-section">
              <h4>{t('footer.service') || 'Service'}</h4>
              <ul>
                {footerLinks.service.map((link, idx) => (
                  <li key={idx}>
                    {link.isExternal ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Concierge & Contact */}
            <div className="footer-section">
              <h4>{t('footer.concierge') || 'Concierge'}</h4>
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
                <li>
                  <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                    WhatsApp: {contactInfo.whatsapp}
                  </a>
                </li>
                <li>{contactInfo.address}, {contactInfo.city}, {contactInfo.country}</li>
                <li className="contact-hours">{contactInfo.hours}</li>
                <li className="contact-hours">{contactInfo.weekends}</li>
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
              {footerLinks.company.map((link, idx) => (
                <Link key={idx} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
