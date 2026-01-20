import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Sun, Zap, Layers, Scissors, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'Letras 3D',
    description: 'Fabricacion de letras en lamina, acrilico y MDF con modulos LED. Acabados en pintura, rotulacion tipo madera y mas.',
    image: '/servicios/letras_3d.jpeg',
    color: '#D91E6B',
  },
  {
    icon: Zap,
    title: 'Neon Flex',
    description: 'Letreros neon flex sobre base de acrilico o triplay. Disenos personalizados a una o varias lineas con multiples colores.',
    image: '/servicios/neo_leds.jpg',
    color: '#5AADE2',
  },
  {
    icon: Sun,
    title: 'Cajas de Luz',
    description: 'Cajas de luz con estructura de PTR, frentes de acrilico o lona. Rotuladas en vinil con modulos LED internos.',
    image: '/servicios/cajas_luz.jpeg',
    color: '#D4A832',
  },
  {
    icon: Layers,
    title: 'Letras 2D',
    description: 'Logotipos en MDF, lamina, trovisel o alucobond. Con acabados en barniz, pintura o rotulacion y modulos LED al reverso.',
    image: '/servicios/letras_2d.jpeg',
    color: '#D91E6B',
  },
  {
    icon: Scissors,
    title: 'CNC',
    description: 'Cortes CNC en alucobond, trovisel, madera y lamina. Precision y calidad en cada corte.',
    image: '/servicios/cnc.jpeg',
    color: '#5AADE2',
  },
  {
    icon: Sparkles,
    title: 'Laser',
    description: 'Grabado laser personalizado en multiples materiales. Detalles finos y acabados profesionales.',
    image: '/servicios/laser.jpg',
    color: '#D4A832',
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
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D91E6B]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#5AADE2] font-medium tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-gray-800">
            Que <span className="bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] bg-clip-text text-transparent">Hacemos</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Todo tipo de publicidad: letras 3D, rotulacion de vinil, cajas de luz y mantenimiento en general.
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
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
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
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                {/* Icon */}
                <motion.div
                  className="absolute bottom-4 left-4 p-3 rounded-xl bg-white shadow-lg"
                  style={{
                    boxShadow: `0 4px 20px ${service.color}30`,
                  }}
                  whileHover={{
                    boxShadow: `0 8px 30px ${service.color}50`,
                    scale: 1.1,
                  }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-display text-xl font-bold mb-3 text-gray-800 group-hover:text-[#D91E6B] transition-colors"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line */}
                <motion.div
                  className="h-1 mt-4 rounded-full"
                  style={{ backgroundColor: service.color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: `inset 0 0 0 2px ${service.color}40`,
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
