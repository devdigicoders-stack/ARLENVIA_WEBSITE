import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CTASection from '../components/common/CTASection';
import { initialBlogs } from './Insights';
import BlogCard from '../components/insights/BlogCard';

const BlogDetail = () => {
  const { slug } = useParams();

  // Find the blog based on slug
  const blog = initialBlogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/insights" />;
  }

  // Get 3 other related blogs for the bottom grid
  const relatedBlogs = initialBlogs.filter(b => b.id !== blog.id).slice(0, 3);

  // Mock content (since we don't have full HTML content for each blog in initialBlogs)
  const content = `
    <p>Organizations often view compliance as a necessary burden—a box to tick to maintain certification or meet regulatory requirements. However, this perspective limits the potential value of your management systems.</p>
    
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
  `;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Arlenvia Insights</title>
      </Helmet>

      <div className="flex flex-col w-full bg-[var(--color-warm-white)]">
        {/* Blog Hero */}
        <section className="pt-32 pb-16 bg-[var(--color-primary-navy)] text-white relative">
          <div className="absolute inset-0 overflow-hidden z-0">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-gold-primary)]/10 blur-[120px]" />
          </div>
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[var(--color-gold-primary)]/20 text-[var(--color-gold-light)] px-3 py-1 rounded-full text-sm font-semibold tracking-wide border border-[var(--color-gold-primary)]/30">
                  {blog.category}
                </span>
                <span className="text-white/60 text-sm">{blog.date}</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold-primary)] text-[var(--color-primary-navy)] flex items-center justify-center font-bold">
                  A
                </div>
                <span>By Arlenvia Insights Team</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content & Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Image */}
              <div className="w-full aspect-[21/9] bg-gray-200 rounded-xl mb-10 overflow-hidden shadow-md">
                {blog.img ? (
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">Image</div>
                )}
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[var(--color-primary-navy)] prose-a:text-[var(--color-gold-primary)] prose-blockquote:border-l-[var(--color-gold-primary)] prose-blockquote:bg-white prose-blockquote:p-6 prose-blockquote:italic prose-blockquote:shadow-sm prose-blockquote:rounded-r-lg prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Sidebar (Social Share) */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-10">
                {/* Share */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-4">Share this Insight</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors font-bold">in</button>
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors font-bold">f</button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors font-bold">✉</button>
                  </div>
                </div>

                <div className="bg-[var(--color-primary-navy)] p-8 rounded-xl text-white text-center shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Need Expert Guidance?</h3>
                  <p className="text-gray-300 text-sm mb-6">Our consultants can help you apply these principles in your organization.</p>
                  <Link to="/contact" className="block w-full bg-[var(--color-gold-primary)] text-[var(--color-primary-navy)] font-bold py-3 rounded-lg hover:bg-white transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Insights Cards Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-2">More Insights</h2>
                <div className="w-16 h-1 bg-[var(--color-gold-primary)]" />
              </div>
              <Link to="/insights" className="text-[var(--color-gold-primary)] font-bold hover:text-[var(--color-primary-navy)] transition-colors">
                View All →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((b, index) => (
                <BlogCard key={b.id} blog={b} index={index} />
              ))}
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
