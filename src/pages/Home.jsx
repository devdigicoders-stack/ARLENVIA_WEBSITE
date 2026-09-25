import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ExpertiseStrip from '../components/home/ExpertiseStrip';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSection from '../components/home/ServicesSection';
import PhilosophySection from '../components/home/PhilosophySection';
import TrainingSection from '../components/home/TrainingSection';
import ApproachSection from '../components/home/ApproachSection';
import DigitalAISection from '../components/home/DigitalAISection';
import IndustriesSection from '../components/home/IndustriesSection';
import WhyArlenvia from '../components/home/WhyArlenvia';
import InsightsSection from '../components/home/InsightsSection';
import CTASection from '../components/common/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Arlenvia | Striking the Balance Between Compliance and Business Performance</title>
        <meta name="description" content="Arlenvia Training Consultancy Services. Practical Quality. Measurable Performance. Sustainable Improvement." />
      </Helmet>

      <div className="flex flex-col w-full">
        <HeroSection />
        <ExpertiseStrip />
        <AboutPreview />
        <ServicesSection />
        <PhilosophySection />
        <TrainingSection />
        <ApproachSection />
        <DigitalAISection />
        <IndustriesSection />
        <WhyArlenvia />
        <InsightsSection />
        
        <CTASection 
          title="Ready to Turn Compliance Into Performance?"
          subtitle="Let's discuss how Arlenvia can support your organization."
          primaryBtnText="Book a Consultation"
          primaryBtnLink="/contact"
          secondaryBtnText="Contact Us"
          secondaryBtnLink="/contact"
        />
      </div>
    </>
  );
};

export default Home;
