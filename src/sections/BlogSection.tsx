import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
//import React, { type ReactNode } from 'react';
import { blogPosts } from '../data/blogPosts';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
              className="group block cursor-pointer"
            >
  <Link
    to={`/blog/${post.slug}`}
    className="group block cursor-pointer"
  >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-[#F5F5F5] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
<div>
  <span className="text-[#999999] text-xs uppercase tracking-wider mb-2 block">
    {post.category}
  </span>

  <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold group-hover:opacity-70 transition-opacity">
    {post.title}
  </h3>
</div>
  </Link>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
