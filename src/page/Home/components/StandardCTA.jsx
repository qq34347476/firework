import React from 'react';
// import PropTypes from 'prop-types';
import './StandardCTA.css';

const StandardCTA = ({
  variant = 'blackout',
  heading = 'Boost engagement on your website through video',
  subheading = 'Find out how CELL digital can power your business forward',
  primaryButton = {
    text: 'Book a Demo',
    url: 'https://firework.com/demo-request?utm_campaign=home-footer-cta',
    id: 'btn-footer-book-a-demo'
  },
  secondaryButton = {
    text: 'Start for free',
    url: 'https://firework.com/video-commerce-free-trial?utm_campaign=home-footer-cta',
    id: 'btn-footer-start-for-free'
  }
}) => {
  return (
    <section 
      data-wf-standard-cta-variant={variant}
      className={`cta_section w-variant-b4792549-aa4a-afb9-e55a-0296bdeff0de ${variant === 'blackout' ? 'bg-black' : 'bg-gray-100'}`}
    >
      {/* 内容部分 */}
      <div className="padding-global relative z-10">
        <div className="container-medium mx-auto px-4">
          <div className="cta_layout text-center max-w-3xl mx-auto">
            <h2 className="heading-style-h1 text-white mb-4 text-4xl md:text-5xl font-bold leading-tight">
              {heading}
            </h2>
            
            <div className="padding-bottom padding-small h-4"></div>
            
            <h3 className="heading-style-h6 text-gray-300 text-xl md:text-2xl font-medium mb-8">
              {subheading}
            </h3>
            
            <div className="button-group is-cta flex flex-col sm:flex-row justify-center gap-4">
              <a
                id={primaryButton.id}
                href={primaryButton.url}
                className="button is-large bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {primaryButton.text}
              </a>
              
              <a
                id={secondaryButton.id}
                href={secondaryButton.url}
                className="button is-secondary is-alternate is-large bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg hover:shadow-lg"
              >
                {secondaryButton.text}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 背景元素 */}
      <div className="cta_bg w-variant-b4792549-aa4a-afb9-e55a-0296bdeff0de absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>
    </section>
  );
};

// StandardCTA.propTypes = {
//   variant: PropTypes.oneOf(['blackout', 'light', 'dark']),
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   primaryButton: PropTypes.shape({
//     text: PropTypes.string,
//     url: PropTypes.string,
//     id: PropTypes.string
//   }),
//   secondaryButton: PropTypes.shape({
//     text: PropTypes.string,
//     url: PropTypes.string,
//     id: PropTypes.string
//   })
// };

export default StandardCTA;
