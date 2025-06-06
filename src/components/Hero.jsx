import { useState, useRef } from 'react'

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);

  const handleOpenModal = () => {
    setShowVideoModal(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
        <section className="hero_2025">
          <div className="padding-global">
            <div className="w-layout-blockcontainer container-huge w-container">
              <div className="spacer-xhuge"></div>
              <div className="hero_2025-wr">
                <div className="hero_2025-content text-color-white">
                  <h1 className="hero_title">Bring <strong className="bold-text">in-store</strong> experience and <strong
                      className="bold-text-2">human connection</strong> online</h1>
                  <div className="spacer-small"></div>
                  <h2 className="hero_2025-subtitle">with World's Largest AI-Powered Video Commerce Solution</h2>
                  <div className="hero_2025-btns">
                    <div className="half-width-stretch"><a href="https://firework.com/demo-request?utm_campaign=home-hero"
                        className="button w-button">Book a demo</a></div>
                    <div className="half-width-stretch"><a
                        href="https://firework.com/video-commerce-free-trial?utm_campaign=home-hero"
                        className="button is-secondary is-alternate w-button">Start for free</a></div>
                  </div>
                  <div className="js js-2-2 w-embed w-script">
                    <style>
                      {`.logo_carousel-wr::-webkit-scrollbar {
                        display: none;
                      }

                      .logo_carousel-wr {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        display: flex;
                        white-space: nowrap;
                      }`}
                    </style>
                  </div>
                  {/* ... logo carousel部分保持不变 ... */}
                </div>
                <div className="about_us_vid-wr">
                  <div className="hero_2025-video-background w-embed">
                    <video 
                      id="hero-video-2025"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.6)',
                        borderRadius: '20px'
                      }}
                      playsInline
                      loop
                      muted
                      autoPlay
                    >
                      <source
                        src="https://marketing-cdn.fireworktv.com/marketing-site/hero-videos/Firework-hero-video.mp4"
                        type="video/mp4" 
                      />
                    </video>
                  </div>
                  <button 
                    id="watch-video-button" 
                    className="hero_vid-watch-btn"
                    onClick={handleOpenModal}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          id="video-modal-overlay" 
          style={{
            display: 'flex',
            position: 'fixed',
            zIndex: 9999,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={(e) => {
            if (e.target.id === 'video-modal-overlay') {
              handleCloseModal();
            }
          }}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '1440px' }}>
            <video 
              ref={videoRef}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }} 
              controls
              autoPlay
            >
              <source 
                src="https://marketing-cdn.fireworktv.com/marketing-site/hero-videos/Homepage-05-25.mp4" 
                type="video/mp4" 
              />
            </video>
            <button 
              id="close-video-modal" 
              style={{
                position: 'absolute',
                top: 0,
                right: '12px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
