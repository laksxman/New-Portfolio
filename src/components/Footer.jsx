import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/lakshman-kumar-9317331a1/', color: '#0A66C2' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/laksxman?tab=repositories', color: '#181717' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/lakshman_yadav73/', color: '#FFA116' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/lakshman_yadav73/', color: '#E4405F' },
  { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100042128401304', color: '#1877F2' },
];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Lakshman Kumar
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

