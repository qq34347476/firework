import React from 'react';
import './HeroSection.css'; // 我们将创建这个CSS文件

const HeroSection = () => {
  return (
    <section className="shp-vid-hero-section">
      <div className="hero_2025-video-background">
        <video 
          id="hero-video"
          className="hero-video"
          playsInline
          loop
          muted
          autoPlay
          data-wf-ignore="true"
          data-object-fit="cover"
          loading="eager"
          preload="auto"
        >
          <source 
            src="/static/videos/1.mp4" 
            type="video/mp4" 
          />
          您的浏览器不支持HTML5视频
        </video>
      </div>
      <div className="shp-vid-hero-content text-color-white container-large">
        <div className="hero-heading-container">
          <h1 className="hero-heading">Engage, Inspire, Convert</h1>
          <p className="hero-subtitle">Experience shopping like never before</p>
          <div className="shpvid-hero-btns">
            <a 
              id="hero-btn-start-for-free" 
              href="https://firework.com/video-commerce-free-trial" 
              className="button is-secondary is-alternate is-large no-wrap drop-shadow"
            >
              Start for free
            </a>
            <a 
              id="hero-btn-book-a-demo" 
              href="https://firework.com/demo-request?utm_campaign=shpvid-product-page" 
              className="button is-large no-wrap"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
