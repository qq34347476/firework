import React, { useState } from 'react';
import './UnlockCustomerInsights.css';

const UnlockCustomerInsights = () => {
  const [activeTab, setActiveTab] = useState(2); // 默认激活第三个选项卡

  const tabs = [
    {
      id: 0,
      title: "Gather customer insights and feedback through the AVA dashboard",
      imageSrc: "https://firework.com/wp-content/uploads/2024/01/Unlock-More-Customer-Insights-Tab-01.png",
      imageAlt: "Unlock More Customer Insights- Tab 01"
    },
    {
      id: 1,
      title: "Improve customer experience with virtual-style consultants or product experts",
      imageSrc: "https://firework.com/wp-content/uploads/2024/01/Unlock-More-Customer-Insights-Tab-02.png",
      imageAlt: "AVA Unlock More Consumer Insights"
    },
    {
      id: 2,
      title: "See the number of interactions, attributed-GMV, conversions by AVA",
      imageSrc: "https://firework.com/wp-content/uploads/2024/01/Unlock-More-Customer-Insights-Tab-03-1.png",
      imageAlt: "Unlock More Customer Insights- Tab 03"
    }
  ];

  return (
    <section 
      className="unlock-customer-insights full-width-section" 
      style={{
        backgroundColor: "#000000",
        padding: "5vw 0",
        zIndex: 110
      }}
    >
      <div className="container">
        <div className="content-box">
          <div className="header-section">
            <h2>Unlock More Customer Insights</h2>
            <h5>Always-learning, always improving, democratize your customer data.</h5>
          </div>

          <div className="tabbed-container">
          <div className="tabs-content">
              {tabs.map((tab, index) => (
                <div 
                  key={tab.id}
                  className={`tab-panel ${activeTab === index ? 'active' : ''}`}
                >
                  <div className="image-container">
                    <img 
                      src={tab.imageSrc} 
                      alt={tab.imageAlt}
                      className="tab-image"
                    />
                  </div>
                </div>
              ))}
            </div>
            <ul className="tabs-nav">
              {tabs.map((tab, index) => (
                <li 
                  key={tab.id}
                  className={`tab-item ${activeTab === index ? 'active' : ''}`}
                >
                  <button 
                    onClick={() => setActiveTab(index)}
                    className="tab-button"
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockCustomerInsights;
