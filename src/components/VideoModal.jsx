import { useEffect } from 'react'
import { ytModal } from '../assets/media'

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    document.getElementById('vmodal')?.classList.toggle('open', !!videoId)
  }, [videoId])

  return (
    <div id="vmodal" onClick={(e) => e.target.id === 'vmodal' && onClose()}>
      <div id="vmodal-inner">
        <button id="vmodal-close" onClick={onClose}>Close esc</button>
        {videoId && (
          <iframe
            src={ytModal(videoId)}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Video"
          />
        )}
      </div>
    </div>
  )
}
