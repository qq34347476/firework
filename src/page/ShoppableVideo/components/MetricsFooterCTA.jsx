import React from 'react';

const MetricsFooterCTA = () => {
  return (
    <section className="metrics-footer-cta-section">
      <div className="w-layout-blockcontainer container-large w-container">
        <div className="metrics-footer-cols w-row">
          
          {/* Left Column - CTA Section */}
          <div className="metrics-footer-cta-col w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
            <h3 className="landing-page-section-heading light text-align-left plg-metrics-section-heading">
              Outperform expectations. Achieve remarkable results with CELL digital
            </h3>
            
            <div className="metrics-footer-cta-btns">
              <a 
                id="btn-book-a-demo-3" 
                href="https://firework.com/demo-request" 
                className="button is-secondary is-alternate no-wrap w-button"
              >
                Book a Demo
              </a>
              <a 
                id="btn-preview-on-your-site-1" 
                href="https://preview.firework.com/" 
                className="button no-wrap w-button"
              >
                Preview on your site
              </a>
            </div>
          </div>

          {/* Right Column - Metrics Grid */}
          <div className="metrics-footer-metrics-col w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
            <div id="w-node-_34048dc2-4ad0-2e4d-2df0-9979abd4a1be-77222c89" className="w-layout-layout quick-stack wf-layout-layout">
              
              {/* Metric Cell 1 */}
              <div id="w-node-_34048dc2-4ad0-2e4d-2df0-9979abd4a1bf-77222c89" className="w-layout-cell metrics-cell wide">
                <div className="plg-metric-section-heading-container">
                  <p className="plg-metric-section-metric">+60%</p>
                  <p className="plg-metric-section-metric-heading-mob">Conversion Rate</p>
                </div>
                <div>
                  <p className="plg-metric-section-metric-heading">Conversion Rate</p>
                  <p className="plg-metric-section-metric-body">
                    vs visitors who didn't interact with CELL digital livestream or short videos.
                  </p>
                </div>
              </div>

              {/* Metric Cell 2 */}
              <div id="w-node-c4661716-c53c-656c-7b96-ed24ea0ad4f6-77222c89" className="w-layout-cell metrics-cell">
                <div className="plg-metric-section-heading-container">
                  <p className="plg-metric-section-metric">+22%</p>
                  <p className="plg-metric-section-metric-heading-mob">CLV</p>
                </div>
                <div>
                  <p className="plg-metric-section-metric-heading">CLV</p>
                  <p className="plg-metric-section-metric-body">
                    Repeat purchase behavior vs average customer behavior.
                  </p>
                </div>
              </div>

              {/* Metric Cell 3 */}
              <div id="w-node-_1c558d8f-1b41-7426-b992-56da6e143ea8-77222c89" className="w-layout-cell metrics-cell">
                <div className="plg-metric-section-heading-container">
                  <p className="plg-metric-section-metric">+33%</p>
                  <p className="plg-metric-section-metric-heading-mob">Return&nbsp;Rate</p>
                </div>
                <div>
                  <p className="plg-metric-section-metric-heading">Return Rate</p>
                  <p className="plg-metric-section-metric-body">
                    vs conventional eCommerce without video engagement.
                  </p>
                </div>
              </div>

              {/* Metric Cell 4 */}
              <div id="w-node-_09103762-5075-81df-0a21-b6d743b49895-77222c89" className="w-layout-cell metrics-cell wide">
                <div className="plg-metric-section-heading-container">
                  <p className="plg-metric-section-metric">3X</p>
                  <p className="plg-metric-section-metric-heading-mob">NPS</p>
                </div>
                <div>
                  <p className="plg-metric-section-metric-heading">NPS</p>
                  <p className="plg-metric-section-metric-body">
                    vs visitors who didn't interact with CELL digital livestream or short videos.
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

export default MetricsFooterCTA;
