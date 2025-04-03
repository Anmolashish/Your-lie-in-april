"use client";
import React, { useEffect, useState } from "react";

export default function HomePage6() {
  const [loveNotes, setLoveNotes] = useState([]);

  useEffect(() => {
    // Create stars on component mount
    const createStars = () => {
      const starsContainer = document.getElementById("stars");
      const starCount = 100;

      // Clear existing stars
      starsContainer.innerHTML = "";

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    };

    createStars();

    // Submit message handler
    const handleSubmit = () => {
      const messageInput = document.querySelector(".message-input");
      if (messageInput && messageInput.value.trim() !== "") {
        createNote(messageInput.value);
        messageInput.value = "";
      }
    };

    const submitMessage = document.getElementById("submitMessage");
    if (submitMessage) {
      submitMessage.addEventListener("click", handleSubmit);
    }

    // Cleanup event listeners
    return () => {
      if (submitMessage) {
        submitMessage.removeEventListener("click", handleSubmit);
      }
    };
  }, []);

  const createNote = (message) => {
    const newNote = {
      id: Date.now(),
      message,
      left: `${10 + Math.random() * 80}%`,
      bottom: "0",
    };

    setLoveNotes((prev) => [...prev, newNote]);

    setTimeout(() => {
      setLoveNotes((prev) => prev.filter((note) => note.id !== newNote.id));
    }, 10000);
  };

  const playPianoSound = (note) => {
    // Frequency map for piano notes (C4 to C5)
    const frequencyMap = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.0,
      A4: 440.0,
      B4: 493.88,
      C5: 523.25,
    };

    // Create audio context
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Configure sound
    oscillator.type = "sine";
    oscillator.frequency.value = frequencyMap[note];
    gainNode.gain.value = 0.3;

    // Connect and play
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const handlePianoKeyClick = (note) => {
    const messages = ["I", "love", "you"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    createNote(randomMessage);
    playPianoSound(note);
  };

  return (
    <section className="memorial-section" id="memorial">
      <div className=" absolute bottom-0 right-0">
        <img
          src="/Images/tumblr-20f4980ed2a3c10a34b2a8e-unscreen.gif"
          alt=""
          className=""
        />
      </div>
      <div className="stars" id="stars"></div>
      <div className="absolute w-[500px] top-[100px] opacity-50">
        <img src="/Images/8918181.png" alt="" className="w-full" />
      </div>

      <div className="absolute w-[500px] right-0 top-[50px] opacity-50">
        <img src="/Images/8918191.png" alt="" className="w-full" />
      </div>
      <div className="memorial-content">
        <h2 className="section-title">Play for Her</h2>
        <p>Leave a message in memory of Kaori</p>

        <div className="message-form">
          <textarea
            className="message-input bg-white text-black"
            placeholder="Your message..."
            rows="4"
          ></textarea>
          <button className="submit-btn" id="submitMessage">
            Release as Music Note
          </button>
        </div>

        <div className="simple-piano" id="simplePiano">
          {["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"].map((note) => (
            <div
              key={note}
              className="simple-key"
              data-note={note}
              onClick={() => handlePianoKeyClick(note)}
              onMouseDown={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffb7c5")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            ></div>
          ))}
        </div>
      </div>

      {/* Render love notes */}
      {loveNotes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{
            left: note.left,
            bottom: note.bottom,
            position: "absolute",
          }}
          title={note.message}
        >
          {note.message}
        </div>
      ))}
    </section>
  );
}
