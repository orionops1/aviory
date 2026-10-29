import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../hooks/useCart'
import './CartDrawer.css'

export default function CartDrawer({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const getTotal = useCartStore((state) => state.getTotal ? state.getTotal() : 0)
  const itemCount = useCartStore((state) => state.getItemCount())

  const calculatedTotal = items.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0
    return sum + (price * (item.quantity || 1))
  }, 0)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={onClose} />

      {/* Drawer */}
      <aside className="cart-drawer" role="dialog" aria-label="Shopping Bag">
        {/* Drawer Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title-wrap">
            <h2 className="cart-drawer__title">Shopping Bag</h2>
            <span className="cart-drawer__count">({itemCount} {itemCount === 1 ? 'creation' : 'creations'})</span>
          </div>
          <button 
            type="button" 
            className="cart-drawer__close" 
            onClick={onClose}
            aria-label="Close bag"
          >
            ✕
          </button>
        </div>

        {/* Complimentary Shipping Banner */}
        <div className="cart-drawer__shipping-bar">
          <span>Complimentary Armoured Delivery &amp; Insurance Included</span>
        </div>

        {/* Items List */}
        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <span className="cart-drawer__empty-icon">◆</span>
              <h3>Your bag is currently empty</h3>
              <p>Explore our vault of unheated Ceylon sapphires and bespoke fine jewellery.</p>
              <Link to="/gemstones" className="btn btn-primary" onClick={onClose}>
                Explore Creations
              </Link>
            </div>
          ) : (
            <ul className="cart-drawer__list">
              {items.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className="cart-drawer__item">
                  <div className="cart-drawer__item-thumb">
                    {item.image ? (
                      <img src={item.image} alt={item.name} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    ) : null}
                    <div className="cart-drawer__item-gem-ph">
                      <span>💎</span>
                    </div>
                  </div>

                  <div className="cart-drawer__item-details">
                    <span className="cart-drawer__item-cat">{item.category || item.collection || 'High Jewellery'}</span>
                    <h4 className="cart-drawer__item-name">{item.name}</h4>
                    {item.selectedSize && (
                      <span className="cart-drawer__item-meta">Size: US {item.selectedSize}</span>
                    )}
                    {item.selectedMetal && (
                      <span className="cart-drawer__item-meta">Metal: {item.selectedMetal}</span>
                    )}
                    <div className="cart-drawer__item-price">
                      {typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : item.price}
                    </div>

                    <button
                      type="button"
                      className="cart-drawer__item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Estimated Total</span>
              <strong>${calculatedTotal.toLocaleString()}</strong>
            </div>

            <p className="cart-drawer__subtotal-note">
              Taxes and duties calculated upon destination confirmation.
            </p>

            <div className="cart-drawer__actions">
              <Link 
                to="/contact" 
                className="btn btn-primary cart-drawer__checkout-btn"
                onClick={onClose}
              >
                Proceed to Private Checkout
              </Link>
              <button 
                type="button" 
                className="btn btn-outline cart-drawer__continue-btn"
                onClick={onClose}
              >
                Continue Browsing
              </button>
            </div>

            <div className="cart-drawer__trust-badges">
              <span>✦ GIA Certified</span>
              <span>✦ Armoured Courier</span>
              <span>✦ 30-Day Returns</span>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
