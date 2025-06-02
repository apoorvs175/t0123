import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, X, Lock, Unlock } from 'lucide-react';
import { loveNotes, LoveNote } from '../data/loveNotes';

const LoveNotes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<LoveNote | null>(null);
  const [revealedSecrets, setRevealedSecrets] = useState<number[]>([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    isSecret: false
  });
  const [allNotes, setAllNotes] = useState<LoveNote[]>(loveNotes);
  
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.title && newNote.content) {
      const today = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      const noteToAdd: LoveNote = {
        id: allNotes.length + 1,
        title: newNote.title,
        content: newNote.content,
        date: today,
        isSecret: newNote.isSecret
      };
      
      setAllNotes([noteToAdd, ...allNotes]);
      setNewNote({
        title: '',
        content: '',
        isSecret: false
      });
      setIsAddingNote(false);
    }
  };
  
  const revealSecret = (id: number) => {
    setRevealedSecrets([...revealedSecrets, id]);
  };
  
  const isSecretRevealed = (id: number) => {
    return revealedSecrets.includes(id);
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
          <h1 className="text-4xl font-bold mb-4 text-gradient">Love Notes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Words from my heart, saved for you to read whenever you need a reminder of how much you mean to me.
          </p>
        </motion.div>
        
        <div className="flex justify-end mb-8">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            onClick={() => setIsAddingNote(!isAddingNote)}
          >
            <Plus size={18} />
            <span>{isAddingNote ? 'Cancel' : 'Write Note'}</span>
          </button>
        </div>
        
        {isAddingNote && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <form onSubmit={handleAddNote} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Write a Love Note</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                  value={newNote.title}
                  onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                  rows={5}
                  required
                  value={newNote.content}
                  onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                ></textarea>
              </div>
              
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="isSecret"
                  className="mr-2 h-4 w-4 text-pink-500 focus:ring-pink-300"
                  checked={newNote.isSecret}
                  onChange={(e) => setNewNote({...newNote, isSecret: e.target.checked})}
                />
                <label htmlFor="isSecret" className="text-sm text-gray-700">
                  Make this a secret note (requires a special click to reveal)
                </label>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsAddingNote(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Save Note
                </button>
              </div>
            </form>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNotes.map((note) => {
            const isSecret = note.isSecret && !isSecretRevealed(note.id);
            
            return (
              <motion.div
                key={note.id}
                className={`bg-white p-6 rounded-2xl shadow-md cursor-pointer transition-transform hover:shadow-lg relative ${
                  isSecret ? 'bg-pink-50' : ''
                }`}
                whileHover={{ y: -5 }}
                onClick={() => isSecret ? revealSecret(note.id) : setSelectedNote(note)}
              >
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {isSecret ? 'Secret Note' : note.title}
                  </h3>
                  {note.isSecret && (
                    <div className="text-pink-500">
                      {isSecretRevealed(note.id) ? (
                        <Unlock size={18} />
                      ) : (
                        <Lock size={18} />
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  {isSecret ? (
                    <p className="text-gray-600 italic">
                      This is a secret note. Click to reveal its contents...
                    </p>
                  ) : (
                    <p className="text-gray-700 line-clamp-3">
                      {note.content}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{note.date}</span>
                  {!isSecret && (
                    <div className="flex items-center">
                      <Heart size={14} className="text-pink-400 mr-1" />
                      <span>Read more</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <AnimatePresence>
          {selectedNote && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-semibold">{selectedNote.title}</h3>
                  <button
                    onClick={() => setSelectedNote(null)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
                    {selectedNote.content}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{selectedNote.date}</span>
                    <div className="flex items-center">
                      <Heart size={16} className="text-pink-500 mr-2" fill="#F43F5E" />
                      <span>With all my love</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveNotes;