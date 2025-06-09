import React, { useEffect, useRef } from 'react';

const BrandsCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const logos = [
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp",
        srcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp 600w",
        alt: "Samsung logo",
        sizes: "(max-width: 600px) 100vw, 600px"
      },
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c73784562e657d05b2b9f7_lego-logo-white.webp",
        alt: "Lego logo"
      },
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67a0e456f24cb1f35f41e6e4_logo-mattel-white.svg",
        alt: "Mattel logo"
      },
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737847f16fad2d00a6e45_logo-olaplex-white.webp",
        alt: "Olaplex logo"
      },
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp",
        srcSet: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp 1200w",
        alt: "Anker logo",
        sizes: "(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
      },
      {
        src: "https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737848f2f01494e63160b_logo-jackery-white.webp",
        alt: "Jackery Logo"
      }
    ];

    let offset = 0;
    const logoWidth = 220; // Logo width + margins
    const scrollSpeed = 0.5;
    let animationFrameId;

    const animate = () => {
      if (containerRef.current) {
        offset -= scrollSpeed;
        containerRef.current.style.transform = `translateX(${offset}px)`;

        // Reset the offset when the first set has fully scrolled out of view
        if (Math.abs(offset) >= (logos.length * logoWidth)) {
          offset = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="brands-carousel-section">
      <div className="w-layout-blockcontainer container-large relative w-container">
        <style>
          {`
            /* Fade effect on the left and right sides */
            .logo_carousel-wr::before,
            .logo_carousel-wr::after {
              content: '';
              position: absolute;
              bottom: 0;
              width: 100px;
              height: 100%;
              pointer-events: none;
              z-index: 1;
            }

            /* Left fade (white blur) */
            .logo_carousel-wr::before {
              left: 0;
              background: linear-gradient(to right, #0a0a0a, rgba(255, 255, 255, 0));
            }

            /* Right fade (white blur) */
            .logo_carousel-wr::after {
              right: 0;
              background: linear-gradient(to left, #0a0a0a, rgba(255, 255, 255, 0));
            }

            /* Logo styles */
            .carousel_logo {
              flex: 0 0 auto;
              margin: 0 20px;
              width: 150px;
              transition: transform 0.3s ease-out;
            }

            .logo_carousel {
              display: flex;
              white-space: nowrap;
              align-items: center;
              will-change: transform;
            }
          `}
        </style>

        <h3 className="landing-page-section-heading light">Trusted by 1500+ brands and retailers</h3>
        
        <div className="logo_carousel-wr margin-0 padding-0">
          <div className="logo_carousel" ref={containerRef}>
            {/* First set of logos */}
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp"
              loading="lazy"
              sizes="(max-width: 600px) 100vw, 600px"
              srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp 600w"
              alt="Samsung logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c73784562e657d05b2b9f7_lego-logo-white.webp"
              loading="lazy"
              alt="Lego logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67a0e456f24cb1f35f41e6e4_logo-mattel-white.svg"
              loading="lazy"
              alt="Mattel logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737847f16fad2d00a6e45_logo-olaplex-white.webp"
              loading="lazy"
              alt="Olaplex logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
              srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp 1200w"
              alt="Anker logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737848f2f01494e63160b_logo-jackery-white.webp"
              loading="lazy"
              alt="Jackery Logo"
              className="carousel_logo"
            />
            {/* Duplicate set for seamless looping */}
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp"
              loading="lazy"
              sizes="(max-width: 600px) 100vw, 600px"
              srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737843addf1e068721f66_logo-samsung-white.webp 600w"
              alt="Samsung logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c73784562e657d05b2b9f7_lego-logo-white.webp"
              loading="lazy"
              alt="Lego logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67a0e456f24cb1f35f41e6e4_logo-mattel-white.svg"
              loading="lazy"
              alt="Mattel logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67c737847f16fad2d00a6e45_logo-olaplex-white.webp"
              loading="lazy"
              alt="Olaplex logo"
              className="carousel_logo"
            />
            <img
              src="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
              srcSet="https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-500.webp 500w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white-p-800.webp 800w, https://cdn.prod.website-files.com/66a003afc59794bcf70c2b34/67bf77e25f5703076a1804f1_logo-anker-white.webp 1200w"
              alt="Anker logo"
              className="carousel_logo"
            />
          </div>
        </div>
        
        <div className="spacer-xlarge"></div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
