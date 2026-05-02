// ─── YOUTUBE VIDEO IDs ────────────────────────────────────────────────────────
export const VIDEOS = {
  hero:     'iGhSm9GYRkI',   // Dubai Mall overview / cinematic
  fountain: 'A7EyJ_52xko',   // Dubai Fountain show
  mallTour: 'LPmh43eCzSg',   // Complete mall tour
  aquarium: 'KfiioPZbWEc',   // Aquarium tunnel
  things:   'eDQbtkv94fM',   // 17 things to do
  festival: 'zVOQxozyehU',   // Shopping festival / events
  fashion:  'H71Lfv2BtaM',   // Fashion Avenue
}

// YouTube embed helper — autoplay muted background
export const ytBg = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=0`

// YouTube watch URL for modal (with controls)
export const ytModal = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`

// ─── UNSPLASH IMAGES ──────────────────────────────────────────────────────────
// Direct CDN URLs — Unsplash photo IDs mapped to their CDN format
const UNS = (id, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`

export const IMAGES = {
  // aerial city night — vwgBaNFkg7o (Downtown Dubai aerial)
  aerial:      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85',
  // Dubai cityscape skyscrapers — 6l4BcKqypV0
  skyline:     'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1800&q=85',
  // city night clock tower — nXuwxSW48Ik
  nightCity:   'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=85',
  // building water — fXosFLo_cXQ
  waterfront:  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85',
  // fountain night — mxbW-roR_FI
  fountainNight:'https://images.unsplash.com/photo-1534481016308-0fca71578ae5?auto=format&fit=crop&w=1800&q=85',
  // fountain show skyscrapers — wq0LAqnJ9GQ
  fountainShow: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1800&q=85',
  // modern skyscrapers dusk — PDxbwFtJ_Sk
  dusk:         'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1800&q=85',
  // luxury interior / mall interior fallback
  luxury:       'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85',
  // dining / restaurant
  dining:       'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85',
  // event / concert crowd
  event:        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85',
  // aquarium / blue underwater
  aquarium:     'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1800&q=85',
  // sponsorship / business
  sponsor:      'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1800&q=85',
}
