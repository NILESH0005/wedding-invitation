import { useState } from "react";
import OpeningScreen from "./components/OpeningScreen";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import CoupleSection from "./components/CoupleSection";
import StorySection from "./components/StorySection";
import JourneySection from "./components/JourneySection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import FinalSection from "./components/FinalSection";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <OpeningScreen
          onOpen={() => setOpened(true)}
        />
      )}

      {opened && (
        <>
          <MusicPlayer enabled={opened} />

          <main>
            <HeroSection />
            <CoupleSection />
            <StorySection />
            <JourneySection />
            <EventsSection />
            <GallerySection />
            <CountdownSection />
            <FinalSection/>


          </main>
        </>
      )}
    </>
  );
}

export default App;