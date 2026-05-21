import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const featuredPost = {
    id: 1,
    title: 'How Much Does It Cost to Move a Piano in Sydney?',
    excerpt:
      'Wondering how much it costs to move a piano in Sydney? Here’s what affects pricing, what to avoid, and how to protect your piano during transport.',
    category: 'Piano Moving Guides',
    date: 'May 19, 2026',
    readTime: '6 min read',
    image: '/images/sydney-piano-movers-loading-upright-piano.webp',
    slug: 'how-much-does-it-cost-to-move-a-piano-in-sydney',
  };

const posts = [
  {
  id: 2,
  title: 'How to Choose Between a Grand and an Upright Piano',
  excerpt:
    'The decision between a grand and an upright piano is one of the most significant choices a pianist will make. Each offers a distinct playing experience, sound profile, and presence in your home. We break down everything you need to know.',
  category: 'Buying Guide',
  date: 'May 14, 2026',
  readTime: '8 min read',
  image: '/images/grand-vs-upright-piano-buying-guide.webp',
  slug: 'grand-vs-upright-piano',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
<section className="relative pt-32 pb-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/journal-header.webp"
      alt="Elegant piano showroom interior"
      className="w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/45" />
  </div>

  {/* Content */}
  <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">
        Stories & Insights
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mt-4">
        The Journal
      </h1>

      <p className="text-white/80 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
        Buying guides, moving advice, and stories from the world of pianos.
      </p>
    </motion.div>
  </div>
</section>

        {/* Featured Post */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-white border border-[#E5E5E5] lg:border-l-0">
                  <span className="text-[#999999] text-xs uppercase tracking-[0.15em] font-medium mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4 group-hover:opacity-70 transition-opacity">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#999999]">
                      <span>{featuredPost.date}</span>
                      <span className="w-1 h-1 bg-[#999999] rounded-full" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="text-[#1A1A1A] text-xs uppercase tracking-wider font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">
                Latest Stories
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-[#F5F5F5] mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="text-[#999999] text-xs uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-[#1A1A1A] text-lg font-semibold mt-1 mb-2 group-hover:opacity-70 transition-opacity leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[#666666] text-sm leading-relaxed mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[#999999]">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-[#999999] rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
