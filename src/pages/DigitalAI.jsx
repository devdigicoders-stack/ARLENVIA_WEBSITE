import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import DigitalOverview from '../components/digital-ai/DigitalOverview';
import DigitalCapabilities from '../components/digital-ai/DigitalCapabilities';
import DataAnalytics from '../components/digital-ai/DataAnalytics';
import AIAssistedSection from '../components/digital-ai/AIAssistedSection';
import ResponsibleAI from '../components/digital-ai/ResponsibleAI';
import DigitalAudit from '../components/digital-ai/DigitalAudit';
import DashboardSection from '../components/digital-ai/DashboardSection';
import DigitalUseCases from '../components/digital-ai/DigitalUseCases';
import DigitalApproach from '../components/digital-ai/DigitalApproach';
import WhyArlenviaDigital from '../components/digital-ai/WhyArlenviaDigital';
import CTASection from '../components/common/CTASection';
import heroImage1 from '../assets/images/digital_dashboard.jpg';
import heroImage2 from '../assets/images/hero_training_2.jpg';
import heroImage3 from '../assets/images/ind_manufacturing.jpg';

const DigitalAI = () => {
  return (
    <>
      <Helmet>
        <title>Digital Innovation, Data & AI | Arlenvia</title>
        <meta name="description" content="Helping organizations use digital tools, data analytics and AI to improve visibility, monitoring, decision-making and management-system performance." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="Digital Innovation, Data & AI"
          title="Smarter Systems. Better Insights. Responsible AI."
          description="Helping organizations use digital tools, data analytics and AI to improve visibility, monitoring, decision-making and management-system performance."
          breadcrumb="Digital & AI"
          bgImages={[heroImage1, heroImage2, heroImage3]}
        />
        
        <DigitalOverview />
        <DigitalCapabilities />
        <DataAnalytics />
        <AIAssistedSection />
        <ResponsibleAI />
        <DigitalAudit />
        <DashboardSection />
        <DigitalUseCases />
        <DigitalApproach />
        <WhyArlenviaDigital />
        
        <CTASection 
          title="Ready to Use Data and Digital Tools More Effectively?"
          subtitle="Explore practical digital, analytics and AI approaches aligned with your management-system and business objectives."
          primaryBtnText="Discuss Your Requirements"
          primaryBtnLink="/contact"
          secondaryBtnText="Contact Arlenvia"
          secondaryBtnLink="/contact"
        />
      </div>
    </>
  );
};

export default DigitalAI;
