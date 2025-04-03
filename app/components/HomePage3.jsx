import React from "react";

export default function HomePage3() {
  return (
    <section class="music-section" id="music">
      <h2 class="section-title">Songs That Speak</h2>
      <div class="sound-toggle">
        <button class="toggle-btn" id="silentBtn">
          Kōsei's Silence
        </button>
        <button class="toggle-btn active" id="fullBtn">
          Kaori's Influence
        </button>
      </div>
      <div class="concert-hall">
        <div class="music-card">
          <div
            class="music-cover"
            style="background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);"
          >
            <div class="play-button" data-song="again">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div class="music-info">
            <h3 class="music-title">Again</h3>
            <p>Opening Theme</p>
          </div>
        </div>
        <div class="music-card">
          <div
            class="music-cover"
            style="background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);"
          >
            <div class="play-button" data-song="watashi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div class="music-info">
            <h3 class="music-title">Watashi no Uso</h3>
            <p>My Lie</p>
          </div>
        </div>
        <div class="music-card">
          <div
            class="music-cover"
            style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);"
          >
            <div class="play-button" data-song="kimi">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
          <div class="music-info">
            <h3 class="music-title">Kimi wa Wasurerareru no</h3>
            <p>Will You Be Forgotten?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
