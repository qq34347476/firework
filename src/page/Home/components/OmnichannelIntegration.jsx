import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 引入 Swiper 的样式
import 'swiper/css';

const slideTitles = [
  "Website",
  "Email",
  "Mobile",
  "Packaging",
  "SMS",
  "Social",
  "In-store",
  "Publisher",
  "Retailer",
];

const IntegrationSwiper = () => {
  const [textSwiper, setTextSwiper] = useState(null);
  const [imageSwiper, setImageSwiper] = useState(null);

  useEffect(() => {
    if (textSwiper && imageSwiper) {
      textSwiper.controller.control = imageSwiper;
      imageSwiper.controller.control = textSwiper;
    }
  }, [textSwiper, imageSwiper]);

  const handleSlideChange = (swiper) => {
    setTimeout(() => {
      if (swiper.mousewheel) {
        swiper.mousewheel.releaseOnEdges = false;
      }
    }, 500);
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
                  // breakpoints={{
                  //   992: {
                  //     creativeEffect: {
                  //       prev: {
                  //         translate: [400, 0, 800],
                  //         opacity: 0,
                  //       },
                  //       next: {
                  //         translate: [-50, 0, -100],
                  //         opacity: 0.6,
                  //       },
                  //       active: {
                  //         translate: [0, 0, 0],
                  //         opacity: 1,
                  //       },
                  //                        },
                  // }}
                  className="swiper is-integration-image">
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3193891bb9319c485d45_integrations_Website.avif"
                      alt="A Firework Carousel shoppable video section on a webpage"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c697ac1349e71ce83d_integrations_Email.avif"
                      alt="Embed shoppable videos directly into emails"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd325697a12752794836cb_integrations_Mibile_App.avif"
                      alt="Firework videos used directly in a native mobile application"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c73caa487c02598f34_integrations_Package.avif"
                      alt="Firework videos demonstrating how to unbox products"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3192ad45e4bd7feedc93_integrations_SMS.avif"
                      alt="Shoppable Videos embedded directly in an SMS text conversation."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd31930b76c93bc263d3a8_integrations_Social.avif"
                      alt="Firework videos integrated with social platforms like Instagram, TikTok and more."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/68010392a952c3d42e2ce9a4_integrations_Instore.avif"
                      alt="Use QR codes to bring additional value to in-store experiences."
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe81a4fbc1151b99c7e98d_integrations_Publishers.avif"
                      alt="Firework makes perfect sense for publishers to showcase their products"
                      className="integrations_image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers.webp"
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
                  pagination={{
                    el: '.slider_pagination.is-omnichannel',
                    bulletClass: 'slider_bullet--omnichannel',
                    bulletActiveClass: 'is-active',
                    clickable: true,
                    renderBullet: (index, className) => (
                      <div id={`slide${index + 1}`} className={className} tabIndex="0">
                        <div className="slider_bullet-text">{slideTitles[index]}</div>
                      </div>
                    ),
                  }}
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
                  <SwiperSlide role="listitem" aria-label="1 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Website</h3>
                      <h4 className="heading-style-h4">Drive engagement and product discovery</h4>
                      <p>
                        Unify your brand story with immersive video experiences across your homepage, product pages, and landing pages to drive stronger engagement, higher conversion, and a consistent experience at every touchpoint.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="2 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Email Embed</h3>
                      <h4 className="heading-style-h4">Boost email engagement with embedded video</h4>
                      <p>
                        Increase click-through rates by adding curated video content directly into emails, making each message more impactful and interactive.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="3 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Mobile App</h3>
                      <h4 className="heading-style-h4">Elevate your app experience with embedded videos</h4>
                      <p>
                        Integrate video into your mobile app to captivate users and guide them through discovery, purchase, and loyalty journeys.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="4 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Packaging</h3>
                      <h4 className="heading-style-h4">Connect physical products to digital storytelling</h4>
                      <p>
                        Link packaging to video via QR codes, extending the brand experience post-purchase and turning every product into a content channel.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="5 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">SMS</h3>
                      <h4 className="heading-style-h4">Make messages stand out with video</h4>
                      <p>
                        Add short-form video to SMS campaigns to create high-impact touchpoints that drive engagement and immediate action.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="6 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Social</h3>
                      <h4 className="heading-style-h4">Extend reach through social video syndication</h4>
                      <p>
                        Distribute high-performing content across social platforms to amplify your message, spark engagement, and drive traffic back to owned channels.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="7 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">In-store</h3>
                      <h4 className="heading-style-h4">Bridge in-store moments with video</h4>
                      <p>
                        Extend your digital strategy into the physical world with in-store videos that educate, inspire, and convert shoppers.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="8 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Publisher</h3>
                      <h4 className="heading-style-h4">Extend your reach through publisher networks</h4>
                      <p>
                        Collaborate with publishers to expose your brand to new audiences, build trust through credible placements, and ultimately boost traffic and sales.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide role="listitem" aria-label="9 of 9">
                    <div className="integration_text-wr text-color-white">
                      <h3 className="text-eyebrow">Retailer</h3>
                      <h4 className="heading-style-h4">Seamlessly integrate video into retail channels</h4>
                      <p>
                        Embed video across retailer websites to drive discovery, education, and conversions directly at the point of sale.
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

                <div className="slider_pagination is-omnichannel swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical">
                  {slideTitles.map((title, index) => (
                    <div
                      key={index}
                      id={`slide${index + 1}`}
                      className="slider_bullet--omnichannel"
                      tabIndex="0"
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
