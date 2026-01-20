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
    <div className="bg-white min-h-screen text-gray-800 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D91E6B]/5 blur-3xl"
          style={{
            top: '10%',
            left: '-10%',
          }}
        />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#5AADE2]/5 blur-3xl"
          style={{
            top: '50%',
            right: '-10%',
          }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#D4A832]/5 blur-3xl"
          style={{
            bottom: '10%',
            left: '30%',
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
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
