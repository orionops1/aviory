import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroVideo.css'

export default function HeroVideo({
  video,
  poster,
  title = "AVIORY & CO.",
  subtitle = "Exceptional Gemstones & Fine Jewellery",
  cta = { label: "Explore The House", href: "/gemstones" }
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true
      videoRef.current.muted = true
      videoRef.current.autoplay = true
      videoRef.current.playsInline = true
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser policies
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

      {/* LUXURY VIGNETTE OVERLAY */}
      <div className="hero-video__overlay" />

      {/* CONTENT WITH BLACKGOLD LOGO */}
      <div className="hero-video__content">
        <div className="container">
          <div className="hero-video__text">
            <h1 className="hero-video__title" aria-label="AVIORY & CO.">
              <span className="hero-video__logo-text">AVIORY</span>
              <span className="hero-video__logo-amp">&amp;</span>
              <span className="hero-video__logo-co">CO.</span>
            </h1>
            
            <p className="hero-video__subtitle">{subtitle}</p>
            
            {cta && (
              <div className="hero-video__cta">
                <Link to={cta.href} className="btn btn-primary">
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
