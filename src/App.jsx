import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppConcierge from './components/WhatsAppConcierge'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Gemstones from './pages/Gemstones'
import GemstoneDetail from './pages/GemstoneDetail'
import FineJewellery from './pages/FineJewellery'
import JewelleryDetail from './pages/JewelleryDetail'
import EngagementRings from './pages/EngagementRings'
import EngagementRingDetail from './pages/EngagementRingDetail'
import Bespoke from './pages/Bespoke'
import BespokeProcess from './pages/BespokeProcess'
import BespokeEnquiry from './pages/BespokeEnquiry'
import Journal from './pages/Journal'
import JournalArticle from './pages/JournalArticle'
import OurHouse from './pages/OurHouse'
import PrivateConsultations from './pages/PrivateConsultations'
import Contact from './pages/Contact'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Measure header height and expose as CSS variable for mega-menu positioning */
  const updateHeaderHeight = useCallback(() => {
    const header = document.querySelector('.tiffany-header, .header')
    if (header) {
      const height = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }
  }, [])

  useEffect(() => {
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    document.fonts?.ready?.then(updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [updateHeaderHeight])

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
          <Header scrolled={scrolled} />
          <main style={{ flex: 1 }}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Gemstones */}
              <Route path="/gemstones" element={<Gemstones />} />
              <Route path="/gemstones/:id" element={<GemstoneDetail />} />

              {/* Fine Jewellery */}
              <Route path="/fine-jewellery" element={<FineJewellery />} />
              <Route path="/fine-jewellery/:id" element={<JewelleryDetail />} />

              {/* Engagement Rings */}
              <Route path="/engagement-rings" element={<EngagementRings />} />
              <Route path="/engagement-rings/:id" element={<EngagementRingDetail />} />

              {/* Bespoke */}
              <Route path="/bespoke" element={<Bespoke />} />
              <Route path="/bespoke/process" element={<BespokeProcess />} />
              <Route path="/bespoke/enquiry" element={<BespokeEnquiry />} />

              {/* Journal */}
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalArticle />} />

              {/* Other Pages */}
              <Route path="/our-house" element={<OurHouse />} />
              <Route path="/private-consultations" element={<PrivateConsultations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />

          {/* Floating Haute Joaillerie Concierge */}
          <WhatsAppConcierge />
        </div>
      </Router>
    </LanguageProvider>
  )
}
