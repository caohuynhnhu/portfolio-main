'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {personalInfo.bio}
                </p>
                
                <div className="flex items-center mb-4">
                  <FaUniversity className="text-primary mr-3" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.university}</span>
                </div>
                {/* {personalInfo.master && (
                  <div className="flex items-center mb-4">
                    <FaUniversity className="text-primary mr-3" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{personalInfo.master}</span>
                  </div>
                )} */}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-primary mr-3" size={20} />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FaPhone className="text-primary mr-3" size={20} />
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-primary mr-3" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}