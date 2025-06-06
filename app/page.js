import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage1 from "./components/Homepage1";
import HomePage2 from "./components/HomePage2";
import HomePage3 from "./components/HomePage3";
import HomePage4 from "./components/HomePage4";
import HomePage5 from "./components/HomePage5";
import HomePage6 from "./components/HomePage6";
import ViolinTape from "./components/VillonTape";
import EpisodeGuide from "./components/HomePage8";
import Homepage7 from "./components/Homepage7";
import Jagjeet_App from "./components/Jagjeet_App";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage1 />
      <HomePage5 />
      <ViolinTape />
      <Jagjeet_App />
      <HomePage3 />
      <HomePage4 />
      <Homepage7 />

      {/* <HomePage5 /> */}
      <HomePage6 />
    </>
  );
}
