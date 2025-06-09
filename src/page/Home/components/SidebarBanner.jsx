import React, { useState, useEffect, useRef } from 'react';

const SidebarBanner = () => {
  // 组件状态
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  const wrapperRef = useRef(null);

  // 检测移动设备
  const checkIfMobile = () => {
    return window.innerWidth <= 767;
  };

  // 初始化及响应式处理
  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = checkIfMobile();
      setIsMobile(mobileCheck);
      
      // 从移动端切换到桌面端时重设状态
      if (!mobileCheck && isCollapsed) {
        sidebarRef.current.style.width = '50px';
        sidebarRef.current.style.height = '50px';
      }
    };

    // 初始检测
    setIsMobile(checkIfMobile());
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isCollapsed]);

  // 关闭/折叠横幅
  const handleClose = () => {
    setIsCollapsed(true);
    
    if (isMobile) {
      sidebarRef.current.style.display = 'none';
    } else {
      sidebarRef.current.style.width = '50px';
      sidebarRef.current.style.height = '50px';
    }
  };

  // 展开横幅
  const handleExpand = () => {
    setIsCollapsed(false);
    sidebarRef.current.style.display = 'block';
    sidebarRef.current.style.width = '';
    sidebarRef.current.style.height = '';
    
    // 重置动画效果
    wrapperRef.current.style.transition = 'none';
    wrapperRef.current.style.opacity = '0';
    
    setTimeout(() => {
      wrapperRef.current.style.transition = 'all 0.3s ease-in';
      wrapperRef.current.style.opacity = '1';
    }, 50);
  };

  return (
    <div
      id="sidebar-banner"
      ref={sidebarRef}
      data-wf-fixed-sidebar-banner-variant="background-image"
      className="sidebar-banner w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1000,
        width: '300px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease, height 0.3s ease'
      }}
    >
      {/* 背景图片 */}
      <picture>
        <source
          srcSet="
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background-p-500.webp 500w,
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background-p-800.webp 800w,
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background-p-1080.webp 1080w,
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background-p-1600.webp 1600w,
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background-p-2000.webp 2000w,
            https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67d09a135579334cd485b06a_AI-playbook-background.webp 2288w
          "
          sizes="100vw"
          type="image/webp"
        />
        <img
          src="static/picture/67d09a135579334cd485b06a_ai-playbook-background.webp"
          loading="lazy"
          alt="An illustration of a Californian street with mountains and palm trees"
          className="sidebar-banner-bg-img w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit'
          }}
        />
      </picture>
      
      {/* 关闭按钮 */}
      <div 
        className="close-btn"
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          zIndex: 10,
          display: isCollapsed ? 'none' : 'block',
          opacity: isCollapsed ? 0 : 1,
          transition: 'opacity 0.2s ease'
        }}
      >
        <img 
          src="static/picture/67004b2102c63b975969dcb4_close-white.svg" 
          loading="lazy" 
          alt="close icon" 
          className="banner-close-btn"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* 展开按钮 - 只在折叠状态(非移动端)显示 */}
      {isCollapsed && !isMobile && (
        <div 
          className="expand-btn"
          onClick={handleExpand}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'white',
            zIndex: 5
          }}
        >
          &#9664;
        </div>
      )}
      
      {/* 主要内容链接 */}
      <a
        ref={wrapperRef}
        href="https://firework.com/ebooks/2025-ai-video-commerce-etail?utm_campaign=sidebar-banner"
        className={`sidebar-banner-link w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796 w-inline-block ${isCollapsed ? 'collapsed' : ''}`}
        style={{
          position: 'relative',
          display: 'block',
          padding: '20px',
          color: 'white',
          textDecoration: 'none',
          overflow: 'hidden',
          height: '100%',
          borderRadius: 'inherit',
          zIndex: 2,
          background: 'rgba(0,0,0,0.5)'
        }}
      >
        {/* 微光动画效果 */}
        <div 
          className="shimmer-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: '-200%',
            width: '200%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 70%)',
            opacity: '0.2',
            transform: 'skewX(-20deg)',
            animation: 'shimmer 6s infinite linear'
          }}
        />
        
        <div 
          className="sidebar-banner-eyebrow w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796"
          style={{
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px'
          }}
        >
          2025 Video + AI Commerce Blueprint
        </div>
        
        <div 
          className="sidebar-banner-body w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796"
          style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '16px'
          }}
        >
          Unlock 30% GMV Lift
        </div>
        
        <div
          id="sidebar-banner-cta-btn"
          className="button dynamic-text-size w-variant-e910c896-fa9c-e050-f4d4-ad546ae08796 is-alternate is-glass"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            marginTop: '10px'
          }}
        >
          Download Now
        </div>
      </a>

      {/* 动态样式 */}
      <style>
        {`
          @keyframes shimmer {
            0% { left: -200%; }
            100% { left: 200%; }
          }
          
          .sidebar-banner-link:hover #sidebar-banner-cta-btn {
            transform: translateY(-3px);
            background-color: rgba(255,255,255,0.25);
          }
          
          .sidebar-banner-link:hover {
            transform: translateY(-5px);
          }
          
          .sidebar-banner-link.collapsed {
            max-height: 0px;
            width: 0px;
            opacity: 0;
            padding: 0;
            margin: 0;
          }
          
          .expand-btn:hover {
            animation: bounce 0.4s ease-in-out infinite alternate;
          }
          
          @keyframes bounce {
            0% { transform: translate(-50%, -50%) translateX(0); }
            100% { transform: translate(-50%, -50%) translateX(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default SidebarBanner;
