import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 动画定义
const flowerPulse = keyframes`
  0%, 20% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.05);
  }
`;

// 样式组件
const FlowerSection = styled.section`
  &.fw_flower_section {
    position: relative;
  }

  .flower_section-body.in-view {
    .flower_ring,
    .flower-core {
      animation: ${flowerPulse} 10s ease-out infinite;
    }
  
    .ring-1 { animation-delay: 0.2s; }
    .ring-2 { animation-delay: 0.4s; }
    .ring-3 { animation-delay: 0.6s; }
  
    .flower_pedal:not(.active) .flower_pedal--inner {
      animation: ${flowerPulse} 10s ease-out infinite;
    }
  
    .flower_pedal--inner.pedal-2:not(.active) { animation-delay: 0.2s; }
    .flower_pedal--inner.pedal-3:not(.active) { animation-delay: 0.4s; }
    .flower_pedal--inner.pedal-4:not(.active) { animation-delay: 0.6s; }
    .flower_pedal--inner.pedal-5:not(.active) { animation-delay: 0.8s; }
    .flower_pedal--inner.pedal-6:not(.active) { animation-delay: 1s; }
  
    .flower_pedal--inner.paused {
      animation: none !important;
    }
  
    .flower_label {
      transition: transform 0.4s ease, opacity 0.4s ease;
      
      &.enter {
        transform: translateX(100%);
        opacity: 0;
      }
      
      &.enter-active {
        transform: translateX(0%);
        opacity: 1;
      }
      
      &.exit {
        transform: translateX(0%);
        opacity: 1;
      }
      
      &.exit-active {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  }
`;

const FlowerAnimation = () => {
  const [activePedal, setActivePedal] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const [labelText, setLabelText] = useState("Influencer Generated Content");
  const [animationsPaused, setAnimationsPaused] = useState(false);
  const sectionRef = useRef(null);
  const cycleIntervalRef = useRef(null);
  const idleTimerRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  const pedalData = [
    { id: 1, label: "Influencer Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/IGC.mp4" },
    { id: 2, label: "Brand Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/BGC.mp4" },
    { id: 3, label: "User Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/UGC.mp4" },
    { id: 4, label: "AI Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/AI-GC-v2.mp4" },
    { id: 5, label: "Store Associate Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/SAGC-v2.mp4" },
    { id: 6, label: "Merchant Generated Content", video: "https://marketing-cdn.fireworktv.com/marketing-site/fw_flower/MGC-v2.mp4" }
  ];

  // 设置活动花瓣
  const setActivePedalHandler = (pedalNumber) => {
    setActivePedal(pedalNumber);
    setLabelText(pedalData[pedalNumber - 1].label);
    handleInteraction();
  };

  // 用户交互处理
  const handleInteraction = () => {
    setAnimationsPaused(true);
    resetIdleTimer();
  };

  // 重置空闲计时器
  const resetIdleTimer = () => {
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setAnimationsPaused(false);
    }, 10000);
  };

  // 改变标签
  const changePedalLabel = (pedalNumber) => {
    setActivePedalHandler(pedalNumber);
  };

  // 初始化动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
            
            // 4秒后开始动画
            setTimeout(() => {
              setActivePedalHandler(1);
              
              // 设置循环切换
              cycleIntervalRef.current = setInterval(() => {
                const nextPedal = activePedal === 6 ? 1 : activePedal + 1;
                setActivePedalHandler(nextPedal);
              }, 3000);
            }, 4000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, [activePedal]);

  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      
      resizeTimeoutRef.current = setTimeout(() => {
        // 这里可以添加任何需要在调整大小后执行的操作
      }, 4000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FlowerSection className="fw_flower_section" ref={sectionRef}>
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="w-layout-blockcontainer container-xsm text-align-center w-container">
            <h2 className="heading-style-h2 text-color-white">Sourcing video content made easy</h2>
            <div className="spacer-xhuge"></div>
          </div>
          <div className={`flower_section-body ${isInView ? 'in-view' : ''}`}>
            <div className="fw_flower-container">
              <div className="fw_flower_pedals-wr">
                {pedalData.map(pedal => (
                  <div
                    key={pedal.id}
                    data-pedal={pedal.id}
                    className={`flower_pedal pedal-${pedal.id === 6 ? 1 : pedal.id + 1} ${activePedal === pedal.id ? 'active' : ''}`}
                    onClick={() => {
                      clearInterval(cycleIntervalRef.current);
                      changePedalLabel(pedal.id);
                    }}
                  >
                    <div className={`flower_pedal--inner pedal-${pedal.id === 6 ? 1 : pedal.id + 1} ${animationsPaused ? 'paused' : ''}`}>
                      <div className={`pedal_vid pedal-${pedal.id === 6 ? 1 : pedal.id + 1}`}>
                        <video
                          className="lazy"
                          style={{
                            width: '110%',
                            objectFit: 'cover',
                            transform: 'rotate(-300deg) translate(-50px, 10px)',
                            transition: 'opacity 400ms ease-in-out',
                            opacity: activePedal === pedal.id ? 1 : 0
                          }}
                          autoPlay
                          playsInline
                          loop
                          muted
                          preload="none"
                        >
                          <source src={pedal.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="dot large white is-pedal"></div>
                    <div className={`pedal_label pedal-${pedal.id === 6 ? 1 : pedal.id + 1}`}>
                      {pedal.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* 环状文本 */}
              <div className="flower_ring ring-3">
                <img 
                  src="static/picture/6822243c555d65e489d644ad_text-only (5).avif" 
                  loading="lazy" 
                  alt="text reads &quot;omnichannel syndication&quot;" 
                  className="fwf_curved_text ring-3" 
                />
              </div>
              <div className="flower_ring ring-2">
                <img 
                  src="static/picture/68221ac1097a486ce00af658_text-only (4).avif" 
                  loading="lazy" 
                  alt="text reads &quot;Video &amp; AI Infrastructure&quot;" 
                  className="fwf_curved_text ring-2" 
                />
              </div>
              <div className="flower_ring ring-1">
                <img
                  src="static/picture/68221680ef1805722d049c05_87cf4da3fdf6a4885ee05fb7e4ce87ba_videocsm-curved-txt.avif"
                  loading="lazy"
                  alt="text reads &quot;Video CMS&quot;"
                  className="fwf_curved_text ring-1"
                />
              </div>
              <img
                loading="lazy"
                src="static/picture/67ee98ea353426309c7b2acb_fw_logo-pinkgradient.webp"
                alt=""
                className="flower_core"
              />
            </div>
            <div className="flower_label-wr">
              <div className="flower_label">
                {labelText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FlowerSection>
  );
};

export default FlowerAnimation;
