import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `Hola! Me contacto desde la web de MG Anuncios.

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Telefono:* ${formData.telefono || 'No proporcionado'}
*Servicio de interes:* ${formData.servicio || 'No especificado'}

*Mensaje:*
${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/5219982401172?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefono', value: '+52 1 998 240 1172', href: 'tel:+5219982401172' },
    { icon: Mail, label: 'Email', value: 'mganunciosluminososcancun@gmail.com', href: 'mailto:mganunciosluminososcancun@gmail.com' },
  ];

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D91E6B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5AADE2]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D91E6B] font-medium tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-gray-800">
            Hablemos de tu <span className="bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] bg-clip-text text-transparent">Proyecto</span>!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 space-y-6 shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 30, 107, 0.1)' }}
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D91E6B] transition-colors text-gray-800"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 30, 107, 0.1)' }}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D91E6B] transition-colors text-gray-800"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 30, 107, 0.1)' }}
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D91E6B] transition-colors text-gray-800"
                    placeholder="+52 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interes
                  </label>
                  <motion.select
                    whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 30, 107, 0.1)' }}
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D91E6B] transition-colors text-gray-800"
                  >
                    <option value="">Selecciona...</option>
                    <option value="letras3d">Letras 3D</option>
                    <option value="neonflex">Neon Flex</option>
                    <option value="cajas">Cajas de Luz</option>
                    <option value="letras2d">Letras 2D</option>
                    <option value="impresion">Impresion</option>
                    <option value="estructuras">Estructuras</option>
                    <option value="cnclaser">CNC / Laser</option>
                    <option value="promocionales">Promocionales</option>
                    <option value="otro">Otro</option>
                  </motion.select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <motion.textarea
                  whileFocus={{ boxShadow: '0 0 0 3px rgba(217, 30, 107, 0.1)' }}
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D91E6B] transition-colors resize-none text-gray-800"
                  placeholder="Cuentanos sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(217, 30, 107, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832] font-bold text-lg flex items-center justify-center gap-2 text-white shadow-lg"
              >
                <MessageCircle size={20} />
                Enviar por WhatsApp
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
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 cursor-pointer hover:border-[#5AADE2] transition-all shadow-lg border border-gray-100"
                >
                  <info.icon className="text-[#5AADE2] mb-3" size={24} />
                  <p className="text-gray-500 text-sm">{info.label}</p>
                  <p className="font-medium text-sm break-all text-gray-800">{info.value}</p>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5219982401172"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-500 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center"
                >
                  <MessageCircle className="text-green-600" size={28} />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-lg group-hover:text-green-600 transition-colors text-gray-800">
                    WhatsApp Directo
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Respuesta inmediata en horario laboral
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Facebook CTA */}
            <motion.a
              href="https://www.facebook.com/MGAnunciosLuminosos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-500 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center"
                >
                  <Facebook className="text-blue-600" size={28} />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-lg group-hover:text-blue-600 transition-colors text-gray-800">
                    Facebook
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Siguenos y mira mas trabajos
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Second Email */}
            <motion.a
              href="mailto:mgedgarmadrid@gmail.com"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="block bg-white rounded-2xl p-6 cursor-pointer hover:border-[#D91E6B] transition-all shadow-lg border border-gray-100"
            >
              <Mail className="text-[#D91E6B] mb-3" size={24} />
              <p className="text-gray-500 text-sm">Email alternativo</p>
              <p className="font-medium text-sm break-all text-gray-800">mgedgarmadrid@gmail.com</p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
