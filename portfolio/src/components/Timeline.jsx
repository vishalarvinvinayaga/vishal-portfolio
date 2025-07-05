import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    // 1. Intern – Analyst (Experience Architecture)
    {
      id: 'exp-intern-analyst',
      type: 'work',
      title: 'Intern – Analyst (Experience Architecture)',
      institution: 'Fedex Dataworks, Boca Raton, USA',
      period: 'Jun 2025 – present',
      description: 'Analyzed customer and operational data, contributed to solution proposals, and collaborated on user journey mapping and architectural flows.',
      icon: FaBriefcase,
    },
    // 2. AI/ML Engineer
    {
      id: 'exp-aiml-engineer',
      type: 'work',
      title: 'AI/ML Engineer',
      institution: 'Aventusoft, Boca Raton, USA',
      period: 'Jun 2025 – present',
      description: 'Engineered virtual calling bots, developed prompt engineering strategies, and collaborated on full codebase migration to Ruby on Rails.',
      icon: FaBriefcase,
    },
    // 3. Graduate Assistant
    {
      id: 'exp-graduate-assistant',
      type: 'work',
      title: 'Graduate Assistant',
      institution: 'Florida Atlantic University, Boca Raton, USA',
      period: 'Jan 2024 – May 2025',
      description: 'Developed automation scripts, dashboards, and NLP techniques for academic and research projects. Fine-tuned LLMs and engineered data pipelines.',
      icon: FaBriefcase,
    },
    // 4. Masters in Computer Science
    {
      id: 'edu-masters-cs',
      type: 'education',
      title: 'Masters in Computer Science',
      institution: 'Florida Atlantic University, Boca Raton, USA',
      period: 'Summer 2025',
      description: 'Advanced coursework and research in computer science, focusing on AI/ML and data engineering.',
      icon: FaGraduationCap,
    },
    // 5. Data Engineer
    {
      id: 'exp-data-engineer',
      type: 'work',
      title: 'Data Engineer',
      institution: 'Capgemini Engineering, Chennai, India',
      period: 'May 2022 – Dec 2022',
      description: 'Developed dashboards, optimized database performance, deployed ML models, and maintained scalable data pipelines.',
      icon: FaBriefcase,
    },
    // 6. Software Analyst (Developer/Tester)
    {
      id: 'exp-software-analyst',
      type: 'work',
      title: 'Software Analyst (Developer/Tester)',
      institution: 'Capgemini Engineering, Chennai, India',
      period: 'Dec 2020 – May 2022',
      description: 'Developed automation scripts, improved product stability, and implemented CI/CD pipelines for software updates.',
      icon: FaBriefcase,
    },
    // 7. Junior Intern (Trainee)
    {
      id: 'exp-junior-intern',
      type: 'work',
      title: 'Junior Intern (Trainee)',
      institution: 'K.I.O.C.L, Mangalore, India',
      period: 'Aug 2019 – Apr 2020',
      description: 'Collaborated on website design, implemented a robust database system, and conducted market research.',
      icon: FaBriefcase,
    },
    // 8. Bachelor of Technology in Electronic and Communication Engineering
    {
      id: 'edu-btech-ece',
      type: 'education',
      title: 'Bachelor of Technology in Electronic and Communication Engineering',
      institution: 'SRM Institute of Science & Technology, Chennai, India',
      period: 'Jul 2020',
      description: 'Graduated with a strong foundation in engineering and technology.',
      icon: FaGraduationCap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Add scroll handler
  const handleTimelineClick = (id) => {
    // Scroll to work experience or education
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // If not found, scroll to resume section
      const resumeSection = document.getElementById('resume');
      if (resumeSection) resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="section-padding bg-primary-50 dark:bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Education and professional experience
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center cursor-pointer ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onClick={() => handleTimelineClick(item.id)}
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter') handleTimelineClick(item.id); }}
                aria-label={`Go to ${item.title} in Resume`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg dark:shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${
                        item.type === 'education' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        <item.icon size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 