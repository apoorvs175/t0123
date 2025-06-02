import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
  index: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl,
  title,
  date,
  location,
  description,
  index,
}) => {
  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        
        <div className="mb-3 flex flex-col space-y-1">
          {date && (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={14} className="mr-1 text-pink-400" />
              <span>{date}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-1 text-pink-400" />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-sm text-gray-600 flex-grow">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default PhotoCard;