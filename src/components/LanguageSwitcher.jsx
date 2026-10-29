import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLanguage = languages.find(lang => lang.code === language)

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
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Select Language"
      >
        <span className="language-flag">{currentLanguage?.flag}</span>
        <span className="language-code">{language.toUpperCase()}</span>
        <span className="language-chevron">▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => {
                changeLanguage(lang.code)
                setIsOpen(false)
              }}
              title={lang.name}
            >
              <span className="option-flag">{lang.flag}</span>
              <span className="option-name">{lang.name}</span>
              <span className="option-code">({lang.code.toUpperCase()})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
