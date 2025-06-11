import React, { useEffect } from 'react';

const KeyBenefitsSection = () => {
  useEffect(() => {
    // Scroll animation effect - preserved from original
    const handleScroll = () => {
      const cards = document.querySelectorAll('.feature-card-lg');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          card.style.opacity = '1';
          card.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="key-benefits-section">
      <h3 className="landing-page-section-heading">Maximize your brand's potential with CELL digital</h3>
      <div className="w-layout-blockcontainer container-large key-features-cards-container w-container">
        <div className="padding-global">
          <div className="w-layout-blockcontainer feature-card-container _w-full w-container">
            
            {/* Feature Card 1 - Preserved exactly with all original classes */}
            <div 
              data-w-id="319f2b0c-5c45-74c5-6eb2-e0a6bc86fb12" 
              className="feature-card-lg img-card" 
              style={{ 
                opacity: 0, 
                transform: 'translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                transformStyle: 'preserve-3d',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <img 
                sizes="100vw" 
                srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674ddff30974028f59e39326_graphic-expand-your-reach-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674ddff30974028f59e39326_graphic-expand-your-reach-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674ddff30974028f59e39326_graphic-expand-your-reach-p-1080.webp 1080w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674ddff30974028f59e39326_graphic-expand-your-reach.webp 1200w" 
                alt="" 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674ddff30974028f59e39326_graphic-expand-your-reach.webp" 
                className="feature-card-img img-card" 
              />
              <div className="feature-card-content no-bg">
                <h4 className="feature-card-title small">Seamless Integration Across Your Store</h4>
                <div className="ftcard-body-bullets">
                  <p className="ftcard-body image-right-10">
                    Use CELL digital's Social Importer to sync content from TikTok and Instagram, boosting visibility and reaching new customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 - Preserved exactly with all original classes */}
            <div 
              data-w-id="b77216a8-96cb-d115-4890-59e3d10465aa" 
              className="feature-card-lg img-card img-right" 
              style={{ 
                opacity: 0, 
                transform: 'translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                transformStyle: 'preserve-3d',
                transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s'
              }}
            >
              <img 
                sizes="100vw" 
                srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674de04be24c0ac10bedc7d6_graphic-email-conversions-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674de04be24c0ac10bedc7d6_graphic-email-conversions-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674de04be24c0ac10bedc7d6_graphic-email-conversions-p-1080.webp 1080w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674de04be24c0ac10bedc7d6_graphic-email-conversions.webp 1200w" 
                alt="" 
                loading="lazy" 
                src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/674de04be24c0ac10bedc7d6_graphic-email-conversions.webp" 
                className="feature-card-img img-card" 
              />
              <div className="feature-card-content no-bg">
                <h4 className="feature-card-title small">Supercharge Email Conversions with Engaging Videos</h4>
                <div className="ftcard-body-bullets">
                  <p className="ftcard-body image-right-10">
                    Embed high-quality videos into your emails to grab attention, boost engagement, and significantly increase conversion rates.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
