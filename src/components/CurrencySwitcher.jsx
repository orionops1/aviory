import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './CurrencySwitcher.css'

export default function CurrencySwitcher({ variant = 'dark' }) {
  const { currency, changeCurrency, currencies } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentCurrency = currencies.find(curr => curr.code === currency) || currencies[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <div className={`currency-switcher currency-switcher--${variant}`} ref={dropdownRef}>
      <button
        type="button"
        className="currency-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        title="Select Currency"
        aria-expanded={isOpen}
      >
        <span className="currency-symbol">{currentCurrency?.symbol}</span>
        <span className="currency-code">{currency}</span>
        <span className="currency-chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
      </button>

      {isOpen && (
        <div className="currency-dropdown" role="menu">
          <div className="currency-dropdown__header">Select Currency</div>
          {currencies.map(curr => (
            <button
              key={curr.code}
              type="button"
              className={`currency-option ${currency === curr.code ? 'active' : ''}`}
              onClick={() => {
                changeCurrency(curr.code)
                setIsOpen(false)
              }}
              title={curr.name}
              role="menuitem"
            >
              <span className="option-symbol">{curr.symbol}</span>
              <span className="option-name">{curr.name}</span>
              <span className="option-code">{curr.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
