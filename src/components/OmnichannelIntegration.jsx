import React, { useEffect, useRef,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 从 'swiper/modules' 导入模块
import { EffectCreative, Navigation, Pagination, Mousewheel, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OmnichannelIntegration = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const [textSwiper, setTextSwiper] = useState(null);
  const [imgSwiper, setImgSwiper] = useState(null);

  // 同步两个 Swiper 实例
  useEffect(() => {
    if (textSwiper && imgSwiper) {
      textSwiper.controller.control = imgSwiper;
      imgSwiper.controller.control = textSwiper;
    }
  }, [textSwiper, imgSwiper]);

  const slideData = [
    {
      title: "Website",
      subtitle: "Drive engagement and product discovery",
      description: "Unify your brand story with immersive video experiences across your homepage, product pages, and landing pages to drive stronger engagement, higher conversion, and a consistent experience at every touchpoint.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3193891bb9319c485d45_integrations_Website.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3193891bb9319c485d45_integrations_Website-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3193891bb9319c485d45_integrations_Website-p-800.avif 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3193891bb9319c485d45_integrations_Website.avif 1612w",
      alt: "A Firework Carousel shoppable video section on a webpage"
    },
    {
      title: "Email Embed",
      subtitle: "Boost email engagement with embedded video",
      description: "Increase click-through rates by adding curated video content directly into emails, making each message more impactful and interactive.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c697ac1349e71ce83d_integrations_Email.avif",
      alt: "Embed shoppable videos directly into emails"
    },
    {
      title: "Mobile App",
      subtitle: "Elevate your app experience with embedded videos",
      description: "Integrate video into your mobile app to captivate users and guide them through discovery, purchase, and loyalty journeys.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd325697a12752794836cb_integrations_Mibile_App.avif",
      alt: "Firework videos used directly in a native mobile application"
    },
    {
      title: "Packaging",
      subtitle: "Connect physical products to digital storytelling",
      description: "Link packaging to video via QR codes, extending the brand experience post-purchase and turning every product into a content channel.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c73caa487c02598f34_integrations_Package.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c73caa487c02598f34_integrations_Package-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c73caa487c02598f34_integrations_Package-p-800.avif 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ffc6c73caa487c02598f34_integrations_Package.avif 1612w",
      alt: "Firework videos demonstrating how to unbox products"
    },
    {
      title: "SMS",
      subtitle: "Make messages stand out with video",
      description: "Add short-form video to SMS campaigns to create high-impact touchpoints that drive engagement and immediate action.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3192ad45e4bd7feedc93_integrations_SMS.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3192ad45e4bd7feedc93_integrations_SMS-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3192ad45e4bd7feedc93_integrations_SMS-p-800.avif 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd3192ad45e4bd7feedc93_integrations_SMS.avif 1612w",
      alt: "Shoppable Videos embedded directly in an SMS text conversation."
    },
    {
      title: "Social",
      subtitle: "Extend reach through social video syndication",
      description: "Distribute high-performing content across social platforms to amplify your message, spark engagement, and drive traffic back to owned channels.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd31930b76c93bc263d3a8_integrations_Social.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd31930b76c93bc263d3a8_integrations_Social-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd31930b76c93bc263d3a8_integrations_Social-p-800.avif 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd31930b76c93bc263d3a8_integrations_Social.avif 1612w",
      alt: "Firework videos integrated with social platforms like Instagram, TikTok and more."
    },
    {
      title: "In-store",
      subtitle: "Bridge in-store moments with video",
      description: "Extend your digital strategy into the physical world with in-store videos that educate, inspire, and convert shoppers.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/68010392a952c3d42e2ce9a4_integrations_Instore.avif",
      alt: "Use QR codes to bring additional value to in-store experiences."
    },
    {
      title: "Publisher",
      subtitle: "Extend your reach through publisher networks",
      description: "Collaborate with publishers to expose your brand to new audiences, build trust through credible placements, and ultimately boost traffic and sales.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe81a4fbc1151b99c7e98d_integrations_Publishers.avif",
      alt: "Firework makes perfect sense for publishers to showcase their products"
    },
    {
      title: "Retailer",
      subtitle: "Seamlessly integrate video into retail channels",
      description: "Embed video across retailer websites to drive discovery, education, and conversions directly at the point of sale.",
      imageSrc: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers-p-1080.webp 1080w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fd4b834bea12a3ab3cccba_integrations_Retailers.webp 3225w",
      alt: "Embed video across retailer websites to drive discovery, education, and conversions directly at the point of sale."
    }
  ];

  const handleSwiperReachEdge = (swiper) => {
    setTimeout(() => {
      // 增加空值检查
      if (swiper && swiper.params && swiper.params.mousewheel) {
        swiper.params.mousewheel.releaseOnEdges = true;
      }
      // 确保 swiper 实例仍然有效才调用 update
      if (swiper && typeof swiper.update === 'function') {
        swiper.update();
      }
    }, 750);
  };

  const handleSwiperChange = (swiper) => {
    setTimeout(() => {
      // 增加空值检查
      if (swiper && swiper.params && swiper.params.mousewheel) {
        swiper.params.mousewheel.releaseOnEdges = false;
      }
      // 确保 swiper 实例仍然有效才调用 update
      if (swiper && typeof swiper.update === 'function') {
        swiper.update();
      }
    }, 500);
  };

  return (
    <section className="integration_section blackout">
      <div className="padding-global">
        <div className="container-large">
          <div className="container-xsm">
            <h2 className="heading-style-h2 text-align-center">
              Omnichannel video syndication across every touchpoint
            </h2>
          </div>
          <div className="slider_component is-integrations">
            <div className="integration_layout">
              {/* 左侧文本轮播 */}
              <div className="integration_left-wr">
                <Swiper
                  modules={[Navigation, Pagination, Mousewheel, Controller]}
                  direction="vertical"
                  slidesPerView="auto"
                  spaceBetween={24}
                  autoHeight={false}
                  speed={600}
                  mousewheel={{
                    releaseOnEdges: true
                  }}
                  keyboard={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                    disabledClass: "is-disabled"
                  }}
                  pagination={{
                    el: paginationRef.current,
                    clickable: true,
                    bulletActiveClass: "is-active",
                    bulletClass: "slider_bullet--omnichannel",
                    bulletElement: "button",
                    renderBullet: (index, className) => {
                      return `<div id="slide${index + 1}" class="${className}" tabindex="0">
                        <div class="slider_bullet-text">${slideData[index].title}</div>
                      </div>`;
                    }
                  }}
                  onSwiper={setTextSwiper}
                  onSlideChange={(swiper) => handleSwiperChange(swiper)}
                  onReachBeginning={(swiper) => handleSwiperReachEdge(swiper)}
                  onReachEnd={(swiper) => handleSwiperReachEdge(swiper)}
                  breakpoints={{
                    768: {
                      direction: "vertical",
                      spaceBetween: 0
                    }
                  }}
                  className="swiper is-integration-text"
                  wrapperTag="div"
                >
                  {slideData.map((slide, index) => (
                    <SwiperSlide 
                      key={index}
                      className="swiper-slide is-integration-text"
                      role="listitem"
                      aria-label={`${index + 1} of ${slideData.length}`}
                    >
                      <div className="integration_text-wr text-color-white">
                        <h3 className="text-eyebrow">{slide.title}</h3>
                        <h4 className="heading-style-h4">{slide.subtitle}</h4>
                        <p>{slide.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* 分页和导航控制 */}
                <div className="slider_pn-white_wr">
                  <a 
                    ref={prevRef}
                    href="#" 
                    className="slider_arrow is-omnichannel swiper-prev" 
                    tabIndex="-1" 
                    role="button" 
                    aria-label="Previous slide"
                  >
                    <div className="icon-embed-xsmall">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.6213 10.5033H21.5V13.5033H8.6213L13.5606 18.4426L11.4393 20.5639L2.87866 12.0033L11.4393 3.44263L13.5606 5.56395L8.6213 10.5033Z" fill="#878787" />
                      </svg>
                    </div>
                  </a>
                  
                  <div ref={paginationRef} className="slider_pagination is-omnichannel" />
                  
                  <a 
                    ref={nextRef}
                    href="#" 
                    className="slider_arrow is-omnichannel swiper-next" 
                    tabIndex="0" 
                    role="button" 
                    aria-label="Next slide"
                  >
                    <div className="icon-embed-xsmall">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.978 13.5602H3.42432V10.4462H15.978L11.1633 5.31912L13.2311 3.11719L21.5757 12.0032L13.2311 20.8892L11.1633 18.6872L15.978 13.5602Z" fill="#878787" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* 右侧图像轮播 */}
              <div className="integration_right-wr">
                <Swiper
                  modules={[EffectCreative, Mousewheel, Controller]}
                  slidesPerView="auto"
                  speed={400}
                  effect="creative"
                  creativeEffect={{
                    prev: {
                      translate: [400, 0, 800],
                      opacity: 0
                    },
                    next: {
                      translate: [-25, 0, -100],
                      opacity: 0.6
                    },
                    active: {
                      translate: [0, 0, 0],
                      opacity: 1
                    },
                    perspective: true,
                    limitProgress: 2
                  }}
                  mousewheel={{
                    releaseOnEdges: true
                  }}
                  onSwiper={setImgSwiper}
                  onSlideChange={(swiper) => handleSwiperChange(swiper)}
                  onReachBeginning={(swiper) => handleSwiperReachEdge(swiper)}
                  onReachEnd={(swiper) => handleSwiperReachEdge(swiper)}
                  breakpoints={{
                    992: {
                      creativeEffect: {
                        prev: {
                          translate: [400, 0, 800],
                          opacity: 0
                        },
                        next: {
                          translate: [-50, 0, -100],
                          opacity: 0.6
                        },
                        active: {
                          translate: [0, 0, 0],
                          opacity: 1
                        }
                      }
                    }
                  }}
                  className="swiper is-integration-image"
                >
                  {slideData.map((slide, index) => (
                    <SwiperSlide 
                      key={index}
                      className="swiper-slide is-integration-image"
                      role="listitem"
                      aria-label={`${index + 1} of ${slideData.length}`}
                    >
                      <img
                        src={slide.imageSrc}
                        srcSet={slide.imageSrcSet}
                        loading="lazy"
                        sizes="100vw"
                        alt={slide.alt}
                        className="integrations_image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelIntegration;
