import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const IndustryBentoSwiper = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);

    // 幻灯片数据
    const slides = [
        {
            id: 'beauty',
            title: 'Beauty',
            testimonial: {
                quote: '"Now we truly hear our customers, and it\'s not just a static reason code - it\'s their own words. That\'s invaluable." (With a 22x ROI increase and 25% fewer cancellations.)',
                author: 'Rocco Li,',
                position: 'VP of Product, Musely',
                link: '/customer-stories/musely-success-story'
            },
            logosText: 'Fueling growth for the top beauty companies.',
            logos: [
                {
                    src: '67f9379376dd8320e10ec807_dove-logo-white.png',
                    alt: 'Dove logo',
                    className: 'grow'
                },
                {
                    src: '67a0e3fa38f10cd500441813_logo-loreal-white.svg',
                    alt: 'L\'Oreal logo',
                    className: ''
                },
                {
                    src: '67f937e8e15d908dea6a5c0a_logo-philosophy-white.avif',
                    alt: 'Philosophy logo',
                    className: 'lighten'
                },
                {
                    src: '67f937e8daa43d445c2bf1a5_logo-redken-white.avif',
                    alt: 'Redken logo',
                    className: 'grow'
                }
            ],
            playbook: {
                image: '67f938a77ccd4efb6232d0a7_beauty_bento_img.avif',
                alt: 'An illustration of a shelf full of makeup products',
                text: 'Video engagement drove a 47% increase in lifetime value across top Beauty brands.',
                link: '/ebooks/2025-video-commerce-blueprint-beauty-personal-care',
                linkText: 'Learn more'
            },
            video: 'https://marketing-cdn.fireworktv.com/marketing-site/bento/Beauty.mp4'
        },
        {
            id: 'grocery',
            title: 'Grocery',
            testimonial: {
                quote: '"With CELL digital, we saw conversion rates of the featured special occasion meals at 300% greater than our traditional digital advertising results."',
                author: 'Kevin Miller,',
                position: 'Chief Marketing Officer, Fresh Market',
                link: '/customer-stories/the-fresh-market-success-story'
            },
            logosText: 'Trusted by the world\'s leading grocery retailers and brands.',
            logos: [
                {
                    src: '67a0e6952bf71c81d52ed4dd_c74b342fe38e5aa970b96c2a7f540d4d_logo-albertsons-white.avif',
                    alt: 'Albertson\'s Logo',
                    className: 'grow padding-0'
                },
                {
                    src: '67f93b6a1e09c1be25f9dcdc_logo-safeway-white.avif',
                    alt: 'Safeway logo',
                    className: 'grow padding-0'
                },
                {
                    src: '67f93bbd3913eeb8a7afcdb2_logo-shoprite-white.avif',
                    alt: 'Shoprite Logo',
                    className: 'grow padding-0'
                },
                {
                    src: '67a0e6f559f27136be8e6cdb_logo-freshmarket-white.svg',
                    alt: 'Fresh Market Logo',
                    className: 'grow padding-0'
                }
            ],
            playbook: {
                image: '67f6cfb420f99ff9f95abc50_grocery_bento_img.avif',
                alt: 'An illustration of a glass display case full of produce, baked goods and packaged groceries',
                text: 'Top Shoppable Videos deliver an 8% CVR, which is 2.7% above the industry average.',
                link: '/ebooks/2025-grocery-video-commerce-global-blueprint',
                linkText: 'Learn more'
            },
            video: 'https://marketing-cdn.fireworktv.com/marketing-site/bento/Grocery.mp4'
        },
        // 其他幻灯片数据...
    ];

    return (
        <section className="industry_bento_swiper">
            <div className="padding-global">
                <div className="container-large">
                    <h2 className="heading-style-h2 text-align-center">
                        Driving conversions for the world's leading brands
                    </h2>

                    <div className="slider_component is-playbooks">
                        <div className="slider_pn-wr">
                            {/* 上一页按钮 */}
                            <button
                                aria-label="navigate slideshow left"
                                className="slider_arrow indbnto swiper-prev"
                                ref={prevRef}
                            >
                                <div className="icon-embed-xsmall">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.6213 10.5033H21.5V13.5033H8.6213L13.5606 18.4426L11.4393 20.5639L2.87866 12.0033L11.4393 3.44263L13.5606 5.56395L8.6213 10.5033Z"
                                            fill="#878787"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {/* 分页器 */}
                            <div
                                className="slider_pagination is-industry_bento"
                                ref={paginationRef}
                            />

                            {/* 下一页按钮 */}
                            <button
                                aria-label="navigate slideshow right"
                                className="slider_arrow indbnto swiper-next"
                                ref={nextRef}
                            >
                                <div className="icon-embed-xsmall">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.978 13.5602H3.42432V10.4462H15.978L11.1633 5.31912L13.2311 3.11719L21.5757 12.0032L13.2311 20.8892L11.1633 18.6872L15.978 13.5602Z"
                                            fill="#878787"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Swiper轮播组件 */}
                        <Swiper
                            ref={swiperRef}
                            className="swiper industry_bento"
                            modules={[Navigation, Pagination, EffectCreative]}
                            grabCursor
                            loop={false}
                            centeredSlides
                            initialSlide={0}
                            slidesPerView="auto"
                            spaceBetween={32}
                            slideActiveClass="is-active"
                            a11y={{
                                enabled: true,
                                prevSlideMessage: "Previous slide",
                                nextSlideMessage: "Next slide",
                                slideLabelMessage: "{{index}} of {{slidesLength}}",
                                slideRole: "listitem",
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                                disabledClass: "is-disabled",
                            }}
                            pagination={{
                                el: paginationRef.current,
                                clickable: true,
                                bulletActiveClass: "is-active",
                                bulletClass: "slider_bullet--indbnto",
                                renderBullet: (index, className) => {
                                    const slideTitles = slides.map(slide => slide.title);
                                    return `
                    <div id="slide${index + 1}" class="${className}">
                      <div class="slider_bullet-text">${slideTitles[index]}</div>
                    </div>
                  `;
                                }
                            }}
                            effect="creative"
                            creativeEffect={{
                                prev: {
                                    translate: ["-108%", 0, 0],
                                    scale: 1,
                                    opacity: 1,
                                },
                                next: {
                                    translate: ["108%", 0, 0],
                                    scale: 1,
                                    opacity: 1,
                                },
                                active: {
                                    scale: 1,
                                    opacity: 1,
                                },
                            }}
                            onInit={(swiper) => {
                                // 解决初始化时导航按钮引用问题
                                if (swiper.params.navigation) {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }

                                if (swiper.params.pagination) {
                                    swiper.params.pagination.el = paginationRef.current;
                                    swiper.pagination.init();
                                    swiper.pagination.render();
                                    swiper.pagination.update();
                                }
                            }}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide
                                    key={slide.id}
                                    className="industry_bento_slide industry_bento"
                                >
                                    <div className="basic_bento_layout industr-bento">
                                        {/* 客户评价卡片 */}
                                        <Link
                                            to={slide.testimonial.link}
                                            className="gradient-card indbnto_testimonial-wr"
                                        >
                                            <div>
                                                <div className="indbnto_testimonial text-size-xlarge">
                                                    {slide.testimonial.quote}
                                                </div>
                                                <div className="indbnto_testimonial-auth-wr">
                                                    <div className="text-weight-semibold-2-2">{slide.testimonial.author}</div>
                                                    <div>{slide.testimonial.position}</div>
                                                </div>
                                            </div>
                                            <div className="text-link-witharrow overline">
                                                <div>Read Case study</div>
                                                <img
                                                    loading="lazy"
                                                    src="/static/picture/673f9d27365712668f14355f_arrow-link.svg"
                                                    alt="an arrow icon indicating a link"
                                                    className="link-arrow small"
                                                />
                                            </div>
                                        </Link>

                                        {/* 中间列 - 品牌Logo和Playbook */}
                                        <div className="indbnto-center_col">
                                            {/* 品牌Logo部分 */}
                                            <div className="indbnto_logos-wr">
                                                <div className="indbnto_logos-txt">{slide.logosText}</div>
                                                <div className="indbnto_logos">
                                                    <div className="indbnto_logos-row">
                                                        {slide.logos.slice(0, 2).map((logo, i) => (
                                                            <img
                                                                key={`${slide.id}-logo-${i}`}
                                                                src={`/static/picture/${logo.src}`}
                                                                loading="lazy"
                                                                alt={logo.alt}
                                                                className={`indbnto_logo ${logo.className}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="indbnto_logos-row">
                                                        {slide.logos.slice(2, 4).map((logo, i) => (
                                                            <img
                                                                key={`${slide.id}-logo-${i + 2}`}
                                                                src={`/static/picture/${logo.src}`}
                                                                loading="lazy"
                                                                alt={logo.alt}
                                                                className={`indbnto_logo ${logo.className}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Playbook部分 */}
                                            <div className="indbtno_playbook">
                                                <img
                                                    src={`/static/picture/${slide.playbook.image}`}
                                                    loading="lazy"
                                                    alt={slide.playbook.alt}
                                                    className="indbtno_playbook-img"
                                                />
                                                <Link
                                                    to={slide.playbook.link}
                                                    className="indbnto_playbook-txt-wr"
                                                >
                                                    <div className="indbnto_playbook-txt">{slide.playbook.text}</div>
                                                    <div className="text-link-witharrow">
                                                        <div className="indbnto_playbook-link">{slide.playbook.linkText}</div>
                                                        <img
                                                            loading="lazy"
                                                            src="/static/picture/673f9d27365712668f14355f_arrow-link.svg"
                                                            alt="an arrow icon indicating a link"
                                                            className="link-arrow small"
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* 视频列 */}
                                        <div className="card-border r-20">
                                            <div className="indbnto-vid_col">
                                                <div className="bento_vid">
                                                    <video
                                                        className="lazy"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        playsInline
                                                        loop
                                                        muted
                                                        autoPlay
                                                        preload="none"
                                                    >
                                                        <source src={slide.video} type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .industry_bento_swiper {
          position: relative;
        }
        
        /* 基础布局样式 */
        .basic_bento_layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.5rem;
        }
        
        .indbnto-center_col {
          grid-column: span 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        /* 卡片样式 */
        .gradient-card {
          display: block;
          padding: 2rem;
          border-radius: 1rem;
          background-image: linear-gradient(225deg, #000 18%, #072248 100%, #0e418a);
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .gradient-card:hover {
          transform: translateY(-4px);
        }
        
        /* 客户评价样式 */
        .indbnto_testimonial {
          font-size: 1.25rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        
        .indbnto_testimonial-auth-wr {
          margin-top: 1rem;
        }
        
        .text-weight-semibold-2-2 {
          font-weight: 600;
        }
        
        /* Logo区域样式 */
        .indbnto_logos-wr {
          background-color: #242424;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .indbnto_logos-txt {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .indbnto_logos {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .indbnto_logos-row {
          display: flex;
          justify-content: space-between;
        }
        
        .indbnto_logo {
          max-height: 2.5rem;
          object-fit: contain;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .indbnto_logo.grow:hover {
          transform: scale(1.05);
        }
        
        .indbnto_logo.lighten:hover {
          opacity: 0.8;
        }
        
        /* Playbook样式 */
        .indbtno_playbook {
          background-color: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .indbtno_playbook-img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .indbnto_playbook-txt-wr {
          display: block;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
        }
        
        .indbnto_playbook-txt {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        /* 视频列样式 */
        .card-border {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .indbnto-vid_col {
          width: 100%;
          height: 100%;
        }
        
        /* 导航按钮样式 */
        .slider_pn-wr {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .slider_arrow {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .slider_arrow:hover svg path {
          fill: var(--color-primary);
        }
        
        /* 分页器样式 */
        .slider_pagination {
          display: flex;
          gap: 0.5rem;
        }
        
        .slider_bullet--indbnto {
          background:none;
          border: none;
          cursor: pointer;
          padding: .5625rem 1.375rem;
          border-radius: 2rem;
          background-color: var(--color-bg-secondary);
          transition: all 0.3s ease;
        }

    .slider_bullet--indbnto.is-active {
      background-color: var(--color_greyscale--grey-900)
    }
    
    .slider_bullet-text {
      font-size: 0.875rem;
      color: var(--color-text);
    }
    
    .slider_bullet--indbnto.is-active .slider_bullet-text {
      color: white;
    }
    
    /* 链接箭头动画 */
    .link-arrow.small {
      width: 1rem;
      height: auto;
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
    
    .indbnto_testimonial-wr:hover .link-arrow.small,
    .indbnto_playbook-txt-wr:hover .link-arrow.small {
      transform: translateX(4px);
    }
    
    /* 响应式设计 */
    @media (max-width: 991px) {
      .basic_bento_layout {
        grid-template-columns: 1fr;
      }
      
      .indbnto-center_col {
        grid-row: 2;
      }
      
      .card-border,
      .gradient-card {
        grid-column: span 2;
      }
    }
    
    @media (max-width: 767px) {
      .basic_bento_layout {
        padding: 1rem;
      }
      
      .gradient-card {
        padding: 1.5rem;
      }
      
      .indbnto_testimonial {
        font-size: 1rem;
      }
    }
  `}</style>
        </section>
    );
};

export default IndustryBentoSwiper;