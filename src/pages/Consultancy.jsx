import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import ConsultancyOverview from '../components/consultancy/ConsultancyOverview';
import ManagementSystems from '../components/consultancy/ManagementSystems';
import SupportAreas from '../components/consultancy/SupportAreas';
import PerformanceConsultancy from '../components/consultancy/PerformanceConsultancy';
import AuditAssessment from '../components/consultancy/AuditAssessment';
import ProcessImprovement from '../components/consultancy/ProcessImprovement';
import ConsultancyApproach from '../components/consultancy/ConsultancyApproach';
import WhyArlenviaConsultancy from '../components/consultancy/WhyArlenviaConsultancy';
import IndustriesSection from '../components/consultancy/IndustriesSection';
import CTASection from '../components/common/CTASection';
import heroImage1 from '../assets/images/about_arlenvia.jpg';
import heroImage2 from '../assets/images/hero_training_3.jpg';
import heroImage3 from '../assets/images/ind_manufacturing.jpg';

const Consultancy = () => {
  return (
    <>
      <Helmet>
        <title>Consultancy Services | Arlenvia Training Consultancy Services</title>
        <meta name="description" content="Practical consultancy solutions designed to strengthen management systems, improve processes, manage risk, and support sustainable organizational performance." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="Consultancy Services"
          title="From Compliance Requirements to Measurable Business Performance"
          description="Practical consultancy solutions designed to strengthen management systems, improve processes, manage risk, and support sustainable organizational performance."
          breadcrumb="Consultancy"
          bgImages={[heroImage1, heroImage2, heroImage3]}
        />
        
        <ConsultancyOverview />
        <ManagementSystems />
        <SupportAreas />
        <PerformanceConsultancy />
        <AuditAssessment />
        <ProcessImprovement />
        <ConsultancyApproach />
        <WhyArlenviaConsultancy />
        <IndustriesSection />
        
        <CTASection 
          title="Need Support With Your Management System or Business Performance?"
          subtitle="Tell us your current challenge and our team can discuss the most suitable consultancy approach."
          primaryBtnText="Request Consultancy"
          primaryBtnLink="/contact"
          secondaryBtnText="Contact Arlenvia"
          secondaryBtnLink="/contact"
        />
      </div>
    </>
  );
};

export default Consultancy;
