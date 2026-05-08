import React from 'react';
import Journey from '../components/Journey';
import Reveal from '../components/Reveal';
import AuroraBackground from '../components/magicui/AuroraBackground';

const JourneyPage = () => {
  return (
    <>
      <AuroraBackground />
      <div className="pt-32 min-h-screen bg-transparent relative z-10 w-full">
        <Reveal width="100%">
          <Journey />
        </Reveal>
      </div>
    </>
  );
};

export default JourneyPage;