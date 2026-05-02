import { useState } from 'react'
import { VIDEOS, ytBg, IMAGES } from '../assets/media'

const INQUIRY_TYPES = [
  { id:'retail', label:'Retail Leasing', icon:'🏪' },
  { id:'luxury', label:'Luxury / Fashion Ave', icon:'💎' },
  { id:'fnb', label:'F&B / Dining', icon:'🍽️' },
  { id:'popup', label:'Pop-Up Space', icon:'⚡' },
  { id:'sponsor', label:'Brand Sponsorship', icon:'🤝' },
  { id:'event', label:'Event Booking', icon:'🎪' },
  { id:'venue', label:'Venue Rental', icon:'🏛️' },
  { id:'other', label:'Other', icon:'✉️' },
]

export default function SlideCTA({ isActive, goToSlide }) {
  const [selType, setSelType] = useState(null)
  const [form, setForm] = useState({ name:'', company:'', email:'', msg:'' })
  const [done, setDone] = useState(false)

  const submit = () => {
    if (!form.name || !form.email) return
    setDone(true)
  }

  return (
    <>
      <div className="slide-video-bg">
        {isActive && <iframe src={ytBg(VIDEOS.mallTour)} allow="autoplay" title="Mall" />}
      </div>
      <div className="slide-bg" style={{ backgroundImage:`url(${IMAGES.waterfront})` }} />
      <div className="ov-mid" style={{ background:'rgba(6,6,6,0.88)' }} />

      <div className="slide-content center" style={{ padding:'clamp(60px,7vh,90px) clamp(32px,6vw,100px)' }}>
        {done ? (
          <div className="a1" style={{ maxWidth:500 }}>
            <div style={{ fontSize:52,marginBottom:24 }}>✓</div>
            <h2 className="display gold-text" style={{ marginBottom:16 }}>Thank You</h2>
            <p className="lead" style={{ marginBottom:32 }}>
              Our commercial team will reach out within 24 business hours. We look forward to exploring the opportunity together.
            </p>
            <button className="btn-ghost" onClick={() => { setDone(false); setForm({name:'',company:'',email:'',msg:''}) }}>
              Submit another inquiry →
            </button>
          </div>
        ) : (
          <div style={{ width:'100%',maxWidth:800 }}>
            <div className="a1">
              <div className="eyebrow">Begin the Conversation</div>
              <div className="gold-line gold-line-c" />
            </div>
            <h2 className="display a2" style={{ marginBottom:16 }}>
              Your Place <em className="italic gold-text">Awaits</em>
            </h2>
            <p className="lead a3" style={{ maxWidth:460,margin:'0 auto 32px' }}>
              Join the 1,300+ brands that call The Dubai Mall home.
            </p>

            {/* Type selector */}
            <div className="a4" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'var(--gold-dim)',marginBottom:'1px' }}>
              {INQUIRY_TYPES.map(t => (
                <button key={t.id} onClick={() => setSelType(selType===t.id?null:t.id)} style={{
                  background: selType===t.id ? 'rgba(201,169,110,0.1)' : 'rgba(6,6,6,0.9)',
                  border:'none',borderLeft: selType===t.id ? '2px solid var(--gold)' : '2px solid transparent',
                  padding:'14px 12px',cursor:'pointer',textAlign:'left',transition:'all 0.25s',
                  display:'flex',flexDirection:'column',gap:5,
                }}>
                  <span style={{ fontSize:'clamp(16px,1.8vw,22px)' }}>{t.icon}</span>
                  <span style={{ fontFamily:'var(--fs)',fontSize:'clamp(8px,0.65vw,10px)',fontWeight:500,letterSpacing:'0.08em',color:selType===t.id?'var(--gold)':'var(--text2)',lineHeight:1.3 }}>{t.label}</span>
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="a5" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--gold-dim)',marginBottom:'1px' }}>
              {[{k:'name',p:'Full Name',l:'Your Name'},{k:'company',p:'Brand / Company',l:'Company'}].map(({k,p,l})=>(
                <div key={k} style={{ background:'rgba(6,6,6,0.9)',padding:'clamp(14px,2vh,20px) 20px',textAlign:'left' }}>
                  <label style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase',display:'block',marginBottom:6 }}>{l}</label>
                  <input value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={p} type="text"
                    style={{ background:'none',border:'none',borderBottom:'1px solid rgba(201,169,110,0.2)',color:'var(--text)',fontFamily:'var(--fb)',fontSize:'clamp(13px,1vw,15px)',padding:'6px 0',width:'100%',outline:'none' }} />
                </div>
              ))}
            </div>
            <div style={{ background:'rgba(6,6,6,0.9)',padding:'clamp(14px,2vh,20px) 20px',marginBottom:'1px',textAlign:'left' }}>
              <label style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase',display:'block',marginBottom:6 }}>Business Email</label>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com" type="email"
                style={{ background:'none',border:'none',borderBottom:'1px solid rgba(201,169,110,0.2)',color:'var(--text)',fontFamily:'var(--fb)',fontSize:'clamp(13px,1vw,15px)',padding:'6px 0',width:'100%',outline:'none' }} />
            </div>
            <div style={{ background:'rgba(6,6,6,0.9)',padding:'clamp(14px,2vh,20px) 20px',marginBottom:20,textAlign:'left' }}>
              <label style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase',display:'block',marginBottom:6 }}>Message (Optional)</label>
              <textarea value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} rows={2} placeholder="Tell us about your vision..."
                style={{ background:'none',border:'none',borderBottom:'1px solid rgba(201,169,110,0.2)',color:'var(--text)',fontFamily:'var(--fb)',fontSize:'clamp(13px,1vw,15px)',padding:'6px 0',width:'100%',outline:'none',resize:'none' }} />
            </div>

            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16 }}>
              <p style={{ fontFamily:'var(--fs)',fontSize:'10px',color:'var(--text3)',maxWidth:320,lineHeight:1.6,textAlign:'left' }}>
                Handled directly by our commercial partnerships team. Response within 24 business hours.
              </p>
              <button className="btn" onClick={submit} style={{ padding:'16px 44px' }}><span>Send Inquiry</span><span>→</span></button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ position:'absolute',bottom:28,left:'clamp(32px,6vw,100px)',right:'clamp(32px,6vw,100px)',display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid rgba(201,169,110,0.12)',paddingTop:20 }}>
          <div>
            <div style={{ fontFamily:'var(--ff)',fontSize:'clamp(14px,1.4vw,18px)',fontWeight:300 }}>The Dubai Mall</div>
            <div style={{ fontFamily:'var(--fs)',fontSize:'7px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase',marginTop:2 }}>Downtown Dubai · UAE</div>
          </div>
          <div style={{ fontFamily:'var(--fs)',fontSize:'8px',letterSpacing:'0.25em',color:'var(--text3)',textTransform:'uppercase' }}>10 / 10</div>
          <div style={{ fontFamily:'var(--fs)',fontSize:'8px',color:'var(--text3)' }}>© 2025 Emaar Properties</div>
        </div>
      </div>
    </>
  )
}
