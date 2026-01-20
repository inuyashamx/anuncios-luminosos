import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/MGAnunciosLuminosos', label: 'Facebook' },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-gray-200 bg-white">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D91E6B] via-[#5AADE2] to-[#D4A832]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/Logo.png" alt="MG Anuncios Luminosos" className="h-10 w-auto" />
          </motion.a>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>2026 MG Anuncios Luminosos & Publicidad.</p>
            <p className="mt-1">Todos los derechos reservados</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  scale: 1.2,
                  boxShadow: '0 4px 20px rgba(90, 173, 226, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 hover:bg-[#5AADE2] hover:text-white transition-colors text-gray-600"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 text-xs mt-8"
        >
          Iluminamos tus ideas
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
