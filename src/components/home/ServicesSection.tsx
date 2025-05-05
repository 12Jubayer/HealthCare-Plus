import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Stethoscope, Microscope, Bluetooth as Tooth, Brain, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const serviceData = [
  {
    icon: <Stethoscope size={40} />,
    title: 'General Health',
    description: 'Comprehensive health checkups and medical consultations for all ages.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Cardiology',
    description: 'Specialized heart care, diagnostics, and treatments for heart-related conditions.'
  },
  {
    icon: <Tooth size={40} />,
    title: 'Dental Care',
    description: 'Complete dental services from routine cleanings to advanced procedures.'
  },
  {
    icon: <Brain size={40} />,
    title: 'Neurology',
    description: 'Advanced diagnosis and treatment of disorders of the nervous system.'
  },
  {
    icon: <Microscope size={40} />,
    title: 'Laboratory',
    description: 'Accurate and timely diagnostic testing and laboratory services.'
  },
  {
    icon: <Activity size={40} />,
    title: 'Emergency Care',
    description: '24/7 emergency medical services for urgent and critical conditions.'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 transition-all"
    >
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
      >
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Medical Services" 
          subtitle="We provide a wide range of medical services to meet all your healthcare needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            to="/services" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            View All Services
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;