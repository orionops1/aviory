import React from 'react'
import './AvioryLogo.css'

export default function AvioryLogo({ variant = 'standard', className = '' }) {
  return (
    <div className={`aviory-logo aviory-logo--${variant} ${className}`}>
      {/* Precision Haute Joaillerie Wordmark */}
      <div className="aviory-logo__wordmark">
        <span className="aviory-logo__name">AVIORY</span>
        <span className="aviory-logo__ampersand">&amp;</span>
        <span className="aviory-logo__co">CO.</span>
      </div>
      
      {/* Heritage Hallmark Subtitle */}
      {variant !== 'minimal' && (
        <span className="aviory-logo__hallmark">
          CEYLON &bull; HIGH JEWELLERY &bull; EST. 2009
        </span>
      )}
    </div>
  )
}
