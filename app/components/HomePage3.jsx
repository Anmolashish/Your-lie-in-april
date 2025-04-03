import React from "react";

export default function HomePage3() {
  return (
    <section className="music-section" id="music">
      <h2 className="section-title">Songs That Speak</h2>
      <div className="sound-toggle">
        <button className="toggle-btn" id="silentBtn">
          Kōsei's Silence
        </button>
        <button className="toggle-btn active" id="fullBtn">
          Kaori's Influence
        </button>
      </div>
      <div className="concert-hall">
        <div className="music-card">
          <div
            className="music-cover"
            style="background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);"
          >
            <div className="play-button" data-song="again">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div className="music-info">
            <h3 className="music-title">Again</h3>
            <p>Opening Theme</p>
          </div>
        </div>
        <div className="music-card">
          <div
            className="music-cover"
            style="background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);"
          >
            <div className="play-button" data-song="watashi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div className="music-info">
            <h3 className="music-title">Watashi no Uso</h3>
            <p>My Lie</p>
          </div>
        </div>
        <div className="music-card">
          <div
            className="music-cover"
            style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);"
          >
            <div className="play-button" data-song="kimi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div className="music-info">
            <h3 className="music-title">Kimi wa Wasurerareru no</h3>
            <p>Will You Be Forgotten?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
