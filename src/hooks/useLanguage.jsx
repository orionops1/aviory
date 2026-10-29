import { createContext, useContext, useState, useEffect } from 'react'
import en from '../i18n/en.json'
import de from '../i18n/de.json'
import fr from '../i18n/fr.json'
import it from '../i18n/it.json'
import es from '../i18n/es.json'

const LanguageContext = createContext()

const translations = {
  en,
  de,
  fr,
  it,
  es
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'LKR', symbol: '₨', name: 'Sri Lankan Rupee' },
  { code: 'EUR', symbol: '€', name: 'Euro' }
]

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-language')
      return stored && translations[stored] ? stored : 'en'
    }
    return 'en'
  })

  const [currency, setCurrency] = useState(() => {
    // Get currency from localStorage or default to 'USD'
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-currency')
      return stored && currencies.find(c => c.code === stored) ? stored : 'USD'
    }
    return 'USD'
  })

  useEffect(() => {
    // Save language to localStorage whenever it changes
    localStorage.setItem('preferred-language', language)
  }, [language])

  useEffect(() => {
    // Save currency to localStorage whenever it changes
    localStorage.setItem('preferred-currency', currency)
  }, [currency])

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    }
  }

  const changeCurrency = (newCurrency) => {
    if (currencies.find(c => c.code === newCurrency)) {
      setCurrency(newCurrency)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return the key if not found
          }
        }
      }
    }

    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages, currency, changeCurrency, currencies }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export default useLanguage
