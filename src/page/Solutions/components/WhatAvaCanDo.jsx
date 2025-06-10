import React from 'react';
import './WhatAvaCanDo.css'; // 对应的CSS文件

const WhatAvaCanDo = () => {
  const features = [
    {
      id: 1,
      image: "https://firework.com/wp-content/uploads/2024/01/Answers-questions-in-real-time-1.png",
      title: "Answers questions in real-time"
    },
    {
      id: 2,
      image: "https://firework.com/wp-content/uploads/2024/01/Shows-interactive-videos-to-help-tell-the-product-story-2.png",
      title: "Shows interactive videos to help tell the product story"
    },
    {
      id: 3,
      image: "https://firework.com/wp-content/uploads/2024/01/Recommend-products-based-on-shopper-past-purchases-1.png",
      title: "Recommend products based on shopper past purchases"
    },
    {
      id: 4,
      image: "https://firework.com/wp-content/uploads/2024/01/Seamless-handoff-between-AI-and-real-humans-1-1.png",
      title: "Seamless handoff between AI and real humans"
    },
    {
      id: 5,
      image: "https://firework.com/wp-content/uploads/2024/01/Completely-customized-AI-brand-experts-1-1.png",
      title: "Completely customized AI brand experts"
    },
    {
      id: 6,
      image: "https://firework.com/wp-content/uploads/2024/01/AVA-is-100-brand-safe-and-built-for-you-by-you-1.png",
      title: "AVA is 100% brand safe and built for you, by you"
    }
  ];

  return (
    <section 
      className="what-ava-can-do full-width-section" 
      style={{
        backgroundColor: "#000000",
        padding: "3vw 0",
        zIndex: 2
      }}
    >
      <div className="container">
        <div className="header-section">
          <h2 className="animate-fade-in-up">See What AVA Can Do</h2>
          <h5 className="animate-fade-in-up">AVA can walk the walk and talk the talk</h5>
        </div>

        <div className="features-grid">
          <div className="features-row">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
          
          <div className="features-row">
            {features.slice(3, 6).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="image-container">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="feature-image"
          data-animation="flip-in"
        />
      </div>
      <h5 className="feature-title animate-fade-in-up">{feature.title}</h5>
    </div>
  );
};

export default WhatAvaCanDo;
