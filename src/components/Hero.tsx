'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            {personalInfo.bio}
          </p>
          <div className="flex space-x-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            )}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}