import React from 'react';
import { Search } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import FaqItem from '../components/faq/FaqItem';

const FaqPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Frequently Asked Questions | HealthCare Plus';
  }, []);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'services', name: 'Services' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'billing', name: 'Billing' },
    { id: 'covid', name: 'COVID-19' },
  ];

  const faqData = [
    {
      category: 'appointments',
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment through our website by using the online booking form, calling our reception desk during business hours, or using our mobile app. We recommend booking at least 24 hours in advance for regular checkups and consultations.',
    },
    {
      category: 'appointments',
      question: 'Can I cancel or reschedule my appointment?',
      answer: 'Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time without any penalty. For cancellations less than 24 hours in advance, a small fee may apply. Please contact our reception desk or use the online portal to make any changes to your appointment.',
    },
    {
      category: 'appointments',
      question: 'What should I bring to my first appointment?',
      answer: 'For your first appointment, please bring a valid ID, your insurance card, a list of current medications, any relevant medical records or test results, and information about your medical history. Arriving 15 minutes early will help ensure a smooth check-in process.',
    },
    {
      category: 'services',
      question: 'What medical services do you offer?',
      answer: 'We offer a comprehensive range of medical services including general health checkups, specialized consultations, dental care, cardiology, neurology, pediatrics, dermatology, laboratory testing, diagnostic imaging, and minor surgical procedures. Our team of specialists can address most health concerns under one roof.',
    },
    {
      category: 'services',
      question: 'Do you offer emergency services?',
      answer: 'Yes, we offer emergency medical services during our operating hours. For life-threatening emergencies, we recommend going directly to the nearest emergency room or calling 911. Our urgent care department can handle non-life-threatening emergencies such as minor injuries, high fever, and infections.',
    },
    {
      category: 'insurance',
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, and UnitedHealthcare. Please contact our billing department or check our website for a complete and up-to-date list of accepted insurance providers. We recommend verifying your coverage before your appointment.',
    },
    {
      category: 'insurance',
      question: 'What if I don\'t have insurance?',
      answer: 'If you don\'t have insurance, we offer self-pay options with transparent pricing. We also have payment plans available to help make healthcare more affordable. Our financial counselors can discuss these options with you and help determine if you qualify for any assistance programs.',
    },
    {
      category: 'billing',
      question: 'How can I pay my medical bill?',
      answer: 'You can pay your medical bill online through our patient portal, by phone, by mail, or in person at our billing office. We accept all major credit cards, checks, and cash payments. For your convenience, we also offer automated payment plans for larger bills.',
    },
    {
      category: 'billing',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for patients who need to spread out their payments over time. These plans are interest-free for up to 12 months for qualified patients. Please contact our billing department to discuss payment plan options that work for your financial situation.',
    },
    {
      category: 'covid',
      question: 'What COVID-19 precautions are you taking?',
      answer: 'We follow all CDC guidelines for COVID-19 safety including enhanced cleaning protocols, mask requirements for staff and patients, temperature checks, and social distancing in waiting areas. We also offer telehealth appointments for patients who prefer to consult with a doctor remotely.',
    },
    {
      category: 'covid',
      question: 'Do you offer COVID-19 testing and vaccination?',
      answer: 'Yes, we offer COVID-19 testing including PCR and rapid antigen tests. We also administer COVID-19 vaccines in accordance with current public health guidelines. Please check our website or call our COVID-19 hotline for the latest information on availability and scheduling.',
    },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-100 text-lg mb-8">
              Find answers to the most common questions about our services and policies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title={activeCategory === 'all' ? 'Common Questions' : `${faqCategories.find(c => c.id === activeCategory)?.name}`}
              subtitle="Find detailed answers to questions you may have about our healthcare services"
              centered
            />

            {filteredFaqs.length > 0 ? (
              <div className="mt-8">
                {filteredFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No results found for your search. Please try different keywords.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions Section */}
          <div className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please feel free to contact our support team.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FaqPage;