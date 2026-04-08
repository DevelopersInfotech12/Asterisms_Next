import React from 'react';
import { Scale, Shield, AlertTriangle, Gavel, FileText, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

const CriminalLawComp = () => {
  const keyHighlights = [
    {
      company: "Bail & Anticipatory Bail Matters",
      description:
        "Successfully represented clients in securing regular and anticipatory bail before Sessions Courts and High Courts, ensuring protection of personal liberty.",
      type: "Bail Matters"
    },
    {
      company: "White-Collar Crime Defense",
      description:
        "Defended clients in complex financial and economic offences including fraud, cheating, and corporate criminal liability cases.",
      type: "Economic Offences"
    },
    {
      company: "Trial & Criminal Litigation",
      description:
        "Handled criminal trials involving serious offences under IPC and special laws, providing strong courtroom advocacy and strategic defense.",
      type: "Criminal Trials"
    },
    {
      company: "Cyber Crime & Fraud Cases",
      description:
        "Advised and represented clients in cybercrime matters including online fraud, data theft, and digital offences.",
      type: "Cyber Crime"
    }
  ];

  const expertise = [
    { icon: Shield, text: "Bail & Anticipatory Bail", highlight: false },
    { icon: Gavel, text: "Criminal Trials & Litigation", highlight: false },
    { icon: AlertTriangle, text: "White-Collar Crimes", highlight: false },
    { icon: FileText, text: "FIR Quashing & Appeals", highlight: false },
    { icon: Users, text: "Cyber Crime & Fraud Cases", highlight: false },
    { icon: Scale, text: "Criminal Advisory & Defense", highlight: false }
  ];

  const stats = [
    { number: "400+", label: "Cases Handled", icon: Scale },
    { number: "90%", label: "Successful Outcomes", icon: Star },
    { number: "10+", label: "Years Experience", icon: Users },
    { number: "250+", label: "Bail Matters Resolved", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      
      {/* Hero Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">

          {/* Our Expertise Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200">
            <div className="flex items-center mb-8">
              <div className="w-2 h-16 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mr-4"></div>
              <div>
                <h2 className="text-4xl font-bold text-slate-800">Criminal Law</h2>
                <p className="text-red-600 mt-2">
                  Strong legal defense and strategic representation in criminal matters
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 text-slate-600">
              <p className="text-lg text-justify">
                Our firm provides comprehensive legal services in <span className="font-semibold text-red-600">Criminal Law</span>, representing clients in a wide range of criminal matters including bail applications, trials, and appeals.
              </p>
              <p className="text-lg text-justify">
                We are committed to protecting the <span className="font-semibold text-red-600">rights and liberty of our clients</span>, offering strategic legal defense and strong courtroom advocacy before Sessions Courts, High Courts, and the Supreme Court of India.
              </p>
            </div>
          </div>

          {/* Areas of Excellence */}
          <div className="bg-white rounded-3xl p-12 border border-red-200">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">Areas of Excellence</h3>
              <p className="text-xl text-red-600">
                Specialized services across all aspects of criminal law and litigation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white hover:bg-red-50 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-lg text-slate-600">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 via-red-900 to-orange-900 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Key Highlights</h2>
              <p className="text-xl text-red-100">
                Proven expertise in handling complex criminal cases with precision and diligence
              </p>
            </div>

            <div className="p-12 space-y-12">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>

                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-2xl font-bold text-slate-800">
                      {highlight.company}
                    </h3>
                  </div>

                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full mb-3">
                    {highlight.type}
                  </span>

                  <p className="text-lg text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CriminalLawComp;