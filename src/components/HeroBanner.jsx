import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroBanner.css'

export default function HeroBanner({
  title = "AVIORY & CO.",
  subtitle = "High Jewellery & Exceptional Ceylon Gemstones",
  tagline = "THE BLUE COLLECTION",
  ctaPrimary = { label: "Explore Gemstones", href: "/gemstones" },
  ctaSecondary = { label: "Book a Consultation", href: "/private-consultations" },
  // High-res luxury video loop (gemstone / jewellery facets)
  videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-sparkling-diamond-ring-under-spotlight-41875-large.mp4",
  fallbackImage = "/images/hero-banner.jpg"
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Autoplay may be restricted by browser until user gesture
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="tiffany-hero" aria-label="Hero Showcase">
      {/* Background Media Container */}
      <div className="tiffany-hero__media">
        {!videoError && videoSrc && (
          <video
            ref={videoRef}
            className={`tiffany-hero__video ${videoLoaded ? 'tiffany-hero__video--loaded' : ''}`}
            src={videoSrc}
            poster={fallbackImage}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          />
        )}

        {/* Fallback image background / overlay */}
        <div 
          className="tiffany-hero__poster"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />

        {/* Cinematic Vignette Overlays for deep luxury contrast */}
        <div className="tiffany-hero__scrim" />
        <div className="tiffany-hero__gradient-bottom" />
      </div>

      {/* Hero Typography & Content */}
      <div className="tiffany-hero__content container">
        <div className="tiffany-hero__text-block">
          {tagline && <span className="tiffany-hero__tagline">{tagline}</span>}
          <h1 className="tiffany-hero__title">{title}</h1>
          <p className="tiffany-hero__subtitle">{subtitle}</p>

          <div className="tiffany-hero__cta-group">
            {ctaPrimary && (
              <Link to={ctaPrimary.href} className="tiffany-hero__btn tiffany-hero__btn--primary">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.href} className="tiffany-hero__btn tiffany-hero__btn--secondary">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Video & Media Controls (Tiffany style bottom right) */}
      {!videoError && videoSrc && (
        <div className="tiffany-hero__controls">
          <button
            type="button"
            className="tiffany-hero__ctrl-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            title={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="tiffany-hero__ctrl-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Subtle Scroll Indicator */}
      <div className="tiffany-hero__scroll-indicator">
        <span className="tiffany-hero__scroll-line" />
      </div>
    </section>
  )
}
