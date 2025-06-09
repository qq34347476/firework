import React from 'react';

const FeaturedCaseStudies = () => {
  return (
    <section className="featured-case-studies-section">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-large w-container">
          <h1 className="landing-page-section-heading light">Shoppable Video Success Stories</h1>
          
          <div className="blog_card_container_trio">
            
            {/* Case Study Card 1 */}
            <a href="https://firework.com/customer-stories/hylands" className="blog_card w-inline-block">
              <img 
                src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67be3b6bdabb0680a1f1fc0d_hylands-thumb.png" 
                loading="lazy" 
                sizes="100vw" 
                srcSet="
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67be3b6bdabb0680a1f1fc0d_hylands-thumb-p-500.png 500w,
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67be3b6bdabb0680a1f1fc0d_hylands-thumb-p-800.png 800w,
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67be3b6bdabb0680a1f1fc0d_hylands-thumb-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67be3b6bdabb0680a1f1fc0d_hylands-thumb.png 1200w
                " 
                alt="Young people enjoy some Hylands juice drinks." 
                className="blog_card_img ft-case-study cover"
              />
              <div className="blog_card_text-wr ft-case-study">
                <h1 className="heading-style-small">
                  How Hyland's Boosted Website Conversions by 3.4x with Authentic UGC Video Reviews
                </h1>
                <div className="button is-link is-icon">
                  <div>Read article</div>
                  <div className="icon-embed-xsmall w-embed">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.70703 17.7929L15.414 12.0859L9.70703 6.37891L8.29303 7.79291L12.586 12.0859L8.29303 16.3789L9.70703 17.7929Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Case Study Card 2 */}
            <a href="http://webflow.firework.com/customer-stories/the-fresh-market-success-story" className="blog_card w-inline-block">
              <img 
                src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf15ecfc9419d779652cfd_fresh-market-thumb.avif" 
                loading="lazy" 
                alt="The fresh market logo overlayed on some delicious looking food." 
                className="blog_card_img ft-case-study cover"
              />
              <div className="blog_card_text-wr ft-case-study">
                <h1 className="heading-style-h6">
                  How The Fresh Market Achieved 18.7x Engagement Rates
                </h1>
                <div className="button is-link is-icon">
                  <div>Read article</div>
                  <div className="icon-embed-xsmall w-embed">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.70703 17.7929L15.414 12.0859L9.70703 6.37891L8.29303 7.79291L12.586 12.0859L8.29303 16.3789L9.70703 17.7929Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Case Study Card 3 */}
            <a href="https://firework.com/customer-stories/greenpan-success-story" className="blog_card w-inline-block">
              <img 
                src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf17a1ab84dfa6b4859fcc_GreenPan-thumb.webp" 
                loading="lazy" 
                sizes="100vw" 
                srcSet="
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf17a1ab84dfa6b4859fcc_GreenPan-thumb-p-500.webp 500w,
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf17a1ab84dfa6b4859fcc_GreenPan-thumb-p-800.webp 800w,
                  https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf17a1ab84dfa6b4859fcc_GreenPan-thumb.webp 832w
                " 
                alt="The GreenPan logo overlays a chef making a delicious meal in a bright kitchen." 
                className="blog_card_img ft-case-study cover"
              />
              <div className="blog_card_text-wr ft-case-study">
                <h1 className="heading-style-h6">
                  GreenPan success story
                </h1>
                <div className="button is-link is-icon">
                  <div>Read article</div>
                  <div className="icon-embed-xsmall w-embed">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.70703 17.7929L15.414 12.0859L9.70703 6.37891L8.29303 7.79291L12.586 12.0859L8.29303 16.3789L9.70703 17.7929Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
