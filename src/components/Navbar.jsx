import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Retail',      idx: 2 },
  { label: 'Luxury',      idx: 3 },
  { label: 'Dining',      idx: 4 },
  { label: 'Attractions', idx: 5 },
  { label: 'Events',      idx: 6 },
  { label: 'Venues',      idx: 7 },
  { label: 'Partner',     idx: 8 },
]

export default function Navbar({ activeIdx, goToSlide, onExplore }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const deck = document.getElementById('deck')
    if (!deck) return
    const onScroll = () => setScrolled(deck.scrollTop > 60)
    deck.addEventListener('scroll', onScroll)
    return () => deck.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="nav" className={scrolled ? 'solid' : ''}>
        <button onClick={() => goToSlide(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--ff)', fontSize: 'clamp(16px,1.4vw,22px)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1 }}>
            The Dubai Mall
          </div>
          <div style={{ fontFamily: 'var(--fs)', fontSize: '8px', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: 2 }}>
            World's Premier Destination
          </div>
        </button>

        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.2vw,32px)' }}>
          {NAV_ITEMS.map(item => (
            <button key={item.idx} onClick={() => goToSlide(item.idx)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--fs)', fontSize: 'clamp(8px,0.62vw,10px)', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: activeIdx === item.idx ? 'var(--gold)' : 'var(--text2)',
              transition: 'color 0.3s', padding: '4px 0', position: 'relative',
            }}>
              {item.label}
              {activeIdx === item.idx && (
                <div style={{ position: 'absolute', bottom: -3, left: 0, right: 0, height: 1, background: 'var(--gold)' }} />
              )}
            </button>
          ))}
          <button onClick={() => goToSlide(9)} className="btn-solid" style={{ padding: '10px 20px', fontSize: '9px' }}>
            Inquire Now
          </button>
          <button onClick={onExplore} style={{
            background: 'none', border: '1px solid var(--gold-dim)', color: 'var(--text2)',
            fontFamily: 'var(--fs)', fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '9px 14px', cursor: 'pointer', transition: 'all 0.3s',
          }}>◎ Explore</button>
        </div>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(v => !v)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 4,
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 22, height: 1, background: 'var(--gold)', transition: 'all 0.3s',
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(4px,4px)' : i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none') : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(6,6,6,0.98)',
          zIndex: 490, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 28,
        }}>
          {NAV_ITEMS.map(item => (
            <button key={item.idx} onClick={() => { goToSlide(item.idx); setMenuOpen(false) }} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--ff)', fontSize: 'clamp(28px,6vw,48px)',
              fontWeight: 300, color: 'var(--text)',
            }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => { goToSlide(9); setMenuOpen(false) }} className="btn-solid" style={{ marginTop: 8 }}>
            Inquire Now
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
