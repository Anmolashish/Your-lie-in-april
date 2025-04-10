// App.js
import React from 'react';
import CardCarousel from './CardCarousel'; // Ensure this is the correct import
import './Jagjeet_App.css';
import EpisodeCardCarousel from './EpisodeCardCarousel';

const Jagjeet_App = () => {
  // const regularCards = [
  //   {
  //     id: 1,
  //     image: "/images/Your-Lie-In-April-Ep-1.png",
  //     date: "November 2, 2014",
  //     episode: "Episode 1",
  //     heading: "Monotone/ Colorful",
  //     intro: "Your Lie In April follows Kousei Arima..."
  //   },
  //   {
  //     id: 2,
  //     image: "/images/Your-Lie-In-April-Ep-2.png",
  //     date: "November 6, 2014",
  //     episode: "Episode 2",
  //     heading: "Friend A",
  //     intro: "This episode highlights Kaori's unique approach..."
  //   }
  // ];

  const carouselCards = [
      {
        id: 1,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-1.png",
        date: "October 9, 2014",
        episode: "Episode 1",
        heading: "Monotone / Colorful",
        intro: "Kousei Arima, a former piano prodigy, lives a dull life after his mother's death until he meets Kaori Miyazono, a vibrant violinist who shatters his monochrome world with her music and personality."
      },
      {
        id: 2,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-2.png",
        date: "October 16, 2014",
        episode: "Episode 2",
        heading: "Friend A",
        intro: "Kaori drags Kousei into accompanying her at a competition, forcing him to confront his trauma. Her unorthodox performance style shocks the audience and begins to change Kousei's perspective on music."
      },
      {
        id: 3,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-3.png",
        date: "October 23, 2014",
        episode: "Episode 3",
        heading: "Inside Spring",
        intro: "Kousei starts practicing again under Kaori's influence. Flashbacks reveal his abusive training with his mother, while present-day Kaori pushes him to play with emotion rather than perfection."
      },
      {
        id: 4,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-4.png",
        date: "October 30, 2014",
        episode: "Episode 4",
        heading: "Departure",
        intro: "Kousei enters a piano competition, battling his inner demons. Kaori's encouragement clashes with his fear of failure, setting up his first public performance since his mother's death."
      },
      {
        id: 5,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-5.png",
        date: "November 6, 2014",
        episode: "Episode 5",
        heading: "Gray Skies",
        intro: "Kousei's performance ends in disaster as he loses the ability to hear his piano. The judges criticize his robotic playing, while Kaori's passionate violin performance highlights everything he lacks."
      },
      {
        id: 6,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-6.png",
        date: "November 13, 2014",
        episode: "Episode 6",
        heading: "On the Way Home",
        intro: "Humiliated after his failure, Kousei avoids Kaori and music. A chance encounter with a young fan reminds him why he once loved the piano, reigniting his determination to try again."
      },
      {
        id: 7,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-7.png",
        date: "November 20, 2014",
        episode: "Episode 7",
        heading: "The Shadow Whisper",
        intro: "Kousei faces Takeshi Aiza, a prodigy who idolizes him. His playing begins to break free from technical perfection as he channels Kaori's emotional style, surprising the judges."
      },
      {
        id: 8,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-8.png",
        date: "November 27, 2014",
        episode: "Episode 8",
        heading: "Let It Ring",
        intro: "Kousei advances in the competition but grapples with self-doubt. Meanwhile, Kaori collapses after a rehearsal, hinting at her declining health, though she hides it from Kousei."
      },
      {
        id: 9,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-9.png",
        date: "December 4, 2014",
        episode: "Episode 9",
        heading: "Resonance",
        intro: "Kousei competes against Emi Igawa, another rival shaped by his past. Their performances reveal how deeply Kousei's struggles have influenced others, while Kaori's condition worsens."
      },
      {
        id: 10,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-10.png",
        date: "December 11, 2014",
        episode: "Episode 10",
        heading: "The Scenery I Shared With You",
        intro: "Kaori is hospitalized after collapsing. Kousei, unaware of the severity of her illness, promises to perform with her again, deepening their bond through shared memories of music."
      },
      {
        id: 11,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-11.png",
        date: "December 18, 2014",
        episode: "Episode 11",
        heading: "Light of Life",
        intro: "Kousei learns the truth about Kaori's terminal condition. As she prepares for surgery, he vows to play for her, confronting his fear of loss and the fleeting nature of art."
      },
      {
        id: 12,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-12.png",
        date: "December 25, 2014",
        episode: "Episode 12",
        heading: "Twinkle Little Star",
        intro: "Flashbacks reveal Kaori's childhood admiration for Kousei. In the present, her surgery is postponed due to her weak condition, and Kousei dedicates himself to a performance in her honor."
      },
      {
        id: 13,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-13.png",
        date: "January 8, 2015",
        episode: "Episode 13",
        heading: "Love's Sorrow",
        intro: "Kousei visits Kaori in the hospital, where they share a heartfelt duet. Their unspoken love and shared grief over lost time permeate the music, creating a poignant moment."
      },
      {
        id: 14,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-14.png",
        date: "January 15, 2015",
        episode: "Episode 14",
        heading: "Footsteps",
        intro: "Kousei performs at a gala, channeling his emotions into music. Kaori watches from her hospital bed, their connection transcending physical distance as she vows to survive."
      },
      {
        id: 15,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-15.png",
        date: "January 22, 2015",
        episode: "Episode 15",
        heading: "Liar",
        intro: "Kaori confesses her fear of death to Kousei. Her raw honesty contrasts with the lies she told to bring him back to music, revealing her true feelings in a heartbreaking scene."
      },
      {
        id: 16,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-16.jpg",
        date: "January 29, 2015",
        episode: "Episode 16",
        heading: "Two of a Kind",
        intro: "Kousei and Kaori finally perform together on stage. Their music becomes a testament to their bond, even as Kaori's physical strength fades mid-performance."
      },
      {
        id: 17,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-17.png",
        date: "February 5, 2015",
        episode: "Episode 17",
        heading: "Twilight",
        intro: "After the concert, Kaori slips into a critical state. Kousei reads her letter, revealing her lifelong love for him and the lies she kept to inspire his return to music."
      },
      {
        id: 18,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-18.png",
        date: "February 12, 2015",
        episode: "Episode 18",
        heading: "Hearts Come Together",
        intro: "Kousei processes Kaori's letter and her impending death. He plays one final piece for her, pouring his grief and love into the music as she listens from her hospital bed."
      },
      {
        id: 19,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-19.png",
        date: "February 19, 2015",
        episode: "Episode 19",
        heading: "Goodbye, Hero",
        intro: "Kaori passes away, leaving Kousei and their friends to mourn. Kousei reflects on how she changed his life, vowing to keep playing in her memory."
      },
      {
        id: 20,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-20.png",
        date: "February 26, 2015",
        episode: "Episode 20",
        heading: "Hand in Hand",
        intro: "Kousei performs at a memorial concert for Kaori. His music transcends sorrow, celebrating her legacy and the joy she brought to his world through their shared love of music."
      },
      {
        id: 21,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-21.png",
        date: "March 5, 2015",
        episode: "Episode 21",
        heading: "Snow",
        intro: "Kousei visits Kaori's grave, sharing his growth and grief. Tsubaki confesses her love for him, offering hope for the future while honoring the past."
      },
      {
        id: 22,
        image: "./Jagjeet_images/Your-Lie-In-April-Ep-22.png",
        date: "March 19, 2015",
        episode: "Episode 22",
        heading: "Spring Breeze",
        intro: "A year later, Kousei moves forward, inspired by Kaori's spirit. The series closes with her final letter, affirming her love and the beauty of their shared spring."
      }
    ];

  return (
    <div className="container">
      {/* Display regular cards (1 & 2) */}
      {/* {regularCards.map(card => (
        <CardComponent key={card.id} card={card} />
      ))} */}

      {/* Display carousel with cards 3, 4, 5, and 6 */}
      <EpisodeCardCarousel cards={carouselCards} />
    </div>
  );
};

export default Jagjeet_App;
