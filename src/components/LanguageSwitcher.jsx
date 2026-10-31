import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './LanguageSwitcher.css'

export default function LanguageSwitcher({ variant = 'dark' }) {
  const { language, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

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
    <div className={`language-switcher language-switcher--${variant}`} ref={dropdownRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        title="Select Language"
        aria-expanded={isOpen}
      >
        <span className="language-flag">{currentLanguage?.flag}</span>
        <span className="language-code">{language.toUpperCase()}</span>
        <span className="language-chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
      </button>

      {isOpen && (
        <div className="language-dropdown" role="menu">
          <div className="language-dropdown__header">Select Language</div>
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => {
                changeLanguage(lang.code)
                setIsOpen(false)
              }}
              title={lang.name}
              role="menuitem"
            >
              <span className="option-flag">{lang.flag}</span>
              <span className="option-name">{lang.name}</span>
              <span className="option-code">{lang.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
