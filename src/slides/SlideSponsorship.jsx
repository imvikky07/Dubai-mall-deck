import { IMAGES } from '../assets/media'

const TIERS = [
  { name:'Title Partner', tag:'Exclusive Ownership', price:'From AED 25M / year', featured:true, perks:['Full exterior branding rights','Exclusive category rights','All 2,400+ digital screens','Dedicated branded space (5,000 sq ft)','Priority events programming','VIP host privileges & suites'] },
  { name:'Category Partner', tag:'Own Your Category', price:'From AED 5M / year', featured:false, perks:['Category exclusivity across mall','Dedicated activation zones','Priority digital screen allocation','Co-branded event integration'] },
  { name:'Event Sponsor', tag:'Headline Moments', price:'From AED 500K / event', featured:false, perks:['Event co-branding','On-site activation rights','Social media amplification','Press & media exposure'] },
]

const AUDIENCE = [
  { n:'USD 95K+', l:'Avg. HH Income' },
  { n:'65%', l:'International Visitors' },
  { n:'8M+', l:'Daily Screen Impressions' },
  { n:'58%', l:'Prime Spend (25–45)' },
  { n:'3.2×', l:'Monthly Repeat Visits' },
  { n:'3.4h', l:'Avg. Dwell Time' },
]

export default function SlideSponsorship({ isActive, goToCTA }) {
  return (
    <>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.dusk})`, filter:'brightness(0.2)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'rgba(6,6,6,0.65)' }} />

      <div className="slide-content" style={{ padding:'clamp(48px,7vh,80px) clamp(32px,6vw,100px)',justifyContent:'space-between' }}>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:28 }}>
          <div className="a1">
            <div className="eyebrow">Brand Partnerships</div>
            <div className="gold-line" />
            <h2 className="display" style={{ lineHeight:1 }}>Partner at the<br/>Center of <em className="italic gold-text">Everything</em></h2>
          </div>
          <p className="lead a2 hide-sm" style={{ maxWidth:360,textAlign:'right' }}>
            A sponsorship here is not an ad placement.<br/>It is a statement about who you are.
          </p>
        </div>

        {/* Audience data strip */}
        <div className="a3" style={{ display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:'1px',background:'var(--gold-dim)',marginBottom:20 }}>
          {AUDIENCE.map(({n,l},i)=>(
            <div key={i} style={{ background:'rgba(6,6,6,0.9)',padding:'clamp(12px,2vh,20px) 12px',textAlign:'center' }}>
              <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(18px,2.2vw,32px)',fontWeight:300,color:'var(--gold)' }}>{n}</div>
              <div style={{ fontFamily:'var(--fs)',fontSize:'7px',letterSpacing:'0.18em',color:'var(--text3)',textTransform:'uppercase',marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Tier cards */}
        <div className="a4" style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--gold-dim)',flex:1 }}>
          {TIERS.map((t,i)=>(
            <div key={i} style={{
              background: t.featured ? 'rgba(201,169,110,0.07)' : 'rgba(6,6,6,0.9)',
              padding:'clamp(20px,3vh,32px) clamp(16px,2vw,28px)',
              position:'relative',
              border: t.featured ? '1px solid rgba(201,169,110,0.2)' : 'none',
              display:'flex',flexDirection:'column',
            }}>
              {t.featured && <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:'var(--gold)' }} />}
              <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.22em',color:t.featured?'var(--gold)':'var(--text3)',textTransform:'uppercase',marginBottom:6 }}>{t.tag}</div>
              <h3 style={{ fontFamily:'var(--ff)',fontSize:'clamp(20px,2.2vw,32px)',fontWeight:300,marginBottom:10 }}>{t.name}</h3>
              <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.3vw,18px)',color:'var(--gold)',marginBottom:14,paddingBottom:14,borderBottom:'1px solid rgba(201,169,110,0.12)' }}>{t.price}</div>
              <div style={{ flex:1,display:'flex',flexDirection:'column',gap:7,marginBottom:20 }}>
                {t.perks.map((p,j)=>(
                  <div key={j} style={{ display:'flex',gap:8,alignItems:'flex-start' }}>
                    <span style={{ color:'var(--gold)',fontSize:10,marginTop:2,flexShrink:0 }}>◆</span>
                    <span style={{ fontFamily:'var(--fb)',fontSize:'clamp(10px,0.85vw,12px)',color:'var(--text2)',lineHeight:1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
              <button className="btn" onClick={goToCTA} style={{ width:'100%',justifyContent:'center' }}><span>Discuss This Tier</span></button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>09 / 10</div>
    </>
  )
}
