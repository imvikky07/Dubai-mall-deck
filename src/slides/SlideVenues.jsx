import { useState } from 'react'
import { IMAGES, VIDEOS } from '../assets/media'

const VENUES = [
  { emoji:'🏛️', name:'The Grand Atrium', type:'Multi-Purpose Arena', cap:'5,000', sqft:'45,000', desc:'A soaring glass atrium — the beating heart of the mall. Used for headline activations, fashion shows, celebrity events, and major brand reveals. Fully configurable.', features:['180° LED wall integration','Full rigging infrastructure','Broadcast-ready facilities','Customizable lighting grid'], best:['Fashion Shows','Brand Launches','Award Ceremonies','Live Performances'] },
  { emoji:'🌟', name:'Dubai Fountain Stage', type:'Outdoor Performance Venue', cap:'12,000', sqft:'100,000+', desc:'An open-air stage on the shores of Burj Khalifa Lake — with the world\'s largest fountain and the Burj Khalifa as your permanent backdrop. No stage on earth competes.', features:['World-class audio system','Permanent stage structure','Full broadcast facilities','Professional crowd management'], best:['Concerts','Festivals','New Year\'s Events','Corporate Galas'] },
  { emoji:'🏢', name:'Convention Centre', type:'Exhibition & Conference', cap:'2,500', sqft:'28,000', desc:'A world-class convention facility within the mall complex. Modular halls, breakout rooms, full AV suite. The only convention centre inside a major retail destination.', features:['Modular 8-hall layout','Full AV & translation','500 sqm private suites','Dedicated F&B services'], best:['Trade Shows','Conferences','Product Expos','Corporate Summits'] },
  { emoji:'🌃', name:'Level 5 Rooftop Terrace', type:'Private Event Space', cap:'800', sqft:'12,000', desc:'An exclusive rooftop with 360° views of Downtown Dubai, the Burj Khalifa, and the fountain. The most sought-after private venue in the city.', features:['360° panoramic views','Private dedicated entrance','Onsite catering kitchen','Multiple bar stations'], best:['VIP Dinners','Brand Exclusives','Cocktail Events','Executive Retreats'] },
]

function VenueModal({ venue, onClose, goToCTA }) {
  if (!venue) return null
  return (
    <div onClick={e => e.target===e.currentTarget && onClose()} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.92)',zIndex:8000,display:'flex',alignItems:'center',justifyContent:'center',padding:20 }}>
      <div style={{ background:'#111',border:'1px solid rgba(201,169,110,0.2)',maxWidth:740,width:'100%',maxHeight:'88vh',overflowY:'auto',position:'relative' }}>
        <div style={{ background:'rgba(201,169,110,0.05)',borderBottom:'1px solid rgba(201,169,110,0.15)',padding:'40px 44px',position:'relative' }}>
          <button onClick={onClose} style={{ position:'absolute',top:16,right:16,background:'none',border:'1px solid rgba(255,255,255,0.15)',color:'var(--text)',width:32,height:32,borderRadius:'50%',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center' }}>×</button>
          <div style={{ fontSize:36,marginBottom:12 }}>{venue.emoji}</div>
          <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.28em',color:'var(--gold)',textTransform:'uppercase',marginBottom:6 }}>{venue.type}</div>
          <h2 style={{ fontFamily:'var(--ff)',fontSize:'clamp(24px,4vw,44px)',fontWeight:300,marginBottom:20 }}>{venue.name}</h2>
          <div style={{ display:'flex',gap:36 }}>
            {[{l:'Capacity',v:venue.cap+' people'},{l:'Space',v:venue.sqft+' sq ft'}].map(({l,v})=>(
              <div key={l}><div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.2em',color:'var(--text3)',textTransform:'uppercase',marginBottom:4 }}>{l}</div><div style={{ fontFamily:'var(--ff)',fontSize:'clamp(18px,2.5vw,32px)',fontWeight:300,color:'var(--gold)' }}>{v}</div></div>
            ))}
          </div>
        </div>
        <div style={{ padding:'36px 44px' }}>
          <p style={{ color:'var(--text2)',fontSize:15,lineHeight:1.8,marginBottom:32 }}>{venue.desc}</p>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,marginBottom:32 }}>
            {[{title:'Features',items:venue.features},{title:'Best For',items:venue.best}].map(({title,items})=>(
              <div key={title}>
                <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--gold)',textTransform:'uppercase',marginBottom:12 }}>{title}</div>
                {items.map((item,i)=>(
                  <div key={i} style={{ display:'flex',gap:10,alignItems:'center',marginBottom:8 }}>
                    <div style={{ width:4,height:4,background:'var(--gold)',borderRadius:'50%',flexShrink:0 }} />
                    <span style={{ fontFamily:'var(--fb)',fontSize:13,color:'var(--text2)' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display:'flex',gap:14 }}>
            <button className="btn" onClick={() => { onClose(); goToCTA() }}><span>Book This Venue</span><span>→</span></button>
            <button className="btn-ghost" onClick={onClose}>Close ×</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SlideVenues({ goToCTA, openVideo }) {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.fountainNight})`, filter:'brightness(0.25)' }} />
      <div style={{ position:'absolute',inset:0,zIndex:1,background:'rgba(6,6,6,0.6)' }} />

      <div className="slide-content" style={{ padding:'clamp(60px,8vh,90px) clamp(32px,6vw,100px)',justifyContent:'space-between' }}>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:36 }}>
          <div className="a1">
            <div className="eyebrow">Venue Portfolio</div>
            <div className="gold-line" />
            <h2 className="display">Stages for<br/><em className="italic gold-text">Every Vision</em></h2>
          </div>
          <div className="a2 hide-sm" style={{ textAlign:'right' }}>
            <p style={{ fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.18em',color:'var(--text3)',textTransform:'uppercase',marginBottom:8 }}>Click any venue to explore</p>
            <button className="btn" onClick={goToCTA}><span>Book a Venue</span><span>→</span></button>
          </div>
        </div>

        <div className="a3" style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1px',background:'var(--gold-dim)',flex:1 }}>
          {VENUES.map((v,i)=>(
            <div key={i} onClick={()=>setSelected(v)} style={{
              background:'rgba(6,6,6,0.88)',padding:'clamp(20px,3vh,36px) clamp(20px,2.5vw,36px)',
              cursor:'pointer',transition:'background 0.3s',display:'flex',flexDirection:'column',justifyContent:'space-between',
            }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(201,169,110,0.05)'}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(6,6,6,0.88)'}
            >
              <div>
                <div style={{ fontSize:'clamp(24px,2.5vw,36px)',marginBottom:12 }}>{v.emoji}</div>
                <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.22em',color:'var(--gold)',textTransform:'uppercase',marginBottom:8 }}>{v.type}</div>
                <h4 className="display" style={{ marginBottom:10,fontSize:'clamp(16px,1.8vw,26px)' }}>{v.name}</h4>
                <p style={{ fontFamily:'var(--fb)',fontSize:'clamp(11px,0.9vw,13px)',color:'var(--text3)',lineHeight:1.65 }}>{v.desc.substring(0,100)}...</p>
              </div>
              <div style={{ display:'flex',gap:24,marginTop:16,paddingTop:14,borderTop:'1px solid rgba(201,169,110,0.1)' }}>
                {[{l:'Capacity',val:v.cap},{l:'Sq Ft',val:v.sqft}].map(({l,val})=>(
                  <div key={l}><div style={{ fontFamily:'var(--fs)',fontSize:'7px',letterSpacing:'0.2em',color:'var(--text3)',textTransform:'uppercase',marginBottom:2 }}>{l}</div><div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.6vw,20px)',fontWeight:300,color:'var(--gold)' }}>{val}</div></div>
                ))}
                <div style={{ marginLeft:'auto',fontFamily:'var(--fs)',fontSize:'9px',letterSpacing:'0.12em',color:'var(--gold)',textTransform:'uppercase',alignSelf:'flex-end' }}>View Details →</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VenueModal venue={selected} onClose={()=>setSelected(null)} goToCTA={goToCTA} />
      <div style={{ position:'absolute',bottom:28,right:'clamp(32px,6vw,100px)',zIndex:10,fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>08 / 10</div>
    </>
  )
}
