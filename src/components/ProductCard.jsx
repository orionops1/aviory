import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product, type = 'gemstone' }) {
  const getLink = () => {
    if (type === 'gemstone') return `/gemstones/${product.id}`
    if (type === 'jewellery') return `/fine-jewellery/${product.id}`
    if (type === 'ring') return `/engagement-rings/${product.id}`
    return '#'
  }

  return (
    <Link to={getLink()} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <div className="product-category">{product.category || product.collection || product.style}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">${product.price.toLocaleString()}</div>
          <div className="product-specs">
            {product.carat && <div>Weight: {product.carat} ct</div>}
            {product.material && <div>Material: {product.material}</div>}
            {product.color && <div>Color: {product.color}</div>}
            {product.origin && <div>Origin: {product.origin}</div>}
          </div>
          <button className="btn btn-outline btn-small" onClick={(e) => {
            e.preventDefault()
            // Add to cart or view details
          }}>
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}
