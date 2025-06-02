import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-pink-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Heart className="text-pink-500 mr-2" size={18} fill="#F43F5E" />
              <p className="text-gray-600 text-sm">Made with love, for my love</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© {currentYear} Our Love Story</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 italic">
            "True love stories never have endings." — Richard Bach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;