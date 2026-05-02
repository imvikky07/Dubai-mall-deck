import { useState } from 'react'
import { IMAGES, VIDEOS } from '../assets/media'

const CATS = [
  { name:'Flagship Retail', count:'340+', desc:'International flagship stores — many are the largest locations of their brand globally. Apple, Nike, Samsung and 340 more define the standard.', brands:['Nike','Apple','Samsung','H&M','Zara','Adidas','Marks & Spencer','Levi\'s'] },
  { name:'Luxury Flagships', count:'200+', desc:'The full constellation of global luxury maisons, anchored by a dedicated Fashion Avenue — the most prestigious retail address in the Middle East.', brands:['Louis Vuitton','Chanel','Hermès','Gucci','Dior','Prada','Cartier','Valentino'] },
  { name:'Mid-Market', count:'600+', desc:'The broadest selection of aspirational mid-tier brands capturing every consumer from 18–55 across fashion, lifestyle, beauty, and tech.', brands:['Mango','Gap','Next','Charles & Keith','Aldo','Massimo Dutti','Sephora','MAC'] },
  { name:'Pop-Up & Flex', count:'50+ Zones', desc:'High-visibility rotating pop-ups in premium atrium locations. Ideal for market entry, limited editions, and brand testing.', brands:['Seasonal Brands','Limited Editions','New Market Entrants','Concept Stores'] },
]

export default function SlideRetail({ isActive, goToCTA, goToNext, openVideo }) {
  const [active, setActive] = useState(0)
  return (
    <>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.luxury})`, filter:'brightness(0.35)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'rgba(6,6,6,0.55)' }} />

      <div className="slide-content" style={{ flexDirection:'row',gap:0,padding:0,alignItems:'stretch' }}>
        {/* Left panel */}
        <div className="a1" style={{ width:'38%',padding:'clamp(60px,8vh,100px) clamp(32px,4vw,72px)',borderRight:'1px solid var(--gold-dim)',display:'flex',flexDirection:'column',justifyContent:'center',flexShrink:0 }}>
          <div className="eyebrow">Retail Opportunity</div>
          <div className="gold-line" />
          <h2 className="display" style={{ marginBottom:20 }}>World's Most<br/><em className="italic gold-text">Visited</em><br/>Destination</h2>
          <p className="body" style={{ marginBottom:32,maxWidth:340 }}>
            Over 1,300 tenants. 100 million visitors. An audience that is affluent, international, and ready to spend.
          </p>
          <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
            {CATS.map((c, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                background:'none',border:'none',cursor:'pointer',textAlign:'left',
                padding:'14px 16px',
                borderLeft: active===i ? '2px solid var(--gold)' : '2px solid transparent',
                backgroundColor: active===i ? 'rgba(201,169,110,0.07)' : 'transparent',
                transition:'all 0.25s',
              }}>
                <div style={{ fontFamily:'var(--fs)',fontSize:'9px',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:active===i?'var(--gold)':'var(--text3)',marginBottom:2 }}>{c.name}</div>
                <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(20px,2vw,28px)',fontWeight:300,color:active===i?'var(--text)':'var(--text3)' }}>{c.count}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="a2" style={{ flex:1,padding:'clamp(60px,8vh,100px) clamp(32px,4vw,72px)',display:'flex',flexDirection:'column',justifyContent:'center' }}>
          <div style={{ fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.25em',color:'var(--gold)',textTransform:'uppercase',marginBottom:12 }}>
            {CATS[active].name}
          </div>
          <h3 className="display" style={{ marginBottom:20,color:'var(--text)' }}>
            {CATS[active].count} <em className="italic" style={{ fontSize:'70%',color:'var(--text2)' }}>brands</em>
          </h3>
          <p className="body" style={{ maxWidth:440,marginBottom:32 }}>
            {CATS[active].desc}
          </p>
          <div style={{ display:'flex',flexWrap:'wrap',gap:8,marginBottom:40 }}>
            {CATS[active].brands.map((b,i) => (
              <span key={i} className="tag">{b}</span>
            ))}
          </div>
          <div style={{ display:'flex',gap:14,flexWrap:'wrap' }}>
            <button className="btn" onClick={goToCTA}><span>Discuss Leasing</span><span>→</span></button>
            <button className="btn-ghost" onClick={() => openVideo(VIDEOS.mallTour)}>▶ Mall Tour</button>
          </div>
        </div>
      </div>

      <div style={{ position:'absolute',bottom:28,right:clamp('32px','6vw','100px'),zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>03 / 10</div>
    </>
  )
}

function clamp(a,b,c){ return a }
