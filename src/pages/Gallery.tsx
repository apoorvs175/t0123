import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import { photos, Photo } from '../data/photos';

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    imageUrl: '',
    date: '',
    location: '',
    description: ''
  });
  const [allPhotos, setAllPhotos] = useState<Photo[]>(photos);
  
  const filteredPhotos = allPhotos.filter(
    photo => 
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (photo.description && photo.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (photo.location && photo.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPhoto.title && newPhoto.imageUrl) {
      const photoToAdd: Photo = {
        id: allPhotos.length + 1,
        ...newPhoto
      };
      setAllPhotos([photoToAdd, ...allPhotos]);
      setNewPhoto({
        title: '',
        imageUrl: '',
        date: '',
        location: '',
        description: ''
      });
      setIsAddingPhoto(false);
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
          <h1 className="text-4xl font-bold mb-4 text-gradient">Our Memories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cherished moments frozen in time, each telling a story of our love.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search our memories..."
              className="pl-10 pr-4 py-2 w-full md:w-72 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            onClick={() => setIsAddingPhoto(!isAddingPhoto)}
          >
            <Plus size={18} />
            <span>{isAddingPhoto ? 'Cancel' : 'Add Memory'}</span>
          </button>
        </div>
        
        {isAddingPhoto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <form onSubmit={handleAddPhoto} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add New Memory</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newPhoto.title}
                    onChange={(e) => setNewPhoto({...newPhoto, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL*</label>
                  <input
                    type="url"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newPhoto.imageUrl}
                    onChange={(e) => setNewPhoto({...newPhoto, imageUrl: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newPhoto.date}
                    onChange={(e) => setNewPhoto({...newPhoto, date: e.target.value})}
                    placeholder="e.g., June 15, 2021"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                    value={newPhoto.location}
                    onChange={(e) => setNewPhoto({...newPhoto, location: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
                  rows={3}
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto({...newPhoto, description: e.target.value})}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsAddingPhoto(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Add Memory
                </button>
              </div>
            </form>
          </motion.div>
        )}
        
        {filteredPhotos.length > 0 ? (
          <div className="photo-grid">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                imageUrl={photo.imageUrl}
                title={photo.title}
                date={photo.date}
                location={photo.location}
                description={photo.description}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No memories found with that search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;