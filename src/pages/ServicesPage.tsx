import React from 'react';
import { Heart, Activity, Stethoscope, Microscope, Bluetooth as Tooth, Brain, AlarmClock, Baby, BookOpen, Tablets, Eye, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const serviceData = [
  {
    icon: <Stethoscope size={48} />,
    title: 'General Health',
    description: 'Comprehensive health checkups and medical consultations for patients of all ages. Our experienced physicians provide thorough evaluations and personalized healthcare plans.'
  },
  {
    icon: <Heart size={48} />,
    title: 'Cardiology',
    description: 'Specialized heart care, advanced diagnostics, and treatments for all types of cardiovascular conditions. Our cardiologists use state-of-the-art technology to ensure optimal heart health.'
  },
  {
    icon: <Tooth size={48} />,
    title: 'Dental Care',
    description: 'Complete dental services from routine cleanings to advanced procedures including restorative dentistry, cosmetic procedures, orthodontics, and oral surgery.'
  },
  {
    icon: <Brain size={48} />,
    title: 'Neurology',
    description: 'Expert diagnosis and treatment of disorders of the nervous system, including conditions affecting the brain, spinal cord, nerves, and muscles.'
  },
  {
    icon: <Microscope size={48} />,
    title: 'Laboratory Services',
    description: 'Accurate and timely diagnostic testing with our advanced laboratory services. We offer a wide range of tests with quick results to aid in diagnosis and treatment.'
  },
  {
    icon: <Activity size={48} />,
    title: 'Emergency Care',
    description: '24/7 emergency medical services for urgent and critical conditions. Our emergency team is always ready to provide immediate and high-quality care.'
  },
  {
    icon: <AlarmClock size={48} />,
    title: 'Urgent Care',
    description: 'Prompt medical attention for non-life-threatening conditions that require immediate care. No appointment necessary for urgent care services.'
  },
  {
    icon: <Baby size={48} />,
    title: 'Pediatrics',
    description: 'Comprehensive healthcare for infants, children, and adolescents. Our pediatricians provide preventive care, vaccinations, and treatment for childhood illnesses.'
  },
  {
    icon: <BookOpen size={48} />,
    title: 'Health Education',
    description: 'Educational resources and programs to help patients make informed decisions about their health. We believe in empowering patients through knowledge.'
  },
  {
    icon: <Tablets size={48} />,
    title: 'Pharmacy Services',
    description: 'On-site pharmacy providing prescription medications, over-the-counter drugs, and expert advice from our licensed pharmacists.'
  },
  {
    icon: <Eye size={48} />,
    title: 'Ophthalmology',
    description: 'Complete eye care services including vision tests, treatment for eye conditions, and surgical procedures. Our ophthalmologists use advanced technology for diagnosis and treatment.'
  },
  {
    icon: <Syringe size={48} />,
    title: 'Vaccination',
    description: 'Routine and seasonal vaccinations for all age groups. Stay protected against preventable diseases with our comprehensive vaccination services.'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 transition-all h-full flex flex-col"
    >
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Our Services | HealthCare Plus';
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Our Medical Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-100 text-lg"
            >
              We provide a wide range of medical services with a focus on quality care and patient satisfaction. Our team of experienced medical professionals is dedicated to improving your health and wellbeing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Comprehensive Healthcare Services"
            subtitle="Discover our range of specialized medical services designed to meet all your healthcare needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Why Choose Our Healthcare Services"
            subtitle="We are committed to providing exceptional medical care with a patient-centered approach"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Quality</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Experienced Specialists:</span> Our medical team consists of highly qualified and experienced specialists in various fields.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">State-of-the-Art Facilities:</span> We invest in the latest medical technology to provide accurate diagnoses and effective treatments.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Evidence-Based Medicine:</span> Our treatments and procedures follow the latest research and medical guidelines.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Continuous Improvement:</span> We regularly evaluate and enhance our services to maintain the highest standards of care.
                  </p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Patient-Centered Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Personalized Care:</span> We develop individualized treatment plans based on each patient's unique needs and circumstances.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Compassionate Staff:</span> Our team is known for their empathy, understanding, and dedication to patient comfort.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Clear Communication:</span> We ensure that patients understand their conditions and treatment options through clear explanations and open dialogue.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Accessibility:</span> We offer flexible scheduling options and are committed to prompt service with minimal wait times.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Schedule an appointment today and take the first step towards better health. Our team is ready to provide you with exceptional care.
            </p>
            <a
              href="/appointment"
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-colors duration-300 inline-block"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;