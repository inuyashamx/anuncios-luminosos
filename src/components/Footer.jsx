import { motion } from 'framer-motion';
import { Zap, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 font-display text-xl font-bold justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-[#ff00ff]" size={28} />
            <span className="neon-text">NEONSIGN</span>
          </motion.a>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 NeonSign Studio. Todos los derechos reservados.</p>
            <p className="mt-1">Hecho con pasión en México</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{
                  scale: 1.2,
                  boxShadow: '0 0 20px #00ffff',
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass hover:border-[#00ffff] transition-colors"
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
          className="text-center text-gray-600 text-xs mt-8"
        >
          Iluminamos tus ideas desde 2014
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
