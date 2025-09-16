import React, { useState } from 'react';
import { Building, Users, DollarSign, GraduationCap, ArrowRight, Moon, Sun } from 'lucide-react';

const HomePracticeAreas = () => {
  const [isDark, setIsDark] = useState(false);

  const practiceAreas = [
    {
      id: 1,
      icon: Building,
      title: "Bankruptcy & Insolvency Laws",
      description: "Asterisms Legal primarily provides advisory and litigation services to the clients relating to Insolvency and Bankruptcy Code, 2016. Our team is involved in comprehensive legal support for insolvency proceedings.",
      gradient: "from-amber-400/10 to-yellow-400/10",
      darkGradient: "from-amber-400/20 to-yellow-400/20"
    },
    {
      id: 2,
      icon: Users,
      title: "Banking Law",
      description: "Our Team at Asterisms Legal have deep and vast knowledge & understanding of SARFAESI & Recovery of Debts and Bankruptcy Act. Our team represents Banks with extensive expertise in financial regulations.",
      gradient: "from-amber-400/10 to-orange-400/10",
      darkGradient: "from-amber-400/20 to-orange-400/20"
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Commercial & Corporate Law",
      description: "Asterisms Legal provides comprehensive legal services in Commercial & Corporate Law, representing clients across various different forums with specialized expertise in business transactions.",
      gradient: "from-amber-400/10 to-yellow-400/10",
      darkGradient: "from-amber-400/20 to-yellow-400/20"
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Companies Law",
      description: "Our team handle all aspects of litigation relating to Company Law be it incorporation of companies, Mergers and Acquisitions, Oppressions and comprehensive corporate legal solutions.",
      gradient: "from-amber-400/10 to-orange-400/10",
      darkGradient: "from-amber-400/20 to-orange-400/20"
    }
  ];

  return (
    <section className={`pt- px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-amber-400' 
                : 'bg-white hover:bg-gray-100 text-gray-600 shadow-lg'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center">
              <div className="max-w-3xl mx-auto text-center ">
          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                Our Practice Areas
                <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
                  Field Of Work
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
          </div>

          <p className="text-base font-sans font-semibold max-w-2xl mx-auto text-slate-600 font-light leading-relaxed">
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.id}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 border border-gray-700"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.darkGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-amber-900/30 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-white mb-4 italic group-hover:text-amber-100 transition-colors duration-300">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 group/btn">
                    <span className="text-sm font-medium mr-2 border-b border-amber-400/30 group-hover/btn:border-amber-300 transition-colors duration-300">
                      LEARN MORE
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-400/30 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex justify-center">
          <div className={`h-px bg-gradient-to-r from-transparent to-transparent w-full max-w-md ${
            isDark 
              ? 'via-amber-400/30' 
              : 'via-amber-300/50'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default HomePracticeAreas;