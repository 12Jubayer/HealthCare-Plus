import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';

const PrivacyPolicyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy | HealthCare Plus';
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-100 text-lg">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <SectionHeading
                title="Our Privacy Policy"
                subtitle="Last updated: July 1, 2025"
              />
              
              <div className="space-y-8 mt-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
                  <p>
                    HealthCare Plus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                  </p>
                  <p className="mt-2">
                    Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h3>
                  <p>
                    We may collect several types of information from and about users of our services, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Personal Identifiable Information:</strong> This may include your name, postal address, email address, telephone number, date of birth, medical record number, and other information that can be used to identify you.
                    </li>
                    <li>
                      <strong>Health Information:</strong> We may collect information about your medical history, conditions, treatments, and other health-related information necessary to provide our services.
                    </li>
                    <li>
                      <strong>Insurance Information:</strong> This may include your insurance policy details, coverage information, and claim history.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> If you make payments through our website, we may collect payment card details and billing information.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> We collect information about how you interact with our website, including the pages you visit, the time and date of your visit, and the time spent on those pages.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h3>
                  <p>
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>To provide and maintain our services, including scheduling appointments and providing medical care</li>
                    <li>To communicate with you, including responding to inquiries and sending appointment reminders</li>
                    <li>To improve our website and services based on your feedback and usage patterns</li>
                    <li>To process payments and billing</li>
                    <li>To comply with legal obligations, including healthcare regulations</li>
                    <li>To protect against fraudulent or illegal activity</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Disclosure of Your Information</h3>
                  <p>
                    We may disclose your personal information to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Healthcare Providers:</strong> We may share your information with other healthcare providers involved in your care.
                    </li>
                    <li>
                      <strong>Insurance Companies:</strong> We may share your information with your insurance provider for billing and claims purposes.
                    </li>
                    <li>
                      <strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as a business asset.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h3>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>The right to access your personal information</li>
                    <li>The right to request correction of inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing of your information</li>
                  </ul>
                  <p className="mt-2">
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Data Security</h3>
                  <p>
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Changes to Our Privacy Policy</h3>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;