import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none ${
          isOpen ? 'bg-primary-50' : 'bg-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-medium ${isOpen ? 'text-primary-700' : 'text-gray-800'}`}>
          {question}
        </h3>
        <span className={`ml-4 flex-shrink-0 ${isOpen ? 'text-primary-600' : 'text-gray-500'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 pt-0 bg-white">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;