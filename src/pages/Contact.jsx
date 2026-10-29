import React, { useState } from 'react'
import { contactInfo } from '../data/content'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: '#D4AF7F' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', marginTop: 'var(--spacing-md)', opacity: 0.9 }}>
            We're here to help. Reach out with any questions or to schedule a consultation.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
          alignItems: 'start'
        }}>
          {/* CONTACT INFO */}
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>Get in Touch</h2>

            <div style={{
              backgroundColor: '#F8F4EF',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Address</h4>
              <p style={{ color: '#2B2B2B', lineHeight: 1.8 }}>
                {contactInfo.address}
              </p>
            </div>

            <div style={{
              backgroundColor: '#F8F4EF',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Phone</h4>
              <p style={{ color: '#2B2B2B' }}>
                <a href={`tel:${contactInfo.phone}`} style={{ color: '#D4AF7F', textDecoration: 'none' }}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            <div style={{
              backgroundColor: '#F8F4EF',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Email</h4>
              <p style={{ color: '#2B2B2B' }}>
                <a href={`mailto:${contactInfo.email}`} style={{ color: '#D4AF7F', textDecoration: 'none' }}>
                  {contactInfo.email}
                </a>
              </p>
            </div>

            <div style={{
              backgroundColor: '#F8F4EF',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid #D0CCBE'
            }}>
              <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Hours</h4>
              <p style={{ color: '#2B2B2B', marginBottom: 'var(--spacing-sm)' }}>
                {contactInfo.hours}
              </p>
              <p style={{ color: '#2B2B2B' }}>
                {contactInfo.weekends}
              </p>
            </div>

            <div style={{
              backgroundColor: '#111111',
              color: '#F8F4EF',
              padding: 'var(--spacing-lg)',
              border: '1px solid #D4AF7F',
              marginTop: 'var(--spacing-xl)'
            }}>
              <h4 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)' }}>Response Time</h4>
              <p>We aim to respond to all inquiries within 24 hours during business hours.</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Send us a Message</h2>

            {submitted && (
              <div className="alert alert-success" style={{ marginBottom: 'var(--spacing-lg)' }}>
                Thank you for your message! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="bespoke">Bespoke Enquiry</option>
                  <option value="gemologist">Gemologist Concierge Consultation</option>
                  <option value="consultation">Schedule Consultation</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FREQUENTLY CONTACTED */}
      <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Common Reasons to Contact Us</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {[
              { icon: '💍', title: 'Bespoke Enquiry', desc: 'Start your custom jewelry creation journey' },
              { icon: '👨‍🔬', title: 'Gemologist Concierge', desc: 'Expert consultation on gemstone selection' },
              { icon: '💎', title: 'Gemstone Questions', desc: 'Learn more about our collection' },
              { icon: '🗓', title: 'Schedule Consultation', desc: 'Book a virtual or in-person meeting' },
              { icon: '🔧', title: 'Jewelry Care', desc: 'Get advice on caring for your pieces' },
              { icon: '❓', title: 'General Questions', desc: 'Any other questions about AVIORY & CO' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#FFFFFF',
                padding: 'var(--spacing-lg)',
                border: '1px solid #D0CCBE',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                  {item.icon}
                </div>
                <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{item.title}</h4>
                <p style={{ color: '#2B2B2B', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>Visit Our Atelier</h2>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#D0CCBE',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <p style={{ color: '#2B2B2B', fontSize: '1.1rem' }}>Map Coming Soon</p>
        </div>
        <p style={{ textAlign: 'center', color: '#2B2B2B' }}>
          Located in the heart of Colombo, Sri Lanka. Contact us to arrange a visit.
        </p>
      </section>
    </>
  )
}
