import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const mailtoLink = `mailto:jack171070@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      
      setShowSuccess(true);
      setFormData({ name: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Message Appii</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSending}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50"
        >
          <Send size={18} />
          <span>{isSending ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
      
      {showSuccess && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;