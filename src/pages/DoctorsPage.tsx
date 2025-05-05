import React, { useState } from 'react';
import { Mail, Phone, Share2, BookOpen, Award, BookCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

interface DoctorData {
  id: string;
  name: string;
  specialty: string;
  description: string;
  education: string[];
  experience: string[];
  certifications: string[];
  image: string;
}

const doctorsData: DoctorData[] = [
  {
    id: 'dr-johnson',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    description: 'Dr. Johnson is a board-certified cardiologist with over 12 years of experience in diagnosing and treating cardiovascular conditions. She specializes in preventive cardiology, heart failure management, and cardiac imaging.',
    education: [
      'MD, Harvard Medical School',
      'Residency in Internal Medicine, Massachusetts General Hospital',
      'Fellowship in Cardiovascular Disease, Cleveland Clinic'
    ],
    experience: [
      'Chief of Cardiology, Memorial Hospital (2018-2022)',
      'Associate Professor of Medicine, State University Medical Center',
      'Consultant Cardiologist, Veterans Affairs Medical Center'
    ],
    certifications: [
      'American Board of Internal Medicine - Cardiovascular Disease',
      'Certified in Advanced Cardiac Life Support',
      'Fellow of the American College of Cardiology'
    ],
    image: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-chen',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    description: 'Dr. Chen is a renowned neurologist specializing in the diagnosis and treatment of neurological disorders. With his expertise in headache management, stroke prevention, and neurodegenerative diseases, he provides comprehensive care for patients with complex neurological conditions.',
    education: [
      'MD, Johns Hopkins University School of Medicine',
      'Residency in Neurology, UCSF Medical Center',
      'Fellowship in Neurophysiology, Mayo Clinic'
    ],
    experience: [
      'Director, Stroke Center at Regional Medical Center',
      'Research Scientist, National Institute of Neurological Disorders',
      'Visiting Professor, International Neurology Conference'
    ],
    certifications: [
      'American Board of Psychiatry and Neurology',
      'Certification in Neurocritical Care',
      'Member, American Academy of Neurology'
    ],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-rodriguez',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dental Surgeon',
    description: 'Dr. Rodriguez is a skilled dental surgeon with expertise in cosmetic dentistry, oral surgery, and restorative procedures. She is known for her gentle approach and commitment to providing comfortable dental experiences for patients of all ages.',
    education: [
      'DDS, University of Pennsylvania School of Dental Medicine',
      'Residency in Oral and Maxillofacial Surgery, NYU Langone Medical Center',
      'Advanced Training in Cosmetic Dentistry, American Academy of Cosmetic Dentistry'
    ],
    experience: [
      'Head of Dental Surgery, Metropolitan Dental Associates',
      'Faculty Member, State University Dental School',
      'Volunteer Dentist, International Dental Relief Programs'
    ],
    certifications: [
      'American Board of Oral and Maxillofacial Surgery',
      'Certified in Dental Implant Procedures',
      'Member, American Dental Association'
    ],
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-wilson',
    name: 'Dr. James Wilson',
    specialty: 'General Physician',
    description: 'Dr. Wilson is a compassionate primary care physician dedicated to providing comprehensive healthcare for patients of all ages. He focuses on preventive medicine, chronic disease management, and fostering long-term doctor-patient relationships based on trust and understanding.',
    education: [
      'MD, Yale School of Medicine',
      'Residency in Family Medicine, Duke University Hospital',
      'MPH, Harvard T.H. Chan School of Public Health'
    ],
    experience: [
      'Medical Director, Community Health Center',
      'Clinical Instructor, University Medical School',
      'Primary Care Physician, Urban Health Initiative'
    ],
    certifications: [
      'American Board of Family Medicine',
      'Certified in Diabetes Management',
      'Fellow, American Academy of Family Physicians'
    ],
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-patel',
    name: 'Dr. Aisha Patel',
    specialty: 'Pediatrician',
    description: 'Dr. Patel is a board-certified pediatrician who provides comprehensive care for children from birth through adolescence. She is passionate about child development, preventive care, and creating a comfortable environment for both children and parents.',
    education: [
      'MD, University of California, San Francisco',
      'Residency in Pediatrics, Children\'s Hospital of Philadelphia',
      'Fellowship in Developmental Pediatrics, Boston Children\'s Hospital'
    ],
    experience: [
      'Chief of Pediatrics, Children\'s Community Hospital',
      'Pediatric Consultant, School Health Program',
      'International Medical Volunteer, Doctors Without Borders'
    ],
    certifications: [
      'American Board of Pediatrics',
      'Certified in Pediatric Advanced Life Support',
      'Member, American Academy of Pediatrics'
    ],
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-thompson',
    name: 'Dr. Robert Thompson',
    specialty: 'Ophthalmologist',
    description: 'Dr. Thompson is a highly skilled ophthalmologist specializing in cataract surgery, glaucoma management, and refractive procedures. With his extensive experience and commitment to utilizing the latest technology, he provides exceptional eye care to improve and preserve his patients\' vision.',
    education: [
      'MD, Duke University School of Medicine',
      'Residency in Ophthalmology, Wilmer Eye Institute at Johns Hopkins',
      'Fellowship in Surgical Retina, Bascom Palmer Eye Institute'
    ],
    experience: [
      'Director of Surgical Services, Eye Center of Excellence',
      'Clinical Professor of Ophthalmology, University Medical Center',
      'Founder, Vision Restoration Foundation'
    ],
    certifications: [
      'American Board of Ophthalmology',
      'Certified in Advanced Cataract Surgery Techniques',
      'Fellow, American Academy of Ophthalmology'
    ],
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-garcia',
    name: 'Dr. Maria Garcia',
    specialty: 'Dermatologist',
    description: 'Dr. Garcia is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is committed to helping patients maintain healthy skin through personalized treatment plans and education about skin care and sun protection.',
    education: [
      'MD, Stanford University School of Medicine',
      'Residency in Dermatology, New York University',
      'Fellowship in Mohs Surgery, Memorial Sloan Kettering Cancer Center'
    ],
    experience: [
      'Head of Dermatologic Surgery, University Hospital',
      'Research Investigator, Skin Disease Research Center',
      'Consultant, Dermatology Product Development'
    ],
    certifications: [
      'American Board of Dermatology',
      'Certified in Mohs Micrographic Surgery',
      'Member, American Academy of Dermatology'
    ],
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'dr-nguyen',
    name: 'Dr. David Nguyen',
    specialty: 'Orthopedic Surgeon',
    description: 'Dr. Nguyen is an orthopedic surgeon specializing in sports medicine, joint replacement, and minimally invasive procedures. He is dedicated to helping patients recover from injuries and manage chronic conditions to restore mobility and improve quality of life.',
    education: [
      'MD, Washington University School of Medicine',
      'Residency in Orthopedic Surgery, Hospital for Special Surgery',
      'Fellowship in Sports Medicine, Andrews Institute'
    ],
    experience: [
      'Team Physician, Professional Sports Teams',
      'Director of Orthopedic Surgery, Regional Medical Center',
      'Founder, Joint Replacement Center of Excellence'
    ],
    certifications: [
      'American Board of Orthopedic Surgery',
      'Subspecialty Certification in Sports Medicine',
      'Fellow, American Academy of Orthopedic Surgeons'
    ],
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const DoctorsPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Our Doctors | HealthCare Plus';
  }, []);

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorData | null>(null);

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiologist', name: 'Cardiology' },
    { id: 'neurologist', name: 'Neurology' },
    { id: 'dental-surgeon', name: 'Dental Surgery' },
    { id: 'general-physician', name: 'General Medicine' },
    { id: 'pediatrician', name: 'Pediatrics' },
    { id: 'ophthalmologist', name: 'Ophthalmology' },
    { id: 'dermatologist', name: 'Dermatology' },
    { id: 'orthopedic-surgeon', name: 'Orthopedics' }
  ];

  const filteredDoctors = selectedSpecialty === 'all' 
    ? doctorsData 
    : doctorsData.filter(doctor => 
        doctor.specialty.toLowerCase() === selectedSpecialty.replace('-', ' ')
      );

  const openDoctorDetail = (doctor: DoctorData) => {
    setSelectedDoctor(doctor);
    document.body.style.overflow = 'hidden';
  };

  const closeDoctorDetail = () => {
    setSelectedDoctor(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
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
              Our Expert Doctors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-100 text-lg"
            >
              Meet our team of experienced medical professionals dedicated to providing exceptional healthcare services. Our doctors are experts in their fields and committed to your well-being.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet Our Medical Team"
            subtitle="Our experienced doctors are ready to provide you with the best medical care"
            centered
          />
          
          {/* Specialty Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSpecialty === specialty.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedSpecialty(specialty.id)}
              >
                {specialty.name}
              </button>
            ))}
          </div>
          
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => openDoctorDetail(doctor)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{doctor.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <button 
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        aria-label={`Email ${doctor.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={18} />
                      </button>
                      <button 
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        aria-label={`Call ${doctor.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone size={18} />
                      </button>
                    </div>
                    
                    <button 
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDoctorDetail(doctor);
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No doctors found for the selected specialty.</p>
            </div>
          )}
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                onClick={closeDoctorDetail}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 md:h-full">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name} 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedDoctor.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{selectedDoctor.specialty}</p>
                  
                  <div className="flex space-x-4 mb-6">
                    <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors">
                      <Mail size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors">
                      <Phone size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedDoctor.description}</p>
                  
                  <a
                    href="/appointment"
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 inline-block mb-6"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
              
              <div className="p-6 pt-0 border-t border-gray-200 mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <BookOpen size={20} className="text-primary-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-800">Education</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedDoctor.education.map((item, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Award size={20} className="text-primary-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-800">Experience</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedDoctor.experience.map((item, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <BookCheck size={20} className="text-primary-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-800">Certifications</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedDoctor.certifications.map((item, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageTransition>
  );
};

export default DoctorsPage;