import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './LanguageSwitcher.css'

export default function LanguageSwitcher({ variant = 'dark', expanded = false }) {
  const { language, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(expanded)
  const dropdownRef = useRef(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`language-switcher language-switcher--${variant} ${expanded ? 'expanded' : ''}`} ref={dropdownRef}>
      {!expanded && (
        <button
          type="button"
          className="language-toggle"
          onClick={() => setIsOpen(!isOpen)}
          title="Select Language"
          aria-expanded={isOpen}
        >
          <span className="language-flag">{currentLanguage?.flag}</span>
          <span className="language-code">{language.toUpperCase()}</span>
          <span className="language-chevron">▾</span>
        </button>
      )}

      {expanded ? (
        <div className="language-options-expanded">
          <div className="language-options-header">Select Language</div>
          <div className="language-options-list">
            {languages.map(lang => (
              <button
                key={lang.code}
                type="button"
                className={`language-option-expanded ${language === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code)}
                title={lang.name}
              >
                <span className="option-flag">{lang.flag}</span>
                <span className="option-name">{lang.name}</span>
                {language === lang.code && <span className="option-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      ) : (
        isOpen && (
          <div className="language-dropdown">
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
              >
                <span className="option-flag">{lang.flag}</span>
                <span className="option-name">{lang.name}</span>
                <span className="option-code">{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        )
      )}
    </div>
  )
}
