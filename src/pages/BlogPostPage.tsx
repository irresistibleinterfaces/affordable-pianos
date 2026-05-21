import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { blogPosts } from '../data/blogPosts';

//import { blogPosts, type BlogPost } from '@/data/blogPosts';


export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#999999]">
              <Link to="/" className="hover:text-[#1A1A1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-[#1A1A1A] transition-colors">
                The Journal
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#1A1A1A]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <section className="pt-12 sm:pt-16 pb-8">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#999999] text-xs uppercase tracking-[0.15em] font-medium">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight mt-3 leading-[1.1]">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-6 text-xs text-[#999999]">
                <span>{post.author}</span>
                <span className="w-1 h-1 bg-[#999999] rounded-full" />
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-[#999999] rounded-full" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-12 sm:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[21/9] overflow-hidden bg-[#F5F5F5]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose-custom"
            >
              {post.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug"
                    >
                      {block.text}
                    </h2>
                  );
                }
                else if (block.type === 'subheading') { 
                  return (
                    <h3 
                      key={index}
                      className="text-lg sm:text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4 leading-snug" 
                    >
                      {block.text}
                    </h3>
                  );
                }
else if (block.type === 'list') {
  return (
    <ul
      key={index}
      className="list-disc pl-6 mb-6 space-y-2 text-[#666666] text-sm sm:text-base leading-[1.8]"
    >
      {block.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ul>
  );
}
if (block.type === 'custom') {
  return (
    <div
      key={index}
      className="text-[#666666] text-sm sm:text-base leading-[1.8] mb-5"
    >
      {block.content}
    </div>
  );
}

return (
  <p
    key={index}
    className="text-[#666666] text-sm sm:text-base leading-[1.8] mb-5"
  >
    {block.text}
  </p>
);
              })}
            </motion.article>

            {/* Back to Journal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 pt-8 border-t border-[#E5E5E5]"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#1A1A1A] text-sm font-medium hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to The Journal</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        {(prevPost || nextPost) && (
          <section className="border-t border-[#E5E5E5]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="group p-8 sm:p-12 border-r border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors"
                  >
                    <span className="text-[#999999] text-xs uppercase tracking-wider flex items-center gap-1 mb-2">
                      <ArrowLeft className="w-3 h-3" />
                      Previous
                    </span>
                    <h3 className="text-[#1A1A1A] text-lg font-semibold group-hover:opacity-70 transition-opacity leading-snug">
                      {prevPost.title}
                    </h3>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group p-8 sm:p-12 text-right hover:bg-[#F5F5F5] transition-colors"
                  >
                    <span className="text-[#999999] text-xs uppercase tracking-wider flex items-center gap-1 justify-end mb-2">
                      Next
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <h3 className="text-[#1A1A1A] text-lg font-semibold group-hover:opacity-70 transition-opacity leading-snug">
                      {nextPost.title}
                    </h3>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 sm:py-20 bg-[#F5F5F5]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-8 sm:mb-12"
              >
                Related Stories
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedPosts.map((rp, index) => (
                  <motion.div
                    key={rp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      to={`/blog/${rp.slug}`}
                      className="group block cursor-pointer"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-white mb-4">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-[#999999] text-xs uppercase tracking-wider">
                        {rp.category}
                      </span>
                      <h3 className="text-[#1A1A1A] text-lg font-semibold mt-1 group-hover:opacity-70 transition-opacity leading-snug">
                        {rp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-xs text-[#999999]">
                        <span>{rp.date}</span>
                        <span className="w-1 h-1 bg-[#999999] rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {rp.readTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}
