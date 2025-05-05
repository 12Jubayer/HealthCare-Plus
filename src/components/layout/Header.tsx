import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `
    fixed w-full z-50 transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}
  `;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => `
    px-4 py-2 text-sm font-medium transition-colors duration-200
    ${isScrolled || isActive
      ? 'text-primary-700 hover:text-primary-900' 
      : 'text-gray-800 hover:text-primary-700'}
    ${isActive ? 'border-b-2 border-primary-600' : ''}
  `;

  const mobileNavClasses = `
    fixed inset-0 z-50 bg-white flex flex-col items-center justify-center
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    transition-transform duration-300 ease-in-out
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Heart size={32} className="text-primary-600" strokeWidth={2.5} />
              <span className="ml-2 text-xl font-display font-bold text-gray-900">
                HealthCare<span className="text-primary-600">Plus</span>
              </span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex space-x-1"
            >
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
              <NavLink to="/doctors" className={navLinkClasses}>Doctors</NavLink>
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
              <NavLink to="/faq" className={navLinkClasses}>FAQ</NavLink>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/appointment" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full transition-colors duration-300 inline-flex items-center space-x-2 font-medium text-sm"
              >
                <Phone size={16} />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </div>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className={mobileNavClasses}>
        <button 
          className="absolute top-4 right-4 text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6 items-center">
          <NavLink to="/" className="text-xl font-medium text-gray-800 hover:text-primary-600">Home</NavLink>
          <NavLink to="/services" className="text-xl font-medium text-gray-800 hover:text-primary-600">Services</NavLink>
          <NavLink to="/doctors" className="text-xl font-medium text-gray-800 hover:text-primary-600">Doctors</NavLink>
          <NavLink to="/about" className="text-xl font-medium text-gray-800 hover:text-primary-600">About</NavLink>
          <NavLink to="/contact" className="text-xl font-medium text-gray-800 hover:text-primary-600">Contact</NavLink>
          <NavLink to="/faq" className="text-xl font-medium text-gray-800 hover:text-primary-600">FAQ</NavLink>
          
          <Link 
            to="/appointment" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full transition-colors duration-300 inline-flex items-center space-x-2 font-medium"
          >
            <Phone size={18} />
            <span>Book Appointment</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;