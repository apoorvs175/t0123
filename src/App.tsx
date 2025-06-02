import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Welcome from './pages/Welcome';
import Gallery from './pages/Gallery';
import LoveNotes from './pages/LoveNotes';
import Reasons from './pages/Reasons';
import Timeline from './pages/Timeline';
import Settings from './pages/Settings';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-50 text-gray-800">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/love-notes" element={<LoveNotes />} />
            <Route path="/reasons" element={<Reasons />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;