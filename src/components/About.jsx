import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import skillsData from '../data/skills.json';
import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiC, SiCplusplus
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from 'react-icons/fa';

const iconMap = {
  SiHtml5, FaCss3Alt, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiC, SiCplusplus, FaJava
};

const SkillBar = ({ skill, index }) => {
  const Icon = iconMap[skill.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg"
          style={{ backgroundColor: skill.color }}
        >
          {Icon && <Icon />}
        </div>
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="ml-auto text-sm font-semibold text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
  >
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
      <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Summary
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a passionate Full Stack Web Developer skilled in building scalable, dynamic,
            and user-friendly web applications using modern technologies. I have a strong foundation
            in Data Structures and Algorithms, which helps me write efficient and optimized code.
            I specialize in creating seamless user experiences with clean, efficient code and modern
            design principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Database" skills={skillsData.database} />
        </div>
      </div>
    </section>
  );
};

export default About;

