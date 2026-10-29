import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video,
  poster,
  title = "AVIORY & CO.",
  subtitle = "Exceptional Ceylon Gemstones",
  cta = { label: "Discover Gemstones", href: "/gemstones" }
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.muted = true
      videoRef.current.autoplay = true
      videoRef.current.playsInline = true
      videoRef.current.play().catch(() => {
        // Autoplay blocked by browser
      })
    }
  }, [])

  return (
    <section className="hero-video" aria-label="Hero Showcase">
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        className="hero-video__video"
        poster={poster}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={video} type="video/mp4" />
        <img src={poster} alt="Hero" className="hero-video__fallback-img" />
      </video>

      {/* FALLBACK IMAGE */}
      <div 
        className="hero-video__fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* OVERLAY */}
      <div className="hero-video__overlay" />

      {/* CONTENT */}
      <div className="hero-video__content">
        <div className="container">
          <div className="hero-video__text">
            <h1 className="hero-video__title">{title}</h1>
            <p className="hero-video__subtitle">{subtitle}</p>
            
            <div className="hero-video__cta">
              {cta && (
                <Link to={cta.href} className="btn btn-primary">
                  {cta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
