import React from 'react';
import './RoiWithAva.css';

const RoiWithAva = () => {
  const stats = [
    {
      id: 1,
      title: "up to",
      value: "70%",
      description: "increase in conversion rate"
    },
    {
      id: 2,
      title: "up to",
      value: "50%",
      description: "in cost savings for sales associates"
    },
    {
      id: 3,
      title: "up to",
      value: "60%",
      description: "increase in NPS score"
    }
  ];

  return (
    <section 
      className="roi-with-ava full-width-section" 
      style={{
        backgroundColor: "#000000",
        padding: "5vw 10%",
        zIndex: 2,
        position: "relative"
      }}
    >
      <div className="row-container">
        {/* Title Section */}
        <div className="title-section">
          <h2 className="animate-fade-in-up">ROI with AVA</h2>
        </div>
        
        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-inner">
                <h4 className="stat-title animate-fade-in-up">{stat.title}</h4>
                <h4 className="stat-value animate-fade-in-up">{stat.value}</h4>
                <h5 className="stat-description animate-fade-in-up">{stat.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoiWithAva;
