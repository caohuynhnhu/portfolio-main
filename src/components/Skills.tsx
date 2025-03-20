'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skillsData } from '@/data/skills';

export default function Skills() {
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {skillsData.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>
                
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-6"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 mb-3 relative flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-center">{skill.name}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}