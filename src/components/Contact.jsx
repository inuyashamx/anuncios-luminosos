import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado! Te contactaremos pronto.');
      setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
    }, 2000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '+52 123 456 7890' },
    { icon: Mail, label: 'Email', value: 'info@neonsign.com' },
    { icon: MapPin, label: 'Ubicación', value: 'Ciudad de México, MX' },
    { icon: Clock, label: 'Horario', value: 'Lun - Sáb: 9am - 7pm' },
  ];

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff00ff] font-medium tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            ¡Hablemos de tu <span className="neon-text-blue">Proyecto</span>!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cotiza sin compromiso. Respuesta en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre *
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#ff00ff] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#ff00ff] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Teléfono
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#ff00ff] transition-colors"
                    placeholder="+52 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Servicio de interés
                  </label>
                  <motion.select
                    whileFocus={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#ff00ff] transition-colors"
                  >
                    <option value="" className="bg-[#0a0a0a]">Selecciona...</option>
                    <option value="neones" className="bg-[#0a0a0a]">Neones LED</option>
                    <option value="letras3d" className="bg-[#0a0a0a]">Letras 3D</option>
                    <option value="cajas" className="bg-[#0a0a0a]">Cajas de Luz</option>
                    <option value="rotulos" className="bg-[#0a0a0a]">Rótulos LED</option>
                    <option value="otro" className="bg-[#0a0a0a]">Otro</option>
                  </motion.select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mensaje *
                </label>
                <motion.textarea
                  whileFocus={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#ff00ff] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px #ff00ff' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6"
                >
                  <info.icon className="text-[#00ffff] mb-3" size={24} />
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block glass rounded-2xl p-6 border border-green-500/30 hover:border-green-500 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center"
                >
                  <MessageCircle className="text-green-500" size={28} />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-lg group-hover:text-green-400 transition-colors">
                    WhatsApp Directo
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Respuesta inmediata en horario laboral
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-64"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 20px #ff00ff',
                      '0 0 40px #ff00ff',
                      '0 0 20px #ff00ff',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 rounded-full bg-[#ff00ff]"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="font-display font-bold">CDMX, México</p>
                <p className="text-gray-400 text-sm">Entregas a todo el país</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
