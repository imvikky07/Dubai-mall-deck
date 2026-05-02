import { VIDEOS, ytBg, IMAGES } from '../assets/media'

const BRANDS = ['Louis Vuitton','Chanel','Hermès','Dior','Gucci','Cartier','Van Cleef & Arpels','Bulgari','Prada','Bottega Veneta','Valentino','Saint Laurent','Burberry','Versace','Givenchy','Alexander McQueen','Balenciaga','Tom Ford','Fendi','Off-White']

export default function SlideLuxury({ isActive, goToCTA, openVideo }) {
  return (
    <>
      {/* Fashion Avenue video background */}
      <div className="slide-video-bg">
        {isActive && <iframe src={ytBg(VIDEOS.fashion)} allow="autoplay" title="Fashion Avenue" />}
      </div>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.luxury})` }} />
      <div className="ov-right" />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(6,6,6,0.3) 0%,rgba(6,6,6,0.0) 40%,rgba(6,6,6,0.7) 100%)' }} />

      <div className="slide-content" style={{ flexDirection:'row',padding:0,alignItems:'stretch' }}>
        {/* Right glass panel */}
        <div style={{ flex:1 }} /> {/* spacer - video shows through */}
        <div className="a1" style={{
          width:'clamp(340px,40%,520px)',flexShrink:0,
          padding:'clamp(60px,8vh,100px) clamp(32px,4vw,72px)',
          background:'linear-gradient(to right, rgba(6,6,6,0.0) 0%, rgba(6,6,6,0.97) 25%)',
          display:'flex',flexDirection:'column',justifyContent:'center',
        }}>
          <div className="eyebrow">Fashion Avenue</div>
          <div className="gold-line" />
          <h2 className="display" style={{ marginBottom:20,lineHeight:1 }}>
            Where<br/>Luxury<br/><em className="italic gold-text">Lives</em>
          </h2>
          <p className="body" style={{ marginBottom:28,maxWidth:360 }}>
            The most prestigious luxury retail address in the Middle East — 500,000 sq ft dedicated to 200+ of the world's most coveted maisons.
          </p>

          {/* Quote */}
          <div style={{ borderLeft:'2px solid var(--gold)',paddingLeft:20,marginBottom:28 }}>
            <p style={{ fontFamily:'var(--ff)',fontStyle:'italic',fontSize:'clamp(14px,1.2vw,17px)',color:'var(--gold-light)',lineHeight:1.55,marginBottom:8 }}>
              "The most important luxury retail location in the region — bar none."
            </p>
            <p style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.2em',color:'var(--text3)',textTransform:'uppercase' }}>
              Euromonitor International
            </p>
          </div>

          {/* Mini stats */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--gold-dim)',marginBottom:32 }}>
            {[{n:'200+',l:'Brands'},{n:'500K',l:'Sq Ft'},{n:'#1',l:'ME Rank'}].map(({n,l},i) => (
              <div key={i} style={{ background:'rgba(6,6,6,0.9)',padding:'16px 12px',textAlign:'center' }}>
                <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(22px,2.5vw,36px)',fontWeight:300,color:'var(--gold)' }}>{n}</div>
                <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.2em',color:'var(--text3)',textTransform:'uppercase',marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Brand tags */}
          <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:32 }}>
            {BRANDS.slice(0,12).map((b,i) => (
              <span key={i} className={`tag ${i < 5 ? 'hot' : ''}`}>{b}</span>
            ))}
            <span className="tag">+ 188 More</span>
          </div>

          <div style={{ display:'flex',gap:14,flexWrap:'wrap' }}>
            <button className="btn" onClick={goToCTA}><span>Luxury Leasing</span><span>→</span></button>
            <button className="btn-ghost" onClick={() => openVideo(VIDEOS.fashion)}>▶ Fashion Avenue Tour</button>
          </div>
        </div>
      </div>

      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>04 / 10</div>
    </>
  )
}
