import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:bg-[#0f172a] dark:bg-none relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="text-primary-600">Vishal Arvin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                AI/ML Engineer & Data Scientist | Delray Beach, FL
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Experienced in building scalable AI/ML solutions, data engineering, and full-stack applications. Passionate about leveraging data and modern technologies to solve real-world problems and deliver business value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="btn-primary text-lg px-8 py-4"
              >
                View My Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16"
            >
              <motion.button
                onClick={() => scrollToSection('#about')}
                whileHover={{ y: 5 }}
                className="text-gray-400 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FaArrowDown size={24} className="animate-bounce" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI/ML Engineer, Data Engineer, and Software Developer with a strong background in programming, backend frameworks, and cloud technologies. Experienced in building data pipelines, dashboards, deploying machine learning models for business impact, and integrating AI technologies into real-world applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Turning Data Into Actionable Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in AI/ML, data engineering, and full-stack development. My experience spans building robust data pipelines, deploying machine learning models, and creating interactive dashboards for business and research applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I enjoy collaborating with cross-functional teams to deliver scalable solutions and am always eager to learn and apply new technologies.
              </p>
              {/* Skills */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'C++', 'C', 'Ruby', 'TensorFlow', 'Keras', 'PyTorch', 'Hugging Face', 'LangChain', 'Plotly', 'Django', 'Rails', 'FastAPI', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'mySQL', 'PostgreSQL'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* About Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '5', label: 'Years Experience' },
                  { number: '10+', label: 'Projects Completed' },
                  { number: '5', label: 'Companies Worked' },
                  { number: '15+', label: 'Technologies Mastered' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Ready to work together?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Let's discuss your project and bring your vision to life.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 