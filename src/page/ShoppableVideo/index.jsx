import React from 'react';
import HeroSection from './components/HeroSection'
import BrandsCarousel from '../../components/BrandsCarousel';
import ShoppableVideoSlider from './components/ShoppableVideoSlider';
import ShoppableVideoPage from './components/ShoppableVideoPage'
import CtaSection from './components/CtaSection';
import KeyBenefitsSection from './components/KeyBenefitsSection';
import BentoTestimonials from './components/BentoTestimonials'
import MetricsFooterCTA from './components/MetricsFooterCTA'
import FeaturedCaseStudies from './components/FeaturedCaseStudies'

const ShoppableVideo = () => {
    

    return (
        <div className='main-wrapper'>
          <HeroSection />
          <BrandsCarousel />
          <ShoppableVideoSlider />
          <ShoppableVideoPage />
          <CtaSection />
          <KeyBenefitsSection />
          <BentoTestimonials />
          <MetricsFooterCTA />
          <FeaturedCaseStudies />
        </div>
    );
};

export default ShoppableVideo;
