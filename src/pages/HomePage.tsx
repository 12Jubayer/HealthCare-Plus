import React from 'react';
import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import DoctorsSection from '../components/home/DoctorsSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'HealthCare Plus - Modern Hospital & Medical Center';
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CallToAction />
    </PageTransition>
  );
};

export default HomePage;