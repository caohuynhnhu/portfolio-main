'use client';

import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { awardsData } from '@/data/awards';

export default function Awards() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Activities</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <FaTrophy className="text-primary text-xl" />
              </div>
              
              <h3 className="text-lg font-semibold text-center mb-2">{award.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                {award.issuer} | {award.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                {award.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}