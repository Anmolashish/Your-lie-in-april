import React from "react";

export default function HomePage6() {
  return (
    <section class="memorial-section" id="memorial">
      <div class="stars" id="stars"></div>
      <div class="memorial-content">
        <h2 class="section-title">Play for Her</h2>
        <p>Leave a message in memory of Kaori</p>

        <div class="message-form">
          <textarea
            class="message-input"
            placeholder="Your message..."
            rows="4"
          ></textarea>
          <button class="submit-btn" id="submitMessage">
            Release as Music Note
          </button>
        </div>

        <div class="simple-piano" id="simplePiano">
          <div class="simple-key" data-note="C4"></div>
          <div class="simple-key" data-note="D4"></div>
          <div class="simple-key" data-note="E4"></div>
          <div class="simple-key" data-note="F4"></div>
          <div class="simple-key" data-note="G4"></div>
          <div class="simple-key" data-note="A4"></div>
          <div class="simple-key" data-note="B4"></div>
          <div class="simple-key" data-note="C5"></div>
        </div>
      </div>
    </section>
  );
}
