import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vishalarvin',
      icon: FaGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vishalarvin',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:vishalarvin.v@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-200">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-primary-400 dark:text-primary-300 mb-4">
                Vishal Arvin
              </h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                AI/ML Engineer & Data Scientist | Delray Beach, FL<br/>
                vishalarvin.v@gmail.com | (203) 809-2012
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300 dark:text-gray-400">
                <p>📍 Delray Beach, FL, USA</p>
                <p>📧 vishalarvin.v@gmail.com</p>
                <p>📱 (203) 809-2012</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                <span>© {currentYear} All rights reserved.</span>
                <span className="flex items-center gap-1">
                  Made with <FaHeart className="text-red-500" /> by Vishal Arvin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 