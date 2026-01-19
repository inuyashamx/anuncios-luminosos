import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, PenTool, Wrench, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consulta',
    description: 'Nos cuentas tu idea y necesidades. Escuchamos y asesoramos.',
    color: '#ff00ff',
  },
  {
    icon: PenTool,
    title: 'Diseño',
    description: 'Creamos propuestas visuales personalizadas para tu proyecto.',
    color: '#00ffff',
  },
  {
    icon: Wrench,
    title: 'Fabricación',
    description: 'Producimos con materiales de alta calidad y tecnología moderna.',
    color: '#00ff00',
  },
  {
    icon: Truck,
    title: 'Instalación',
    description: 'Instalamos de manera profesional en tu ubicación.',
    color: '#ff6600',
  },
  {
    icon: CheckCircle,
    title: 'Garantía',
    description: 'Respaldamos nuestro trabajo con garantía y soporte.',
    color: '#ffff00',
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
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#00ffff] font-medium tracking-widest uppercase">
            Cómo Trabajamos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            Nuestro <span className="neon-text">Proceso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            De la idea a la realidad en 5 simples pasos
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] -translate-y-1/2 hidden lg:block" />

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
                  className="glass rounded-2xl p-6 text-center relative z-10 h-full"
                >
                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] flex items-center justify-center font-bold text-sm"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      boxShadow: `0 0 40px ${step.color}`,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${step.color}20`,
                      boxShadow: `0 0 20px ${step.color}40`,
                    }}
                  >
                    <step.icon size={32} style={{ color: step.color }} />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector dot for desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 }}
                  className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 20px ${step.color}`,
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px #00ffff' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full neon-border-blue font-bold text-lg"
          >
            Iniciar Mi Proyecto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
