import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timeline';
import { useInView } from 'react-intersection-observer';

const Timeline: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-gradient">Our Story Timeline</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The journey of our love, one beautiful moment at a time.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="timeline-line"></div>
          
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
  };
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex md:flex-row flex-col ${isLeft ? 'md:flex-row-reverse' : ''} items-center`}
    >
      {/* Timeline node */}
      <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-pink-500 z-10 hidden md:block"></div>
      <div className="absolute left-8 md:hidden w-6 h-6 rounded-full bg-pink-500 z-10"></div>
      
      {/* Date label for mobile */}
      <div className="md:hidden text-pink-600 font-medium mb-2 pl-20">
        {event.date}
      </div>
      
      {/* Content */}
      <div className={`md:w-5/12 w-full md:px-6 pl-20 md:pl-6`}>
        <div className="bg-white p-6 rounded-2xl shadow-md h-full">
          {/* Date for desktop */}
          <div className="hidden md:block text-pink-600 font-medium mb-2">
            {event.date}
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          {event.imageUrl && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Spacer for the timeline - desktop only */}
      <div className="md:w-2/12 hidden md:block"></div>
      
      {/* Empty space for alternating - desktop only */}
      <div className="md:w-5/12 hidden md:block"></div>
    </motion.div>
  );
};

export default Timeline;