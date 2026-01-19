import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Restaurante Neon Bar',
    category: 'Neones LED',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
  },
  {
    id: 2,
    title: 'Hotel Boutique Luna',
    category: 'Letras 3D',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  },
  {
    id: 3,
    title: 'Tienda Urban Style',
    category: 'Cajas de Luz',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  },
  {
    id: 4,
    title: 'Café El Refugio',
    category: 'Neones LED',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
  },
  {
    id: 5,
    title: 'Gimnasio PowerFit',
    category: 'Rótulos LED',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  },
  {
    id: 6,
    title: 'Farmacia Salud+',
    category: 'Letras 3D',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800',
  },
  {
    id: 7,
    title: 'Club Nocturno Eclipse',
    category: 'Neones LED',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800',
  },
  {
    id: 8,
    title: 'Centro Comercial Plaza',
    category: 'Cajas de Luz',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800',
  },
];

const categories = ['Todos', 'Neones LED', 'Letras 3D', 'Cajas de Luz', 'Rótulos LED'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(project)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-display font-bold text-lg">{project.title}</h3>
                        <p className="text-[#00ffff] text-sm">{project.category}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="p-2 rounded-full bg-white/20"
                      >
                        <ZoomIn size={20} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Neon border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px #ff00ff, inset 0 0 20px rgba(255,0,255,0.1)',
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
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl neon-border"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-b-2xl">
                <h3 className="font-display text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-[#00ffff]">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
