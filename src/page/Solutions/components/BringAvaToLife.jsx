import React, { useState } from 'react';
import './BringAvaToLife.css'; // 假设有对应的CSS文件

const BringAvaToLife = () => {
  const [activeTab, setActiveTab] = useState(3); // 默认激活第四个标签

  const tabs = [
    {
      id: 0,
      title: "Choose from an existing AVA or create your own",
      image: "https://firework.com/wp-content/uploads/2024/01/BringAVAToLife_Graphic_1-2.png"
    },
    {
      id: 1,
      title: "Train AVA by uploading videos, pdfs, webpages, documents",
      image: "https://firework.com/wp-content/uploads/2024/01/Train-AVA-by-uploading.png"
    },
    {
      id: 2,
      title: "Add AVA to your website—anywhere, on any page",
      image: "https://firework.com/wp-content/uploads/2024/01/BringAVAToLife_Graphic_3.png"
    },
    {
      id: 3,
      title: "Gain feedback based on questions asked & interactions",
      image: "https://firework.com/wp-content/uploads/2024/01/BringAVAToLife_Graphic_4-1.png"
    }
  ];

  return (
    <section 
      className="bring-ava-to-life full-width-section" 
      style={{
        backgroundImage: "url(https://firework.com/wp-content/uploads/2024/01/Background-COver-AVA.webp)",
        backgroundColor: "#000000"
      }}
    >
      <div className="container">
        
        <div className="header-section">
          <h2>Bring AVA to Life</h2>
          <h5>Dive in to see how AVA ingests data, learns, and delivers unparalleled results</h5>
        </div>

        <div className="vertical-tabs">
          <ul className="tabs-nav">
            {tabs.map((tab) => (
              <li 
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                <a role="button">
                  <span>{tab.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="tabs-content">
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                style={{ display: activeTab === tab.id ? 'block' : 'none' }}
              >
                <div className="tab-image-container">
                  <img 
                    src={tab.image} 
                    alt={tab.title} 
                    className="img-responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BringAvaToLife;
