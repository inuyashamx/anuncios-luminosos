import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E91E8C] via-[#00B4D8] to-[#F4B223] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Cursor glow effect - optional decorative */}
      <div className="fixed inset-0 pointer-events-none z-[90]">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E91E8C]/5 blur-3xl animate-pulse"
          style={{
            top: '20%',
            left: '10%',
          }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00B4D8]/5 blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: '10%',
            animationDelay: '1s',
          }}
        />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
