import React from 'react';
import Projects from '../components/Projects';
import Reveal from '../components/Reveal';
import GridBackground from '../components/magicui/GridBackground';

const WebsitesPage = () => {
  return (
    <>
      <GridBackground />
      <div className="pt-32 min-h-screen bg-transparent relative z-10 w-full">
        <Reveal width="100%">
          <Projects />
        </Reveal>
      </div>
    </>
  );
};

export default WebsitesPage;