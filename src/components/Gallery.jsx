import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#ff00ff] font-medium tracking-widest uppercase">
            Portafolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            Nuestros <span className="neon-text-blue">Trabajos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada proyecto es único. Mira algunos de nuestros trabajos más destacados.
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
                onClick={() => setSelectedImage(project)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
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
                    className="p-3 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn size={24} />
                  </motion.div>
                </div>

                {/* Neon border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px #E91E8C, inset 0 0 20px rgba(233,30,140,0.1)',
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
          >
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full glass"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] relative"
            >
              <img
                src={selectedImage.image}
                alt="Proyecto MG Anuncios"
                className="w-full h-full object-contain rounded-2xl neon-border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
