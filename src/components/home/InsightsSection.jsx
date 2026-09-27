import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from '../insights/BlogCard';

import imgBlog1 from '../../assets/images/about_arlenvia.jpg';
import imgBlog2 from '../../assets/images/ind_manufacturing.jpg';
import imgBlog3 from '../../assets/images/digital_dashboard.jpg';

const InsightsSection = () => {
  // We'll mock this for now, it should come from an API later
  const latestBlogs = [
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
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[var(--color-gold-primary)] font-heading font-bold text-[11px] tracking-[0.2em] uppercase">
                Knowledge Hub
              </span>
              <div className="h-px w-12 bg-[var(--color-gold-primary)]/50" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-[#020E20] leading-[1.1] tracking-tight">
              Latest Insights
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-3 text-[#020E20] font-heading font-bold text-[12px] uppercase tracking-widest group"
            >
              <span className="border-b border-transparent group-hover:border-[#020E20] transition-colors pb-0.5">View All Articles</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-gold-primary)]">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
