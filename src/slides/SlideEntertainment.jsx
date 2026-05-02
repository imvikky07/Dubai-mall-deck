import { useState } from 'react'
import { VIDEOS, IMAGES } from '../assets/media'

const ATTRACTIONS = [
  { emoji:'🦈', name:'Dubai Aquarium', sub:'Largest Indoor Aquarium on Earth', stats:['33K+ animals','10M litre tank','48m tunnel','2M+ visitors/yr'], col:'#1A4A5A', openVid: VIDEOS.aquarium },
  { emoji:'⛸️', name:'Dubai Ice Rink', sub:'Olympic-Size Ice in the Desert', stats:['Olympic standard','2,000 capacity','365 days open','500K skaters/yr'], col:'#1A2A4A', openVid: null },
  { emoji:'🎮', name:'VR Park Dubai', sub:'18 Immersive VR Experiences', stats:['18 worlds','10,000 sq ft','All ages','90 min avg dwell'], col:'#2A1A4A', openVid: null },
  { emoji:'🏙️', name:'KidZania Dubai', sub:'A City Built for Children', stats:['60+ professions','8K sq ft city','#1 UAE family','1M+ visitors/yr'], col:'#2A2A1A', openVid: null },
  { emoji:'💦', name:'Dubai Fountain', sub:"World's Largest Choreographed Fountain", stats:['275m length','150m height','2× daily shows','#1 UAE attraction'], col:'#1A2A3A', openVid: VIDEOS.fountain },
  { emoji:'🎬', name:'Reel Cinemas', sub:'22 Screens — IMAX & 4DX', stats:['22 screens','IMAX + 4DX','3M attendees/yr','Gold Class suites'], col:'#3A1A1A', openVid: null },
]

function Modal({ attr, onClose, openVideo }) {
  if (!attr) return null
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{
      position:'fixed',inset:0,background:'rgba(0,0,0,0.92)',zIndex:8000,
      display:'flex',alignItems:'center',justifyContent:'center',padding:20,
    }}>
      <div style={{ background:'#111',border:'1px solid rgba(201,169,110,0.2)',maxWidth:680,width:'100%',position:'relative',overflow:'hidden' }}>
        <div style={{ background:attr.col,padding:'40px 44px 32px',borderBottom:'3px solid var(--gold)' }}>
          <button onClick={onClose} style={{ position:'absolute',top:16,right:16,background:'none',border:'1px solid rgba(255,255,255,0.15)',color:'var(--text)',width:32,height:32,borderRadius:'50%',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center' }}>×</button>
          <div style={{ fontSize:40,marginBottom:14 }}>{attr.emoji}</div>
          <h3 style={{ fontFamily:'var(--ff)',fontSize:'clamp(24px,4vw,44px)',fontWeight:300,marginBottom:8 }}>{attr.name}</h3>
          <p style={{ fontFamily:'var(--ff)',fontStyle:'italic',fontSize:16,color:'rgba(255,255,255,0.7)' }}>{attr.sub}</p>
        </div>
        <div style={{ padding:'32px 44px' }}>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'rgba(201,169,110,0.1)',marginBottom:28 }}>
            {attr.stats.map((s,i) => (
              <div key={i} style={{ background:'#111',padding:'16px 12px',textAlign:'center' }}>
                <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.8vw,22px)',fontWeight:300,color:'var(--gold)' }}>{s.split(' ')[0]}</div>
                <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.18em',color:'var(--text3)',textTransform:'uppercase',marginTop:4 }}>{s.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
            {attr.openVid && <button className="btn-ghost" onClick={() => { onClose(); openVideo(attr.openVid) }}>▶ Watch Video</button>}
            <button className="btn-ghost" style={{ color:'var(--text3)' }} onClick={onClose}>Close ×</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SlideEntertainment({ isActive, goToCTA, openVideo }) {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.nightCity})`, filter:'brightness(0.25)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'rgba(6,6,6,0.55)' }} />

      <div className="slide-content" style={{ padding:'clamp(60px,8vh,90px) clamp(32px,6vw,100px)',justifyContent:'space-between' }}>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:36 }}>
          <div className="a1">
            <div className="eyebrow">Attractions & Entertainment</div>
            <div className="gold-line" />
            <h2 className="display">The World <em className="italic gold-text">Comes Here</em><br/>to Be Amazed</h2>
          </div>
          <div className="a2 hide-sm" style={{ textAlign:'right' }}>
            <p style={{ fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.18em',color:'var(--text3)',textTransform:'uppercase' }}>Click any attraction to explore</p>
          </div>
        </div>

        <div className="a3" style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--gold-dim)',flex:1 }}>
          {ATTRACTIONS.map((attr,i) => (
            <div key={i} onClick={() => setSelected(attr)} style={{
              background:'rgba(6,6,6,0.88)',padding:'clamp(20px,3vh,32px) clamp(16px,2vw,28px)',
              cursor:'pointer',transition:'background 0.3s',position:'relative',overflow:'hidden',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background=attr.col+'66'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(6,6,6,0.88)'}}
            >
              <div style={{ position:'absolute',top:12,right:16,fontFamily:'var(--ff)',fontSize:'56px',fontWeight:300,color:'rgba(201,169,110,0.05)',lineHeight:1,userSelect:'none' }}>{String(i+1).padStart(2,'0')}</div>
              <div style={{ fontSize:'clamp(24px,3vw,36px)',marginBottom:12 }}>{attr.emoji}</div>
              <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.22em',color:'var(--gold)',textTransform:'uppercase',marginBottom:8 }}>Attraction 0{i+1}</div>
              <h4 style={{ fontFamily:'var(--ff)',fontSize:'clamp(16px,1.8vw,24px)',fontWeight:300,marginBottom:8,lineHeight:1.2 }}>{attr.name}</h4>
              <p style={{ fontFamily:'var(--ff)',fontStyle:'italic',fontSize:'clamp(11px,1vw,14px)',color:'var(--text3)',marginBottom:16 }}>{attr.sub}</p>
              <div style={{ fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.15em',color:'var(--gold)',textTransform:'uppercase' }}>Explore →</div>
            </div>
          ))}
        </div>

        <div className="a4" style={{ display:'flex',gap:14,marginTop:24 }}>
          <button className="btn" onClick={goToCTA}><span>Partner with Attractions</span><span>→</span></button>
          <button className="btn-ghost" onClick={() => openVideo(VIDEOS.aquarium)}>▶ Aquarium Tour</button>
        </div>
      </div>

      <Modal attr={selected} onClose={() => setSelected(null)} openVideo={openVideo} />

      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>06 / 10</div>
    </>
  )
}
