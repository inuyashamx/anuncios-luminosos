import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: 1, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.40.jpeg' },
  { id: 2, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41.jpeg' },
  { id: 3, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (1).jpeg' },
  { id: 4, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (2).jpeg' },
  { id: 5, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (3).jpeg' },
  { id: 6, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (4).jpeg' },
  { id: 7, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (5).jpeg' },
  { id: 8, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (6).jpeg' },
  { id: 9, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (7).jpeg' },
  { id: 10, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (8).jpeg' },
  { id: 11, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (9).jpeg' },
  { id: 12, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42.jpeg' },
  { id: 13, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (1).jpeg' },
  { id: 14, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (2).jpeg' },
  { id: 15, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (3).jpeg' },
  { id: 16, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (4).jpeg' },
  { id: 17, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (5).jpeg' },
  { id: 18, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (6).jpeg' },
  { id: 19, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.43.jpeg' },
  { id: 20, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.43 (1).jpeg' },
  { id: 21, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.18.jpeg' },
  { id: 22, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19.jpeg' },
  { id: 23, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (1).jpeg' },
  { id: 24, image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (2).jpeg' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#D91E6B] font-medium tracking-widest uppercase">
            Portafolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-gray-800">
            Nuestros <span className="bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] bg-clip-text text-transparent">Trabajos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cada proyecto es unico. Mira algunos de nuestros trabajos mas destacados.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -10 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt="Proyecto MG Anuncios"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="p-3 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn size={24} className="text-[#D91E6B]" />
                  </motion.div>
                </div>

                {/* Border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 0 3px rgba(217, 30, 107, 0.5)',
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 z-10 text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={closeLightbox}
            >
              <X size={24} />
            </motion.button>

            {/* Previous arrow */}
            <motion.button
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 z-10 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-full h-full max-w-5xl max-h-[85vh] px-16"
            >
              <img
                src={projects[selectedIndex].image}
                alt="Proyecto MG Anuncios"
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </motion.div>

            {/* Next arrow */}
            <motion.button
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 z-10 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-sm text-white">
              {selectedIndex + 1} / {projects.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
