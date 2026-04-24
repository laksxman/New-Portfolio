import { motion } from 'framer-motion';
import { FaDownload, FaHandPointRight, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import resumePdf from '../assets/Lakshman_Kumar_BTechCSE.pdf';
import profilePhoto from '../assets/ProfessionalPhoto.jpeg';

const Home = () => {
  const { ref, isInView } = useScrollAnimation();

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      ref={ref}
      className='min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6'
            >
              <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
              Available for work
            </motion.div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4'>
              Hello, I&apos;m{' '}
              <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Lakshman Kumar
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className='flex items-center gap-3 mb-6'
            >
              <FaCode className='text-blue-500 text-xl' />
              <span className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium'>
                Full Stack Web Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg'
            >
              I am a passionate Full Stack Web Developer skilled in building scalable, dynamic,
              and user-friendly web applications using modern technologies. I transform ideas
              into elegant, efficient, and engaging digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className='flex items-center gap-4 mb-8'
            >
              {[FaCode, FaServer, FaDatabase].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className='w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-blue-500'
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className='flex flex-wrap gap-4'
            >
              <motion.a
                href={resumePdf}
                download='Lakshman_Kumar_Resume.pdf'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow'
              >
                <FaDownload />
                Download Resume
              </motion.a>
              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors'
              >
                <FaHandPointRight />
                Hire Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative flex justify-center'
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl' />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='relative'
              >
                <img
                  src={profilePhoto}
                  alt='Lakshman Kumar'
                  className='w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800'
                  loading='lazy'
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1, type: 'spring' }}
                  className='absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg'
                >
                  <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Fresher
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

