export default function ExploreBar({ open, slides, activeIdx, goToSlide, onClose, goToCTA }) {
  return (
    <div id="explore-bar" className={open ? 'open' : ''}>
      <div style={{
        padding: '0 18px 14px', borderBottom: '1px solid var(--gold-dim)',
        marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'var(--fs)', fontSize: '8px', letterSpacing: '0.32em', color: 'var(--gold)', textTransform: 'uppercase' }}>
          Explore
        </span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text3)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>
          ×
        </button>
      </div>

      {slides.map((s, i) => (
        <button
          key={s.id}
          onClick={() => goToSlide(i)}
          style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            padding: '9px 18px', background: 'none', border: 'none',
            borderLeft: activeIdx === i ? '2px solid var(--gold)' : '2px solid transparent',
            backgroundColor: activeIdx === i ? 'rgba(201,169,110,0.07)' : 'transparent',
            cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
          }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: 10, color: activeIdx === i ? 'var(--gold)' : 'var(--text3)', flexShrink: 0 }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'var(--fs)', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: activeIdx === i ? 'var(--gold)' : 'var(--text2)' }}>
            {s.label}
          </span>
        </button>
      ))}

      <div style={{ padding: '14px 18px 0', marginTop: 8, borderTop: '1px solid var(--gold-dim)' }}>
        <button onClick={goToCTA} className="btn-solid" style={{ width: '100%', padding: '12px', fontSize: '9px', textAlign: 'center' }}>
          Inquire Now
        </button>
      </div>
    </div>
  )
}
