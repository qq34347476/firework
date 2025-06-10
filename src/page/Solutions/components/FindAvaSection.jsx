import React from 'react';
import './FindAvaSection.css';

const FindAvaSection = () => {
  const avaItems = [
    "Choose from a suite of pre-built AVAs",
    "Create as many AVA-tars as you want ",
    "Pick diverse AVAs to represent your audience ",
    "Build your own custom AVA-tar  ",
    "AVA knows over 120 languages"
  ];

  const avaVideos = [
    {
      id: 1,
      poster: "https://firework.com/wp-content/uploads/2024/01/Destiny-ava.png",
      webmSrc: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Destiny-ava.webm",
      mp4Src: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Destiny-ava.mp4",
      alignment: "left"
    },
    {
      id: 2,
      poster: "https://firework.com/wp-content/uploads/2024/01/Jane-ava.png",
      webmSrc: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Jane-ava.webm",
      mp4Src: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Jane-ava.mp4",
      alignment: "center"
    },
    {
      id: 3,
      poster: "https://firework.com/wp-content/uploads/2024/01/Marco-ava.png",
      webmSrc: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Marco-ava.webm",
      mp4Src: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Marco-ava.mp4",
      alignment: "center"
    },
    {
      id: 4,
      poster: "https://firework.com/wp-content/uploads/2024/01/Sonya-ava.png",
      webmSrc: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Sonya-ava.webm",
      mp4Src: "https://fwmarketingprd.wpenginepowered.com/wp-content/uploads/2024/01/Sonya-ava.mp4",
      alignment: "left"
    }
  ];

  return (
    <section 
      className="find-ava-section full-width-section" 
      style={{
        padding: "3vw 0",
        backgroundImage: "url(https://firework.com/wp-content/uploads/2024/01/Background-COver-AVA.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="row-container">
        <div className="content-wrapper">
          {/* 左侧文本内容 */}
          <div className="left-content">
            <div className="content-box">
              <h2>Find an AVA perfect<br />for your brand</h2>
              <ul className="ava-features">
                {avaItems.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 右侧视频展示部分 */}
          <div className="right-content">
            <div className="video-grid">
              {/* 第一行视频 */}
              <div className="video-row">
                {avaVideos.slice(0, 2).map(video => (
                  <AvaVideoCard key={video.id} video={video} />
                ))}
              </div>
              {/* 第二行视频 */}
              <div className="video-row">
                {avaVideos.slice(2, 4).map(video => (
                  <AvaVideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AvaVideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video 
        width="1280" 
        height="720" 
        preload="metadata"
        controls
        controlsList="nodownload"
        poster={video.poster}
        className={`ava-video ${video.alignment === 'center' ? 'center-aligned' : ''}`}
      >
        <source src={video.webmSrc} type="video/webm" />
        <source src={video.mp4Src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FindAvaSection;
