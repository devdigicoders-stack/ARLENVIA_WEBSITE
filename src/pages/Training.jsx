import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import TrainingPhilosophy from '../components/training/TrainingPhilosophy';
import TrainingCategories from '../components/training/TrainingCategories';
import FeaturedPrograms from '../components/training/FeaturedPrograms';
import TrainingAudience from '../components/training/TrainingAudience';
import TrainingExperience from '../components/training/TrainingExperience';
import CustomizedProcess from '../components/training/CustomizedProcess';
import CapabilitySection from '../components/training/CapabilitySection';
import TrainingBenefits from '../components/training/TrainingBenefits';
import TrainingDelivery from '../components/training/TrainingDelivery';
import CTASection from '../components/common/CTASection';
import heroImage1 from '../assets/images/hero_training.jpg';
import heroImage2 from '../assets/images/hero_training_2.jpg';
import heroImage3 from '../assets/images/training_section.jpg';

const Training = () => {
  return (
    <>
      <Helmet>
        <title>Training & Professional Development | Arlenvia</title>
        <meta name="description" content="Application-focused training designed to help professionals and organizations understand requirements, apply them effectively, and build lasting capability." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="Training & Professional Development"
          title="Practical Learning That Translates Into Workplace Performance"
          description="Application-focused training designed to help professionals and organizations understand requirements, apply them effectively, and build lasting capability."
          breadcrumb="Training"
          bgImages={[heroImage1, heroImage2, heroImage3]}
        />
        
        <TrainingPhilosophy />
        <TrainingCategories />
        <FeaturedPrograms />
        <TrainingAudience />
        <TrainingExperience />
        <CustomizedProcess />
        <CapabilitySection />
        <TrainingBenefits />
        <TrainingDelivery />
        
        <CTASection 
          title="Need Training Tailored to Your Organization?"
          subtitle="Tell us your objectives, competency gaps or management-system requirements, and we can discuss a suitable training solution."
          primaryBtnText="Request Training"
          primaryBtnLink="/contact"
          secondaryBtnText="Contact Arlenvia"
          secondaryBtnLink="/contact"
        />
      </div>
    </>
  );
};

export default Training;
