import React from 'react';
// 导入 Swiper React 组件
import { Swiper, SwiperSlide } from 'swiper/react';

// 导入 Swiper 样式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 导入需要的 Swiper 模块
import { Navigation, Pagination, Autoplay } from 'swiper';

// 您可能需要创建一个单独的 CSS 文件来存放下面 HTML 中的样式
// import './ShoppableVideoSlider.css'; 

/**
 * @function ShoppableVideoSlider
 * @description 一个展示可购物视频轮播的 React 组件，使用 Swiper 实现。
 * @returns {JSX.Element} React 组件
 */
const ShoppableVideoSlider = () => {
  const videos = [
    {
      id: 1,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/beachwaver-feature-floating.mov',
      type: 'video/mp4',
    },
    {
      id: 2,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Loreal.mp4',
      type: 'video/mp4',
    },
    {
      id: 3,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Greenpan.mp4',
      type: 'video/mp4',
    },
    {
      id: 4,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Williams-Sonoma.mp4',
      type: 'video/mp4',
    },
    {
      id: 5,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/shoprite.mp4',
      type: 'video/mp4',
    },
    {
      id: 6,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Redken.mp4',
      type: 'video/mp4',
    },
    {
      id: 7,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Fresh-Market.mp4',
      type: 'video/mp4',
    },
    {
      id: 8,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Vanity-Planet.mp4',
      type: 'video/mp4',
    },
    {
      id: 9,
      src: 'https://marketing-cdn.fireworktv.com/marketing-site/shoppable-video/fw-in-action/Vogue.mp4',
      type: 'video/mp4',
    },
  ];

  return (
    <section className="large-videos-slider-section">
      <div className="w-layout-blockcontainer container-large w-container">
        <div className="padding-global">
          <h3 className="landing-page-section-heading light">Firework in Action</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // 注册模块
            spaceBetween={0} // 根据需要调整幻灯片之间的距离
            slidesPerView={1} // 每次显示的幻灯片数量
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              renderBullet: function (index, className) {
                // 使用原始HTML的点样式，className 会包含 swiper-pagination-bullet 和 swiper-pagination-bullet-active
                return '<span class="' + className + ' w-slider-dot" style="margin-left: 3px; margin-right: 3px;"></span>';
              },
            }}
            loop={true} // 开启循环模式
            autoplay={false} // 根据原始HTML data-autoplay="false"
            // autoplay={{
            //   delay: 4000, // 对应 data-delay="4000"
            //   disableOnInteraction: false,
            // }}
            className="large-videos-slider" // 可以保留或替换为Swiper特定的类名
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="large-slider-video"> {/* 使用 SwiperSlide 组件 */}
                <div className="large-slider-video-embed w-embed">
                  <video
                    className="shop-vid-in-action-video"
                    style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                    playsInline
                    loop
                    muted
                    autoPlay
                    preload="auto"
                  >
                    <source src={video.src} type={video.type} />
                  </video>
                </div>
              </SwiperSlide>
            ))}
            {/* 自定义导航按钮，需要匹配 navigation 配置中的 nextEl 和 prevEl */}
            <div className="swiper-button-prev-custom left-arrow w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="swiper-button-next-custom right-arrow w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
            </div>
            {/* 自定义分页容器，需要匹配 pagination 配置中的 el */}
            <div className="swiper-pagination-custom slide-nav w-slider-nav w-shadow w-round"></div>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </div>
    </section>
  );
};

export default ShoppableVideoSlider;