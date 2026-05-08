import React from 'react';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';
import StarField from '../components/magicui/StarField';
import { Meteors } from '../components/magicui/Meteors';

const Home = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarField />
        <Meteors number={20} />
      </div>
      <div className="relative z-10 w-full">
        <Hero />
        <Reveal width="100%"><About /></Reveal>
        <Reveal width="100%"><Achievements /></Reveal>
        <Reveal width="100%"><Skills /></Reveal>
        <Reveal width="100%"><Contact /></Reveal>
      </div>
    </>
  );
};

export default Home;