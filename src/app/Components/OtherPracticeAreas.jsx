"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Scale, Building2, Briefcase, CreditCard, Copyright, Handshake, Gavel } from 'lucide-react';

const OtherPracticeAreas = ({ currentPractice }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all practice areas with their details
  const allPracticeAreas = [
    {
      id: 'bankruptcy-insolvency',
      title: 'Bankruptcy & Insolvency Laws',
      description: 'The Firm provides strategic advice and support to clients concerning the protection, exploitation and enforcement of trademarks and copyrights....',
      icon: <Scale className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      id: 'banking-law',
      title: 'Banking Law',
      description: 'The Firm represents in the Deaf and Hard-of-Hearing Community in public interest litigation filed in the Supreme Court....',
      icon: <Handshake className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop'
    },
    {
      id: 'commercial-corporate',
      title: 'Commercial & Corporate Law',
      description: 'The Firm is recognised as one of the best corporate litigation firms in the country. We have extensive experience in dealing with complex....',
      icon: <Gavel className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop'
    },
    {
      id: 'companies-law',
      title: 'Companies Law',
      description: 'Expert legal services in corporate governance, compliance, mergers and acquisitions, and corporate restructuring matters....',
      icon: <Building2 className="w-6 h-6" />,
      bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop'
    }
  ];

  // Filter out the current practice area
  const otherPracticeAreas = allPracticeAreas.filter(area => area.id !== currentPractice);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherPracticeAreas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherPracticeAreas.length) % otherPracticeAreas.length);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {/* <div className="flex items-center mb-2">
            <div className="h-px bg-gray-400 w-16 mr-4"></div>
            <h2 className="text-2xl font-semibold text-gray-700">Other Practice Areas</h2>
          </div> */}

          <div className="flex items-center justify-center mb-12 mt-4 text-center max-w-[50%] mx-auto">
            {/* Left line */}
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-amber-500 "></div>

            <h1 className="text-4xl font-semibold text-center text-green-800 text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold mx-6">
              Other <span className='text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold'>Practices</span>
            </h1>

            {/* Right line */}
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-amber-500"></div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-300 rounded-full">
            <div className="h-2 bg-gray-400 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Arrow - Left */}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {otherPracticeAreas.map((area, index) => (
              <div key={area.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Section */}
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${area.bgImage})`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20"></div>
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-sm">
                      {area.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
             
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel for smaller screens */}
        <div className="md:hidden mt-8">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {otherPracticeAreas.map((area, index) => (
                <div key={`mobile-${area.id}`} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{
                        backgroundImage: `url(${area.bgImage})`,
                        backgroundBlendMode: 'overlay',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-sm">
                          {area.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {area.description}
                      </p>
                  
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center mt-4 space-x-2">
            {otherPracticeAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${currentSlide === index
                  ? 'bg-orange-500'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPracticeAreas;