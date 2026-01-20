import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, PenTool, Wrench, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consulta',
    description: 'Nos cuentas tu idea y necesidades. Escuchamos y asesoramos.',
    color: '#D91E6B',
  },
  {
    icon: PenTool,
    title: 'Diseno',
    description: 'Creamos propuestas visuales personalizadas para tu proyecto.',
    color: '#5AADE2',
  },
  {
    icon: Wrench,
    title: 'Fabricacion',
    description: 'Producimos con materiales de alta calidad y tecnologia moderna.',
    color: '#D4A832',
  },
  {
    icon: Truck,
    title: 'Instalacion',
    description: 'Instalamos de manera profesional en tu ubicacion.',
    color: '#D91E6B',
  },
  {
    icon: CheckCircle,
    title: 'Garantia',
    description: 'Respaldamos nuestro trabajo con garantia y soporte.',
    color: '#5AADE2',
  },
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="proceso"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D91E6B]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#5AADE2]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#5AADE2] font-medium tracking-widest uppercase">
            Como Trabajamos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-gray-800">
            Nuestro <span className="bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] bg-clip-text text-transparent">Proceso</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            De la idea a la realidad en 5 simples pasos
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] -translate-y-1/2 hidden lg:block rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl p-6 text-center relative z-10 h-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] flex items-center justify-center font-bold text-sm text-white shadow-lg"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      boxShadow: `0 8px 30px ${step.color}40`,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${step.color}15`,
                      boxShadow: `0 4px 20px ${step.color}20`,
                    }}
                  >
                    <step.icon size={32} style={{ color: step.color }} />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector dot for desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 }}
                  className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-lg"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 15px ${step.color}80`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(90, 173, 226, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#5AADE2] to-[#D91E6B] font-bold text-lg text-white shadow-lg"
          >
            Iniciar Mi Proyecto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
