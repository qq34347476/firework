import React from 'react';
import './AvaForEveryone.css'; // 对应的CSS文件

const AvaForEveryone = () => {
  const industries = [
    [
      {
        id: 1,
        image: "https://firework.com/wp-content/uploads/2024/01/budget.png",
        title: "Finance"
      },
      {
        id: 2,
        image: "https://firework.com/wp-content/uploads/2024/01/cosmetics.png",
        title: "Beauty"
      },
      {
        id: 3,
        image: "https://firework.com/wp-content/uploads/2024/01/men-clothing.png",
        title: "Fashion"
      },
      {
        id: 4,
        image: "https://firework.com/wp-content/uploads/2024/01/electric-car.png",
        title: "Auto"
      },
      {
        id: 5,
        image: "https://firework.com/wp-content/uploads/2024/01/diamond.png",
        title: "Luxury"
      }
    ],
    [
      {
        id: 6,
        image: "https://firework.com/wp-content/uploads/2024/01/fast-food.png",
        title: "Food"
      },
      {
        id: 7,
        image: "https://firework.com/wp-content/uploads/2024/01/insurance.png",
        title: "Health"
      },
      {
        id: 8,
        image: "https://firework.com/wp-content/uploads/2024/01/responsive.png",
        title: "Tech"
      },
      {
        id: 9,
        image: "https://firework.com/wp-content/uploads/2024/01/telecommunication.png",
        title: "TeleComs"
      },
      {
        id: 10,
        image: "https://firework.com/wp-content/uploads/2024/01/travel-and-tourism.png",
        title: "Travel"
      }
    ]
  ];

  return (
    <section 
      className="ava-for-everyone full-width-section" 
      style={{
        backgroundColor: "#000000",
        zIndex: 2
      }}
    >
      <div className="container">
        <div className="header-section">
          <h2 >AVA is Built for Everyone</h2>
          <h5 >AVA is business agnostic—we want to share the love</h5>
        </div>

        <div className="industries-grid">
          {industries.map((row, index) => (
            <div key={`row-${index}`} className="industries-row">
              {row.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry }) => {
  return (
    <div className="industry-card">
      <div className="image-container">
        <img 
          src={industry.image} 
          alt={industry.title}
          className="industry-image"
          data-animation="flip-in"
        />
      </div>
      <h4 className="industry-title">{industry.title}</h4>
    </div>
  );
};

export default AvaForEveryone;
