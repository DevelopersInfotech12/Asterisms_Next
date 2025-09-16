import React from 'react';

const OtherHero = ({ 
  title,
  subtitle
}) => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content - OPTION 2: Stacked with Border */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          {/* Title with left border */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            
            {/* Subtitle */}
            {subtitle && (
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-orange-300 uppercase tracking-wider">
                {subtitle}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherHero;