import React from 'react';

const CtaSection = () => {
  return (
    <section className="basic-cta-section">
      <div className="w-layout-blockcontainer w-container">
        <div className="padding-global">
          <div className="basic-cta-container">
            <div className="spacer-medium"></div>
            <div className="container-tiny">
              <h1 className="heading-style-h3 text-align-center text-color-white">
                Discover all features of Firework Shoppable Video
              </h1>
            </div>
            <div className="spacer-large"></div>
            <a 
              id="btn-book-a-demo-2" 
              href="https://firework.com/demo-request" 
              className="button is-wide w-button"
            >
              Book a Demo
            </a>
            <div className="spacer-xhuge"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
