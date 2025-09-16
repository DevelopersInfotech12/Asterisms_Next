"use client";

import React, { useState } from 'react';
import { Award, BookOpen, Users, Mail, Phone, Linkedin, Moon, Sun, ArrowRight } from 'lucide-react';

const ExpertAttorneys = () => {
  const [isDark, setIsDark] = useState(false);

  const attorneys = [
    {
      id: 1,
      name: "Gautam Singhal",
      title: "Advocate & Insolvency Professional",
      image: "images/gautam.jfif",
      specialties: ["Commercial Law", "Banking Law", "Corporate Litigation"],
      experience: "15+ Years",
      cases: "500+ Cases",
      description: "Leading expert in insolvency and bankruptcy proceedings with extensive experience in complex corporate restructuring.",
      contact: {
        email: "gautam@asterismslegal.com",
        phone: "+91 98765 43210",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Rajat Chaudhary",
      title: "Advocate",
      image: "images/rajat.jpg",
      specialties: ["Commercial Law", "Banking Law", "Corporate Litigation"],
      experience: "12+ Years",
      cases: "350+ Cases",
      description: "Specialized in banking and commercial law with a proven track record in high-stakes corporate litigation.",
      contact: {
        email: "rajat@asterismslegal.com",
        phone: "+91 98765 43211",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
      <div className="max-w-6xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-full transition-all duration-300 ${isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-amber-400 shadow-xl shadow-amber-500/20'
                : 'bg-white hover:bg-gray-100 text-gray-600 shadow-xl shadow-gray-200/50'
              }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                Meet Our Expert
                <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
                  Attorneys
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
          </div>
          <p className={`text-base font-sans max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Our distinguished legal professionals bring decades of combined experience in complex litigation,
            corporate law, and specialized legal services to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {attorneys.map((attorney, index) => (
            <div
              key={attorney.id}
              className={`group relative overflow-hidden transition-all duration-700 ${isDark
                  ? 'bg-gradient-to-br from-gray-800/80 via-gray-800 to-gray-900 backdrop-blur-sm'
                  : 'bg-gradient-to-br from-white via-gray-50/50 to-white backdrop-blur-sm'
                } rounded-2xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/80'
                } hover:shadow-3xl ${isDark ? 'hover:shadow-amber-500/10' : 'hover:shadow-amber-500/20'
                } transform hover:-translate-y-2 hover:scale-[1.02]`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Geometric Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id={`grid-${attorney.id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${attorney.id})`} className={isDark ? 'text-amber-400' : 'text-amber-600'} />
                </svg>
              </div>

              {/* Main Content Container */}
              <div className="relative p-8 lg:p-12">
                {/* Header Section with Image */}
                <div className="text-center mb-2">
                  {/* Image with Enhanced Styling */}
                  <div className="relative inline-block mb-6">
                    <div className="relative">
                      <div className={`w-32 h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-4 transition-all duration-500 ${isDark
                          ? 'border-amber-400/30 group-hover:border-amber-400/60 shadow-xl shadow-amber-500/20'
                          : 'border-amber-300/40 group-hover:border-amber-400/70 shadow-xl shadow-amber-500/30'
                        }`}>
                        <img
                          src={attorney.image}
                          alt={attorney.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {/* Floating Accent */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${isDark
                          ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/40'
                          : 'bg-amber-500 text-white shadow-lg shadow-amber-500/50'
                        } group-hover:rotate-12 group-hover:scale-110`}>
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className={`text-3xl lg:text-4xl font-serif italic mb-3 tracking-wide transition-all duration-300 ${isDark
                      ? 'text-white group-hover:text-amber-100'
                      : 'text-gray-900 group-hover:text-gray-800'
                    }`}>
                    {attorney.name}
                  </h3>

                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-300 ${isDark
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    {attorney.title}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-center font-sans text-sm lg:text-base leading-relaxed mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {attorney.description}
                </p>

                {/* Stats Row */}
                <div className={`flex justify-center gap-8 mb-4 p-4 rounded-xl transition-colors duration-300 ${isDark ? 'bg-gray-700/30' : 'bg-gray-50/80'
                  }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                      {attorney.experience}
                    </div>
                    <div className={`text-xs uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      Experience
                    </div>
                  </div>
                  <div className={`w-px transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'
                    }`}></div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                      {attorney.cases}
                    </div>
                    <div className={`text-xs uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      Cases Won
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className={`text-center text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {attorney.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 border ${isDark
                            ? 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-amber-900/30 hover:text-amber-300 hover:border-amber-500/50'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300'
                          } hover:scale-105 cursor-default`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${isDark
                    ? 'bg-gray-700/20 border-gray-600/50'
                    : 'bg-gray-50/50 border-gray-200/70'
                  }`}>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group/btn border ${isDark
                        ? 'bg-amber-500 text-gray-900 border-amber-400 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30'
                        : 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/40'
                      } hover:scale-105`}>
                      <Mail className="w-4 h-4" />
                      {attorney.contact.phone}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button className={`p-3 rounded-xl transition-all duration-300 border ${isDark
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-500'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300'
                      } hover:scale-110`}>
                      <Phone className="w-5 h-5" />
                    </button>

                    <button className={`p-3 rounded-xl transition-all duration-300 border ${isDark
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-500'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300'
                      } hover:scale-110`}>
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Border Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark
                  ? 'bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0'
                  : 'bg-gradient-to-r from-amber-300/0 via-amber-300/30 to-amber-300/0'
                } blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex justify-center">
          <div className={`h-px bg-gradient-to-r from-transparent to-transparent w-full max-w-lg transition-opacity duration-300 ${isDark ? 'via-amber-400/30' : 'via-amber-300/50'
            }`}></div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAttorneys;