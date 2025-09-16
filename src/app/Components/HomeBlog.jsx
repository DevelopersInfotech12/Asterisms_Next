import React from 'react';
import { Calendar, ArrowRight, Building2, Scale, Shield } from 'lucide-react';

const HomeBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Navigating Bankruptcy: Understanding Your Options",
      category: "Bankruptcy & Insolvency Laws",
      excerpt: "Decoding Bankruptcy: A Comprehensive Guide for Businesses",
      image: "/api/placeholder/400/250",
      icon: <Scale className="w-5 h-5" />,
      readTime: "5 min read",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mitigating Risks in Commercial Transactions",
      category: "Banking Law",
      excerpt: "Strategies for Success: Minimizing Legal Risks in Commercial Deals",
      image: "/api/placeholder/400/250",
      icon: <Building2 className="w-5 h-5" />,
      readTime: "7 min read",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "The Role of Corporate Governance in Business Success",
      category: "Commercial & Corporate Law",
      excerpt: "Building a Strong Foundation: The Importance of Corporate Governance",
      image: "/api/placeholder/400/250",
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
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
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
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    {post.icon}
                    {post.category}
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full">
                    {post.readTime}
                  </span>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-white/30 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-24 h-24 border border-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg group/btn hover:gap-3 transition-all duration-300 shadow-sm hover:shadow-md">
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
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;