import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Box, Zap, Sun, PenTool, Layers } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Neones LED',
    description: 'Letreros de neón modernos con tecnología LED. Diseños personalizados con infinidad de colores.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600',
    color: '#ff00ff',
  },
  {
    icon: Box,
    title: 'Letras 3D',
    description: 'Letras corpóreas en acero, aluminio, acrílico y PVC. Con o sin iluminación interior.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600',
    color: '#00ffff',
  },
  {
    icon: Sun,
    title: 'Cajas de Luz',
    description: 'Cajas luminosas de alto impacto visual. Ideales para fachadas y exteriores.',
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600',
    color: '#ff6600',
  },
  {
    icon: Zap,
    title: 'Rótulos LED',
    description: 'Pantallas y rótulos con tecnología LED de última generación. Programables y dinámicos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    color: '#00ff00',
  },
  {
    icon: PenTool,
    title: 'Diseño Gráfico',
    description: 'Creamos el diseño perfecto para tu marca. Desde el concepto hasta la instalación.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
    color: '#ffff00',
  },
  {
    icon: Layers,
    title: 'Viniles y Lonas',
    description: 'Impresión de gran formato en vinil, lona y materiales especiales. Alta resolución.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    color: '#ff00ff',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#ff00ff]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ffff] font-medium tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            ¿Qué <span className="neon-text">Hacemos</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones completas en publicidad visual. Desde el diseño hasta la instalación.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                {/* Icon */}
                <motion.div
                  className="absolute bottom-4 left-4 p-3 rounded-xl"
                  style={{
                    backgroundColor: `${service.color}20`,
                    boxShadow: `0 0 20px ${service.color}40`,
                  }}
                  whileHover={{
                    boxShadow: `0 0 40px ${service.color}`,
                    scale: 1.1,
                  }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line */}
                <motion.div
                  className="h-0.5 mt-4 rounded-full"
                  style={{ backgroundColor: service.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 40px ${service.color}30`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
