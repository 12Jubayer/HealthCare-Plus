import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  description: string;
  index: number;
}

const doctorData = [
  {
    image: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    description: 'Specializing in cardiovascular health with over 12 years of experience in treating heart conditions.'
  },
  {
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    description: 'Expert in neurological disorders with a focus on innovative treatments and patient-centered care.'
  },
  {
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dental Surgeon',
    description: 'Specialized in advanced dental procedures and cosmetic dentistry with a gentle approach.'
  },
  {
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    description: 'Dedicated to providing comprehensive primary care for patients of all ages with a personalized approach.'
  }
];

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{specialty}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <button 
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </button>
            <button 
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={`Call ${name}`}
            >
              <Phone size={18} />
            </button>
          </div>
          
          <Link 
            to="/appointment" 
            className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
          >
            Book Appointment
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const DoctorsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Expert Doctors" 
          subtitle="Meet our team of experienced medical professionals dedicated to your health"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorData.map((doctor, index) => (
            <DoctorCard 
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/doctors" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            View All Doctors
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsSection;