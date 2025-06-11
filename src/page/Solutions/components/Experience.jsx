import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const questions = [
    "What products does CELL digital sell?",
    "How does AVA learn information?",
    "Which industries are AVA built for?"
  ];

  useEffect(() => {
    // Load AVA script dynamically
    const script = document.createElement('script');
    script.src = '//asset.fwcdn3.com/js/ava.js';
    script.async = true;
    document.body.appendChild(script);

    // Start question rotation
    const interval = setInterval(() => {
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 3000);

    // Set component as loaded after a brief delay
    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(loadTimer);
      document.body.removeChild(script);
    };
  }, []);

  const handleScheduleDemo = () => {
    const demoSection = document.getElementById('ScheduleDemo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="Ava-Live-Version"
      className={`ava-live-section ${loaded ? 'loaded' : ''}`}
      style={{
        padding: '15vw 10%',
        zIndex: 110
      }}
    >
      {/* Background Image */}
      <div className="background-image" style={{
        backgroundImage: 'url(https://firework.com/wp-content/uploads/2024/01/Background-COver-AVA.webp)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      {/* Main Content Container */}
      <div className="content-container" style={{
        boxShadow: '-25px 25px 10px 0px rgba(0,0,0,0.3)',
        backgroundColor: '#ffffff',
        borderRadius: '20px'
      }}>
        {/* Animated Background */}
        <div className="animated-bg" style={{
          backgroundImage: 'url(https://firework.com/wp-content/uploads/2024/01/ExperienceTheMagicOfAVA_Pulse_1.2.gif)'
        }}></div>

        {/* Floating AVA Images */}
        <div className="floating-ava-container">
          {/* Female AVA (bottom left) */}
          <div className="ava-image female-two" style={{
            top: '60%',
            left: '-10%',
            transform: 'translateY(143.432px)'
          }}>
            <img 
              src="https://firework.com/wp-content/uploads/2024/01/Female-AVA-two.png" 
              alt="Female AVA two" 
              width="196" 
              height="287"
            />
          </div>

          {/* Male AVA (top left) */}
          <div className="ava-image male" style={{
            top: '-15%',
            left: '-10%',
            transform: 'translateY(28.3518px)'
          }}>
            <img 
              src="https://firework.com/wp-content/uploads/2024/01/Male-AVA-1.png" 
              alt="Male AVA" 
              width="196" 
              height="287"
            />
          </div>

          {/* Female AVA (bottom right) */}
          <div className="ava-image female-one" style={{
            bottom: '25%',
            right: '-10%',
            transform: 'translateY(85.1467px)'
          }}>
            <img 
              src="https://firework.com/wp-content/uploads/2024/01/Female-AVA-one.png" 
              alt="Female AVA one" 
              width="196" 
              height="287"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content" style={{ padding: '5%' }}>
          <h2 className="section-title">
            <span>Experience the Magic of AVA</span>
          </h2>
          <h5 className="section-subtitle">
            Experience AVA today. Tap the button and ask AVA anything.
          </h5>

          {/* AVA Button */}
          <div className="ava-button-container">
            <fw-ava domain_assistant_id="e5xMoK" label="Try AVA" show_icon=""></fw-ava>
          </div>

          {/* Schedule Demo Button */}
          <div className="demo-button-container">
            <button 
              className="nectar-button" 
              onClick={handleScheduleDemo}
              style={{ 
                color: 'black',
                border: 'none'
              }}
            >
              <a href="#ScheduleDemo" style={{ textDecoration: 'none', color: 'inherit' }}>
                Schedule Demo
              </a>
            </button>
          </div>

          {/* Questions Section */}
          <div className="questions-section">
            <h4 className="questions-title">Ask AVA questions like...</h4>
            <div className="animated-text-container">
              {questions.map((question, index) => (
                <div 
                  key={index}
                  className={`animated-text ${index === currentQuestionIndex ? 'active' : ''}`}
                  style={{ 
                    color: '#000',
                    fontSize: '20px'
                  }}
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
