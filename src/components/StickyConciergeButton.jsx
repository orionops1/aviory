import React, { useState } from 'react'
import './StickyConciergeButton.css'

export default function StickyConciergeButton({ onClickContact }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="sticky-concierge">
      <button
        type="button"
        className={`sticky-concierge__btn ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        title="Contact Our Gemologist"
      >
        <span className="sticky-concierge__icon">💎</span>
        <span className="sticky-concierge__label">Concierge</span>
      </button>

      {isExpanded && (
        <div className="sticky-concierge__menu">
          <button
            type="button"
            className="sticky-concierge__menu-item"
            onClick={() => {
              onClickContact()
              setIsExpanded(false)
            }}
          >
            <span className="sticky-concierge__menu-icon">💬</span>
            <span className="sticky-concierge__menu-text">Ask Gemologist</span>
          </button>
          <button
            type="button"
            className="sticky-concierge__menu-item"
            onClick={() => {
              window.open('https://wa.me/94XXXXXXXXX', '_blank')
              setIsExpanded(false)
            }}
          >
            <span className="sticky-concierge__menu-icon">📱</span>
            <span className="sticky-concierge__menu-text">WhatsApp Video</span>
          </button>
        </div>
      )}
    </div>
  )
}
