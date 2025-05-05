import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}

const AppointmentForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>();

  const onSubmit = (data: AppointmentFormData) => {
    console.log(data);
    // Here you would typically send the data to your backend or API
    alert('Appointment request submitted! We will contact you shortly to confirm.');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">Book Your Appointment</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <User size={18} />
              </div>
              <input
                id="name"
                type="text"
                className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Mail size={18} />
              </div>
              <input
                id="email"
                type="email"
                className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                placeholder="johndoe@example.com"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Phone size={18} />
              </div>
              <input
                id="phone"
                type="tel"
                className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                placeholder="+1 (555) 123-4567"
                {...register('phone', { required: 'Phone number is required' })}
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
          
          {/* Service Field */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
            <select
              id="service"
              className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              {...register('service', { required: 'Please select a service' })}
            >
              <option value="">Select a service</option>
              <option value="general">General Checkup</option>
              <option value="dental">Dental Care</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
            {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
          </div>
          
          {/* Doctor Field */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">Select Doctor</label>
            <select
              id="doctor"
              className={`w-full px-4 py-3 border ${errors.doctor ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              {...register('doctor', { required: 'Please select a doctor' })}
            >
              <option value="">Select a doctor</option>
              <option value="dr-johnson">Dr. Sarah Johnson</option>
              <option value="dr-chen">Dr. Michael Chen</option>
              <option value="dr-rodriguez">Dr. Emily Rodriguez</option>
              <option value="dr-wilson">Dr. James Wilson</option>
              <option value="dr-patel">Dr. Aisha Patel</option>
            </select>
            {errors.doctor && <p className="mt-1 text-sm text-red-600">{errors.doctor.message}</p>}
          </div>
          
          {/* Date Field */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Calendar size={18} />
              </div>
              <input
                id="date"
                type="date"
                className={`w-full pl-10 pr-4 py-3 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                {...register('date', { required: 'Date is required' })}
              />
            </div>
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
          </div>
          
          {/* Time Field */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <Clock size={18} />
              </div>
              <select
                id="time"
                className={`w-full pl-10 pr-4 py-3 border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                {...register('time', { required: 'Time is required' })}
              >
                <option value="">Select a time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
          </div>
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
          <div className="relative">
            <div className="absolute top-3 left-3 text-gray-500">
              <MessageSquare size={18} />
            </div>
            <textarea
              id="message"
              rows={4}
              className={`w-full pl-10 pr-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              placeholder="Please provide any additional information about your condition or specific requirements..."
              {...register('message')}
            />
          </div>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AppointmentForm;