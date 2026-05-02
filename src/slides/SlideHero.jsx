import { VIDEOS, ytBg, IMAGES } from '../assets/media'

export default function SlideHero({ isActive, goToNext, openVideo }) {
  return (
    <>
      <div className="slide-video-bg">
        {isActive && <iframe src={ytBg(VIDEOS.hero)} allow="autoplay" title="Dubai Mall" />}
      </div>
      <div className="slide-bg" style={{ backgroundImage: `url(${IMAGES.aerial})` }} />
      <div className="ov-dark" />
      <div style={{ position:'absolute',inset:0,zIndex:2,background:'linear-gradient(to right,rgba(6,6,6,0.6) 0%,rgba(6,6,6,0.1) 65%,transparent 100%)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:2,backgroundImage:'linear-gradient(rgba(201,169,110,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(201,169,110,0.022) 1px,transparent 1px)',backgroundSize:'80px 80px' }} />

      <div className="slide-content" style={{ maxWidth:860 }}>
        <div className="a1" style={{ display:'flex',alignItems:'center',gap:16,marginBottom:24 }}>
          <div style={{ height:1,width:44,background:'var(--gold)',opacity:0.6 }} />
          <span className="eyebrow" style={{ margin:0 }}>Downtown Dubai · United Arab Emirates</span>
        </div>

        <h1 className="display a2" style={{ marginBottom:6, lineHeight:0.9 }}>The Dubai</h1>
        <h1 className="display italic a3" style={{ color:'var(--gold)',marginBottom:36 }}>Mall</h1>

        <p className="lead a4" style={{ maxWidth:520,marginBottom:52 }}>
          Where 100 million people a year discover that shopping is the smallest part of the story.
        </p>

        <div className="a5" style={{ display:'flex',gap:16,flexWrap:'wrap',alignItems:'center' }}>
          <button className="btn" onClick={goToNext}>
            <span>Explore the Opportunity</span><span>→</span>
          </button>
          <button className="btn-ghost" onClick={() => openVideo(VIDEOS.hero)}>
            <span style={{ marginRight:8 }}>▶</span>Watch Overview
          </button>
        </div>
      </div>

      {/* Corner brackets */}
      {[{top:90,left:40},{top:90,right:40}].map((pos,i) => (
        <div key={i} style={{ position:'absolute',zIndex:10,opacity:0.4,...pos }}>
          <div style={{ width:28,height:28,borderTop:'1px solid var(--gold)',borderLeft:i===0?'1px solid var(--gold)':'none',borderRight:i===1?'1px solid var(--gold)':'none' }} />
        </div>
      ))}

      {/* Scroll hint */}
      <div onClick={goToNext} style={{ position:'absolute',bottom:36,left:'50%',transform:'translateX(-50%)',zIndex:10,cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:8 }}>
        <span style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.3em',color:'var(--text3)',textTransform:'uppercase' }}>Scroll</span>
        <div style={{ width:1,height:40,background:'linear-gradient(to bottom,var(--gold),transparent)',animation:'scrollPulse 1.6s infinite' }} />
      </div>

      <div style={{ position:'absolute',bottom:36,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>
        01 / 10
      </div>
    </>
  )
}
