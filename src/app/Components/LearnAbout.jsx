'use client';

import { useState, useEffect } from 'react';
import { Scale, Users, Award, BookOpen, ArrowRight, Star, CheckCircle, Shield, Gavel, TrendingUp } from 'lucide-react';

const LearnAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '500+', label: 'Cases Won', icon: <Award className="w-6 h-6" />, color: 'from-emerald-500 to-emerald-600' },
    { number: '15+', label: 'Years Experience', icon: <Star className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { number: '100+', label: 'Happy Clients', icon: <Users className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
    { number: '24/7', label: 'Legal Support', icon: <CheckCircle className="w-6 h-6" />, color: 'from-orange-500 to-orange-600' }
  ];

  const features = [
    { icon: <Scale className="w-6 h-6" />, title: 'Supreme Court Experience', desc: 'Extensive litigation experience' },
    { icon: <Shield className="w-6 h-6" />, title: 'Expert Legal Team', desc: 'Well-trained advocates' },
    { icon: <Gavel className="w-6 h-6" />, title: 'Holistic Approach', desc: 'Comprehensive legal solutions' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Client-Focused Solutions', desc: 'Tailored to your needs' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-3 shadow-lg">
            <Scale className="w-5 h-5" />
            Trusted Legal Excellence
          </div>
          <div className="max-w-3xl mx-auto text-center ">
            <div className="flex items-center justify-center mb-2">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
              <div className="mx-8">
                <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                  Why Us ?
                  <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
                    Asterisms Legal
                  </span>
                </h1>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Fearlessly upholding justice with 15+ years of legal expertise and unwavering commitment to our clients
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left - Visual */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 group hover:shadow-3xl transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl relative overflow-hidden">

                  {/* Main Image */}
                  <img
                    src="/images/img1.jpg"
                    alt="Asterisms Legal Team"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-slate-600 font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-10 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

            {/* Main Description */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-[15px] text-gray-600 leading-relaxed text-justify font-semibold">
                  <span className="text-2xl font-sans text-slate-600 leading-relaxed text-justify text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Asterisms Legal (AL)</span> is a premier full-service law firm founded on the principle of delivering exceptional legal solutions through innovation, expertise, and unwavering dedication.
                </p>

                <p className="text-[15px] text-gray-600 leading-relaxed text-justify font-semibold">
                  Our extraordinary team of seasoned advocates combines deep legal knowledge with strategic thinking to champion our clients' interests across all levels of the judicial system. Our team has wide range of experience in handling litigations before the Supreme Court, State High Courts, District Courts and Tribunals.

                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-slate-700 group-hover:text-amber-600 mb-3 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-700 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 font-sans">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${hoveredStat === index ? 'scale-105' : ''}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{stat.label}</div>
                </div>

                {/* Hover Effect */}
                {hoveredStat === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl -z-10 blur-xl"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAbout;