// SlideDots.jsx
export function SlideDots({ slides, activeIdx, onGoTo }) {
  return (
    <div id="slide-dots">
      {slides.map((s, i) => (
        <button
          key={s.id}
          className={`dot-btn ${activeIdx === i ? 'active' : ''}`}
          data-label={s.label}
          onClick={() => onGoTo(i)}
          title={s.label}
        />
      ))}
    </div>
  )
}

// ExploreBar.jsx
export function ExploreBar({ open, slides, activeIdx, onGoTo, onClose }) {
  return (
    <div id="explore-bar" className={open ? 'open' : ''}>
      <div style={{ padding: '0 18px 14px', borderBottom: '1px solid rgba(201,169,110,0.1)', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--fs)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>Explore</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text3)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
      </div>
      {slides.map((s, i) => (
        <button key={s.id} onClick={() => onGoTo(i)} style={{
          display: 'flex', alignItems: 'center', gap: 12, width: '100%',
          padding: '10px 18px', background: activeIdx === i ? 'rgba(201,169,110,0.07)' : 'none',
          border: 'none', borderLeft: activeIdx === i ? '2px solid var(--gold)' : '2px solid transparent',
          cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
        }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: activeIdx === i ? 'var(--gold)' : 'var(--text3)' }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'var(--fs)', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: activeIdx === i ? 'var(--gold)' : 'var(--text2)' }}>
            {s.label}
          </span>
        </button>
      ))}
      <div style={{ padding: '14px 18px 0', marginTop: 8, borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <button onClick={() => onGoTo(9)} className="btn-solid" style={{ width: '100%', padding: '12px', fontSize: '9px' }}>
          Inquire Now
        </button>
      </div>
    </div>
  )
}

// VideoModal.jsx
export function VideoModal({ videoId, onClose }) {
  if (!videoId) return null
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  return (
    <div id="vmodal" className="open" onClick={(e) => { if (e.target.id === 'vmodal') onClose() }}>
      <div id="vmodal-inner">
        <button id="vmodal-close" onClick={onClose}>ESC — Close</button>
        <iframe src={src} allow="autoplay; fullscreen" allowFullScreen title="Video" />
      </div>
    </div>
  )
}
