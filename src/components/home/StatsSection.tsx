import React from 'react';
import { Users, Award, Building, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  index: number;
}

const statsData = [
  {
    icon: <Users size={32} />,
    number: '10,000+',
    label: 'Happy Patients'
  },
  {
    icon: <Award size={32} />,
    number: '15+',
    label: 'Years Experience'
  },
  {
    icon: <HeartPulse size={32} />,
    number: '30+',
    label: 'Specialist Doctors'
  },
  {
    icon: <Building size={32} />,
    number: '5',
    label: 'Medical Centers'
  }
];

const StatItem: React.FC<StatItemProps> = ({ icon, number, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-4"
    >
      <div className="text-primary-500 mb-3 inline-flex justify-center">{icon}</div>
      <motion.h3
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1 + 0.3,
          type: 'spring',
          stiffness: 100
        }}
        className="text-3xl md:text-4xl font-display font-bold text-white mb-2"
      >
        {number}
      </motion.h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;