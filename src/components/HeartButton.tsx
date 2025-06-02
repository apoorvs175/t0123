import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeartButtonProps {
  onClick?: () => void;
  message?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  onClick, 
  message = "I love you!" 
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = () => {
    setIsClicked(true);
    
    // Create multiple hearts with different positions
    const newHearts = Array.from({ length: 5 }).map((_, index) => ({
      id: Date.now() + index,
      x: Math.random() * 200 - 100, // Between -100 and 100
      y: Math.random() * -200 - 50,  // Between -250 and -50
    }));
    
    setHearts([...hearts, ...newHearts]);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    
    // Remove hearts after they animate out
    setTimeout(() => {
      setHearts(hearts => hearts.filter(h => h.id !== newHearts[0].id));
    }, 2000);
    
    if (onClick) onClick();
  };

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0 }}
            className="absolute text-pink-600 font-medium text-sm whitespace-nowrap"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating hearts */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [1, 1, 0],
              scale: [0, 1, 0.8],
              x: heart.x,
              y: heart.y,
              rotate: Math.random() * 90 - 45,
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
            className="absolute text-pink-500 pointer-events-none"
          >
            <Heart fill="#F43F5E" size={16} />
          </motion.div>
        ))}
      </AnimatePresence>
      
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md focus:outline-none"
        onClick={handleClick}
        aria-label="Send love"
      >
        <motion.div
          animate={isClicked ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Heart 
            className="text-pink-500" 
            fill="#F43F5E" 
            size={24} 
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default HeartButton;