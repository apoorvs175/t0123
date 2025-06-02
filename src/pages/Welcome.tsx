import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Camera, MessageCircleHeart, Calendar, Star, Settings } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import CountdownTimer from '../components/CountdownTimer';
import HeartButton from '../components/HeartButton';

const Welcome: React.FC = () => {
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  
  // Set anniversary date to March 25, 2024
  const nextAnniversary = new Date('2024-03-25');
  
  const partnerName = "Kushu";

  // Easter egg - click count
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    if (clickCount >= 5) {
      setShowSpecialMessage(true);
      
      const timer = setTimeout(() => {
        setShowSpecialMessage(false);
        setClickCount(0);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="pt-16">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 to-purple-100/40"></div>
          <img 
            src="https://images.pexels.com/photos/5708057/pexels-photo-5708057.jpeg" 
            alt="Love background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6 inline-block"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-serif text-2xl mx-auto">
                <span className="relative">
                  A<span className="absolute -top-1 -right-2 text-xs">❤</span>K
                </span>
              </div>
            </motion.div>
            
            <AnimatedText 
              text={`For My Dearest ${partnerName}`}
              type="heading"
              className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            />
            
            <AnimatedText 
              text="To my symbol of purity, my sweetest penguin, my adorable fool sa balak - every moment with you is a treasure I'll cherish forever."
              className="text-gray-700 text-lg mb-8"
              delay={0.4}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/love-notes" className="btn-primary mr-4">Explore Our Love</Link>
              <HeartButton onClick={handleHeartClick} message="I love you, Kushu!" />
            </motion.div>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {showSpecialMessage && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSpecialMessage(false)}
            >
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <Heart className="mx-auto text-pink-500 mb-4" size={40} fill="#F43F5E" />
                <h3 className="text-2xl font-bold text-pink-600 mb-2">Secret Message Found!</h3>
                <p className="text-gray-700">
                  You've discovered a hidden message! I've loved you from the moment we met, and I'll love you until my last breath. You're my everything.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Love Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NavCard 
              to="/gallery"
              icon={<Camera size={32} className="text-pink-500" />}
              title="Our Memories"
              description="Browse through the beautiful moments we've shared together."
            />
            
            <NavCard 
              to="/love-notes"
              icon={<MessageCircleHeart size={32} className="text-pink-500" />}
              title="Love Notes"
              description="Sweet messages from my heart to yours."
            />
            
            <NavCard 
              to="/timeline"
              icon={<Calendar size={32} className="text-pink-500" />}
              title="Our Timeline"
              description="The journey of our love, from the beginning until now."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-pink-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Counting Down to Our Next Milestone</h2>
          
          <div className="max-w-md mx-auto">
            <CountdownTimer 
              targetDate={nextAnniversary} 
              eventName="Our Next Anniversary" 
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="mx-auto text-pink-400 mb-4" size={32} />
            <h2 className="text-3xl font-bold mb-8">From My Heart to Yours</h2>
            
            <div className="bg-pink-50 p-8 rounded-2xl shadow-sm mb-6">
              <p className="text-xl italic text-gray-700">
                "Every day with you is a beautiful adventure. Your love makes ordinary moments extraordinary."
              </p>
            </div>
            
            <Link to="/love-notes" className="btn-outline">
              Read More Love Notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface NavCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const NavCard: React.FC<NavCardProps> = ({ to, icon, title, description }) => (
  <Link to={to}>
    <motion.div 
      className="bg-pink-50 rounded-2xl p-6 text-center h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  </Link>
);

export default Welcome;