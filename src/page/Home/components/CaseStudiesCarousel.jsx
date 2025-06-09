// CaseStudies.jsx
import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const CaseStudies = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current && 
      prevButtonRef.current && 
      nextButtonRef.current
    ) {
      const casesSwiper = new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 32,
        centeredSlides: true,
        loop: true,
        initialSlide: 1,
        speed: 400,
        mousewheel: false,
        observeParents: true,
        observer: true,
        a11y: {
          enabled: true,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          slideLabelMessage: "{{index}} of {{slidesLength}}",
          slideRole: "listitem",
        },
        navigation: {
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
          disabledClass: "is-disabled",
        },
      });

      return () => {
        casesSwiper.destroy(true, true);
      };
    }
  }, []);

  // 幻灯片数据（最佳实践：从API或props传入）
  const slides = [
    {
      id: "natori",
      alt: "Natori case study",
      imgSrc: "static/picture/673fd3e8ecf839e9a2e737e6_671b6e93728c659864223e29_cases_img-2.png",
      title: "How Natori Drove a 141% Increase in Conversion Rates",
      link: "/customer-stories/natori-success-story"
    },
    {
      id: "musely",
      alt: "Musely case study",
      imgSrc: "static/picture/68014fbcc5040f0f10264f90_musely-thumbnail.avif",
      title: "Musely: Elevating the Cancellation Flow with Firework's AVA",
      link: "/customer-stories/musely-success-story"
    },
    {
      id: "fresh-market",
      alt: "Fresh Market case study",
      imgSrc: "static/picture/671b6e6eb8909a0e3a144bf8_cases_img-1.avif",
      title: "How The Fresh Market Achieved 18.7x Engagement Rates",
      link: "/customer-stories/the-fresh-market-success-story"
    },
    {
      id: "hylands",
      alt: "Hyland's case study",
      imgSrc: "static/picture/68014e9eabbab858be57305d_thumbnail-cohely.avif",
      title: "How Hyland's Boosted Website Conversions by 3.4x with Authentic UGC Video Reviews",
      link: "/customer-stories/hylands"
    },
    {
      id: "heinz",
      alt: "Heinz case study",
      imgSrc: "static/picture/671ca4861a180b5b9cd56a44_cases_img-5.avif",
      title: "How Heinz Supercharged Customer Engagement With Firework",
      link: "/customer-stories/heinz-success-story"
    },
    {
      id: "stolen-stores",
      alt: "Stolen Stores case study",
      imgSrc: "static/picture/671ca45136d08c7da1d7975e_cases_img-4.avif",
      title: "Stolen Stores Increases Order Value by 10% With Shoppable Video",
      link: "/customer-stories/stolen-stores-success-story"
    },
    {
      id: "cymbiotika",
      alt: "Cymbiotika case study",
      imgSrc: "static/picture/671b6ee8fccf34ab0aaef013_cases_img-3.avif",
      title: "Tell an Incredible Story Through Short Videos",
      link: "/customer-stories/cymbiotika-success-story"
    }
  ];

  return (
    <section className="case_studies-section">
      <div className="cases_section">
        <div className="padding-global">
          <div className="container-small">
            <h2 className="heading-style-h2 text-align-center">
              Discover how brands succeed with video commerce
            </h2>
          </div>
        </div>
        
        <div className="slider_component is-cases">
          <div 
            ref={swiperRef}
            className="swiper is-cases w-dyn-list swiper-horizontal"
          >
            <div 
              className="swiper-wrapper is-cases w-dyn-items" 
              role="list"
              aria-live="polite"
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="swiper-slide is-cases w-dyn-item"
                  role="listitem"
                  style={{ width: 'auto' }}
                  aria-label={`${index + 1} of ${slides.length}`}
                >
                  <div className="case_card dark">
                    <div className="case_card_img-wr">
                      <img
                        alt={slide.alt}
                        src={slide.imgSrc}
                        loading="eager"
                        className="case_card-img"
                      />
                    </div>
                    <div className="case_card_text-wr">
                      <h3 className="heading-style-h3">{slide.title}</h3>
                      <div className="padding-bottom padding-small"></div>
                      <div className="case_button-wr">
                        <a
                          href={slide.link}
                          className="button is-link is-icon w-inline-block"
                        >
                          <div className="text-color-white">Learn more</div>
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.70703 17.7929L15.414 12.0859L9.70703 6.37891L8.29303 7.79291L12.586 12.0859L8.29303 16.3789L9.70703 17.7929Z"
                                fill="#FFFFFF"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          
          <div className="swiper_arrows-wr">
            <button 
              ref={prevButtonRef}
              id="cs-prev-swiper"
              className="slider_arrow is-cases swiper-prev w-inline-block"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <div className="icon-embed-xsmall w-embed">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2929 6.71973L7.58594 12.4267L13.2929 18.1337L14.7069 16.7197L10.4139 12.4267L14.7069 8.13373L13.2929 6.71973Z"
                    fill="#0A0A0A"
                  ></path>
                </svg>
              </div>
            </button>
            
            <button 
              ref={nextButtonRef}
              id="cs-next-swiper"
              className="slider_arrow is-cases swiper-next w-inline-block"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <div className="icon-embed-xsmall w-embed">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.70703 17.3769L15.414 11.6699L9.70703 5.96289L8.29303 7.37689L12.586 11.6699L8.29303 15.9629L9.70703 17.3769Z"
                    fill="#0A0A0A"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
