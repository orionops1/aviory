import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About AVIORY & CO</h4>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              Luxury gemstones and fine jewellery with Ceylon heritage. Over 50 years of expertise in exceptional sapphires, rubies, and bespoke creations.
            </p>
          </div>

          <div className="footer-section">
            <h4>Collections</h4>
            <ul>
              <li><Link to="/gemstones">Gemstones</Link></li>
              <li><Link to="/fine-jewellery">Fine Jewellery</Link></li>
              <li><Link to="/engagement-rings">Engagement Rings</Link></li>
              <li><Link to="/bespoke">Bespoke</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/our-house">Our House</Link></li>
              <li><Link to="/private-consultations">Private Consultations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
              <li>{contactInfo.address}</li>
              <li style={{ marginTop: '0.5rem' }}>{contactInfo.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AVIORY & CO. All rights reserved.</p>
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
