/* ============================================================================
   CURRENCY CONVERTER UTILITY
   Manages conversion rates and formatting
   ============================================================================ */

// Base currency is USD
// Exchange rates (1 USD = X in target currency)
const EXCHANGE_RATES = {
  USD: 1,
  LKR: 327.50,  // Sri Lankan Rupee (approximate current rate)
  EUR: 0.92     // Euro
}

const CURRENCY_SYMBOLS = {
  USD: '$',
  LKR: '₨',
  EUR: '€'
}

const CURRENCY_NAMES = {
  USD: 'US Dollar',
  LKR: 'Sri Lankan Rupee',
  EUR: 'Euro'
}

/**
 * Convert a price from USD to target currency
 * @param {number} priceUSD - Price in USD
 * @param {string} targetCurrency - Target currency code (USD, LKR, EUR)
 * @returns {number} - Converted price
 */
export const convertPrice = (priceUSD, targetCurrency = 'USD') => {
  const rate = EXCHANGE_RATES[targetCurrency] || 1
  return priceUSD * rate
}

/**
 * Format price with currency symbol and proper decimal places
 * @param {number} priceUSD - Price in USD
 * @param {string} currency - Currency code (USD, LKR, EUR)
 * @returns {string} - Formatted price string
 */
export const formatPrice = (priceUSD, currency = 'USD') => {
  const convertedPrice = convertPrice(priceUSD, currency)
  const symbol = CURRENCY_SYMBOLS[currency] || '$'

  // LKR typically doesn't use decimals, others use 2
  const decimals = currency === 'LKR' ? 0 : 2

  // Format the number with proper locale
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(convertedPrice)

  // Place symbol appropriately
  if (currency === 'EUR') {
    return `${formatted} ${symbol}`
  } else {
    return `${symbol}${formatted}`
  }
}

/**
 * Get exchange rate for a currency
 * @param {string} currency - Currency code
 * @returns {number} - Exchange rate
 */
export const getExchangeRate = (currency) => {
  return EXCHANGE_RATES[currency] || 1
}

/**
 * Get all available currencies with metadata
 * @returns {Array} - Array of currency objects
 */
export const getCurrencies = () => {
  return Object.keys(EXCHANGE_RATES).map(code => ({
    code,
    symbol: CURRENCY_SYMBOLS[code],
    name: CURRENCY_NAMES[code],
    rate: EXCHANGE_RATES[code]
  }))
}

export default {
  convertPrice,
  formatPrice,
  getExchangeRate,
  getCurrencies,
  EXCHANGE_RATES,
  CURRENCY_SYMBOLS,
  CURRENCY_NAMES
}
