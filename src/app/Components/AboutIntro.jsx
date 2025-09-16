import React from 'react';
import { Scale, Users, Award, BookOpen, ArrowRight, Star, CheckCircle, Shield, Gavel, TrendingUp } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Content */}
          <div className="lg:col-span-8 space-y-8">

            {/* Small Badge */}
            <div className="inline-block">
               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-3 shadow-lg">
                  <Scale className="w-5 h-5" />
                  Trusted Legal Excellence
                </div>
            </div>
            {/* Main Heading */}
            <div>
              <div className={`text-center mb-10 transform transition-all duration-1000 `}>
                <div className="max-w-3xl mx-auto text-center ">
                  <div className="flex items-center justify-center mb-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
                    <div className="mx-8">
                      <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-semibold">
                        About Us
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
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-2 text-gray-600 text-base font-semibold leading-relaxed text-justify">
              <p>
                <span className=" text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">Asterisms Legal (AL)</span> is a full-service law firm founded with the sole motive of helping, assisting and guiding the clients in achieving prompt legal solutions by way of holistic and pragmatic approach & to fearlessly uphold the interests of the clients before the Courts of Law with all fairness.
              </p>

              <p>
                Our team of extraordinarily well-trained and experienced Advocates, in-house staff and their in-depth knowledge builds our unique position to best address our clients' most pressing needs.
              </p>

              <p>
                Our team has wide range of experience in handling litigations before the <span className="font-semibold text-slate-900">Supreme Court, State High Courts, District Courts and Tribunals</span>.
              </p>
              <p>We also provide strategic advisory services in complex corporate, commercial, banking, and insolvency matters. Our commitment lies not only in resolving disputes but also in preventing them through sound legal structuring and compliance support. With a client-first philosophy, we ensure every matter is handled with utmost diligence, confidentiality, and integrity.</p>
            </div>

            {/* Expertise Areas */}
            <div className="pt-8">
              {/* <h3 className="text-xl font-bold mb-6 text-gradient-to-r from-amber-500 to-orange-500">Our Expertise</h3> */}
              <h2 className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mb-3 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Our Expertise</span>
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-sans">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Supreme Court Practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">High Court Litigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">District Court Cases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Tribunal Representation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Legal Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Client Advisory</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">

              {/* Main Info Card */}
              <div className="bg-slate-50 p-8 border-l-4 border-slate-900">
                <div className="space-y-6">

                  {/* Firm Logo/Name */}
                  <div className="text-center pb-6 border-b border-slate-200">
                    <div className="w-20 h-18 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img src="images/logo.png" alt="" srcset="" className='w-96 h-10' />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Asterisms Legal</h3>
                    <p className="text-slate-600">Full-Service Law Firm</p>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Founded On</h4>
                      <p className="text-slate-600 font-sans">Helping clients achieve prompt legal solutions</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Approach</h4>
                      <p className="text-slate-600 font-sans">Holistic and pragmatic legal strategies</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Commitment</h4>
                      <p className="text-slate-600 font-sans">Fearlessly upholding client interests with fairness</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Team</h4>
                      <p className="text-slate-600 font-sans">Well-trained advocates and experienced in-house staff</p>
                    </div>
                  </div>

                  {/* CCI Approval */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 font-sans">CCI Approved</p>
                        <p className="text-xs text-slate-600 mt-1 font-sans">Prior approval under Section 31(4) of the Competition Act, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;