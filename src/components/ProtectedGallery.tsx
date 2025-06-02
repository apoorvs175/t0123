import React, { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProtectedGalleryProps {
  correctPassword: string;
}

const ProtectedGallery: React.FC<ProtectedGalleryProps> = ({ correctPassword }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const privatePhotos = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg",
      caption: "Our Special Moment"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
      caption: "Just Us"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg",
      caption: "Private Memory"
    }
  ];

  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      {!isUnlocked ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-pink-500\" size={24} />
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Protected Memories</h3>
          <p className="text-gray-600 mb-6">Enter the password to view our special moments.</p>
          
          <div className="max-w-xs mx-auto">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            
            <button
              onClick={handleUnlock}
              className="w-full mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Unlock
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Our Special Moments</h3>
            <button
              onClick={() => setIsUnlocked(false)}
              className="flex items-center gap-2 text-pink-500 hover:text-pink-600"
            >
              <Unlock size={18} />
              <span>Lock</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {privatePhotos.map((photo) => (
              <motion.div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white p-4 w-full text-center">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProtectedGallery;