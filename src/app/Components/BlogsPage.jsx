"use client";

import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, ArrowRight, Eye, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts = [
    // BANKRUPTCY & INSOLVENCY
    {
      id: 1,
      title: "Corporate Insolvency: Strategic Restructuring in India",
      excerpt:
        "Understanding how businesses can effectively navigate insolvency proceedings under the IBC framework.",
      content:
        "The Insolvency and Bankruptcy Code (IBC) provides a time-bound process for resolving corporate insolvency. Strategic restructuring involves evaluating debt, negotiating with creditors, and ensuring business continuity...",
      image: "/images/blog4.jpg",
      author: "Priyanshu Gupta",
      date: "2025-03-15",
      readTime: "7 min read",
      category: "Bankruptcy & Insolvency Laws",
      views: 2300,
      likes: 112,
      featured: true
    },
    {
      id: 2,
      title: "Role of Insolvency Professionals in Resolution Process",
      excerpt:
        "Examining the duties and powers of insolvency professionals under the IBC.",
      content:
        "Insolvency professionals act as intermediaries, managing the debtor's assets, coordinating with creditors, and ensuring compliance with the IBC regulations...",
     image: "/images/blog5.jpg",
      author: "Dr. Anjali Mehra",
      date: "2025-03-18",
      readTime: "6 min read",
      category: "Bankruptcy & Insolvency Laws",
      views: 1750,
      likes: 89,
      featured: false
    },

    // BANKING LAW
    {
      id: 3,
      title: "Banking Compliance in India: RBI Guidelines Explained",
      excerpt:
        "Breaking down key compliance requirements for banks and financial institutions.",
      content:
        "Banking institutions in India are governed by RBI guidelines, covering risk management, asset classification, and corporate governance...",
      image: "/images/blog6.jpg",
      author: "Dr. Rakesh Sharma",
      date: "2025-03-17",
      readTime: "8 min read",
      category: "Banking Law",
      views: 2100,
      likes: 98,
      featured: false
    },
    {
      id: 4,
      title: "Resolving Banking Disputes: Legal Remedies for Lenders",
      excerpt:
        "Exploring effective legal strategies for banks to resolve disputes with borrowers.",
      content:
        "Dispute resolution in the banking sector often involves debt recovery tribunals, arbitration, and structured settlements...",
      image: "/images/blog7.jpg",
      author: "Dr. Meera Nair",
      date: "2025-03-20",
      readTime: "7 min read",
      category: "Banking Law",
      views: 1800,
      likes: 84,
      featured: false
    },

    // COMMERCIAL & CORPORATE LAW
    {
      id: 5,
      title: "Mergers & Acquisitions: Legal Considerations in India",
      excerpt:
        "A deep dive into regulatory approvals and due diligence in corporate mergers.",
      content:
        "M&A transactions require compliance with SEBI, Competition Commission of India (CCI), and corporate governance norms to safeguard shareholders...",
      image: "/images/blog1.jpg",
      author: "Dr. Rahul Khanna",
      date: "2025-03-10",
      readTime: "9 min read",
      category: "Commercial & Corporate Law",
      views: 2500,
      likes: 120,
      featured: true
    },
    {
      id: 6,
      title: "Shareholder Agreements: Protecting Minority Interests",
      excerpt:
        "Understanding clauses that safeguard the rights of minority shareholders.",
      content:
        "Shareholder agreements define exit rights, voting powers, and dispute resolution mechanisms, ensuring protection for minority investors...",
      image: "/images/blog2.jpg",
      author: "Dr. Kavita Joshi",
      date: "2025-03-12",
      readTime: "6 min read",
      category: "Commercial & Corporate Law",
      views: 1600,
      likes: 77,
      featured: false
    },

    // COMPANIES LAW

    {
      id: 8,
      title: "Corporate Governance: Ensuring Accountability",
      excerpt:
        "Best practices for boards and directors to maintain compliance with corporate governance norms.",
      content:
        "Corporate governance strengthens transparency, prevents fraud, and aligns company practices with stakeholder interests...",
      image: "/images/blog3.jpg",
      author: "Dr. Sameer Verma",
      date: "2025-03-09",
      readTime: "7 min read",
      category: "Companies Law",
      views: 1900,
      likes: 95,
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Bankruptcy & Insolvency Laws": "bg-red-100 text-red-800",
      "Banking Law": "bg-blue-100 text-blue-800",
      "Commercial & Corporate Law": "bg-orange-100 text-orange-800",
      "Companies Law": "bg-purple-100 text-purple-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const isNotFeatured = !post.featured;
      return matchesSearch && matchesCategory && isNotFeatured;
    });

    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'mostLiked':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center mb-8 text-green-800 text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
            Featured <span className='text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold'>Articles</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => (
              <article key={post.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${idx === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium ">
                    Featured
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow font-sans">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <a
                      href="/blogsingle"
                      className="flex items-center text-white font-medium hover:translate-x-1 transition-transform duration-200 bg-green-700 hover:bg-green-500 px-3 py-1 rounded-lg"
                    >
                      <span className="mr-1">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section - Continuous Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
             <h1 className="text-4xl font-semibold text-center mb-8 text-green-800 text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
            All <span className='text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold'>Articles</span></h1>
          </div>
          
          {/* Continuous Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1 flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow font-sans">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href="/blogsingle"
                        className="flex items-center text-white font-medium font-sans hover:translate-x-1 transition-transform duration-200 bg-green-700 hover:bg-green-500 px-3 py-1 rounded-lg"
                      >
                        <span className="mr-1">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`p-2 rounded-full transition-colors duration-200 ${likedPosts.has(post.id)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'}`}
                      >
                        <Heart className="w-4 h-4" fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === page
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'}`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;