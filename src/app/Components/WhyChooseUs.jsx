import React from 'react';
import { Scale, Award, Target, ArrowRight, Phone, Mail, Users } from 'lucide-react';

const WhyChooseUs = () => {
const features = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Best Law Practices",
    description:
      "At our firm, we combine unparalleled expertise with unwavering dedication, ensuring comprehensive legal solutions tailored to each client's unique needs."
  },
  {
    icon: <Scale className="w-12 h-12" />,
    title: "Efficiency & Trust",
    description:
      "Our firm's integrity is the cornerstone of our practice, built on a legacy of trustworthiness, transparency, and steadfast reliability."
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Results You Deserve",
    description:
      "Our firm consistently achieves impactful results through a potent combination of strategic acumen and legal prowess, securing favorable outcomes."
  },
  {
    icon: <Users className="w-12 h-12" />, // you can also use 'Briefcase' or 'Gavel' icon if you prefer
    title: "Client-Centered Approach",
    description:
      "We place our clients at the heart of everything we do, offering personalized guidance, clear communication, and unwavering support throughout every stage of the legal process."
  }
];


  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
            <div className="mx-8">
              <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                Why Choose Us
                <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
                  Legal Excellence
                </span>
              </h1>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
          </div>

          <p className="text-base font-sans font-semibold max-w-2xl mx-auto text-slate-600 font-light leading-relaxed">
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-[90%] mx-auto">

          {/* Left - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex gap-8 items-start">

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-600 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] font-sans ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image/Visual Section */}
          <div className="relative">

            {/* Main Visual Card */}
            <div className="bg-white rounded-none shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="bg-slate-900 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Scale className="w-10 h-10 text-amber-400" />
                  <div>
                    <h3 className="text-2xl font-semibold">Asterisms Legal</h3>
                    <p className="text-slate-300">Your Trusted Legal Partner</p>
                  </div>
                </div>
              </div>

              {/* Professional Image Section */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center"
                  alt="Professional lawyers in meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Professional Legal Services</p>
                  <p className="text-sm opacity-90">Expert consultation & representation</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>

            {/* Quote */}
            <div className="absolute -top-4 left-8 bg-white p-6 shadow-xl rounded-lg border-l-4 border-amber-600 max-w-xs">
              <p className="text-sm text-slate-600 italic mb-2">"Prior approval of the Competition Commission of India (CCI) under Section 31(4)"</p>
              <div className="text-xs text-amber-600 font-semibold">Legal Compliance</div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-light text-slate-900 mb-6">
              Experience Legal Excellence Like Never Before
            </h3>
            <p className="text-lg text-slate-600 font-light mb-8">
              Join hundreds of satisfied clients who have trusted us with their most important legal matters.
            </p>

            <div className="inline-flex items-center gap-8 p-8 bg-white rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-slate-600">Years of Service</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">98%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;