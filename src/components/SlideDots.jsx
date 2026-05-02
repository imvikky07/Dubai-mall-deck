export default function SlideDots({ slides, activeIdx, goToSlide }) {
  return (
    <div id="slide-dots">
      {slides.map((s, i) => (
        <button
          key={s.id}
          className={`dot-btn ${activeIdx === i ? 'active' : ''}`}
          data-label={s.label}
          onClick={() => goToSlide(i)}
          title={s.label}
        />
      ))}
    </div>
  )
}
