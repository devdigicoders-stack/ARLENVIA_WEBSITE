import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CTASection from '../components/common/CTASection';

const BlogDetail = () => {
  const { slug } = useParams();

  // In a real app, fetch data based on slug. For now, mock data.
  const blog = {
    title: "Turning Compliance Into Measurable Business Performance",
    category: "Management Systems",
    date: "October 12, 2026",
    author: "Arlenvia Insights Team",
    content: `
      <p>Compliance is often viewed as a necessary burden—a box to tick to maintain certification or meet regulatory requirements. However, this perspective limits the potential value of management systems.</p>
      
      <h3>The Problem with Check-Box Compliance</h3>
      <p>When organizations focus solely on passing audits, they often create parallel systems: one for the auditor and one for actual operations. This duplication wastes resources and fails to address real business risks.</p>
      
      <ul>
        <li>Increased administrative burden without operational benefit</li>
        <li>Disconnect between quality teams and operational leaders</li>
        <li>Failure to identify genuine opportunities for improvement</li>
      </ul>
      
      <h3>A Performance-Oriented Approach</h3>
      <p>At Arlenvia, we believe that compliance should be a byproduct of a well-designed, effective management system. When processes are optimized for business performance, compliance naturally follows.</p>
      
      <blockquote>
        "The goal is not to have a compliant system; the goal is to have a capable system that naturally achieves compliance."
      </blockquote>
      
      <h3>Practical Steps Forward</h3>
      <p>Organizations can start by aligning their management system objectives with their strategic business goals. This involves reviewing existing KPIs to ensure they measure actual process effectiveness, not just conformity.</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Arlenvia Insights</title>
      </Helmet>

      <div className="flex flex-col w-full bg-[var(--color-warm-white)]">
        {/* Blog Hero */}
        <section className="pt-32 pb-16 bg-[var(--color-primary-navy)] text-white relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[var(--color-gold-primary)]/20 text-[var(--color-gold-light)] px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                  {blog.category}
                </span>
                <span className="text-white/60 text-sm">{blog.date}</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
                  {blog.author.charAt(0)}
                </div>
                <span>By {blog.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content & Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Image Mock */}
              <div className="w-full aspect-[21/9] bg-gray-200 rounded-xl mb-10 overflow-hidden flex items-center justify-center border border-gray-300">
                <span className="text-gray-400 font-medium">Featured Image Placeholder</span>
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[var(--color-primary-navy)] prose-a:text-[var(--color-gold-primary)] prose-blockquote:border-l-[var(--color-gold-primary)] prose-blockquote:bg-[var(--color-warm-white)] prose-blockquote:p-4 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Sidebar (Social Share & Related) */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-10">
                {/* Share */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-4">Share this Insight</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">in</button>
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">f</button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors">✉</button>
                  </div>
                </div>

                {/* Related Articles Mock */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-4">Related Insights</h3>
                  <div className="space-y-4">
                    <Link to="/insights/mock" className="block group">
                      <h4 className="text-sm font-bold text-gray-800 group-hover:text-[var(--color-gold-primary)] transition-colors mb-1">KPIs That Support Better Business Decisions</h4>
                      <span className="text-xs text-gray-500">Business Performance</span>
                    </Link>
                    <div className="w-full h-px bg-gray-100" />
                    <Link to="/insights/mock2" className="block group">
                      <h4 className="text-sm font-bold text-gray-800 group-hover:text-[var(--color-gold-primary)] transition-colors mb-1">From Process Documentation to Performance</h4>
                      <span className="text-xs text-gray-500">Process Improvement</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

export default BlogDetail;
