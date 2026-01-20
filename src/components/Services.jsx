import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Sun, Zap, Layers, Printer, Wrench, Scissors, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'Letras 3D',
    description: 'Fabricación de letras en lámina, acrílico y MDF con módulos LED. Acabados en pintura, rotulación tipo madera y más.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (3).jpeg',
    color: '#E91E8C',
  },
  {
    icon: Zap,
    title: 'Neón Flex',
    description: 'Letreros neón flex sobre base de acrílico o triplay. Diseños personalizados a una o varias líneas con múltiples colores.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (2).jpeg',
    color: '#00B4D8',
  },
  {
    icon: Sun,
    title: 'Cajas de Luz',
    description: 'Cajas de luz con estructura de PTR, frentes de acrílico o lona. Rotuladas en vinil con módulos LED internos.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.41 (5).jpeg',
    color: '#F4B223',
  },
  {
    icon: Layers,
    title: 'Letras 2D',
    description: 'Logotipos en MDF, lámina, trovisel o alucobond. Con acabados en barniz, pintura o rotulación y módulos LED al reverso.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.11.42 (4).jpeg',
    color: '#E91E8C',
  },
  {
    icon: Printer,
    title: 'Impresión',
    description: 'Impresión en viniles (mate, brillante, microperforado), lonas y canvas. Impresión directa en PVC, trovisel y aluminio.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (5).jpeg',
    color: '#00B4D8',
  },
  {
    icon: Wrench,
    title: 'Estructuras',
    description: 'Fabricación de toldos, cortinas de lona, estructuras para anuncios con PTR y soldaduras personalizadas.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (2).jpeg',
    color: '#F4B223',
  },
  {
    icon: Scissors,
    title: 'CNC y Láser',
    description: 'Cortes CNC en alucobond, trovisel, madera y lámina. Grabado láser personalizado en múltiples materiales.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (8).jpeg',
    color: '#E91E8C',
  },
  {
    icon: Sparkles,
    title: 'Promocionales',
    description: 'Serigrafía textil, bordado en gorras, credenciales PVC, señaléticas, totems y objetos personalizados.',
    image: '/Fotos/WhatsApp Image 2026-01-19 at 18.20.19 (10).jpeg',
    color: '#00B4D8',
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#E91E8C]/5 blur-3xl" />

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
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#00B4D8] transition-colors">
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
