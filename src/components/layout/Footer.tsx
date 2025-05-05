import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <div className="flex items-center mb-4">
              <Heart size={24} className="text-primary-500" />
              <h2 className="ml-2 text-xl font-display font-bold text-white">
                HealthCare<span className="text-primary-500">Plus</span>
              </h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              HealthCare Plus is dedicated to providing exceptional healthcare services with a patient-centered approach. Our team of experienced medical professionals ensures the highest quality care for all patients.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Our Doctors</Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Book Appointment</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Frequently Asked Questions</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Patient Rights</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors inline-block py-1 text-sm">Insurance Information</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Healthcare Avenue, Medical District, City, Country 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-500 flex-shrink-0" />
                <a href="mailto:aljubayer92@gmail.com" className="text-sm hover:text-primary-500 transition-colors">aljubayer92@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer with copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-center md:flex md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} HealthCare Plus. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Developed by <a href="https://aljubayer.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors">Al Jubayer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;