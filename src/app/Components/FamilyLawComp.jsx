import React from 'react';
import { Scale, Users, Heart, Shield, FileText, Home, CheckCircle, ArrowRight, Star } from 'lucide-react';

const FamilyLawComp = () => {
  const keyHighlights = [
    {
      company: "Divorce & Separation Matters",
      description:
        "Handled complex divorce and separation cases including contested and mutual consent divorces, ensuring fair settlements and protecting client interests.",
      type: "Divorce Law"
    },
    {
      company: "Child Custody & Guardianship",
      description:
        "Successfully represented clients in child custody disputes, prioritizing the welfare of the child while securing favorable custody and visitation rights.",
      type: "Custody Matters"
    },
    {
      company: "Domestic Violence Cases",
      description:
        "Provided legal support in domestic violence matters under the Protection of Women from Domestic Violence Act, ensuring safety and justice for affected individuals.",
      type: "Domestic Violence"
    },
    {
      company: "Maintenance & Alimony",
      description:
        "Advised and represented clients in maintenance and alimony proceedings, ensuring fair financial support and legal compliance.",
      type: "Financial Support"
    }
  ];

  const expertise = [
    { icon: Heart, text: "Divorce & Judicial Separation", highlight: false },
    { icon: Users, text: "Child Custody & Guardianship", highlight: false },
    { icon: Shield, text: "Domestic Violence & Protection Laws", highlight: false },
    { icon: FileText, text: "Maintenance & Alimony Matters", highlight: false },
    { icon: Home, text: "Property & Matrimonial Disputes", highlight: false },
    { icon: Scale, text: "Family Settlements & Mediation", highlight: false }
  ];

  const stats = [
    { number: "300+", label: "Family Disputes Resolved", icon: Scale },
    { number: "95%", label: "Client Satisfaction Rate", icon: Star },
    { number: "10+", label: "Years of Experience", icon: Users },
    { number: "200+", label: "Successful Settlements", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-orange-50">
      
      {/* Hero Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-pink-900 to-orange-900"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">

          {/* Our Expertise Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200">
            <div className="flex items-center mb-8">
              <div className="w-2 h-16 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full mr-4"></div>
              <div>
                <h2 className="text-4xl font-bold text-slate-800">Matrimonial / Family Law</h2>
                <p className="text-pink-600 mt-2">
                  Compassionate and strategic legal solutions for family disputes
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 text-slate-600">
              <p className="text-lg text-justify">
                Our firm provides comprehensive legal services in <span className="font-semibold text-pink-600">Family Law</span>, addressing sensitive personal matters with professionalism and empathy. We assist clients in divorce, child custody, maintenance, and domestic violence cases.
              </p>
              <p className="text-lg text-justify">
                We focus on achieving <span className="font-semibold text-pink-600">amicable resolutions</span> through negotiation and mediation, while also providing strong courtroom representation before Family Courts and High Courts when required.
              </p>
            </div>
          </div>

          {/* Areas of Excellence */}
          <div className="bg-white rounded-3xl p-12 border border-pink-200">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">Areas of Excellence</h3>
              <p className="text-xl text-pink-600">
                Specialized services in all aspects of family and matrimonial law
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white hover:bg-pink-50 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-pink-100 rounded-xl">
                      <item.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <span className="text-lg text-slate-600">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 via-pink-900 to-orange-900 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Key Highlights</h2>
              <p className="text-xl text-pink-100">
                Expertise in handling sensitive family disputes with care and precision
              </p>
            </div>

            <div className="p-12 space-y-12">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></div>

                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-pink-600 mr-2" />
                    <h3 className="text-2xl font-bold text-slate-800">
                      {highlight.company}
                    </h3>
                  </div>

                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full mb-3">
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

export default FamilyLawComp;