import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const slideTitles = [
  "Social",
  "Email",
  "Mobile",
  "Packaging",
  "SMS",
  // "Social",
  "In-store",
  "Publisher Partners",
  "Retailer",
];

const IntegrationSwiper = () => {
  const [textSwiper, setTextSwiper] = useState(null);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (textSwiper && imageSwiper) {
      textSwiper.controller.control = imageSwiper;
      imageSwiper.controller.control = textSwiper;
    }
  }, [textSwiper, imageSwiper]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setTimeout(() => {
      if (swiper.mousewheel) {
        swiper.mousewheel.releaseOnEdges = false;
      }
    }, 500);
  };

  const handleBulletClick = (index) => {
    if (textSwiper) {
      textSwiper.slideTo(index);
    }
  };

  const handleReachEnd = (swiper) => {
    setTimeout(() => {
      if (swiper.mousewheel) {
        swiper.mousewheel.releaseOnEdges = true;
      }
    }, 750);
  };

  const handleReachBeginning = (swiper) => {
    setTimeout(() => {
      if (swiper.mousewheel) {
        swiper.mousewheel.releaseOnEdges = true;
      }
    }, 750);
  };

  return (
    <div className="integration_section blackout">
      <div className="padding-global">
        <div className="container-large">
          <div className="container-xsm">
            <h2 className="heading-style-h2 text-align-center">
              Omnichannel video syndication across every touchpoint
            </h2>
          </div>
          <div className="slider_component is-integrations">
            <div className="integration_layout">
              <div className="integration_left-wr">
                <Swiper
                  modules={[Mousewheel, Controller]}
                  speed={400}
                  effect="creative"
                  creativeEffect={{
                    prev: {
                      translate: [400, 0, 800],
                      opacity: 0,
                    },
                    next: {
                      translate: [-25, 0, -100],
                      opacity: 0.6,
                    },
                    active: {
                      translate: [0, 0, 0],
                      opacity: 1,
                    },
                    perspective: true,
                    limitProgress: 2,
                  }}
                  mousewheel={{ releaseOnEdges: true }}
                  slidesPerView="auto"
                  onSwiper={setImageSwiper}
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                  onReachEnd={(swiper) => handleReachEnd(swiper)}
                  onReachBeginning={(swiper) => handleReachBeginning(swiper)}
                  className="swiper is-integration-image">
                  <SwiperSlide>
                    <img
                      src="/static/picture/Social.png"
                      alt="A CELL digital Carousel shoppable video section on a webpage"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/Email.png"
                      alt="Embed shoppable videos directly into emails"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/Mobile.png"
                      alt="CELL digital videos used directly in a native mobile application"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/Packaging.png"
                      alt="CELL digital videos demonstrating how to unbox products"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/SMS.png"
                      alt="Shoppable Videos embedded directly in an SMS text conversation."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <img
                      src="/static/picture/SMS.png"
                      alt="CELL digital videos integrated with social platforms like Instagram, TikTok and more."
                      className="integrations_image"
                    />
                  </SwiperSlide> */}
                  <SwiperSlide>
                    <img
                      src="/static/picture/In-Store.png"
                      alt="Use QR codes to bring additional value to in-store experiences."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/Publisher Partners.png"
                      alt="CELL digital makes perfect sense for publishers to showcase their products"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/static/picture/Retailers.png"
                      alt="Embed video across retailer websites to drive discovery, education, and conversions directly at the point of sale."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="integration_right-wr">
                <Swiper
                  modules={[Mousewheel, Keyboard, Navigation, Pagination, Controller]}
                  speed={600}
                  slidesPerView="auto"
                  spaceBetween={24}
                  direction="horizontal"
                  mousewheel={{ releaseOnEdges: true }}
                  keyboard={true}
                  onSwiper={setTextSwiper}
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                  onReachEnd={(swiper) => handleReachEnd(swiper)}
                  onReachBeginning={(swiper) => handleReachBeginning(swiper)}
                  navigation={{
                    nextEl: '.slider_arrow.is-omnichannel.swiper-next',
                    prevEl: '.slider_arrow.is-omnichannel.swiper-prev',
                    disabledClass: 'is-disabled',
                  }}
                  breakpoints={{
                    768: {
                      direction: 'vertical',
                      spaceBetween: 0,
                    },
                  }}
                  className="swiper is-integration-text"
                >
                  <SwiperSlide role="listitem" aria-label="1 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Social</h3>
                      <h4 className="heading-style-h4">Amplify Your Brand’s Reach Through Social media</h4>
                      <p>
                        Distribute high-performing content across popular social platforms to maximize visibility, foster engagement, and drive additional traffic back to your owned channels.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="2 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Email Embed</h3>
                      <h4 className="heading-style-h4">Nurture Customer Relationships with Email Marketing</h4>
                      <p>
                        Leverage personalized, purposeful, and high-impact email campaigns to connect with your customers, drive loyalty, and foster repeat purchases.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="3 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Mobile App</h3>
                      <h4 className="heading-style-h4">Reach Customers Anytime, Anywhere</h4>
                      <p>
                        Design a frictionless and conversion-focused experience for your mobile shoppers — from push notifications and SMS promotions to fully optimized mobile storefronts.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="4 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Packaging</h3>
                      <h4 className="heading-style-h4">Turn Packaging Into a Branding Opportunity</h4>
                      <p>
                        Elevate your customer experience with packaging inserts, QR codes, samples, or promotions — adding an additional powerful marketing moment to every delivery.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="5 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">SMS</h3>
                      <h4 className="heading-style-h4">Boost Conversion with Personalized SMS Marketing</h4>
                      <p>
                        Send tailored messages directly to your customers’ smartphones — delivering promotions, alerts, and incentives in real time.
                      </p>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide role="listitem" aria-label="6 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Social</h3>
                      <h4 className="heading-style-h4">Extend reach through social video syndication</h4>
                      <p>
                        Distribute high-performing content across social platforms to amplify your message, spark engagement, and drive traffic back to owned channels.
                      </p>
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide role="listitem" aria-label="6 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">In-store</h3>
                      <h4 className="heading-style-h4">Create Immersive In-Store Experiences</h4>
                      <p>
                        Extend your digital strategy into physical spaces with in-store promotions, demos, and interactive displays — strengthening loyalty and deepening customer relationships.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="7 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Publisher Partners</h3>
                      <h4 className="heading-style-h4">Extend your reach through publisher networks</h4>
                      <p>
                        Collaborate with publishers to expose your brand to new audiences, build trust through credible placements, and ultimately boost traffic and sales.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="8 of 8">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Retailer</h3>
                      <h4 className="heading-style-h4">Support Your Retail Partners for Mutual Success</h4>
                      <p>
                        Provide marketing materials, co-promotions, and collaborative campaigns to empower your retail network — unlocking shared growth and loyalty.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="slider_pn-white_wr">
                <div className="slider_arrow is-omnichannel swiper-prev">
                  <a href="#" className="w-inline-block" aria-label="Previous slide" aria-controls="swiper-wrapper-378ed89471e0786f">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.6213 10.5033H21.5V13.5033H8.6213L13.5606 18.4426L11.4393 20.5639L2.87866 12.0033L11.4393 3.44263L13.5606 5.56395L8.6213 10.5033Z" fill="#878787" />
                    </svg>
                  </a>
                </div>

                <div className="is-omnichannel swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical">
                  {slideTitles.map((title, index) => (
                    <div
                      key={index}
                      id={`slide${index + 1}`}
                      className={`slider_bullet--omnichannel ${index === activeIndex ? 'is-active' : ''}`}
                      tabIndex="0"
                      onClick={() => handleBulletClick(index)}
                    >
                      <div className="slider_bullet-text">{title}</div>
                    </div>
                  ))}
                </div>

                <div className="slider_arrow is-omnichannel swiper-next">
                  <a href="#" className="w-inline-block" aria-label="Next slide" aria-controls="swiper-wrapper-378ed89471e0786f">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.978 13.5602H3.42432V10.4462H15.978L11.1633 5.31912L13.2311 3.11719L21.5757 12.0032L13.2311 20.8892L11.1633 18.6872L15.978 13.5602Z" fill="#878787" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSwiper;
