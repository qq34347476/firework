import Hero from './components/Hero'
import FwFlowerSection from './components/FwFlowerSection'
// import Navbar from './components/NavBar'
import IndustryBentoSwiper from './components/IndustryBentoSwiper';
import AnimatedStatsReact from './components/AnimatedStatsReact';
import ProductCarousel from './components/ProductCarousel';
import OmnichannelIntegration from './components/OmnichannelIntegration';
import CaseStudiesCarousel from './components/CaseStudiesCarousel';
import FundingSection from './components/FundingSection';
import BasicBentoSection from './components/BasicBentoSection';
import StandardCTA from './components/StandardCTA';
import SidebarBanner from './components/SidebarBanner';
// import Footer from './components/Footer';

// import './index.css' // 推荐将样式提取到单独CSS文件

function App() {
  return (
    <div className="page-wrapper overflow-hidden">
      {/* 全局样式 */}
      {/* <GlobalStyles /> */}
      
      {/* 项目特定样式 */}
      <ProjectStyles />
      
      {/* 自定义动画 */}
      {/* <CustomAnimations /> */}
      
      {/* <Navbar /> */}

      {/* 侧边栏小广告 */}
      <SidebarBanner />
      {/* 页面内容 */}
      <div class="main-wrapper">
      <Hero />
      <IndustryBentoSwiper />
      {/* 数字动画统计组件 */}
      <AnimatedStatsReact />
      {/* 花朵轮播图 */}
      <FwFlowerSection />
      {/* 产品轮播组件 */}
      <ProductCarousel />
      {/* 全渠道视频联合展示组件 */}
      <OmnichannelIntegration />
      {/* 品牌案例研究轮播组件 */}
      <CaseStudiesCarousel />
      {/* 创新资金展示组件 */}
      <FundingSection />
      {/* 卡片式布局组件 */}
      <BasicBentoSection />
      <StandardCTA />
      {/* <Footer /> */}
      </div>
    </div>
  )
}

// 提取全局样式为单独组件
const GlobalStyles = () => (
  <div className="global-styles">
    <style>
      {`
        /* Set color style to inherit */
        .inherit-color * {
          color: inherit;
        }

        /* Focus state style for keyboard navigation */
        *[tabindex]:focus-visible,
        input[type="file"]:focus-visible {
          outline: 0.125rem solid #4d65ff;
          outline-offset: 0.125rem;
        }

        /* 文本溢出示意样式... */
        .text-style-3lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        /* 其他全局样式... */
      `}
    </style>
  </div>
)

// 提取项目特定样式
const ProjectStyles = () => (
  <div className="project-styles">
    <style>
      {`
        /* 导航样式 */
        @media (min-width: 992px) {
          .nav .nav_link,
          .nav .nav_brand,
          .nav .nav_dd_toggle {
            color: white;
          }
          /* 其他导航样式... */
        }

        /* 移除原生滚动条 */
        .nav_burger_list,
        .features_layout {
          -ms-overflow-style: none;
          overflow: -moz-scrollbars-none;
        }
        .nav_burger_list::-webkit-scrollbar,
        .features_layout::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
  </div>
)

// 提取动画样式
const CustomAnimations = () => (
  <div className="custom-animations">
    <style>
      {`
        @keyframes shimmer {
          0% { left: -200%; }
          40% { left: 150%; }
          100% { left: 150%; }
        }

        /* 链接箭头弹跳动画 */
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}
    </style>
  </div>
)

export default App
