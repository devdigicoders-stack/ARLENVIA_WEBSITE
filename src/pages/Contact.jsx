import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import ContactCards from '../components/contact/ContactCards';
import EnquiryForm from '../components/contact/EnquiryForm';
import WhyContactArlenvia from '../components/contact/WhyContactArlenvia';
import MapSection from '../components/contact/MapSection';
import QuickContactStrip from '../components/contact/QuickContactStrip';
import FAQPreview from '../components/contact/FAQPreview';
import CTASection from '../components/common/CTASection';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Arlenvia Training Consultancy Services</title>
        <meta name="description" content="Connect with Arlenvia to discuss management systems, professional training, audit support, business improvement, digital innovation or customized organizational requirements." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="Contact Arlenvia"
          title="Let’s Discuss Your Training, Consultancy or Improvement Needs"
          description="Connect with Arlenvia to discuss management systems, professional training, audit support, business improvement, digital innovation or customized organizational requirements."
          breadcrumb="Contact Us"
        />
        
        <ContactCards />
        <EnquiryForm />
        <WhyContactArlenvia />
        <MapSection />
        <QuickContactStrip />
        <FAQPreview />
        
        <CTASection 
          title="Start the Conversation"
          subtitle="Tell us what your organization is working to improve, and we’ll help identify the right starting point."
          primaryBtnText="Submit an Enquiry"
          primaryBtnLink="#form"
          secondaryBtnText="Explore Our Services"
          secondaryBtnLink="/consultancy"
        />
      </div>
    </>
  );
};

export default Contact;
