import React from 'react';

// 定义组件 ProductCards
// 该组件用于展示产品卡片
const ProductCards = () => {
  return (
    <section className="fw_product_cards">
      <div className="w-embed">
        <style>
          {`
            /* Bento box with link arrow 'bounce' animation */
            @keyframes bounce-left {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(5px);
              }
            }
            
            /* when parent element is hovered, apply animation to arrow element */
            .product-bento-link:hover .link-arrow {
              animation: bounce-left 700ms ease-in-out infinite; 
            }
          `}
        </style>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="center_layout">
            <h2 className="heading-style-h1">Five video commerce experiences.<br />One platform.</h2>
          </div>
          <div className="bento-grid bento-wrapper">
            <div id="w-node-da34132f-a430-37c8-6804-acdf84027378-8402736e" className="bento-box-1">
              <div className="middle-content-pillar text-align-center">
                <h3 className="heading-style-h2">AI Video Assistant</h3>
                <div className="heading-style-h6 text-align-center font-weight-normal">AI sales assistant gives tailored advice, anticipating customer needs.</div>
                <a href="https://firework.com/ai-solutions" className="button is-secondary is-alternate w-button">Explore CELL digital AI</a>
              </div>
              <div className="ava-bento-graphic">
                <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d1d55140b8927279c35da7_ava-example-prod-demo.webp" loading="lazy" alt="" className="ava-bento-img left" />
                <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d1d552cd8d6c3dddb52a57_ava-example-chat-1.webp" loading="lazy" alt="An AI assistant starts a chat, offering to answer your questions." className="ava-bento-img-primary" />
                <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d1d5519dc0baecf199a4ff_ava-example-chat-2.webp" loading="lazy" alt="An AI assistant chat is well underway, offering knowledgeable, helpful advice on makeup products." className="ava-bento-img right" />
                <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673db589938b8c2d2556d802_bento-browser-1.png" loading="lazy" sizes="(max-width: 1848px) 100vw, 1848px" srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673db589938b8c2d2556d802_bento-browser-1-p-500.png 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673db589938b8c2d2556d802_bento-browser-1-p-800.png 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673db589938b8c2d2556d802_bento-browser-1-p-1080.png 1080w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673db589938b8c2d2556d802_bento-browser-1.png 1848w" alt="" className="bento-browser-ui-ava" />
              </div>
            </div>
            <div id="w-node-da34132f-a430-37c8-6804-acdf84027385-8402736e" className="bento-box-2">
              <div className="content-bento">
                <h4 className="heading-style-h4">Shoppable Video</h4>
                <div>Engage and convert your shoppers with engaging and immersive video experiences.</div>
                <a href="https://firework.com/products/shoppable-video" className="text-link-witharrow w-inline-block">
                  <p className="text-size-small margin-0">Learn more</p>
                  <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9d27365712668f14355f_arrow-link.svg" loading="lazy" alt="an arrow icon indicating a link" className="link-arrow" />
                </a>
              </div>
              <div className="browser-ui-2">
                <div className="video-div">
                  <div className="video-crop-2 w-embed">
                    <video width="128%" playsInline loop muted autoPlay preload="none">
                      <source src="https://cdn4.fireworktv.com/marketing-site/shoppable-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-da34132f-a430-37c8-6804-acdf84027385-8402736e" className="bento-box-2">
              <div className="content-bento">
                <h4 className="heading-style-h4">Shoppable Video</h4>
                <div>Engage and convert your shoppers with engaging and immersive video experiences.</div>
                <a href="https://firework.com/products/shoppable-video" className="text-link-witharrow w-inline-block">
                  <p className="text-size-small margin-0">Learn more</p>
                  <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9d27365712668f14355f_arrow-link.svg" loading="lazy" alt="an arrow icon indicating a link" className="link-arrow" />
                </a>
              </div>
              <div className="browser-ui-2">
                <div className="video-div">
                  <div className="video-crop-2 w-embed">
                    <video width="128%" playsInline loop muted autoPlay preload="none">
                      <source src="https://cdn4.fireworktv.com/marketing-site/shoppable-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-da34132f-a430-37c8-6804-acdf84027385-8402736e" className="bento-box-2">
              <div className="content-bento">
                <h4 className="heading-style-h4">Shoppable Video</h4>
                <div>Engage and convert your shoppers with engaging and immersive video experiences.</div>
                <a href="https://firework.com/products/shoppable-video" className="text-link-witharrow w-inline-block">
                  <p className="text-size-small margin-0">Learn more</p>
                  <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9d27365712668f14355f_arrow-link.svg" loading="lazy" alt="an arrow icon indicating a link" className="link-arrow" />
                </a>
              </div>
              <div className="browser-ui-2">
                <div className="video-div">
                  <div className="video-crop-2 w-embed">
                    <video width="128%" playsInline loop muted autoPlay preload="none">
                      <source src="https://cdn4.fireworktv.com/marketing-site/shoppable-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-da34132f-a430-37c8-6804-acdf84027385-8402736e" className="bento-box-2">
              <div className="content-bento">
                <h4 className="heading-style-h4">Shoppable Video</h4>
                <div>Engage and convert your shoppers with engaging and immersive video experiences.</div>
                <a href="https://firework.com/products/shoppable-video" className="text-link-witharrow w-inline-block">
                  <p className="text-size-small margin-0">Learn more</p>
                  <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9d27365712668f14355f_arrow-link.svg" loading="lazy" alt="an arrow icon indicating a link" className="link-arrow" />
                </a>
              </div>
              <div className="browser-ui-2">
                <div className="video-div">
                  <div className="video-crop-2 w-embed">
                    <video width="128%" playsInline loop muted autoPlay preload="none">
                      <source src="https://cdn4.fireworktv.com/marketing-site/shoppable-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;