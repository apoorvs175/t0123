import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  type?: 'heading' | 'paragraph';
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'paragraph',
  className = '',
  delay = 0,
  once = true
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const renderText = () => {
    if (type === 'heading') {
      // Split heading into words
      return (
        <div className={`overflow-hidden ${className}`}>
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={headingVariants}
            custom={delay}
            className="inline-block"
          >
            {text.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2">
                {word}
              </span>
            ))}
          </motion.h2>
        </div>
      );
    }

    // For paragraphs, animate each line
    const lines = text.split('\n');
    
    return (
      <div className={className}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={paragraphVariants}
              custom={delay + lineIndex * 0.1}
            >
              {line || '\u00A0' /* Use non-breaking space for empty lines */}
            </motion.p>
          </div>
        ))}
      </div>
    );
  };

  return renderText();
};

const headingVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      delay,
      duration: 0.8
    }
  })
};

const paragraphVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5
    }
  })
};

export default AnimatedText;