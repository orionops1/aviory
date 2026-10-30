import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedBlock.css'

export default function FeaturedBlock({
  image,
  title,
  description,
  ctaLabel = "EXPLORE",
  ctaHref = "/engagement-rings",
  alignment = "left" // 'left' or 'right'
}) {
  return (
    <section className={`featured-block featured-block--${alignment}`}>
      <div className="featured-block__image" style={{ backgroundImage: `url(${image})` }}>
        <div className="featured-block__overlay" />
      </div>
      
      <div className="featured-block__content">
        <div className="container">
          <div className="featured-block__text">
            <h2 className="featured-block__title">{title}</h2>
            <p className="featured-block__description">{description}</p>
            <Link to={ctaHref} className="btn btn-primary">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
