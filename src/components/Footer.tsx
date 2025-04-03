import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="dark:text-gray-300 text-gray-700 text-lg font-semibold">{personalInfo.name}</p>
            <p className="dark:text-gray-300 text-gray-700">{personalInfo.title}</p>
          </div>
          
          <div className="dark:text-gray-300 text-gray-700 flex items-center">
            <p>
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}