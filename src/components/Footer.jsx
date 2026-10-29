import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/content'
import { useLanguage } from '../hooks/useLanguage'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t('footer.about')}</h4>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              {t('footer.aboutDesc')}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t('footer.collections')}</h4>
            <ul>
              <li><Link to="/gemstones">{t('common.gemstones')}</Link></li>
              <li><Link to="/fine-jewellery">{t('common.fineJewellery')}</Link></li>
              <li><Link to="/engagement-rings">{t('common.engagementRings')}</Link></li>
              <li><Link to="/bespoke">{t('common.bespoke')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li><Link to="/journal">{t('common.journal')}</Link></li>
              <li><Link to="/our-house">{t('common.ourHouse')}</Link></li>
              <li><Link to="/private-consultations">{t('footer.privateConsultations')}</Link></li>
              <li><Link to="/contact">{t('common.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
              <li>{contactInfo.address}</li>
              <li style={{ marginTop: '0.5rem' }}>{contactInfo.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.rights')}</p>
          <div className="social-links">
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Pinterest">📌</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
