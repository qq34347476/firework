import React, { useEffect } from 'react';

const ShopVideoGrid = () => {
  useEffect(() => {
    // 初始化卡片交互效果 - 完全保持原有逻辑
    const initCardInteractions = () => {
      const cards = document.querySelectorAll('.grid-feature-card');
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('grid-feature-card-hover');
        });

        if (!isTouchDevice) {
          card.addEventListener('mouseover', () => card.classList.add('grid-feature-card-hover'));
          card.addEventListener('mouseleave', () => card.classList.remove('grid-feature-card-hover'));
        }
      });
    };

    initCardInteractions();
  }, []);

  // 保留所有原始CSS样式
  const inlineStyles = `
    .grid-feature-card,
    .grid-card-img,
    .grid-card-content,
    .grid-card-suppliment {
      transition: all 0.2s ease;
    }

    .grid-feature-card.grid-feature-card-hover .grid-card-img {
      height: 100%;
      margin-top: 0;
    }

    .grid-feature-card.grid-feature-card-hover .grid-card-suppliment {
      width: 0;
    }

    .grid-feature-card.grid-feature-card-hover .grid-card-trio-vid {
      display: flex;
      align-items: center;
      max-width: 85%;
      margin-top: 0;
      max-height: unset;
    }

    .grid-feature-card.grid-feature-card-hover .grid-card-video {
      width: 95%;
      max-width: 95%;
      margin-top: 0;
      padding: 0;
    }

    .grid-feature-card.grid-feature-card-hover .grid-card-content {
      opacity: 0;
    }
  `;

  return (
    <section className="cards-grid-section dark">
      <div className="w-layout-blockcontainer container-large w-container">
        <h3 className="landing-page-section-heading text-color-white">Use Cases</h3>
        
        <style>{inlineStyles}</style>

        <div id="w-node-_9c12def6-27c3-b9d2-36d8-4cf581e7d1e7-77222c89" 
             className="w-layout-layout grid-cards-section-grid tablet-2-cols wf-layout-layout">
          
          {/* 卡片1 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094728f510fe09ac7e3b5_shop-vid-example-1a.png"
                  loading="lazy" 
                  alt="An influencer shows an earring" 
                  className="grid-card-suppliment" />
                <div className="grid-card-trio-vid w-embed">
                  <video
                    style={{width: '100%', height: '90%', borderRadius: '0.5rem', margin: 'auto 0'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-1.mov"
                      type="video/mp4" />
                  </video>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094723cfdd9c7cb40c717_shop-vid-example-1c.png"
                  loading="lazy" 
                  alt="An influencer shows a makeup product" 
                  className="grid-card-suppliment" />
              </div>
              <div className="grid-card-content full-gradient---center-aligned-32 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-5">
                  <strong>Showcase Trending Products</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-6">
                  <p className="plg-grid-card-body full-gradient---center-aligned-7">
                    Highlight popular items with interactive video carousels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 卡片2 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned-8">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <div className="grid-card-video w-embed">
                  <video
                    style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-2.mov"
                      type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="grid-card-content full-gradient---center-aligned-11 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-12">
                  <strong>Inspire Shoppers</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-13">
                  <p className="plg-grid-card-body full-gradient---center-aligned-14">
                    Feature recipe and tutorial videos in a seamless grid layout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 卡片1 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094728f510fe09ac7e3b5_shop-vid-example-1a.png"
                  loading="lazy" 
                  alt="An influencer shows an earring" 
                  className="grid-card-suppliment" />
                <div className="grid-card-trio-vid w-embed">
                  <video
                    style={{width: '100%', height: '90%', borderRadius: '0.5rem', margin: 'auto 0'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-1.mov"
                      type="video/mp4" />
                  </video>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094723cfdd9c7cb40c717_shop-vid-example-1c.png"
                  loading="lazy" 
                  alt="An influencer shows a makeup product" 
                  className="grid-card-suppliment" />
              </div>
              <div className="grid-card-content full-gradient---center-aligned-32 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-5">
                  <strong>Showcase Trending Products</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-6">
                  <p className="plg-grid-card-body full-gradient---center-aligned-7">
                    Highlight popular items with interactive video carousels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 卡片2 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned-8">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <div className="grid-card-video w-embed">
                  <video
                    style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-2.mov"
                      type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="grid-card-content full-gradient---center-aligned-11 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-12">
                  <strong>Inspire Shoppers</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-13">
                  <p className="plg-grid-card-body full-gradient---center-aligned-14">
                    Feature recipe and tutorial videos in a seamless grid layout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 卡片1 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094728f510fe09ac7e3b5_shop-vid-example-1a.png"
                  loading="lazy" 
                  alt="An influencer shows an earring" 
                  className="grid-card-suppliment" />
                <div className="grid-card-trio-vid w-embed">
                  <video
                    style={{width: '100%', height: '90%', borderRadius: '0.5rem', margin: 'auto 0'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-1.mov"
                      type="video/mp4" />
                  </video>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c094723cfdd9c7cb40c717_shop-vid-example-1c.png"
                  loading="lazy" 
                  alt="An influencer shows a makeup product" 
                  className="grid-card-suppliment" />
              </div>
              <div className="grid-card-content full-gradient---center-aligned-32 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-5">
                  <strong>Showcase Trending Products</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-6">
                  <p className="plg-grid-card-body full-gradient---center-aligned-7">
                    Highlight popular items with interactive video carousels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 卡片2 */}
          <div className="w-layout-cell grid-cards-cell">
            <div className="grid-feature-card card-small full-gradient---center-aligned-8">
              <div className="grid-card-img full-gradient---center-aligned-2 large-img">
                <div className="grid-card-video w-embed">
                  <video
                    style={{width: '100%', height: '100%', borderRadius: '1rem'}}
                    playsInline
                    loop
                    muted
                    autoPlay
                    data-wf-ignore="true"
                    data-object-fit="contain">
                    <source
                      src="https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/shoppable-video-example-2.mov"
                      type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="grid-card-content full-gradient---center-aligned-11 less-content">
                <p className="plg-grid-card-heading full-gradient---center-aligned-12">
                  <strong>Inspire Shoppers</strong>
                </p>
                <div className="plg-grid-card-body-container full-gradient---center-aligned-13">
                  <p className="plg-grid-card-body full-gradient---center-aligned-14">
                    Feature recipe and tutorial videos in a seamless grid layout.
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

export default ShopVideoGrid;
