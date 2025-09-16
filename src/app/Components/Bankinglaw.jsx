import React from 'react';
import { Scale, Building2, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, Briefcase } from 'lucide-react';

const Bankinglaw = () => {
  const keyHighlights = [
    {
      company: "State Bank of India",
      description:
        "Advised and represented SBI in high-value loan restructuring cases, ensuring compliance with RBI guidelines and securing recoveries through strategic settlements.",
      type: "Loan Restructuring"
    },
    {
      company: "ICICI Bank Ltd.",
      description:
        "Successfully represented ICICI Bank in proceedings before the Debt Recovery Tribunal (DRT) and National Company Law Tribunal (NCLT) for recovery of secured debts.",
      type: "Debt Recovery"
    },
    {
      company: "HDFC Bank",
      description:
        "Advised HDFC Bank in drafting and negotiating syndicated loan agreements, including cross-border financing transactions involving multinational corporations.",
      type: "Syndicated Loans"
    },
    {
      company: "Punjab National Bank",
      description:
        "Represented PNB in cases of fraud investigation, non-performing assets (NPAs), and regulatory compliance disputes before various judicial and regulatory authorities.",
      type: "Regulatory & Compliance"
    }
  ];

  const expertise = [
    { icon: Scale, text: "Banking Regulation Act & RBI Guidelines", highlight: false },
    { icon: Building2, text: "Debt Recovery & DRT/NCLT matters", highlight: false },
    { icon: Award, text: "High-value loan restructuring", highlight: false },
    { icon: Users, text: "Cross-border banking transactions", highlight: false },
    { icon: TrendingUp, text: "Non-Performing Asset (NPA) management", highlight: false },
    { icon: Briefcase, text: "Litigation before Supreme Court & High Courts", highlight: false }
  ];

  const stats = [
    { number: "500+", label: "Banking Cases Handled", icon: Award },
    { number: "₹1 Lakh Cr+", label: "Transactions Advised", icon: TrendingUp },
    { number: "95%", label: "Recovery Success Rate", icon: Star },
    { number: "25+", label: "Leading Banks & NBFCs Advised", icon: Building2 }
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
          
          {/* Banking Law Section */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                    <div>
                      <h2 className="text-4xl font-bold text-slate-800">Banking Law</h2>
                      <p className="text-orange-600 font-medium mt-2 font-sans">
                        Trusted advisors for India’s leading banks and financial institutions
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our Firm has <span className="font-semibold text-orange-600">deep expertise</span> in 
                      banking and financial services laws, representing major banks, NBFCs, and multinational 
                      corporations in a wide range of transactions and disputes.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      We provide end-to-end legal support in <span className="font-semibold text-orange-600">
                      debt recovery, loan restructuring, fraud investigation, and cross-border banking 
                      transactions</span>, ensuring compliance with RBI regulations and international standards.
                    </p>
                  </div>
                  
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our lawyers are <span className="font-semibold text-orange-600">trusted partners</span> 
                      for financial institutions, providing strategic advice on regulatory compliance, NPAs, 
                      and corporate financing matters.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      We regularly appear before the <span className="font-semibold text-orange-600">
                      Debt Recovery Tribunals, National Company Law Tribunal, High Courts, and the Supreme Court of India</span>, 
                      securing favorable outcomes in high-stakes cases.
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
                Specialized legal expertise across all aspects of banking and financial law
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
                    Major transactions and litigations defining our banking law practice
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

export default Bankinglaw;
