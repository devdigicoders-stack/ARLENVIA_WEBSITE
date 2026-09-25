import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import WhoWeAre from '../components/about/WhoWeAre';
import VisionMission from '../components/about/VisionMission';
import CorePhilosophy from '../components/about/CorePhilosophy';
import WhyDifferent from '../components/about/WhyDifferent';
import OurApproach from '../components/about/OurApproach';
import CapabilitySection from '../components/about/CapabilitySection';
import WhoWeServe from '../components/about/WhoWeServe';
import WhyArlenvia from '../components/about/WhyArlenvia';
import CommitmentSection from '../components/about/CommitmentSection';
import BrandPromise from '../components/about/BrandPromise';
import CTASection from '../components/common/CTASection';
import heroImage1 from '../assets/images/ind_government.jpg';
import heroImage2 from '../assets/images/hero_training_2.jpg';
import heroImage3 from '../assets/images/ind_engineering.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Arlenvia Training Consultancy Services</title>
        <meta name="description" content="Arlenvia helps organizations connect compliance, capability, and business performance through practical training and consultancy." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="About Arlenvia"
          title="Building Capability. Improving Performance. Creating Sustainable Results."
          description="Arlenvia Training Consultancy Services helps organizations connect compliance, capability and business performance through practical training, consultancy, assessment and improvement solutions."
          breadcrumb="About Us"
          bgImages={[heroImage1, heroImage2, heroImage3]}
        />
        
        <WhoWeAre />
        <VisionMission />
        <CorePhilosophy />
        <WhyDifferent />
        <OurApproach />
        <CapabilitySection />
        <WhoWeServe />
        <WhyArlenvia />
        <CommitmentSection />
        <BrandPromise />
        
        <CTASection 
          title="Build Stronger Systems. Develop Better Capability. Achieve Better Results."
          primaryBtnText="Talk to Our Consultants"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Our Services"
          secondaryBtnLink="/consultancy"
        />
      </div>
    </>
  );
};

export default About;
