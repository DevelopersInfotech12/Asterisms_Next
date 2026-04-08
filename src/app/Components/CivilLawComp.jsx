import React from 'react';
import { Scale, Home, FileText, Users, Shield, Gavel, CheckCircle, ArrowRight, Star } from 'lucide-react';

const CivilLawComp = () => {
  const keyHighlights = [
    {
      company: "Property & Title Disputes",
      description:
        "Successfully handled complex property disputes, title verification matters, and injunction suits, ensuring protection of ownership rights.",
      type: "Property Law"
    },
    {
      company: "Contractual Disputes",
      description:
        "Represented clients in breach of contract cases, recovery suits, and commercial disputes, ensuring effective enforcement of contractual rights.",
      type: "Contract Law"
    },
    {
      company: "Recovery & Money Suits",
      description:
        "Advised and represented clients in recovery proceedings, summary suits, and execution matters for effective debt recovery.",
      type: "Recovery Matters"
    },
    {
      company: "Injunctions & Civil Remedies",
      description:
        "Secured interim and permanent injunctions, specific performance decrees, and other civil remedies to safeguard client interests.",
      type: "Civil Remedies"
    }
  ];

  const expertise = [
    { icon: Home, text: "Property & Real Estate Disputes", highlight: false },
    { icon: FileText, text: "Contract & Agreement Disputes", highlight: false },
    { icon: Scale, text: "Civil Litigation & Trial", highlight: false },
    { icon: Shield, text: "Injunctions & Stay Orders", highlight: false },
    { icon: Users, text: "Partition & Family Property Matters", highlight: false },
    { icon: Gavel, text: "Execution & Recovery Proceedings", highlight: false }
  ];

  const stats = [
    { number: "450+", label: "Civil Cases Handled", icon: Scale },
    { number: "92%", label: "Successful Outcomes", icon: Star },
    { number: "10+", label: "Years Experience", icon: Users },
    { number: "300+", label: "Disputes Resolved", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-orange-50">
      
      {/* Hero Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-orange-900"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">

          {/* Our Expertise Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200">
            <div className="flex items-center mb-8">
              <div className="w-2 h-16 bg-gradient-to-b from-green-500 to-orange-500 rounded-full mr-4"></div>
              <div>
                <h2 className="text-4xl font-bold text-slate-800">Civil Law</h2>
                <p className="text-green-600 mt-2">
                  Effective legal solutions for civil disputes and rights enforcement
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 text-slate-600">
              <p className="text-lg text-justify">
                Our firm provides comprehensive legal services in <span className="font-semibold text-green-600">Civil Law</span>, handling disputes related to property, contracts, recovery, and civil rights enforcement.
              </p>
              <p className="text-lg text-justify">
                We focus on delivering <span className="font-semibold text-green-600">practical and result-oriented solutions</span>, representing clients before Civil Courts, District Courts, and High Courts across a wide range of civil matters.
              </p>
            </div>
          </div>

          {/* Areas of Excellence */}
          <div className="bg-white rounded-3xl p-12 border border-green-200">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">Areas of Excellence</h3>
              <p className="text-xl text-green-600">
                Specialized services across all aspects of civil litigation and advisory
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white hover:bg-green-50 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg text-slate-600">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 via-green-900 to-orange-900 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Key Highlights</h2>
              <p className="text-xl text-green-100">
                Proven expertise in resolving complex civil disputes efficiently
              </p>
            </div>

            <div className="p-12 space-y-12">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-orange-500 rounded-full"></div>

                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-2xl font-bold text-slate-800">
                      {highlight.company}
                    </h3>
                  </div>

                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mb-3">
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

export default CivilLawComp;