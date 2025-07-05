import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Heart Health Predictor',
      description: 'Built a deep learning model to predict heart-related conditions for early diagnosis and preventive care.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com/vishalarvinvinayaga/healthcare_data_dashboard',
      liveUrl: '',
      featured: true,
      details: [
        'Developed a neural network using TensorFlow and Keras to analyse patient data.',
        'Applied data preprocessing, feature scaling, and hyperparameter tuning to enhance accuracy.',
        'Visualized key risk factors influencing heart health through data insights.',
        'Learnings: Strengthened skills in deep learning for healthcare, focusing on data-driven diagnosis and model interpretability.'
      ]
    },
    {
      id: 2,
      title: 'OwlBot Chatbot',
      description: 'Designed and implemented a chatbot to assist university students by leveraging a Retrieval-Augmented Generation (RAG) system.',
      technologies: ['OpenAI API', 'Python', 'Django', 'React', 'Weaviate', 'LangChain', 'Beautiful Soup'],
      githubUrl: 'https://github.com/vishalarvinvinayaga/SEproject_Deployment',
      liveUrl: '',
      featured: true,
      details: [
        'Engineered prompt templates to optimize responses from Large Language Models (LLMs) and enhance query relevance.',
        'Developed a robust backend in Django integrated with a vector database (Weaviate) to store and retrieve embeddings efficiently.',
        'Automated web scraping using Beautiful Soup.',
        'Learnings: Strengthened skills in prompt engineering, RAG systems, and full-stack development while enhancing application performance and user accessibility.'
      ]
    },
    {
      id: 3,
      title: 'Predictive Modelling and Data Analysis',
      description: 'Developed multiple predictive models to address real-world challenges, including sales forecasting, ancestry prediction, and credit worthiness assessment.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/vishalarvinvinayaga/Computational-AI/tree/main',
      liveUrl: '',
      details: [
        'Implemented advanced regression techniques such as multiple linear regression, ridge regression, and penalized regression.',
        'Applied methodologies like mini-batch gradient descent, k-fold cross-validation, data normalization, and one-hot encoding to ensure accuracy and robustness.',
        'Optimized model performance using metrics such as mean squared error minimization and improved predictive accuracy over diverse datasets.',
        'Learnings: Strengthened skills in handling diverse and imbalanced datasets, model optimization, and statistical analysis while delivering actionable insights for data-driven decision-making.'
      ]
    },
    {
      id: 4,
      title: 'DocuSearch',
      description: 'Developed a generative AI-powered document search application enabling users to interact with documents by asking questions.',
      technologies: ['Python', 'Django', 'React', 'AWS', 'LangChain', 'OpenAI API', 'pyPdf2'],
      githubUrl: 'https://github.com/vishalarvinvinayaga/docusearch',
      liveUrl: '',
      details: [
        'Designed and implemented a RAG system to prioritize document-specific context for accurate and relevant answers.',
        'Utilized prompt engineering to ensure precise and contextual responses from the LLM.',
        'Developed a seamless frontend using React, featuring a dual-column interface for PDF upload and chatbot interaction.',
        'Learnings: Enhanced expertise in RAG systems, prompt engineering, and AWS deployment while significantly improving document interaction and user experience.'
      ]
    },
    // New Project: Study Buddy
    {
      id: 5,
      title: 'Study Buddy',
      description: 'Built a web application to facilitate collaborative learning among students.',
      technologies: ['Django', 'HTML5', 'CSS', 'JavaScript', 'SQLite'],
      githubUrl: 'https://github.com/vishalarvinvinayaga/Django-StudyBuddy',
      liveUrl: '',
      details: [
        'Developed the application using the Django framework, allowing users to create and manage study rooms.',
        'Integrated collaborative features for real-time discussions and resource sharing.',
        'Learnings: Developed a strong understanding of web application development and real-time communication features.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-primary-50 dark:bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, focusing on AI/ML, data engineering, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 