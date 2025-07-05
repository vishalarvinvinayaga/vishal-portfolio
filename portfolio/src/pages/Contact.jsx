import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'vishalarvin.v@gmail.com',
      link: 'mailto:vishalarvin.v@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '(203) 809-2012',
      link: 'tel:+12038092012',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Delray Beach, FL, USA',
      link: null,
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vishalarvinvinayaga',
      icon: FaGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vishalarvin',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-primary-50 dark:bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-col items-center w-full">
          {/* Send Me a Message Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mb-8"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe--cAQm4OHM7g09Tw_h0CuECPdreY_nb8VBGFnVPSIu-NrzQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Send Me a Message
            </a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 w-full max-w-xl"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className={`p-3 rounded-full bg-gray-100 ${info.color} mr-4`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 dark:text-gray-300 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg border border-primary-100 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Let's Work Together</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm available for contract work, full-time positions, and exciting collaborations. Whether you have a specific project in mind or just want to chat about possibilities, I'd love to hear from you.
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border border-green-100 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I typically respond to messages within 24 hours. 
                For urgent inquiries, feel free to reach out via phone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 