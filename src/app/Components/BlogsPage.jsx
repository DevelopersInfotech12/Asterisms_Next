"use client";

import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, ArrowRight, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const postsPerPage = 6;

  const blogPosts = [
    { id: 1, title: "Corporate Insolvency: Strategic Restructuring in India", excerpt: "Understanding how businesses can effectively navigate insolvency proceedings under the IBC framework.", image: "/images/blog4.jpg", author: "Priyanshu Gupta", date: "2025-03-15", readTime: "7 min read", category: "Bankruptcy & Insolvency Laws", views: 2300, likes: 112, featured: true },
    { id: 2, title: "Role of Insolvency Professionals in Resolution Process", excerpt: "Examining the duties and powers of insolvency professionals under the IBC.", image: "/images/blog5.jpg", author: "Dr. Anjali Mehra", date: "2025-03-18", readTime: "6 min read", category: "Bankruptcy & Insolvency Laws", views: 1750, likes: 89, featured: false },
    { id: 3, title: "Banking Compliance in India: RBI Guidelines Explained", excerpt: "Breaking down key compliance requirements for banks and financial institutions.", image: "/images/blog6.jpg", author: "Dr. Rakesh Sharma", date: "2025-03-17", readTime: "8 min read", category: "Banking Law", views: 2100, likes: 98, featured: false },
    { id: 4, title: "Resolving Banking Disputes: Legal Remedies for Lenders", excerpt: "Exploring effective legal strategies for banks to resolve disputes with borrowers.", image: "/images/blog7.jpg", author: "Dr. Meera Nair", date: "2025-03-20", readTime: "7 min read", category: "Banking Law", views: 1800, likes: 84, featured: false },
    { id: 5, title: "Mergers & Acquisitions: Legal Considerations in India", excerpt: "A deep dive into regulatory approvals and due diligence in corporate mergers.", image: "/images/blog1.jpg", author: "Dr. Rahul Khanna", date: "2025-03-10", readTime: "9 min read", category: "Commercial & Corporate Law", views: 2500, likes: 120, featured: true },
    { id: 6, title: "Shareholder Agreements: Protecting Minority Interests", excerpt: "Understanding clauses that safeguard the rights of minority shareholders.", image: "/images/blog2.jpg", author: "Dr. Kavita Joshi", date: "2025-03-12", readTime: "6 min read", category: "Commercial & Corporate Law", views: 1600, likes: 77, featured: false },
    { id: 8, title: "Corporate Governance: Ensuring Accountability", excerpt: "Best practices for boards and directors to maintain compliance with corporate governance norms.", image: "/images/blog3.jpg", author: "Dr. Sameer Verma", date: "2025-03-09", readTime: "7 min read", category: "Companies Law", views: 1900, likes: 95, featured: false }
  ];

  const categoryColors = {
    "Bankruptcy & Insolvency Laws": { bg: "#1e1610", border: "#3a2a10", text: "#c9a84c" },
    "Banking Law": { bg: "#101820", border: "#102030", text: "#7ab0d4" },
    "Commercial & Corporate Law": { bg: "#1a1210", border: "#2e1e10", text: "#d4915a" },
    "Companies Law": { bg: "#181020", border: "#261430", text: "#a87ad4" }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const n = new Set(prev);
      n.has(postId) ? n.delete(postId) : n.add(postId);
      return n;
    });
  };

  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 3);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory && !post.featured;
    });
    if (sortBy === 'latest') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (sortBy === 'popular') filtered.sort((a, b) => b.views - a.views);
    else if (sortBy === 'mostLiked') filtered.sort((a, b) => b.likes - a.likes);
    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const currentPosts = filteredAndSortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const sectionLabel = { fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418", display: "block" };

  const CardBadge = ({ category }) => {
    const c = categoryColors[category] || { bg: "#1a1710", border: "#2a2418", text: "#c9a84c" };
    return (
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: c.text, background: c.bg, border: `1px solid ${c.border}`, padding: "3px 8px" }}>
        {category}
      </span>
    );
  };

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>
          Asterisms Legal · Insights & Articles
        </p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: 0 }}>
          Legal <em style={{ color: "#c9a84c" }}>Insights.</em>
        </h1>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>

        {/* Featured */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={sectionLabel}>Featured Articles</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>
            {featuredPosts.map((post) => (
              <div key={post.id} style={{ background: "#0f0e0c", padding: "1.6rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <CardBadge category={post.category} />
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", background: "#1e1a10", border: "1px solid #2e2410", padding: "3px 8px" }}>Featured</span>
                </div>
                <h3 style={{ fontSize: "1.05rem", color: "#f5f0e8", margin: 0, lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", color: "#7a7268", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#6e665a" }}>{post.author}</span>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#6e665a" }}>{post.readTime}</span>
                </div>
                <a href="/blogsingle" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", background: "#141210", border: "1px solid #2a2418", color: "#c5bfb3", padding: "0.5rem 1rem", outline: "none", flex: "1", minWidth: "200px" }}
          />
          <select value={selectedCategory} onChange={e => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
            style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", background: "#141210", border: "1px solid #2a2418", color: "#c5bfb3", padding: "0.5rem 1rem", outline: "none" }}>
            <option value="All">All Categories</option>
            {["Bankruptcy & Insolvency Laws", "Banking Law", "Commercial & Corporate Law", "Companies Law"].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", background: "#141210", border: "1px solid #2a2418", color: "#c5bfb3", padding: "0.5rem 1rem", outline: "none" }}>
            <option value="latest">Latest</option>
            <option value="popular">Most Viewed</option>
            <option value="mostLiked">Most Liked</option>
          </select>
        </div>

        {/* All Articles */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={sectionLabel}>All Articles</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>
            {currentPosts.map((post) => (
              <div key={post.id} style={{ background: "#0f0e0c", padding: "1.6rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <CardBadge category={post.category} />
                <h3 style={{ fontSize: "1.05rem", color: "#f5f0e8", margin: 0, lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", color: "#7a7268", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#6e665a" }}>{post.author}</span>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#6e665a" }}>{post.readTime}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <button onClick={() => handleLike(post.id)} style={{ background: "none", border: "none", cursor: "pointer", color: likedPosts.has(post.id) ? "#c9a84c" : "#6e665a", fontFamily: "Arial, sans-serif", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px", padding: 0 }}>
                    ♥ {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                  </button>
                  <a href="/blogsingle" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none" }}>
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}
              style={{ background: "#141210", border: "1px solid #2a2418", color: "#c9a84c", padding: "0.4rem 0.8rem", cursor: "pointer", opacity: currentPage === 1 ? 0.4 : 1 }}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)}
                style={{ background: currentPage === page ? "#c9a84c" : "#141210", border: "1px solid #2a2418", color: currentPage === page ? "#0f0e0c" : "#c5bfb3", padding: "0.4rem 0.8rem", cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: "0.85rem" }}>
                {page}
              </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}
              style={{ background: "#141210", border: "1px solid #2a2418", color: "#c9a84c", padding: "0.4rem 0.8rem", cursor: "pointer", opacity: currentPage === totalPages ? 0.4 : 1 }}>›</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogsPage;