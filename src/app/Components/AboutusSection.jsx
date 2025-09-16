"use client";

import React, { useState } from 'react';
import { Building2, Users, DollarSign, ChevronDown, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const AboutusSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aboutSections = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Our Mission",
      content: "Our mission is to deliver innovative and effective legal solutions that empower our clients to achieve their business goals and navigate legal challenges with confidence. We strive to build lasting relationships based on trust, communication, and collaboration, ensuring that our clients receive personalized attention and support at every stage of their legal journey. We pioneer in legal excellence with innovative solutions.",
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
      image: "/api/placeholder/500/400",
      imageAlt: "Legal professionals working together on innovative solutions"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Our Approach",
      content: "At Asterisms Legal, we take a strategic and results-oriented approach to every case. Our team of experienced attorneys combines legal expertise with practical business acumen to develop tailored strategies that address the unique needs and objectives of each client. We are committed to delivering timely, cost-effective, and favorable outcomes while upholding the highest ethical standards. We believe in proactive legal strategies, fostering open communication.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      image: "/api/placeholder/500/400",
      imageAlt: "Strategic legal consultation and team collaboration"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Our Values",
      content: "Integrity, professionalism, and excellence are at the core of everything we do. We believe in transparency, honesty, and accountability in our interactions with clients, colleagues, and the community. Our dedication to continuous learning and improvement ensures that we stay at the forefront of legal developments and provide our clients with the best possible representation. We are committed to upholding the highest ethical standards and providing exceptional service.",
      gradient: "from-amber-500 via-orange-500 to-red-600",
      image: "/api/placeholder/500/400",
      imageAlt: "Professional legal ethics and integrity in practice"
    }
  ];

  const faqs = [
    {
      question: "What types of legal services does Asterisms Legal provide?",
      answer: "We offer comprehensive legal services including corporate law, litigation, contract drafting, compliance, intellectual property, and strategic legal consulting across various industries."
    },
    {
      question: "How much do legal consultations cost?",
      answer: "Our consultation fees vary based on the complexity of your case. We offer an initial free consultation to understand your needs and provide transparent pricing."
    },
    {
      question: "How long does it typically take to resolve a legal case?",
      answer: "Timeline depends on case complexity and type. Simple matters may resolve in weeks, while complex litigation can take months to years. We provide realistic timelines during consultation."
    },
    {
      question: "Do you handle cases outside of Delhi?",
      answer: "Yes, we handle cases across India and have experience with interstate legal matters. Our team is equipped to work remotely and travel when necessary."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Bring all relevant documents, contracts, correspondence, and a clear outline of your legal concerns. This helps us provide more accurate advice and assessment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 mx-auto">
      {/* Mission Section */}
      <section className="py-12 relative overflow-hidden max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${aboutSections[0].gradient} rounded-3xl transform rotate-3 opacity-20`}></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{aboutSections[0].title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{aboutSections[0].content}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/images/img1.jpg" 
                  alt="Our Mission - Legal team in modern office environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative h-96 lg:h-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/images/img1.jpg" 
                  alt="Our Approach - Strategic legal consultation and planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="order-2">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${aboutSections[1].gradient} rounded-3xl transform -rotate-3 opacity-20`}></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{aboutSections[1].title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{aboutSections[1].content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${aboutSections[2].gradient} rounded-3xl transform rotate-3 opacity-20`}></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                 
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{aboutSections[2].title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{aboutSections[2].content}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[430px] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/images/img1.jpg" 
                  alt="Our Values - Professional legal ethics and integrity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-red-600/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutusSection;