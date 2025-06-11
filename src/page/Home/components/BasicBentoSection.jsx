import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
// import './BentoSection.css';

const BasicBentoSection = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // 检测移动设备
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 幻灯片数据
  const slides = [
    {
      id: 1,
      logo: "static/picture/67ed976c8fbd535cd827f148_logo.svg",
      title: "CELL digital Raises $150 Million in Funding Round Led by Softbank",
      link: "https://www.wsj.com/articles/shoppable-video-startup-firework-raises-150-million-in-funding-round-led-by-softbank-11653386401",
      alt: "Wall Street Journal logo"
    },
    {
      id: 2,
      logo: "static/picture/67f69cd45f0500cfbd4db785_chain-store-ago-logo-white.webp",
      logoSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67f69cd45f0500cfbd4db785_chain-store-ago-logo-white-p-500.webp 500w, static/picture/67f69cd45f0500cfbd4db785_chain-store-ago-logo-white.webp 1029w",
      title: "Victoria’s Secret enhances online shopping experience with CELL digital",
      link: "https://chainstoreage.com/victorias-secret-enhance-online-shopping-experience-interactive-video",
      alt: "Chain Store Age logo"
    },
    {
      id: 3,
      logo: "static/picture/67fe69cf7120b9ee9f70e641_logo-supermarketnews-white.avif",
      title: "Walmart delves into ‘shoppertainment’ livestream video",
      link: "https://www.supermarketnews.com/grocery-trends-data/walmart-delves-into-shoppertainment-livestream-video",
      alt: "Supermarket News Logo"
    }
  ];

  // 右侧卡片数据
  const rightCards = [
    {
      id: 1,
      image: "static/picture/67163a721531be1bdfa3a9eb_enterprise_card-2-1.avif",
      alt: "",
    },
    {
      id: 2,
      image: "static/picture/6716903e484c7fb65c648e6f_enterprise_card-2-2.avif",
      srcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/6716903e484c7fb65c648e6f_enterprise_card-2-2-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/6716903e484c7fb65c648e6f_enterprise_card-2-2.avif 1125w",
      alt: "Photo of the building with Nasdaq logo and accompanied with text: Nasdaq congratulates CELL digital on their $150M series led by Softbank"
    }
  ];

  // 底部卡片数据
  const bottomCard = {
    logo: "static/picture/67ed98cf245871481d07da16_f%26s-award-2024-2025.webp",
    title: "CELL digital wins Frost & Sullivan Competitive Strategy Leadership Award two years in a row",
    link: "https://martech360.com/marketing-automation/e-commerce/firework-honored-with-2024-frost-sullivan-competitive-strategy-leadership-award/",
    alt: "CELL digital is a two-time consecutive Frost & Sullivan Best Practices Award winner"
  };

  return (
    <section className="basic_bento_section">
      <div className="padding-global">
        <div className="container-large">
          <div className="basic_bento_layout">
            {/* 左侧轮播组件 */}
            <div className="card-border">
              <div className="bb_slider">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    prevEl: '.bb-slider-nav-prev',
                    nextEl: '.bb-slider-nav-next',
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper-container"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <a 
                        href={slide.link} 
                        className="gradient-card square"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="enterprise_top_text-wr">
                          {slide.logoSrcSet ? (
                            <img
                              srcSet={slide.logoSrcSet}
                              sizes="(max-width: 1029px) 100vw, 1029px"
                              src={slide.logo}
                              loading="lazy"
                              alt={slide.alt}
                              className="grad-card-logo"
                            />
                          ) : (
                            <img
                              src={slide.logo}
                              loading="lazy"
                              alt={slide.alt}
                              className="grad-card-logo"
                            />
                          )}
                          <p className="text-size-xlarge text-weight-semibold">{slide.title}</p>
                        </div>
                        <div className="text-link-witharrow float-r">
                          <p className="text-size-small text-weight-bold padding-0 margin-0">Read Article</p>
                          <img 
                            src="static/picture/673f9d27365712668f14355f_arrow-link.svg" 
                            loading="lazy" 
                            alt="an arrow icon indicating a link" 
                            className="link-arrow small"
                          />
                        </div>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* 导航箭头 - 仅在PC端显示 */}
                {!isMobile && (
                  <>
                    <div className="bb-slider-nav-prev hide swiper-button-prev">
                      <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="bb-slider-nav-next hide swiper-button-next">
                      <div className="w-icon-slider-right"></div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 右侧两栏图片 */}
            <div className="enterprise_column-2">
              {rightCards.map((card) => (
                <div key={card.id} className="enterprise_card_border is-2">
                  {card.srcSet ? (
                    <img
                      src={card.image}
                      srcSet={card.srcSet}
                      sizes="(max-width: 1125px) 100vw, 1125px"
                      loading="lazy"
                      alt={card.alt}
                      className="enterprise_card-2_image"
                    />
                  ) : (
                    <img
                      src={card.image}
                      loading="lazy"
                      alt={card.alt}
                      className="enterprise_card-2_image"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* 底部卡片 */}
            <div className="card-border">
              <a 
                href={bottomCard.link} 
                className="gradient-card dark"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="enterprise_top_text-wr narrow">
                  <img
                    src={bottomCard.logo}
                    loading="lazy"
                    sizes="(max-width: 560px) 100vw, 560px"
                    srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ed98cf245871481d07da16_F%26S-award-2024-2025-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67ed98cf245871481d07da16_F%26S-award-2024-2025.webp 560w"
                    alt={bottomCard.alt}
                    className="image-39"
                  />
                  <div className="text-size-large text-weight-semibold">{bottomCard.title}</div>
                </div>
                <div className="text-link-witharrow float-r">
                  <p className="text-size-small text-weight-bold padding-0 margin-0">Read Article</p>
                  <img 
                    src="static/picture/673f9d27365712668f14355f_arrow-link.svg" 
                    loading="lazy" 
                    alt="an arrow icon indicating a link" 
                    className="link-arrow small"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicBentoSection;
