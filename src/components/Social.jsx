import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import socialData from '../data/social.json';

const iconMap = {
  FaLinkedin, FaGithub, FaInstagram, FaFacebook, SiLeetcode
};

const Social = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="social"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow me on social media to stay updated with my latest projects and tech insights.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialData.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl">
                  <Icon
                    size={36}
                    className="transition-colors duration-300"
                    style={{ color: social.color }}
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap"
                >
                  {social.name}
                </motion.span>
              </motion.a>
            );
          })}
        </div>
          </div>
</section>
  );
};

export default Social;
