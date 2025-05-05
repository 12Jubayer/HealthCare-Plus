import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingAppointmentButton: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        to="/appointment"
        className="flex items-center justify-center bg-accent-600 text-white p-4 rounded-full shadow-lg hover:bg-accent-700 transition-colors"
        aria-label="Book an appointment"
      >
        <Calendar size={24} />
        <span className="ml-2 font-medium hidden md:inline">Book Appointment</span>
      </Link>
    </motion.div>
  );
};

export default FloatingAppointmentButton;