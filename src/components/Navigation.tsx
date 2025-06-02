import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <Heart 
            className={`transition-colors duration-300 ${
              scrolled ? 'text-pink-500' : 'text-pink-500'
            }`} 
            fill="#F43F5E" 
            size={24} 
          />
          <span 
            className={`font-serif font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            For My Love
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={isActive('/')} scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink to="/gallery" active={isActive('/gallery')} scrolled={scrolled}>
            Gallery
          </NavLink>
          <NavLink to="/love-notes" active={isActive('/love-notes')} scrolled={scrolled}>
            Love Notes
          </NavLink>
          <NavLink to="/reasons" active={isActive('/reasons')} scrolled={scrolled}>
            Reasons Why
          </NavLink>
          <NavLink to="/timeline" active={isActive('/timeline')} scrolled={scrolled}>
            Our Timeline
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-pink-50 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <MobileNavLink to="/" active={isActive('/')} onClick={closeMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/gallery" active={isActive('/gallery')} onClick={closeMenu}>
            Gallery
          </MobileNavLink>
          <MobileNavLink to="/love-notes" active={isActive('/love-notes')} onClick={closeMenu}>
            Love Notes
          </MobileNavLink>
          <MobileNavLink to="/reasons" active={isActive('/reasons')} onClick={closeMenu}>
            Reasons Why
          </MobileNavLink>
          <MobileNavLink to="/timeline" active={isActive('/timeline')} onClick={closeMenu}>
            Our Timeline
          </MobileNavLink>
          <MobileNavLink to="/settings" active={isActive('/settings')} onClick={closeMenu}>
            Settings
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  scrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, scrolled, children }) => (
  <Link
    to={to}
    className={`relative font-medium transition-colors duration-300 ${
      active 
        ? 'text-pink-600' 
        : scrolled 
          ? 'text-gray-700 hover:text-pink-500' 
          : 'text-gray-800 hover:text-pink-500'
    }`}
  >
    {children}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform translate-y-1"></span>
    )}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, active, onClick, children }) => (
  <Link
    to={to}
    className={`text-2xl font-medium ${
      active ? 'text-pink-600' : 'text-gray-800'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navigation;