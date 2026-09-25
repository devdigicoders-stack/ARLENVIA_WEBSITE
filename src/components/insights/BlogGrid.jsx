import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ blogs }) => {
  return (
    <div className="container mx-auto px-6 mb-24">
      {blogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No insights found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
