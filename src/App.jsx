import { useEffect, useRef, useState } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import SlideDots from './components/SlideDots'
import ExploreBar from './components/ExploreBar'
import VideoModal from './components/VideoModal'
import SlideHero from './slides/SlideHero'
import SlideStats from './slides/SlideStats'
import SlideRetail from './slides/SlideRetail'
import SlideLuxury from './slides/SlideLuxury'
import SlideDining from './slides/SlideDining'
import SlideEntertainment from './slides/SlideEntertainment'
import SlideEvents from './slides/SlideEvents'
import SlideVenues from './slides/SlideVenues'
import SlideSponsorship from './slides/SlideSponsorship'
import SlideCTA from './slides/SlideCTA'

export const SLIDES = [
  { id: 'hero',          label: 'Overview',    Component: SlideHero },
  { id: 'stats',         label: 'Scale',       Component: SlideStats },
  { id: 'retail',        label: 'Retail',      Component: SlideRetail },
  { id: 'luxury',        label: 'Luxury',      Component: SlideLuxury },
  { id: 'dining',        label: 'Dining',      Component: SlideDining },
  { id: 'entertainment', label: 'Attractions', Component: SlideEntertainment },
  { id: 'events',        label: 'Events',      Component: SlideEvents },
  { id: 'venues',        label: 'Venues',      Component: SlideVenues },
  { id: 'sponsorship',   label: 'Partner',     Component: SlideSponsorship },
  { id: 'cta',           label: 'Connect',     Component: SlideCTA },
]

export default function App() {
  const deckRef = useRef(null)
  const slideRefs = useRef([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [videoModal, setVideoModal] = useState(null)

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = slideRefs.current.indexOf(entry.target)
            if (idx !== -1) setActiveIdx(idx)
          }
        })
      },
      { root: deck, threshold: 0.5 }
    )
    slideRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      el.classList.toggle('active', i === activeIdx)
      el.classList.toggle('anim-ready', i === activeIdx)
    })
  }, [activeIdx])

  useEffect(() => {
    const onKey = (e) => {
      if (videoModal) { if (e.key === 'Escape') setVideoModal(null); return }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goToSlide(Math.min(activeIdx + 1, SLIDES.length - 1))
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goToSlide(Math.max(activeIdx - 1, 0))
      if (e.key === 'Escape') setExploreOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIdx, videoModal])

  const goToSlide = (idx) => {
    slideRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="grain" />
      <Navbar activeIdx={activeIdx} goToSlide={goToSlide} onExplore={() => setExploreOpen(v => !v)} />
      <SlideDots slides={SLIDES} activeIdx={activeIdx} goToSlide={goToSlide} />
      <ExploreBar open={exploreOpen} slides={SLIDES} activeIdx={activeIdx}
        goToSlide={(i) => { goToSlide(i); setExploreOpen(false) }}
        onClose={() => setExploreOpen(false)}
        goToCTA={() => { goToSlide(SLIDES.length - 1); setExploreOpen(false) }} />
      <VideoModal videoId={videoModal} onClose={() => setVideoModal(null)} />
      <div id="deck" ref={deckRef}>
        {SLIDES.map(({ id, Component }, i) => (
          <div key={id} id={id} className="slide" ref={el => slideRefs.current[i] = el}>
            <Component
              isActive={activeIdx === i}
              goToSlide={goToSlide}
              slideIndex={i}
              openVideo={setVideoModal}
              goToCTA={() => goToSlide(SLIDES.length - 1)}
              goToNext={() => goToSlide(i + 1)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
