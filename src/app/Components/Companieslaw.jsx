import React from 'react';
import { Scale, Building2, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, Briefcase } from 'lucide-react';

const Companieslaw = () => {
  const keyHighlights = [
    {
      company: "Reliance Industries Ltd.",
      description:
        "Advised Reliance Industries Ltd. on corporate compliance, restructuring, and governance matters, ensuring seamless operations and strategic growth.",
      type: "Corporate Compliance"
    },
    {
      company: "Tata Consultancy Services",
      description:
        "Provided TCS with advisory on corporate governance, board policies, and cross-border investments to strengthen legal and operational frameworks.",
      type: "Governance Advisory"
    },
    {
      company: "Infosys Ltd.",
      description:
        "Supported Infosys in company law matters including incorporation, regulatory filings, statutory compliances, and corporate secretarial services.",
      type: "Regulatory Advisory"
    },
    {
      company: "Adani Group",
      description:
        "Advised Adani Group on mergers, acquisitions, and corporate restructuring while ensuring compliance with Companies Act, 2013 and related regulations.",
      type: "M&A & Restructuring"
    }
  ];

  const expertise = [
    { icon: Scale, text: "Companies Act, 2013 Advisory", highlight: false },
    { icon: Building2, text: "Corporate Compliance & Governance", highlight: false },
    { icon: Award, text: "Mergers & Acquisitions", highlight: false },
    { icon: Users, text: "Statutory Filings & Secretarial Services", highlight: false },
    { icon: TrendingUp, text: "Corporate Restructuring & Advisory", highlight: false },
    { icon: Briefcase, text: "Board & Stakeholder Advisory", highlight: false }
  ];

  const stats = [
    { number: "500+", label: "Companies Advised", icon: Building2 },
    { number: "₹2 Lakh Cr+", label: "Transaction Value", icon: TrendingUp },
    { number: "98%", label: "Compliance Success Rate", icon: Star },
    { number: "50+", label: "Top Corporates Served", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Hero Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,146,60,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path
              d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-slate-50"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">

          {/* Our Expertise Section */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                    <div>
                      <h2 className="text-4xl font-bold text-slate-800">Companies Law</h2>
                      <p className="text-orange-600 font-medium mt-2 font-sans">
                        Expert legal advisory for corporate compliance and governance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our Firm provides <span className="font-semibold text-orange-600">comprehensive advisory</span> on the Companies Act, 2013, covering compliance, corporate governance, and secretarial services for leading domestic and international clients.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We specialize in <span className="font-semibold text-orange-600">corporate restructuring, mergers & acquisitions, and strategic advisory</span>, ensuring companies operate efficiently within the legal framework.
                    </p>
                  </div>
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our team is trusted by top corporates for <span className="font-semibold text-orange-600">board advisory, stakeholder management, and regulatory compliance</span>, helping businesses achieve their strategic objectives.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We regularly represent clients before <span className="font-semibold text-orange-600">registrars, regulatory authorities, and courts</span> to ensure robust legal protection and corporate governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Excellence */}
          <div className="bg-white rounded-3xl p-12 border border-orange-200">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">Areas of Excellence</h3>
              <p className="text-xl text-orange-600 max-w-3xl mx-auto">
                Comprehensive legal solutions across companies law, compliance, and corporate governance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  item.highlight 
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl' 
                    : 'bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl ${
                      item.highlight 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : 'bg-orange-100 group-hover:bg-orange-200'
                    } transition-colors`}>
                      <item.icon className={`w-6 h-6 ${
                        item.highlight ? 'text-white' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <span className={`text-lg leading-relaxed ${
                        item.highlight ? 'text-white' : 'text-slate-600 group-hover:text-orange-700'
                      } transition-colors`}>
                        {item.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 via-orange-900 to-blue-900 p-12 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Key Highlights</h2>
                  <p className="text-xl text-orange-100 max-w-2xl">
                    Landmark corporate advisory and governance cases shaping India’s corporate sector
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <div className="space-y-12">
                {keyHighlights.map((highlight, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    
                    <div className="pl-12">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex-shrink-0 p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                              <CheckCircle className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-700 transition-colors">
                                {highlight.company}
                              </h3>
                              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mt-1">
                                {highlight.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      <p className="text-lg text-slate-600 leading-relaxed pl-11">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Companieslaw;
