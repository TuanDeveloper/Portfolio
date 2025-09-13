import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import FloatingNavigation from './components/common/FloatingNavigation';
import { useAnimation } from './hooks/useAnimation';
import BackgroundElements from './components/common/BackgroundElements';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  useAnimation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundElements />
      <Header />
      <main className="flex-grow px-6 md:px-20 lg:px-32 xl:px-48 2xl:px-64 pt-10 max-w-[1200px] mx-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingNavigation />
      <div className="h-20"></div>
      
    </div>
  );
}

export default App;