import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const ProductCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const slideTitles = [
    "AI Video Solutions",
    "Shoppable Video",
    "Video Showroom",
    "1:1 Video Chat"
  ];

  const slides = [
    {
      id: 1,
      title: "AI Video Solutions",
      link: "https://firework.com/ai-solutions",
      imageSrc: "static/picture/67fe884cf372efbf2922f1a8_ai_solutions-slide.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe884cf372efbf2922f1a8_AI_solutions-slide-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe884cf372efbf2922f1a8_AI_solutions-slide.avif 1218w",
      alt: "Firework's AI Video Assistant (AVA) answering customer questions and giving product advice through chat and video conversations."
    },
    {
      id: 2,
      title: "Shoppable Video",
      link: "https://firework.com/products/shoppable-video",
      imageSrc: "static/picture/67fe920e9bb2901e5fd35115_shoppablevideo-slide.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe920e9bb2901e5fd35115_shoppablevideo-slide-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe920e9bb2901e5fd35115_shoppablevideo-slide.avif 1218w",
      alt: "short, interactive videos engage users"
    },
    {
      id: 3,
      title: "Video Showroom",
      link: "https://firework.com/solutions/digital-showroom/",
      imageSrc: "static/picture/67fe906f69cf9b70556fdbd6_videoshowroom-slide.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe906f69cf9b70556fdbd6_videoshowroom-slide-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe906f69cf9b70556fdbd6_videoshowroom-slide.avif 1220w",
      alt: "Firework's video showroom educates and inspires while reducing friction to buy"
    },
    {
      id: 4,
      title: "1:1 Video Chat",
      link: "https://firework.com/solutions/one-to-one-virtual-shopping/",
      imageSrc: "static/picture/67fe906f3255c3b96d07655e_videochat-slide.avif",
      imageSrcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe906f3255c3b96d07655e_videochat-slide-p-500.avif 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67fe906f3255c3b96d07655e_videochat-slide.avif 1220w",
      alt: "Firework live 1:1 chat brings the in-store experience and human connection online"
    }
  ];

  return (
    <section data-wf-product-carousel-variant="blackout" className="product_carousel_section">
      <div className="padding-global">
        <div className="container-large">
          <div className="container-small text-align-center">
            <h2 className="heading-style-h2">Supercharge your site with Firework, the all-in-one-platform</h2>
          </div>
          <div className="slider_component is-product">
            <div className="slider_pn-wr">
              {/* 上一页按钮 */}
              <a 
                ref={prevRef}
                aria-label="previous slide" 
                href="#" 
                className="slider_arrow is-product swiper-prev"
              >
                <div className="icon-embed-xsmall">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.6213 10.5033H21.5V13.5033H8.6213L13.5606 18.4426L11.4393 20.5639L2.87866 12.0033L11.4393 3.44263L13.5606 5.56395L8.6213 10.5033Z"
                      fill="#878787" />
                  </svg>
                </div>
              </a>
              
              {/* 分页器 */}
              <div ref={paginationRef} className="slider_pagination is-product" />
              
              {/* 下一页按钮 */}
              <a 
                ref={nextRef}
                aria-label="next slide" 
                href="#" 
                className="slider_arrow is-product swiper-next"
              >
                <div className="icon-embed-xsmall">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.978 13.5602H3.42432V10.4462H15.978L11.1633 5.31912L13.2311 3.11719L21.5757 12.0032L13.2311 20.8892L11.1633 18.6872L15.978 13.5602Z"
                      fill="#878787" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Swiper 轮播 */}
            <div className="swiper is-product">
              <Swiper
                modules={[Navigation, Pagination, EffectCreative]}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                initialSlide={0}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                  disabledClass: "is-disabled"
                }}
                effect="creative"
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-120%", 0, -714],
                    opacity: 1,
                  },
                  next: {
                    shadow: true,
                    translate: ["120%", 0, -714],
                    opacity: 1,
                  },
                  active: {
                    opacity: 1,
                  },
                }}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  bulletActiveClass: "is-active",
                  bulletClass: "slider_bullet",
                  bulletElement: "button",
                  renderBullet: (index, className) => {
                    return `<div id="slide${index + 1}" class="${className}" tabindex="0">
                      <div class="slider_bullet-text">${slideTitles[index]}</div>
                    </div>`;
                  }
                }}
                onInit={(swiper) => {
                  // 修复 swiper 初始化后导航按钮未正确绑定的问题
                  if (typeof swiper.params.navigation !== 'boolean') {
                    const navigation = swiper.params.navigation;
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;
                  }
                  
                  if (typeof swiper.params.pagination !== 'boolean') {
                    swiper.params.pagination.el = paginationRef.current;
                  }
                  swiper.navigation.update();
                  swiper.pagination.update();
                }}
                a11y={{
                  enabled: true,
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  slideLabelMessage: "{{index}} of {{slidesLength}}",
                  slideRole: "listitem",
                }}
                slideActiveClass="is-active"
                className="swiper-wrapper is-product"
                wrapperTag="div"
              >
                {slides.map((slide) => (
                  <SwiperSlide 
                    key={slide.id} 
                    className="swiper-slide is-product" 
                    tag="div" // 使用 div 代替默认的 section
                  >
                    {slide.id === 4 ? (
                      <div className="product-slide_border">
                        <a href={slide.link} className="product_slide is-4">
                          <img
                            src={slide.imageSrc}
                            loading="lazy"
                            sizes="(max-width: 1220px) 100vw, 1220px"
                            srcSet={slide.imageSrcSet}
                            alt={slide.alt}
                            className="product_slide-img"
                          />
                        </a>
                      </div>
                    ) : (
                      <a 
                        href={slide.link} 
                        className={`product_slide ${slide.id === 3 ? 'is-3' : slide.id === 2 ? 'is-2' : ''}`}
                      >
                        <img
                          src={slide.imageSrc}
                          loading="lazy"
                          sizes="(max-width: 1218px) 100vw, 1218px"
                          srcSet={slide.imageSrcSet}
                          alt={slide.alt}
                          className="product_slide-img"
                        />
                      </a>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
