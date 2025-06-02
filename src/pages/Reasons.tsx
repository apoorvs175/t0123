import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { reasons, Reason } from '../data/reasons';
import { useInView } from 'react-intersection-observer';

const Reasons: React.FC = () => {
  const [isAddingReason, setIsAddingReason] = useState(false);
  const [newReason, setNewReason] = useState({
    title: '',
    description: '',
    emoji: '❤️'
  });
  const [allReasons, setAllReasons] = useState<Reason[]>(reasons);
  
  const handleAddReason = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReason.title && newReason.description) {
      const reasonToAdd: Reason = {
        id: allReasons.length + 1,
        title: newReason.title,
        description: newReason.description,
        emoji: newReason.emoji
      };
      
      setAllReasons([...allReasons, reasonToAdd]);
      setNewReason({
        title: '',
        description: '',
        emoji: '❤️'
      });
      setIsAddingReason(false);
    }
  };
  
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-gradient">Reasons Why I Love You</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A few of the countless reasons why you're the most special person in my world.
          </p>
        </motion.div>
        
        <div className="flex justify-end mb-8">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            onClick={() => setIsAddingReason(!isAddingReason)}
          >
            <Plus size={18} />
            <span>{isAddingReason ? 'Cancel' : 'Add Reason'}</span>
          </button>
        </div>
        
        {isAddingReason && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <form onSubmit={handleAddReason} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add New Reason</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newReason.title}
                    onChange={(e) => setNewReason({...newReason, title: e.target.value})}
                    placeholder="e.g., Your Kindness"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newReason.emoji}
                    onChange={(e) => setNewReason({...newReason, emoji: e.target.value})}
                    maxLength={2}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                  rows={3}
                  required
                  value={newReason.description}
                  onChange={(e) => setNewReason({...newReason, description: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsAddingReason(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Add Reason
                </button>
              </div>
            </form>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReasons.map((reason, index) => (
            <ReasonCard
              key={reason.id}
              reason={reason}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ReasonCardProps {
  reason: Reason;
  index: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 % 0.9 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-4xl mb-3">
        {reason.emoji}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {reason.title}
      </h3>
      
      <p className="text-gray-600 flex-grow">
        {reason.description}
      </p>
    </motion.div>
  );
};

export default Reasons;