import React, { useEffect, useRef, useState } from 'react';

const AnimatedStatsReact = () => {
  const statsRef = useRef(null);
  const [countValues, setCountValues] = useState([
    { value: 0, target: 1.2, suffix: 'B+', text: 'Revenue Lift' },
    { value: 0, target: 210, suffix: 'M', text: 'Shoppers Viewed' },
    { value: 0, target: 5.1, suffix: 'M', text: 'Items sold' }
  ]);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const startTime = performance.now();
    const duration = 2000;

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCountValues(prevValues =>
        prevValues.map(item => ({
          ...item,
          value: item.target * easedProgress
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatValue = (value, target) => {
    if (target >= 1000) {
      return Math.round(value).toLocaleString();
    } else if (target % 1 === 0 || Math.round(value) === target) {
      return Math.round(value);
    }
    return value.toFixed(1);
  };

  return (
    <section className="feature-about_section blackout">
      <div className="padding-global">
        <div className="container-large">
          <div className="container-small">
            <h2 className="heading-style-h2">Trusted by 1,500+ of the world's leading brands</h2>
          </div>
          <div className="stats_layout" ref={statsRef}>
            {countValues.map((stat, index) => (
              <div key={index} className="stat_card-wr">
                <div className="stat_card blackout">
                  <div className="featured_statistic">
                    {formatValue(stat.value, stat.target)}{stat.suffix}
                  </div>
                  <p className="margin-0">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsReact;
