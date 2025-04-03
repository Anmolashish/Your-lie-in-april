"use client";
import React, { useEffect, useRef } from "react";

export default function HomePage2() {
  const timelineRef = useRef(null);
  const violinRef = useRef(null);
  const sheetMusicRef = useRef(null);
  const chaptersRef = useRef([]);

  // Initialize chapters ref
  useEffect(() => {
    chaptersRef.current = chaptersRef.current.slice(0, 4);
  }, []);

  // Violin interaction
  const handleViolinClick = () => {
    // This would use your audio context to play a note
    // playSample('A4');
    if (violinRef.current) {
      violinRef.current.style.filter = "drop-shadow(0 0 15px gold)";
      setTimeout(() => {
        violinRef.current.style.filter = "drop-shadow(0 0 10px gold)";
      }, 300);
    }
  };

  // Sheet music interaction
  const handleSheetMusicClick = () => {
    // playSample('C5');
    const note = sheetMusicRef.current?.querySelector(".music-note");
    if (note) {
      note.style.left = "30%";
      note.style.transition = "none";
      note.style.transform = "translateY(-50%)";

      setTimeout(() => {
        note.style.transition = "left 0.5s ease-out";
        note.style.left = "70%";
      }, 50);

      setTimeout(() => {
        note.style.left = "30%";
      }, 1000);
    }
  };

  // Timeline scroll interaction
  useEffect(() => {
    const timeline = timelineRef.current;

    const handleScroll = () => {
      chaptersRef.current.forEach((chapter, index) => {
        if (!chapter) return;

        const rect = chapter.getBoundingClientRect();
        const isVisible = rect.left >= 0 && rect.right <= window.innerWidth;

        if (isVisible) {
          chapter.classList.add("active");
          // Activate content animation
          const content = chapter.querySelector(".chapter-content");
          if (content) {
            content.style.opacity = "1";
            content.style.transform = "translateY(0)";
          }
        } else {
          chapter.classList.remove("active");
        }
      });
    };

    if (timeline) {
      timeline.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (timeline) {
        timeline.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="story-section" id="story">
      <h2 className="section-title">A Musical Journey</h2>
      <div className="timeline" ref={timelineRef}>
        {/* Chapter 1 */}
        <div
          className="chapter"
          style={{ backgroundColor: "#f0f0f0" }}
          ref={(el) => (chaptersRef.current[0] = el)}
        >
          <h3 className="chapter-title">Monochrome Childhood</h3>
          <div className="chapter-content">
            <p>
              Kōsei's world was devoid of color after his mother's passing, his
              music silent and heart closed off.
            </p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div
          className="chapter"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(https://i.imgur.com/JQJQJQJ.jpg) center/cover",
          }}
          ref={(el) => (chaptersRef.current[1] = el)}
        >
          <h3 className="chapter-title">Meeting Kaori</h3>
          <div className="chapter-content">
            <p>
              With her vibrant spirit and wild violin playing, Kaori brought
              color back into Kōsei's life.
            </p>
            <div
              className="violin"
              id="violin"
              ref={violinRef}
              onClick={handleViolinClick}
            ></div>
          </div>
        </div>

        {/* Chapter 3 */}
        <div
          className="chapter"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(https://i.imgur.com/JQJQJQJ.jpg) center/cover",
          }}
          ref={(el) => (chaptersRef.current[2] = el)}
        >
          <h3 className="chapter-title">Performances</h3>
          <div className="chapter-content">
            <p>
              Their music intertwined, creating beautiful harmonies that touched
              everyone who listened.
            </p>
            <div
              className="sheet-music"
              id="sheetMusic"
              ref={sheetMusicRef}
              onClick={handleSheetMusicClick}
            >
              <div className="music-line" style={{ top: "20%" }}></div>
              <div className="music-line" style={{ top: "35%" }}></div>
              <div className="music-line" style={{ top: "50%" }}></div>
              <div className="music-line" style={{ top: "65%" }}></div>
              <div className="music-line" style={{ top: "80%" }}></div>
              <div className="music-note"></div>
            </div>
          </div>
        </div>

        {/* Chapter 4 */}
        <div
          className="chapter"
          style={{ backgroundColor: "#e0e0e0" }}
          ref={(el) => (chaptersRef.current[3] = el)}
        >
          <h3 className="chapter-title">The Final Letter</h3>
          <div className="chapter-content">
            <p>
              Kaori's goodbye revealed her true feelings and the depth of their
              connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
