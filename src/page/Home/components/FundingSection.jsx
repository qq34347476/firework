import React from 'react';

const FundingSection = () => {
  return (
    <div 
      data-wf-funding-section-variant="blackout" 
      className="innovation_section w-variant-2777be56-5402-3fbe-f04a-ecf1fd6389e4"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="innovation_layout">
            <div className="innovation_heading-wr">
              <h2 className="innovation-heading w-variant-2777be56-5402-3fbe-f04a-ecf1fd6389e4">
                <span className="text-color-primary">$250M funding,</span> 
                top Silicon Valley team re-defining video experience on every website
              </h2>
            </div>
            
            <div 
              data-w-id="3651a859-7f9e-6c9d-d1f3-cb38087b0e9a" 
              className="innovation_image-wr"
            >
              <picture>
                <source 
                  srcSet="
                    https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/68012b0b466c7e5c60051b09_d35ef99c810c8352e7e902a94dc49cc6_funding_graphic-2025-p-500.png 500w,
                    https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/68012b0b466c7e5c60051b09_d35ef99c810c8352e7e902a94dc49cc6_funding_graphic-2025-p-800.png 800w,
                    https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/68012b0b466c7e5c60051b09_d35ef99c810c8352e7e902a94dc49cc6_funding_graphic-2025.avif 2139w
                  " 
                  sizes="(max-width: 2139px) 100vw, 2139px"
                  type="image/avif" 
                />
                <img
                  src="static/picture/68012b0b466c7e5c60051b09_d35ef99c810c8352e7e902a94dc49cc6_funding_graphic-2025.avif"
                  loading="lazy"
                  alt="A graph showing the progression and funding support of the CELL digital organization."
                  className="innovation_image"
                  data-w-id="3651a859-7f9e-6c9d-d1f3-cb38087b0e9b"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingSection;
