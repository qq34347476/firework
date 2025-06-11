import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="padding-global">
        <div className="container-large">
          {/* 链接网格布局 */}
          <div className="footer_links_layout">
            {/* 产品链接组 */}
            <div className="footer_links_group">
              <p className="footer_links-group_title">Products</p>
              <div className="footer_links">
                <a id="footer-ai-virtual-assistant-link" href="https://firework.com/solutions/meet-ava/" className="footer_link">
                  1:1 Video Assistant
                </a>
                <a id="footer-digital-showroom-link" href="https://firework.com/solutions/digital-showroom/" className="footer_link">
                  Video Showroom
                </a>
                <a id="footer-one-to-one-virtual-shoppping-link" href="https://firework.com/solutions/one-to-one-virtual-shopping/" className="footer_link">
                  1:1 Video Chat
                </a>
                <a id="footer-shoppable-video-link" href="https://firework.com/solutions/interactive-video/" className="footer_link">
                  Shoppable Video
                </a>
              </div>
            </div>

            {/* 资源链接组 */}
            <div className="footer_links_group">
              <p className="footer_links-group_title">Resources</p>
              <div className="footer_links">
                <a id="footer-blog-link" href="https://firework.com/blog/" className="footer_link">
                  Blog
                </a>
                <a id="footer-case-studies-link" href="https://firework.com/customer-stories/" className="footer_link">
                  Case Studies
                </a>
                <a id="footer-events-link" href="https://firework.com/event/" className="footer_link">
                  Events
                </a>
                <a id="footer-playbooks-link" href="https://firework.com/ebooks/" className="footer_link">
                  Playbooks
                </a>
              </div>
            </div>

            {/* 公司信息链接组 */}
            <div className="footer_links_group">
              <p className="footer_links-group_title">Company</p>
              <div className="footer_links">
                <a id="footer-about-us-link" href="https://firework.com/about-us/" className="footer_link">
                  About Us
                </a>
                <a id="footer-careers-link" href="https://firework.com/careers/" className="footer_link">
                  Careers
                </a>
                <a id="footer-contact-us-link" href="https://firework.com/contact-us/" className="footer_link">
                  Contact Us
                </a>
                <a id="footer-newsroom-link" href="https://firework.com/press-room/" className="footer_link">
                  Newsroom
                </a>
              </div>
            </div>

            {/* 定价链接 */}
            <div className="footer_links_group">
              <a id="footer-pricing-link" href="https://firework.com/plans/" className="footer_links-group_title is-pricing">
                Pricing
              </a>
            </div>
          </div>

          {/* 页脚底部信息 */}
          <div className="footer_credits_layout">
            {/* 公司Logo */}
            <img 
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/66eb0b5f4409fb8feda3979e_firework-logo-black.svg" 
              loading="lazy" 
              alt="CELL digital logo" 
              className="footer_logo" 
            />

            {/* 公司信息 */}
            <p className="footer_credits">
              © 2024 Loop Now Technologies, Inc.<br />
              All rights reserved.<br />
              Toll Free: (US/CAN) 800-717-0750<br />
              Local: 650-844-FRWK (650-844-3795)<br />
              2 West 5th Ave., Suite 400, San Mateo, CA 94402
            </p>

            {/* 法律链接 */}
            <div className="footer_legal_links">
              <a id="footer-privacy-policy" href="https://firework.com/legal/privacypolicy" className="footer_legal_link">
                Privacy Policy
              </a>
              <a id="footer-terms-of-service" href="/legal" className="footer_legal_link">
                Terms of Service
              </a>
              <a id="footer-compliance" href="https://firework.com/compliance/" className="footer_legal_link">
                Compliance
              </a>
            </div>

            {/* 社交媒体链接 */}
            <div className="footer_social_links">
              <a 
                id="footer-linkedin-link" 
                aria-label="Linkedin CELL digital profile" 
                href="https://www.linkedin.com/company/fireworkhq/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer_social_link"
              >
                <LinkedInIcon />
              </a>
              
              <a 
                id="footer-instagram-link" 
                aria-label="Instagram CELL digital profile" 
                href="https://www.instagram.com/fireworkhq/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer_social_link"
              >
                <InstagramIcon />
              </a>
              
              <a 
                id="footer-x-link" 
                aria-label="Twitter CELL digital profile" 
                href="https://twitter.com/FireworkHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer_social_link"
              >
                <TwitterIcon />
              </a>
              
              <a 
                id="footer-youtube-link" 
                aria-label="Youtube CELL digital channel" 
                href="https://www.youtube.com/@FireworkHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer_social_link"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// SVG图标组件
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z" fill="currentColor"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z" fill="currentColor"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z" fill="currentColor"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.593 7.20301C21.4791 6.78041 21.2565 6.39501 20.9474 6.08518C20.6382 5.77534 20.2533 5.55187 19.831 5.43701C18.265 5.00701 12 5.00001 12 5.00001C12 5.00001 5.73599 4.99301 4.16899 5.40401C3.74692 5.52415 3.36282 5.75078 3.05356 6.06214C2.7443 6.3735 2.52028 6.75913 2.40299 7.18201C1.98999 8.74801 1.98599 11.996 1.98599 11.996C1.98599 11.996 1.98199 15.26 2.39199 16.81C2.62199 17.667 3.29699 18.344 4.15499 18.575C5.73699 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6237 18.2714 20.9336 17.9622C21.2436 17.653 21.4674 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.76901 21.593 7.20301ZM9.99599 15.005L10.001 9.00501L15.208 12.01L9.99599 15.005Z" fill="currentColor"></path>
  </svg>
);

export default Footer;
