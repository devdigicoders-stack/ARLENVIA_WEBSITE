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
import BeyondCompliance from '../components/home/BeyondCompliance';
import InsightsSection from '../components/home/InsightsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/common/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Arlenvia | Management Systems & Performance Consultancy</title>
        <meta name="description" content="Arlenvia helps organizations connect management-system requirements with processes, people, objective evidence, performance measurement and business results." />
      </Helmet>

      <div className="flex flex-col w-full">
        <HeroSection />
        <BeyondCompliance />
        <ExpertiseStrip />
        <AboutPreview />
        <ServicesSection />
        {/* <PhilosophySection /> */}
        <TrainingSection />
        <ApproachSection />
        <DigitalAISection />
        <IndustriesSection />
        <WhyArlenvia />
        <InsightsSection />
        <FAQSection />
        
        <CTASection />
      </div>
    </>
  );
};

export default Home;
