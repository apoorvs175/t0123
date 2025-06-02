import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Save, Info } from 'lucide-react';

const Settings: React.FC = () => {
  const [partnerName, setPartnerName] = useState("My Love");
  const [anniversaryDate, setAnniversaryDate] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("#F43F5E"); // Default pink
  const [showSaved, setShowSaved] = useState(false);
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to localStorage or a backend
    setShowSaved(true);
    
    setTimeout(() => {
      setShowSaved(false);
    }, 3000);
  };
  
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-gradient">Settings</h1>
          <p className="text-lg text-gray-600">
            Personalize your love letter application.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <form onSubmit={handleSave}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2 text-pink-500" size={24} fill="#F43F5E" />
                Personalization
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partner's Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="Enter your partner's name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Anniversary Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={anniversaryDate}
                    onChange={(e) => setAnniversaryDate(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birthday Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={birthdayDate}
                    onChange={(e) => setBirthdayDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Theme Settings</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Favorite Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    className="h-10 w-10 border-0 rounded cursor-pointer"
                    value={favoriteColor}
                    onChange={(e) => setFavoriteColor(e.target.value)}
                  />
                  <span className="text-gray-600">{favoriteColor}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  This will be used as the accent color throughout the application.
                </p>
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg mb-8 flex items-start">
              <Info className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-700">
                  Settings are currently for demonstration purposes only. In a complete application, these would customize the experience throughout the app.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Save className="mr-2" size={18} />
                Save Settings
              </button>
            </div>
          </form>
        </div>
        
        {/* Success message */}
        <AnimatedNotification 
          show={showSaved} 
          message="Settings saved successfully!" 
        />
      </div>
    </div>
  );
};

interface AnimatedNotificationProps {
  show: boolean;
  message: string;
}

const AnimatedNotification: React.FC<AnimatedNotificationProps> = ({ show, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      {message}
    </motion.div>
  );
};

export default Settings;