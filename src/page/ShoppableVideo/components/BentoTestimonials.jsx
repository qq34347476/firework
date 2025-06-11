import React, { useEffect } from 'react';

const BentoTestimonials = () => {
  useEffect(() => {
    // Scroll animation effect - preserved from original
    const animateCells = () => {
      document.querySelectorAll('.w-layout-cell').forEach((cell, index) => {
        const rect = cell.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          cell.style.opacity = '1';
          cell.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
      });
    };

    window.addEventListener('scroll', animateCells);
    animateCells(); // Trigger initial animation
    return () => window.removeEventListener('scroll', animateCells);
  }, []);

  return (
    <section className="bento-testimonials-section">
      <style>{`
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .bento-cell.is-link:hover .bento-link-arrow {
          animation: bounce-left 700ms ease-in-out infinite;
        }
      `}</style>

      <div className="w-layout-blockcontainer container-large w-container">
        <div id="w-node-ee0ebc9d-ccc4-97c0-c16b-93930b1176c0-77222c89" className="w-layout-layout wf-layout-layout">
          
          {/* Cell 1 */}
          <div 
            id="w-node-ee0ebc9d-ccc4-97c0-c16b-93930b1176c1-77222c89"
            data-w-id="ee0ebc9d-ccc4-97c0-c16b-93930b1176c1"
            className="w-layout-cell signup_testimonial grad-blue"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease'
            }}
          >
            <p className="bento-quote">"Onboarding was actually enjoyable, such a great team. The platform is super easy to use and looks great on our site."</p>
            <div className="div-block-2">
              <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/6745ff7c8f5002e92b50defd_logo-odd-bird.webp" loading="lazy" alt="odd bird company logo"/>
            </div>
          </div>

          {/* Cell 2 */}
          <div 
            id="w-node-e7d97075-74fd-eee9-b1e4-de66245406d8-77222c89"
            data-w-id="e7d97075-74fd-eee9-b1e4-de66245406d8"
            className="w-layout-cell signup_testimonial light"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.1s'
            }}
          >
            <div className="bento-cell-content">
              <p className="bento-heading">11x higher</p>
              <p className="bento-body-tight">Conversion rate among user who interacted with CELL digital Videos</p>
            </div>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f5ff693086ddfa3942a01_logo-natural-life.webp" loading="lazy" alt="Natural Life logo"/>
          </div>

          {/* Cell 3 */}
          <div 
            id="w-node-eaf9dc85-0421-f87e-567a-2658eed19be2-77222c89"
            data-w-id="eaf9dc85-0421-f87e-567a-2658eed19be2"
            className="w-layout-cell signup_testimonial blue padding-tight is-link"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.2s'
            }}
          >
            <a href="https://firework.com/customer-stories/the-fresh-market-success-story/" className="bento-link w-inline-block"></a>
            <div className="bento-cell-content">
              <p className="bento-heading">18.7x</p>
              <p className="bento-body-tight">Engagement Rate by adapting Shoppable Videos</p>
              <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f68a02fc47404d5f87198_logo-fresh-market-dark.webp" loading="lazy" alt="Fresh Market Logo"/>
            </div>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9d27365712668f14355f_arrow-link.svg" loading="lazy" alt="arrow icon" className="bento-link-arrow"/>
          </div>

          {/* Cell 4 */}
          <div 
            id="w-node-_0869480d-1823-fb6e-95a1-597a8c26e11f-77222c89"
            data-w-id="0869480d-1823-fb6e-95a1-597a8c26e11f"
            className="w-layout-cell signup_testimonial dark"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.3s'
            }}
          >
            <div className="bento-cell-content">
              <p className="bento-heading">5000+</p>
              <p className="bento-body-tight">Active viewers during the CELL digital live stream</p>
            </div>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f6ddc634cb4e61b796014_logo-heinz-dark.webp" loading="lazy" alt=""/>
          </div>

          {/* Cell 5 */}
          <div 
            id="w-node-ae31f481-08b3-7ce7-24f3-5ff08e20b4fc-77222c89"
            data-w-id="ae31f481-08b3-7ce7-24f3-5ff08e20b4fc"
            className="w-layout-cell signup_testimonial light padding-tight is-link"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.4s'
            }}
          >
            <a href="https://firework.com/customer-stories/promise-cosmetics-success-story/" className="bento-link w-inline-block"></a>
            <div className="bento-cell-content">
              <p className="bento-heading small">+296%</p>
              <p className="bento-body-tight">Conversion uplift</p>
            </div>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f66fd519a46bdc4239370_logo-promise.webp" loading="lazy" alt="Promise Cosmetics logo" className="image-17"/>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9eb801791f1b02731afa_arrow-link-dark.svg" loading="lazy" alt="arrow icon" className="bento-link-arrow"/>
          </div>

          {/* Cell 6 */}
          <div 
            id="w-node-_70b13a23-6db0-c5fb-5d0d-35811f06df6b-77222c89"
            data-w-id="70b13a23-6db0-c5fb-5d0d-35811f06df6b"
            className="w-layout-cell signup_testimonial light is-link"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.5s'
            }}
          >
            <a href="https://firework.com/customer-stories/greenpan-success-story/" className="bento-link w-inline-block"></a>
            <div className="bento-cell-content">
              <p className="bento-heading">+789%</p>
              <p className="bento-body-tight">Higher Likelihood of purchase</p>
            </div>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f7602d954f436ee5c9756_logo-green-pan.webp" loading="lazy" alt="GreenPan logo"/>
            <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f9eb801791f1b02731afa_arrow-link-dark.svg" loading="lazy" alt="arrow icon" className="bento-link-arrow"/>
          </div>

          {/* Cell 7 */}
          <div 
            id="w-node-_1bca2fd5-f836-bc24-cd3e-f4f2266d0246-77222c89"
            data-w-id="1bca2fd5-f836-bc24-cd3e-f4f2266d0246"
            className="w-layout-cell signup_testimonial grad-blue"
            style={{
              opacity: 0,
              transform: 'translate3d(0px, 20px, 0px)',
              transition: 'all 0.5s ease 0.6s'
            }}
          >
            <div>
              <p className="bento-quote">"Our experience with CELL digital has been great. We use CELL digital for UGC videos on our product pages as well as using it for livestreams when we do product launches."</p>
            </div>
            <div className="div-block-2">
              <img src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/673f7cb00733e116af99bb74_logo-cymbiotika.webp" loading="lazy" alt="Cymbiotika company logo"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoTestimonials;