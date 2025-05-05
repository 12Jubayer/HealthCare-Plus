import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, CheckCircle, Shield } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us | HealthCare Plus';
  }, []);

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Patient-Centered Care',
      description: 'We put patients at the center of everything we do, treating each person with compassion, dignity, and respect.'
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of healthcare, from medical procedures to patient interactions and facility management.'
    },
    {
      icon: <Users size={40} />,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration, working together across disciplines to provide comprehensive care.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards, ensuring honesty, transparency, and accountability in all our actions.'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Innovation',
      description: 'We embrace innovation and continuous improvement to advance healthcare delivery and patient outcomes.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Accessibility',
      description: 'We are committed to making quality healthcare accessible to all members of our community.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
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
              About HealthCare Plus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-100 text-lg"
            >
              Learn about our mission, values, and commitment to providing exceptional healthcare services to our community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Story"
                subtitle="A journey of commitment to healthcare excellence since 2010"
              />
              
              <div className="space-y-4 text-gray-700">
                <p>
                  HealthCare Plus was founded with a clear vision: to create a healthcare institution that combines medical excellence with compassionate care. What began as a small clinic has grown into a comprehensive medical center serving thousands of patients each year.
                </p>
                <p>
                  Our journey started when a group of dedicated healthcare professionals recognized the need for patient-centered care that addresses not just physical ailments but considers the whole person. This philosophy has guided our growth and development over the years.
                </p>
                <p>
                  Today, HealthCare Plus stands as a testament to our commitment to excellence in healthcare. We have expanded our services, embraced technological advancements, and built a team of top medical professionals, all while maintaining our core values and dedication to patient satisfaction.
                </p>
                <p>
                  As we look to the future, we remain committed to our founding principles while continuously evolving to meet the changing healthcare needs of our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Hospital Building" 
                className="rounded-lg shadow-xl object-cover h-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Guided by purpose and a clear vision for the future of healthcare"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <h3 className="text-xl font-bold text-primary-600">M</h3>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide exceptional healthcare services with compassion and expertise, improving the health and wellbeing of the communities we serve. We are committed to delivering patient-centered care that addresses the unique needs of each individual while maintaining the highest standards of medical excellence and ethical practice.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <h3 className="text-xl font-bold text-primary-600">V</h3>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be recognized as a leader in healthcare, setting the standard for medical excellence, innovation, and patient satisfaction. We envision a future where healthcare is accessible to all, preventive care is emphasized, and medical advancements are embraced to improve patient outcomes. Our goal is to create a healthier community through education, prevention, and effective treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our approach to healthcare and patient service"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experienced professionals who lead our healthcare mission"
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Dr. Jonathan Wright" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Jonathan Wright</h3>
              <p className="text-primary-300">Chief Medical Officer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7089399/pexels-photo-7089399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Dr. Laura Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Laura Chen</h3>
              <p className="text-primary-300">Medical Director</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Michael Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Thompson</h3>
              <p className="text-primary-300">Chief Executive Officer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5722158/pexels-photo-5722158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Jennifer Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Jennifer Martinez</h3>
              <p className="text-primary-300">Director of Nursing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-primary-800 mb-6">
                Join Our Healthcare Family
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Experience the HealthCare Plus difference. Our team of dedicated professionals is committed to providing you with the highest quality of care in a comfortable and supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/appointment"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
                >
                  Book an Appointment
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-primary-700 border border-primary-600 font-medium px-6 py-3 rounded-full transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;