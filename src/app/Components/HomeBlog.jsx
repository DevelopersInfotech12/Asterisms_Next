import React from 'react';
import { Calendar, ArrowRight, Building2, Scale, Shield } from 'lucide-react';

const HomeBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Navigating Bankruptcy: Understanding Your Options",
      category: "Bankruptcy & Insolvency Laws",
      excerpt: "Decoding Bankruptcy: A Comprehensive Guide for Businesses",
      image: "/images/blog1.jpg",
      icon: <Scale className="w-5 h-5" />,
      readTime: "5 min read",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mitigating Risks in Commercial Transactions",
      category: "Banking Law",
      excerpt: "Strategies for Success: Minimizing Legal Risks in Commercial Deals",
      image: "/images/blog2.jpg",
      icon: <Building2 className="w-5 h-5" />,
      readTime: "7 min read",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "The Role of Corporate Governance in Business Success",
      category: "Commercial & Corporate Law",
      excerpt: "Building a Strong Foundation: The Importance of Corporate Governance",
      image: "/images/blog3.jpg",
      icon: <Shield className="w-5 h-5" />,
      readTime: "6 min read",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-tight tracking-relaxed font-semibold">
                Latest From
                <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
                  Our Blog
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Legal+Blog+Post';
                  }}
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-black/10"></div> */}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg border border-white/20">
                    {post.icon}
                    <span className="hidden sm:inline">{post.category}</span>
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                    {post.readTime}
                  </span>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-8 left-8 w-24 h-24 border border-white/40 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border border-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl group/btn hover:gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Bottom Border Animation */}
              <div className={`h-1 bg-gradient-to-r ${post.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;