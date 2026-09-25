import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/common/PageHero';
import FeaturedInsight from '../components/insights/FeaturedInsight';
import BlogFilters from '../components/insights/BlogFilters';
import BlogSearch from '../components/insights/BlogSearch';
import BlogGrid from '../components/insights/BlogGrid';
import KnowledgeAreas from '../components/insights/KnowledgeAreas';
import NewsletterSection from '../components/insights/NewsletterSection';
import CTASection from '../components/common/CTASection';
import heroImage1 from '../assets/images/about_arlenvia.jpg';
import heroImage2 from '../assets/images/ind_education.jpg';
import heroImage3 from '../assets/images/hero_training_3.jpg';

import imgBlog1 from '../assets/images/ind_government.jpg';
import imgBlog2 from '../assets/images/hero_training_2.jpg';
import imgBlog3 from '../assets/images/ind_manufacturing.jpg';
import imgBlog4 from '../assets/images/digital_dashboard.jpg';
import imgBlog5 from '../assets/images/ind_engineering.jpg';
import imgBlog6 from '../assets/images/hero_training.jpg';
import imgBlog7 from '../assets/images/training_section.jpg';
import imgBlog8 from '../assets/images/ind_construction.jpg';
import imgBlog9 from '../assets/images/ind_healthcare.jpg';

export const initialBlogs = [
  {
    id: 1,
    category: "Management Systems",
    date: "October 10, 2026",
    title: "Building a Management System That Supports Business Performance",
    desc: "Discover how to align your ISO standards with core business objectives to create a system that truly drives improvement.",
    slug: "building-management-system-supports-business-performance",
    img: imgBlog1
  },
  {
    id: 2,
    category: "Auditing",
    date: "October 5, 2026",
    title: "Beyond Checklist Audits: Focusing on Process Effectiveness",
    desc: "Learn how to transition from simple compliance checking to auditing that evaluates the true effectiveness of your processes.",
    slug: "beyond-checklist-audits-focusing-process-effectiveness",
    img: imgBlog2
  },
  {
    id: 3,
    category: "Quality",
    date: "September 28, 2026",
    title: "Using Root Cause Analysis for Sustainable Improvement",
    desc: "A practical guide to identifying underlying issues rather than just treating symptoms, ensuring problems don't return.",
    slug: "using-root-cause-analysis-sustainable-improvement",
    img: imgBlog3
  },
  {
    id: 4,
    category: "Business Performance",
    date: "September 20, 2026",
    title: "KPIs That Support Better Business Decisions",
    desc: "How to select, measure and utilize Key Performance Indicators that provide genuine insight for management.",
    slug: "kpis-support-better-business-decisions",
    img: imgBlog4
  },
  {
    id: 5,
    category: "Digital & AI",
    date: "September 15, 2026",
    title: "Responsible AI in Quality and Management Systems",
    desc: "Exploring the balance between technological efficiency and human oversight when implementing AI in quality control.",
    slug: "responsible-ai-quality-management-systems",
    img: imgBlog5
  },
  {
    id: 6,
    category: "Process Improvement",
    date: "September 5, 2026",
    title: "From Process Documentation to Process Performance",
    desc: "Stop just documenting what you do. Start analyzing how you do it to find practical opportunities for improvement.",
    slug: "from-process-documentation-to-process-performance",
    img: imgBlog6
  },
  {
    id: 7,
    category: "Business Performance",
    date: "August 28, 2026",
    title: "Leveraging Data for Strategic Planning",
    desc: "Understand how to harness operational data to set realistic goals and build long-term strategies that scale with your business.",
    slug: "leveraging-data-for-strategic-planning",
    img: imgBlog7
  },
  {
    id: 8,
    category: "Digital & AI",
    date: "August 18, 2026",
    title: "Streamlining Risk Management with Technology",
    desc: "A look at modern tools and frameworks that allow you to track, analyze, and mitigate organizational risks automatically.",
    slug: "streamlining-risk-management-with-technology",
    img: imgBlog8
  },
  {
    id: 9,
    category: "Quality",
    date: "August 10, 2026",
    title: "Developing a Culture of Continuous Quality",
    desc: "Quality isn't just a department—it's a mindset. Learn how to train your teams to prioritize quality at every level.",
    slug: "developing-culture-continuous-quality",
    img: imgBlog9
  }
];

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = initialBlogs.filter(blog => {
    const matchesFilter = activeFilter === "All" || blog.category === activeFilter;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Insights & Resources | Arlenvia</title>
        <meta name="description" content="Explore practical perspectives on quality, management systems, auditing, performance improvement, digital transformation and responsible AI." />
      </Helmet>

      <div className="flex flex-col w-full">
        <PageHero 
          label="Insights & Resources"
          title="Insights for Better Systems, Stronger Capability & Improved Performance"
          description="Explore practical perspectives on quality, management systems, auditing, performance improvement, digital transformation and responsible AI."
          breadcrumb="Insights"
          bgImages={[heroImage1, heroImage2, heroImage3]}
        />
        
        <FeaturedInsight />
        
        <section className="py-12 bg-[var(--color-warm-white)]">
          <BlogFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <BlogGrid blogs={filteredBlogs} />
        </section>

        <KnowledgeAreas setActiveFilter={setActiveFilter} />
        <NewsletterSection />
        
        <CTASection 
          title="Need support applying these ideas within your organization?"
          subtitle="Our experts are ready to discuss your specific challenges."
          primaryBtnText="Talk to Arlenvia"
          primaryBtnLink="/contact"
        />
      </div>
    </>
  );
};

export default Insights;
