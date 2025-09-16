import React from 'react';
import { Scale, Building2, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, Briefcase } from 'lucide-react';

const BankruptcyandInsolvency = () => {
  const keyHighlights = [
    {
      company: "TATA Steel Ltd.",
      description: "In the first successful corporate acquisition under the IBC, the Firm represented TATA Steel Ltd. in the corporate insolvency resolution process initiated against Bhushan Steel Ltd., enabling TATA Steel Ltd. to successfully acquire Bhushan Steel Ltd.",
      type: "Corporate Acquisition"
    },
    {
      company: "Arcelor Mittal India Private Limited",
      description: "In a highly publicized litigation, the Firm successfully advised and appeared for Arcelor Mittal India Private Limited in the highly valuable corporate insolvency resolution process of Essar Steel India Limited. This acquisition was a crucial strategic step for Arcelor Mittal to build a meaningful production presence in India.",
      type: "Strategic Acquisition"
    },
    {
      company: "Kalpraj Dharamshri and Rekha Jhunjhunwala",
      description: "The Firm represented Kalpraj Dharamshri and Rekha Jhunjhunwala, who led the consortium which successfully acquired Ricoh India Limited by way of the corporate insolvency resolution process under the Code.",
      type: "Consortium Leadership"
    },
    {
      company: "ArcelorMittal India Private Limited",
      description: "The Firm has advised, and appeared for and on behalf of, ArcelorMittal India Private Limited in a heavily contested corporate insolvency resolution process of Odisha Slurry Pipelines Infrastructure Limited (OSPIL) under the Code. The Committee of Creditors unanimously approved the Resolution Plan submitted by Arcelor Mittal and later, the said decision was upheld by the Adjudicating Authority, Cuttack and the National Company Law Appellate Tribunal, New Delhi.",
      type: "Complex Resolution"
    }
  ];

  const expertise = [
    { icon: Scale, text: "Insolvency and Bankruptcy Code, 2016 (IBC)", highlight: false },
    { icon: Building2, text: "Multi-national corporations advisory", highlight: false },
    { icon: Award, text: "High-stakes landmark cases", highlight: false },
    { icon: Users, text: "National Company Law Tribunal representation", highlight: false },
    { icon: TrendingUp, text: "Strategic evaluation of cases", highlight: false },
    { icon: Briefcase, text: "Supreme Court of India representation", highlight: false }
  ];

  const stats = [
    { number: "2016", label: "Since IBC Enactment", icon: Scale },
    { number: "100+", label: "Cases Handled", icon: Award },
    { number: "₹50K Cr+", label: "Asset Value", icon: TrendingUp },
    { number: "95%", label: "Success Rate", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Advanced Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,146,60,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        
       
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z" 
                  fill="currentColor" className="text-slate-50"/>
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
                      <h2 className="text-4xl font-bold text-slate-800">Bankruptcy and Insolvency Law</h2>
                      <p className="text-orange-600 font-medium mt-2 font-sans">Leading the industry in insolvency solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      The Firm has <span className="font-semibold text-orange-600">extensive experience</span> dealing with matters on Insolvency and Bankruptcy Code, 2016 
                      (IBC). We have expertise in both pursuing and defending insolvency and bankruptcy proceedings. We 
                      follow a systematic and strategic evaluation of cases, thereby providing advisory services to multi-national 
                      corporations on insolvency issues.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Our Insolvency and Bankruptcy team is equipped with <span className="font-semibold text-orange-600">in-depth knowledge and qualifications</span>, 
                      making them adept at handling high stakes matters, which have been landmark cases in IBC. We 
                      have been assisting our domestic and international clients by continuously deep diving into 
                      providing diverse solutions with the best possible outcomes to cases.
                    </p>
                  </div>
                  
                  <div className="prose prose-xl text-slate-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                      We take pride in being the <span className="font-semibold text-orange-600">trusted advisors</span> to business leaders who consult us on complex issues 
                      under the IBC. Our lawyers had played a key role in several successful high-value acquisitions right 
                      from the time when IBC was enacted.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      We actively represent before the <span className="font-semibold text-orange-600">National Company Law 
                      Tribunal, the National Company Law Appellate Tribunal, and the Supreme Court of India</span>.
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
                Comprehensive expertise across all aspects of insolvency and bankruptcy law
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
                    Landmark cases that have shaped the insolvency landscape in India
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

export default BankruptcyandInsolvency;