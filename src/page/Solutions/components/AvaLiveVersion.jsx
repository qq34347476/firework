import './AvaLiveVersion.css';

const AvaLiveVersion = () => {
  // Handler for Try AVA button
  const handleTryAva = () => {
    if (window._fwn && window._fwn.ava) {
      window._fwn.ava.actions.showWidget({ domain_assistant_id: 'e5xMoK' });
    }
  };

  // Handler for Schedule Demo button
  const handleScheduleDemo = () => {
    const demoSection = document.getElementById('ScheduleDemo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="AVA-Schedule-both-buttons" 
      className="digital-human-container dark-bg-section"
    >
      <div className="container-background"></div>
      
      <div className="content-row">
        {/* Left Column - Text Content */}
        <div className="left-column border-highlight">
          <div className="text-content-wrapper">
            {/* Heading Section */}
            <div className="heading-section">
              <h1 className="main-heading">
                <span className="white-text">Unlock your{' '}</span>
                <span className="highlight-text">digital human</span>
              </h1>
            </div>

            {/* Description */}
            <h5 className="description-text white-text">
              AVA is a self-learning digital human. They are designed to learn from shopper interactions to provide personal recommendations, concerns, and even anticipate your customer needs.
            </h5>

            {/* Buttons */}
            <div className="buttons-container">
              <button 
                className="nectar-button try-ava" 
                onClick={handleTryAva}
                id="trackAva"
              >
                Try AVA
              </button>
              
              <button 
                className="nectar-button schedule-demo" 
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Video */}
        <div className="right-column border-highlight">
          <div className="video-container">
            <video 
              className="nectar-video" 
              width="1280" 
              height="720" 
              preload="auto"
              loop
              autoPlay
              muted
              playsInline
            >
              <source 
                src="https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/AVA-Banner-Vdo.webm" 
                type="video/webm" 
              />
              <source 
                src="https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/AVA-Banner-Vdo.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvaLiveVersion;
