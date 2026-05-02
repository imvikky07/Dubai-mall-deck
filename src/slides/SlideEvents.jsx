import { VIDEOS, ytBg, IMAGES } from '../assets/media'

const TYPES = [
  { icon:'⚡', title:'Brand Activations', desc:'Custom-built experiences across 15+ high-traffic activation zones. 100,000+ daily visitors, maximum brand impact.' },
  { icon:'🚀', title:'Product Launches', desc:'The perfect stage for global unveilings — media facilities, live streaming infrastructure, instant worldwide reach.' },
  { icon:'🏢', title:'Corporate Events', desc:'World-class meeting and convention facilities. Groups of 10 to 10,000. Catering, AV, and production support on-site.' },
  { icon:'🎤', title:'Live Performances', desc:'Built-in stage infrastructure across multiple performance zones. Bring artists and shows directly to the people.' },
]

const HIGHLIGHTS = [
  { name:'Dubai Shopping Festival', type:'Annual Platform', stat:'3M+ Visitors' },
  { name:'New Year\'s Eve Countdown', type:'Flagship Event', stat:'50K+ Attendance' },
  { name:'Luxury Brand Global Launches', type:'Product Launch', stat:'500+ per year' },
  { name:'Celebrity Activations', type:'Talent Events', stat:'200+ annually' },
  { name:'Fashion Week Runway Shows', type:'Live Fashion', stat:'Biannual' },
  { name:'Tech Product Unveilings', type:'Brand Activation', stat:'Global streaming' },
]

export default function SlideEvents({ isActive, goToCTA, openVideo }) {
  return (
    <>
      <div className="slide-video-bg">
        {isActive && <iframe src={ytBg(VIDEOS.festival)} allow="autoplay" title="Events" />}
      </div>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.event})` }} />
      <div className="ov-left" />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'linear-gradient(to bottom,rgba(6,6,6,0.4) 0%,rgba(6,6,6,0.15) 50%,rgba(6,6,6,0.8) 100%)' }} />

      <div className="slide-content" style={{ flexDirection:'row',padding:0,alignItems:'stretch' }}>
        {/* Left content */}
        <div className="a1" style={{ width:'clamp(340px,45%,580px)',padding:'clamp(60px,8vh,100px) clamp(32px,4vw,72px)',display:'flex',flexDirection:'column',justifyContent:'center',flexShrink:0 }}>
          <div className="eyebrow">Events & Platform</div>
          <div className="gold-line" />
          <h2 className="display" style={{ marginBottom:20,lineHeight:0.95 }}>
            The World's<br/>Most<br/><em className="italic gold-text">Powerful Stage</em>
          </h2>
          <p className="lead" style={{ maxWidth:420,marginBottom:32 }}>
            500+ events per year. A global media platform that extends your reach far beyond Dubai.
          </p>

          {/* Event type grid */}
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--gold-dim)',marginBottom:32 }}>
            {TYPES.map((t,i) => (
              <div key={i} style={{
                background:'rgba(6,6,6,0.88)',padding:'clamp(14px,2vh,20px) clamp(14px,1.5vw,20px)',
                transition:'background 0.3s',cursor:'default',
              }}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(201,169,110,0.05)'}
                onMouseLeave={e=>e.currentTarget.style.background='rgba(6,6,6,0.88)'}
              >
                <div style={{ fontSize:'clamp(18px,2vw,24px)',marginBottom:8 }}>{t.icon}</div>
                <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.4vw,18px)',fontWeight:300,marginBottom:6 }}>{t.title}</div>
                <p style={{ fontFamily:'var(--fb)',fontSize:'clamp(10px,0.8vw,12px)',color:'var(--text3)',lineHeight:1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display:'flex',gap:14,flexWrap:'wrap' }}>
            <button className="btn" onClick={goToCTA}><span>Book an Event</span><span>→</span></button>
            <button className="btn-ghost" onClick={() => openVideo(VIDEOS.festival)}>▶ Festival Highlights</button>
          </div>
        </div>

        {/* Right: event highlights */}
        <div className="a2 hide-sm" style={{ flex:1,padding:'clamp(60px,8vh,100px) clamp(32px,4vw,60px)',display:'flex',flexDirection:'column',justifyContent:'flex-end' }}>
          <div style={{ fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.25em',color:'var(--gold)',textTransform:'uppercase',marginBottom:16 }}>Event Highlights</div>
          <div style={{ display:'flex',flexDirection:'column',gap:'1px',background:'var(--gold-dim)' }}>
            {HIGHLIGHTS.map((h,i) => (
              <div key={i} style={{ background:'rgba(6,6,6,0.85)',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <div>
                  <div style={{ fontFamily:'var(--fb)',fontSize:'clamp(11px,1vw,13px)',color:'var(--text)',marginBottom:2 }}>{h.name}</div>
                  <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.18em',color:'var(--text3)',textTransform:'uppercase' }}>{h.type}</div>
                </div>
                <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.4vw,18px)',color:'var(--gold)',whiteSpace:'nowrap',marginLeft:16 }}>{h.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>07 / 10</div>
    </>
  )
}
