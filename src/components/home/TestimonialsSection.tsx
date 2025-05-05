import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface TestimonialCardProps {
  name: string;
  rating: number;
  content: string;
  image: string;
  index: number;
}

const testimonialData = [
  {
    name: 'Jennifer A.',
    rating: 5,
    content: 'The care I received at HealthCare Plus was exceptional. The doctors took the time to listen to my concerns and develop a treatment plan that was tailored to my needs. I highly recommend their services!',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    name: 'Robert M.',
    rating: 5,
    content: 'I was impressed by the professional and caring staff at HealthCare Plus. The appointment booking process was easy, and the facility is modern and clean. My dental procedure was painless, thanks to Dr. Rodriguez!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    name: 'Sophia L.',
    rating: 4,
    content: 'As someone who has anxiety about medical appointments, I found the staff at HealthCare Plus to be incredibly understanding and patient. They made me feel comfortable throughout my entire visit.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, content, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-current" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star key={i + rating} size={16} className="text-gray-300" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What Our Patients Say" 
          subtitle="Hear from our satisfied patients about their experience with our healthcare services"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              content={testimonial.content}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;