"use client";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

export default function KaorisLetter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);
  const letterRef = useRef(null);
  const envelopeRef = useRef(null);

  const letterContent = `Dear Arima Kousei,

It feels weird writing a letter to someone you were just with...

You're the worst. Indecisive. Gullible. Twit.

The first time I ever saw you perform, I was 5 years old. It was at a recital for the piano school I was going to. This awkward, clumsy kid came onto the stage and accidentally hit the piano stool with his butt. It was too funny. He turned to the piano that was way too big for him and the moment he played that first note, I was drawn in. The sound was beautiful, like a 24-colour palette. The melodies danced.

The girl next to me started crying. I wasn't expecting that at all.

And even so, you gave up the piano. Even though it totally changed other people's lives. You're the worst. Indecisive. Gullible. Twit.

When I found out we were in the same middle school, I was ecstatic. But how would I ever come to talk to you? Maybe I'd hang out at the lunch concession. Instead, I just watched you from afar. I mean. After all. You all seemed to get along so well. There wasn't really any space in there for someone like me.

When I was a kid, I had to have an operation and I started having to be at the hospital for regular check-ups. In the first year of middle school, I collapsed and I was admitted over and over. With every visit, I was there for longer and longer. Really, I didn't get to class much in middle school, I spent more time at the hospital. And I knew something was wrong with my body.

One night, I saw my parents crying in the waiting room and I knew that my time was running out. That's when I ran away.

I didn't want to bring my regrets with me to heaven, so I stopped holding back from what the things I always wanted to do. I wasn't scared anymore to get contact lenses. I ate what I wanted instead of always worrying about my weight. And I took the music with all its high and mighty directives and played it the way I wanted.

And then I told a lie. Just one. I lied and said that I, Miyazono Kaori, liked Watari Ryouta. And that lie brought you to me.

Please apologize to Watari for me... though I'm sure he's forgotten me by now. I think I need someone more wholehearted and earnest than him.

I'm sorry I couldn't say goodbye properly. If I had, I know I wouldn't have been able to leave.

You must be thinking I'm selfish, appearing in your life suddenly and then leaving without a word. But please, just bear with me a little longer.

I was able to live my life just the way I wanted to. I was able to become a girl who fell in love with you. I was able to become the girl who shared your music.

I'm sure you'll keep growing into an even more amazing person. I'm sure you'll keep changing people's lives with your music.

I hope one day, when you think of me, you'll remember me as your beloved.

I hope I was able to pass on to you at least one thing that will live inside you forever.

Goodbye. You're the one who helped me find my voice.

From your beloved,
Kaori`;

  const playLetterAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.error("Audio error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openEnvelope = () => {
    setIsOpen(true);
  };

  const closeEnvelope = () => {
    setIsOpen(false);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isOpen && letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        letterRef.current &&
        !letterRef.current.contains(event.target) &&
        envelopeRef.current &&
        !envelopeRef.current.contains(event.target)
      ) {
        closeEnvelope();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>Kaori's Letter | Your Lie in April</title>
        <meta
          name="description"
          content="Kaori's heartfelt letter to Kousei from Your Lie in April"
        />
      </Head>

      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 relative"
        style={{
          background: "linear-gradient(to top, #2a389D 45% , white 100%)",
        }}
      >
        {/* Twinkling stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 5 + 3;
            const delay = Math.random() * 5;
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity,
                  animation: `twinkle ${duration}s ease-in-out ${delay}s infinite alternate`,
                }}
              ></div>
            );
          })}
        </div>

        <h1 className="text-3xl font-bold text-white mb-8 z-10">
          Kaori's Letter
        </h1>

        <div className="relative w-full max-w-md z-10" ref={envelopeRef}>
          {/* Envelope (closed state) */}
          {!isOpen && (
            <div
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={openEnvelope}
            >
              <div className="relative w-full h-64">
                {/* Envelope back */}
                <div className="absolute w-full h-full bg-pink-200 rounded-lg shadow-xl"></div>

                {/* Envelope flap */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 bg-pink-100 origin-bottom transform transition-all duration-500"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 100%, 50% 70%, 0% 100%)",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
                  }}
                ></div>

                {/* Envelope front */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-pink-100 rounded-lg flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 70%, 50% 90%, 0% 70%)",
                  }}
                >
                  <div className="text-center p-4">
                    <div className=" text-rose-800 text-xl mb-2">
                      To: Arima Kousei
                    </div>
                    <div className=" text-rose-800 animate-pulse">
                      Click to open
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Letter (open state) */}
          {isOpen && (
            <div className="relative" ref={letterRef}>
              {/* Envelope back (now open) */}
              <div className="absolute w-full h-64 bg-pink-100 rounded-lg shadow-lg -bottom-4 -right-4"></div>

              {/* Scrollable letter container */}
              <div
                className="relative bg-white rounded-lg shadow-xl transform transition-all duration-500 flex flex-col"
                style={{
                  border: "1px solid #F5A9C7",
                  maxHeight: "70vh",
                }}
              >
                {/* Scrollable content area */}
                <div
                  className="overflow-y-auto p-6 flex-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98))",
                  }}
                >
                  <div className="text-gray-800 font-serif text-lg leading-relaxed whitespace-pre-line">
                    {letterContent}
                  </div>
                </div>

                {/* Fixed button at bottom */}
                <div className="sticky bottom-0 bg-white pt-4 border-t border-pink-200 px-6 pb-4">
                  <button
                    onClick={playLetterAudio}
                    className="w-full px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition flex items-center justify-center shadow-md"
                  >
                    {isPlaying ? (
                      <>
                        <span className="mr-2">Pause Reading</span>
                        <span>❚❚</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Hear Kaori's Voice</span>
                        <span>▶</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          <audio ref={audioRef} src="/Images/your audio.mp3" preload="auto" />
        </div>

        <div className="mt-8 text-center text-indigo-200 text-sm z-10">
          From the anime "Your Lie in April" (Shigatsu wa Kimi no Uso)
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        body {
          font-family: "Helvetica Neue", Arial, sans-serif;
          margin: 0;
        }
        .font-serif {
          font-family: "Georgia", serif;
        }
        .bg-pink-100 {
          background-color: #f5a9c7;
        }
        .bg-pink-200 {
          background-color: #f8c4d9;
        }
        .bg-pink-500 {
          background-color: #f5a9c7;
        }
        .bg-pink-600 {
          background-color: #f18cb3;
        }
        .border-pink-200 {
          border-color: #f8c4d9;
        }
      `}</style>
    </>
  );
}
