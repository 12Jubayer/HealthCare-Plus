import React from 'react';
import { CalendarCheck, Clock, Clipboard, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import AppointmentForm from '../components/appointment/AppointmentForm';

const AppointmentPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Book an Appointment | HealthCare Plus';
  }, []);

  const steps = [
    {
      icon: <CalendarCheck size={36} />,
      title: 'Choose Date & Time',
      description: 'Select your preferred appointment date and time from the available slots.'
    },
    {
      icon: <Clipboard size={36} />,
      title: 'Fill in Details',
      description: 'Provide your personal information and describe your medical needs.'
    },
    {
      icon: <CheckCircle size={36} />,
      title: 'Confirmation',
      description: 'Receive confirmation of your appointment via email or phone.'
    },
    {
      icon: <Clock size={36} />,
      title: 'Reminder',
      description: 'Get a reminder 24 hours before your scheduled appointment.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Book Your Appointment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-100 text-lg"
            >
              Schedule a consultation with our experienced medical professionals. We're here to provide you with the best healthcare services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Appointment Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="How It Works"
            subtitle="Easy steps to book your appointment with our medical professionals"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-primary-600 flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AppointmentPage;