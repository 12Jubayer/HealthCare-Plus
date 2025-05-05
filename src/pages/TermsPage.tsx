import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

const TermsPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Terms & Conditions | HealthCare Plus';
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-100 text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <SectionHeading
                title="Terms and Conditions"
                subtitle="Last updated: July 1, 2025"
              />
              
              <div className="space-y-8 mt-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
                  <p>
                    Welcome to HealthCare Plus. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Definitions</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>"Services"</strong> refers to all services provided by HealthCare Plus, including medical consultations, treatments, and the use of our website.
                    </li>
                    <li>
                      <strong>"User"</strong> refers to anyone who accesses or uses our services, including patients, website visitors, and individuals who schedule appointments.
                    </li>
                    <li>
                      <strong>"Website"</strong> refers to the HealthCare Plus website and any associated web pages.
                    </li>
                    <li>
                      <strong>"Content"</strong> refers to all information, text, graphics, images, and other materials that appear on our website.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Use of Services</h3>
                  <p>
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Provide accurate and complete information when scheduling appointments or registering for services</li>
                    <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                    <li>Not engage in any activity that could harm, disable, overburden, or impair our systems</li>
                    <li>Not attempt to gain unauthorized access to any part of our services or systems</li>
                    <li>Respect the privacy and rights of other users and healthcare professionals</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Medical Disclaimer</h3>
                  <p>
                    The information provided on our website is for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                  <p className="mt-2">
                    HealthCare Plus does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on our website. Reliance on any information provided by HealthCare Plus, its employees, or others appearing on the website is solely at your own risk.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Appointment Scheduling and Cancellation</h3>
                  <p>
                    When scheduling an appointment through our website or services:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>You are responsible for providing accurate contact and personal information</li>
                    <li>Appointments are subject to confirmation by our staff</li>
                    <li>Cancellations must be made at least 24 hours in advance to avoid cancellation fees</li>
                    <li>Repeated no-shows or late cancellations may result in restrictions on future appointments</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Payment and Insurance</h3>
                  <p>
                    Payment for services is expected at the time of service unless prior arrangements have been made. We accept most major insurance plans, but you are responsible for verifying coverage with your insurance provider.
                  </p>
                  <p className="mt-2">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pay all charges for services provided</li>
                    <li>Provide accurate insurance information</li>
                    <li>Pay any charges not covered by your insurance, including deductibles and co-payments</li>
                    <li>Update your billing and insurance information promptly if changes occur</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Intellectual Property</h3>
                  <p>
                    All content on our website, including text, graphics, logos, images, and software, is the property of HealthCare Plus or its content suppliers and is protected by copyright and other intellectual property laws.
                  </p>
                  <p className="mt-2">
                    You may not:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Reproduce, distribute, modify, or create derivative works of our content</li>
                    <li>Use our content for commercial purposes without express written permission</li>
                    <li>Remove any copyright or other proprietary notices from our content</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, HealthCare Plus shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, resulting from your access to or use of our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h3>
                  <p>
                    We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use our services after any changes, you accept the revised Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: <a href="mailto:aljubayer92@gmail.com" className="text-primary-600 hover:underline">aljubayer92@gmail.com</a><br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Healthcare Avenue, Medical District, City, Country 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TermsPage;