import React from 'react';

/**
 * @function CTASection
 * @description 一个行动号召 (Call To Action)区块的 React 组件，用于提升网站互动。
 * @returns {JSX.Element} 返回 CTA 区块的 JSX 元素。
 */
const CTASection = () => {
  return (
    <div data-wf--standard-cta--variant="base" className="cta_section">
      <div className="padding-global">
        <div className="container-medium">
          <div className="cta_layout">
            <h2 className="heading-style-h1">Boost engagement on your website through video</h2>
            <div className="padding-bottom padding-small"></div>
            <h3 className="heading-style-h6">Find out how CELL digital can power your business forward</h3>
            <div className="button-group is-cta">
              <a 
                id="btn-footer-preview-on-your-site" 
                href="https://firework.com/demo-request?utm_campaign=contact-us" 
                className="button is-large w-node-_5f729f0e-67bd-7fb2-710d-db2d38b726c3-38b726b9 w-button"
              >
                Book a Demo
              </a>
              <a 
                id="btn-footer-start-for-free" 
                href="https://firework.com/video-commerce-free-trial?utm_campaign=contact-us" 
                className="button is-secondary is-alternate is-large w-button"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cta_bg"></div>
    </div>
  );
};

export default CTASection;