import { VIDEOS, IMAGES } from '../assets/media'

const ZONES = [
  { name:'The Fountain Views', type:'Signature Waterfront', covers:'3,200', desc:'Terraces overlooking the Dubai Fountain & Burj Khalifa. The most in-demand restaurant real estate in the UAE.', hot:true },
  { name:'Restaurant Village', type:'Destination Dining', covers:'4,100', desc:'Celebrity chef concepts, regional flagships, and international chains in a relaxed outdoor setting.' },
  { name:'The Food Court', type:'Global Fast Casual', covers:'2,400', desc:'70+ international concepts from Japanese ramen to Lebanese shawarma to American classics.' },
  { name:'Waterfront Promenade', type:'Al-Fresco Dining', covers:'1,800', desc:'An open-air boulevard connecting to the Dubai Fountain. Year-round outdoor dining with iconic views.' },
]

export default function SlideDining({ isActive, goToCTA, openVideo }) {
  return (
    <>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.fountainShow})`, filter:'brightness(0.3)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'rgba(6,6,6,0.5)' }} />

      <div className="slide-content" style={{ padding:'clamp(60px,8vh,100px) clamp(32px,6vw,100px)',justifyContent:'space-between' }}>
        {/* Header row */}
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:40 }}>
          <div className="a1">
            <div className="eyebrow">Dining & Lifestyle</div>
            <div className="gold-line" />
            <h2 className="display" style={{ lineHeight:1 }}>A Culinary<br/><em className="italic gold-text">Capital</em></h2>
          </div>
          <div className="a2 hide-sm" style={{ textAlign:'right' }}>
            <p className="lead" style={{ maxWidth:380,textAlign:'right' }}>
              160+ dining concepts, 11,000+ covers, and the most spectacular waterfront dining address in the region
            </p>
            <div style={{ display:'flex',gap:12,justifyContent:'flex-end',marginTop:20 }}>
              <button className="btn" onClick={goToCTA}><span>F&B Leasing</span><span>→</span></button>
              <button className="btn-ghost" onClick={() => openVideo(VIDEOS.fountain)}>▶ Fountain Show</button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="a3" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'var(--gold-dim)',marginBottom:28 }}>
          {[{n:'160+',l:'Outlets'},{n:'11K+',l:'Covers'},{n:'30%',l:'Revenue Mix'},{n:'#1',l:'UAE Dining Dest.'}].map(({n,l},i)=>(
            <div key={i} style={{ background:'rgba(6,6,6,0.9)',padding:'clamp(16px,2.5vh,28px) 12px',textAlign:'center' }}>
              <div className="stat-num" style={{ fontSize:'clamp(28px,3.5vw,52px)' }}>{n}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>

        {/* Dining zones */}
        <div className="a4" style={{ display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:'1px',background:'var(--gold-dim)',flex:1 }}>
          {ZONES.map((z,i) => (
            <div key={i} style={{
              background:'rgba(6,6,6,0.88)',padding:'clamp(16px,2.5vh,28px) clamp(14px,2vw,24px)',
              gridRow:z.hot?'span 2':'auto',display:'flex',flexDirection:'column',justifyContent:'space-between',
              position:'relative',transition:'background 0.3s',cursor:'default',
            }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(201,169,110,0.05)'}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(6,6,6,0.88)'}
            >
              {z.hot && <div style={{ position:'absolute',top:14,right:14,fontFamily:'var(--fs)',fontSize:'7px',letterSpacing:'0.22em',color:'var(--gold)',textTransform:'uppercase',border:'1px solid rgba(201,169,110,0.3)',padding:'3px 8px' }}>Signature</div>}
              <div>
                <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.22em',color:'var(--gold)',textTransform:'uppercase',marginBottom:8 }}>{z.type}</div>
                <h4 className="display" style={{ fontSize:z.hot?'clamp(18px,2vw,28px)':'clamp(16px,1.6vw,22px)',marginBottom:10 }}>{z.name}</h4>
                <p className="body" style={{ fontSize:'clamp(11px,0.9vw,13px)' }}>{z.desc}</p>
              </div>
              <div style={{ fontFamily:'var(--ff)',fontSize:z.hot?'clamp(20px,2vw,28px)':'clamp(16px,1.6vw,22px)',color:'var(--gold)',marginTop:12 }}>{z.covers} covers</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>05 / 10</div>
    </>
  )
}
