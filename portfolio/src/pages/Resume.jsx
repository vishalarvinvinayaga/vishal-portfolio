import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const GOOGLE_DRIVE_RESUME = 'https://drive.google.com/file/d/1mqfO3kvLl9xqqflTKWYKoy2I5bHZczpb/view?usp=sharing';
const GOOGLE_DRIVE_RESUME_DOWNLOAD = 'https://drive.usercontent.google.com/u/0/uc?id=1mqfO3kvLl9xqqflTKWYKoy2I5bHZczpb&export=download';

const Resume = () => {
  const skills = {
    'Languages': ['Python', 'C++', 'C', 'Ruby'],
    'Frameworks/Libraries': ['TensorFlow', 'Keras', 'PyTorch', 'Hugging Face', 'LangChain', 'Plotly', 'Django', 'Rails', 'FastAPI'],
    'Tools & Cloud': ['Putty', 'Docker', 'Microsoft 365', 'Kubernetes', 'Wireshark', 'AWS', 'Azure', 'Product Board', 'Github'],
    'Databases': ['mySQL', 'PostgreSQL']
  };

  const experiences = [
    {
      id: 'exp-intern-analyst',
      title: 'Intern – Analyst (Experience Architecture)',
      company: 'Fedex Dataworks, Boca Raton, USA',
      period: 'Jun 2025 – present',
      description: [
        'Analyzed customer and operational data to identify user pain points in FedEx routing and delivery systems.',
        'Contributed to design proposals within the GPDE (Global Pickup and Delivery Ecosystem) and Route Optimization initiatives.',
        'Collaborated with experience architects to generate user journey maps and future-state architectural flows.',
        'Supported initiative-level architectural validation and transitioning designs to the Strategic Design team.'
      ]
    },
    {
      id: 'exp-aiml-engineer',
      title: 'AI/ML Engineer',
      company: 'Aventusoft, Boca Raton, USA',
      period: 'Jun 2025 – present',
      description: [
        'Engineered virtual calling bots using Python and FastAPI with integration to ElevenLabs speech tools.',
        'Developed prompt engineering strategies and supportive AI tools used in real-time patient interactions.',
        'Designed agent-support functionalities for patient queries and medication logging.',
        'Collaborated in full codebase migration to Ruby on Rails in alignment with evolving business requirements.'
      ]
    },
    {
      id: 'exp-graduate-assistant',
      title: 'Graduate Assistant',
      company: 'Florida Atlantic University, Boca Raton, USA',
      period: 'Jan 2024 – May 2025',
      description: [
        'Engineered and implemented automatic scripts using Python and shell scripting to streamline the student application process, significantly reducing processing time and enhancing operational efficiency.',
        'Developed and deployed interactive dashboards for Big Data visualization using Plotly, enabling efficient data analysis and reporting in cloud environments (AWS).',
        'Collaborated with faculty to develop and optimize Python algorithms for academic and research projects, improving problem-solving capabilities and data analysis accuracy.',
        'Engineered advanced data cleaning, transformation, and normalization scripts using Python, ensuring data quality and integrity for academic research projects.',
        'Collaborated with cross-functional teams to gather requirements and build custom visualizations, improving decision-making and operational efficiency for internal clients.',
        'Designed and implemented prompt engineering techniques to enhance the effectiveness of Large Language Models (LLMs) for custom NLP tasks.',
        'Fine-tuned the ChatDoctor LLM on a curated cardiovascular dataset, aligning model weights to accurately interpret cardiac biomarkers and patient histories.',
        'Engineered a data-to-dialogue pipeline that converts raw cardiovascular metrics into clinical-style conversational prompts, enabling automated, diagnostic-quality interactions.'
      ]
    },
    {
      id: 'exp-data-engineer',
      title: 'Data Engineer',
      company: 'Capgemini Engineering, Chennai, India',
      period: 'May 2022 – Dec 2022',
      description: [
        'Developed interactive dashboards using Power BI to visualize the activity of networking devices across the organization, enhancing network monitoring and decision-making and reducing response time to incidents by 25%.',
        'Optimized database performance with MySQL and PostgreSQL, resulting in a 40% reduction in query response time, enhancing user experience, and increasing customer satisfaction.',
        'Deployed machine learning models using TensorFlow and PyTorch on AWS and GCP platforms, enhancing network device performance monitoring and predictive maintenance, which led to a 20% reduction in downtime and improved network reliability.',
        'Developed and maintained scalable data pipelines using Apache Spark and Python, enabling real-time data processing and analytics, which improved decision-making speed by 30%.',
        'Created user-friendly data security dashboards in Python, facilitating real-time monitoring and actionable insights, which enhanced system integrity and client satisfaction.'
      ]
    },
    {
      id: 'exp-software-analyst',
      title: 'Software Analyst (Developer/Tester)',
      company: 'Capgemini Engineering, Chennai, India',
      period: 'Dec 2020 – May 2022',
      description: [
        'Developed comprehensive automation scripts using Selenium Python and Robot Framework, optimizing the testing process for efficiency and reliability and reducing testing time by 40%.',
        'Enhanced user interfaces with JavaScript, improving application responsiveness and user satisfaction through minor front-end adjustments.',
        'Resolved customer-reported defects, improving product stability and boosting user satisfaction by ensuring reliable software performance.',
        'Transformed user stories into development tasks, leading the creation of new features and expanding product capabilities, resulting in increased product adoption.',
        'Utilized Docker and Kubernetes to deploy applications, ensuring seamless integration and scalable deployments, which improved system reliability and resource management.',
        'Implemented CI/CD pipelines with Jenkins, automating software updates with daily builds, executing automation scripts, and generating detailed bug reports for the team, which streamlined development processes and enhanced software quality.'
      ]
    },
    {
      id: 'exp-junior-intern',
      title: 'Junior Intern (Trainee)',
      company: 'K.I.O.C.L, Mangalore, India',
      period: 'Aug 2019 – Apr 2020',
      description: [
        'Collaborated on website design to align with government standards, ensuring compliance while enhancing user engagement through intuitive design and user-friendly features.',
        'Developed and implemented a robust database system to archive historical data, significantly improving information retrieval and management efficiency.',
        'Conducted in-depth market research and analysed marketing strategies, providing actionable recommendations that bolstered the business market presence and fuelled growth.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Masters in Computer Science',
      school: 'Florida Atlantic University, Boca Raton, USA',
      period: 'Summer 2025',
      description: 'Advanced coursework and research in computer science, focusing on AI/ML and data engineering.'
    },
    {
      degree: 'Bachelor of Technology in Electronic and Communication Engineering',
      school: 'SRM Institute of Science & Technology, Chennai, India',
      period: 'Jul 2020',
      description: 'Graduated with a strong foundation in engineering and technology.'
    }
  ];

  const certifications = [
    { name: 'Intermediate Python – HackerRank', date: 'Aug 2023' },
    { name: 'Data Analysis with Python – IBM', date: 'Mar 2024' },
    { name: 'AWS Cloud Practitioner – Credly Batch', date: 'Mar 2024' },
    { name: 'Data Structures & Algorithms using Python – Google', date: 'Jun 2024' },
    { name: 'AWS – Udemy', date: 'Jun 2024' }
  ];

  return (
    <section id="resume" className="section-padding bg-white dark:bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional experience, skills, and qualifications
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href={GOOGLE_DRIVE_RESUME}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
          >
            <FaEye size={18} />
            View Resume
          </motion.a>
          <motion.a
            href={GOOGLE_DRIVE_RESUME_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
          >
            <FaDownload size={18} />
            Download PDF
          </motion.a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                id={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-300 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                id={index === 0 ? 'edu-masters-cs' : 'edu-btech-ece'}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.school}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-300 font-medium mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications & License</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
                <span className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">{cert.name}</span>
                <span className="text-gray-500 dark:text-gray-300">{cert.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;