import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    featured = false
  } = project;

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer h-[500px] flex flex-col justify-between`}
    >
      {/* Project Image */}
      <div className="relative h-40 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-6xl text-primary-400 opacity-50">
            {title.charAt(0)}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={e => e.stopPropagation()}
            >
              <FaGithub size={16} />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={e => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={14} />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (githubUrl) {
    return (
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-primary-500">
        {cardContent}
      </a>
    );
  }
  return cardContent;
};

export default ProjectCard; 