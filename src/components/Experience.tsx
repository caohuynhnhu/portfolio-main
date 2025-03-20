'use client';

import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section className="py-12 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VerticalTimeline animate={true} lineColor={'#ddd'}>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: 'var(--background)',
                color: 'var(--foreground)',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--background)' }}
              date={item.date}
              iconStyle={{ 
                background: item.icon === 'school' ? '#f59e0b' : '#0070f3', 
                color: '#fff' 
              }}
              icon={item.icon === 'school' ? <FaGraduationCap /> : <FaBriefcase />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold dark:text-white text-black">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg mt-1 dark:text-gray-200 text-black">
                {item.company}, {item.location}
              </h4>
              <ul className="mt-4 list-disc list-inside dark:text-gray-300 text-gray-700">
              <p className="mb-1">
                {item.project1}
              </p>
                {item.description1.map((desc, index) => (
                  <li key={index} className="mb-1">{desc}</li>
                ))}
              </ul>
              <ul className="mt-4 list-disc list-inside dark:text-gray-300 text-gray-700">
              <p className="mb-1">
                {item.project2}
              </p>
                {item.description2.map((desc, index) => (
                  <li key={index} className="mb-1">{desc}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}