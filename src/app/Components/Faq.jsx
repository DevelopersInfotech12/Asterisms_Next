import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, HelpCircle, MessageCircle, Clock, Award, Phone } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of legal services does Asterisms Legal provide?",
      answer: "We offer comprehensive legal services including corporate law, litigation, intellectual property, employment law, real estate, family law, criminal defense, and regulatory compliance. Our experienced attorneys are equipped to handle both individual and corporate legal matters across various practice areas."
    },
    {
      question: "How much do legal consultations cost?",
      answer: "We offer a free initial consultation for new clients to discuss your case and understand your legal needs. Our fee structure varies depending on the complexity and type of case. We provide transparent pricing with no hidden costs and offer flexible payment plans when appropriate."
    },
    {
      question: "How long does it typically take to resolve a legal case?",
      answer: "The timeline for resolving legal matters varies significantly based on the complexity of the case, court schedules, and the cooperation of all parties involved. Simple matters may be resolved in a few weeks, while complex litigation can take several months to years. We provide realistic timelines during our initial consultation."
    },
    {
      question: "Do you handle cases outside of Delhi?",
      answer: "Yes, we handle cases throughout India. While our primary office is located in Delhi, our legal team is licensed to practice in various states and we have established networks with local counsel when needed. We can effectively represent clients in matters across different jurisdictions."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring all relevant documents related to your case, including contracts, correspondence, court papers, identification documents, and any other materials that might be pertinent to your legal matter. Having organized documentation helps us provide more accurate advice during your consultation."
    }
   
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-slate-300/30 to-gray-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Modern Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full shadow-sm">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-700 tracking-wide">Get Your Answers</span>
          </div>
          
          <h1 className="text-5xl text-slate-900 mb-2 leading-[1.1] tracking-relaxed font-semibold">
            Frequently Asked
            <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-semibold">
              Questions
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our legal services, processes, and how we can protect your interests.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Enhanced Left Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-8 space-y-8">
                
                {/* Main CTA Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Need Personal Help?</h3>
                      <p className="text-slate-300 text-sm">Expert legal guidance awaits</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Can't find what you're looking for? Our experienced legal team is ready to provide personalized consultation tailored to your specific needs.
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                      Schedule Free Consultation
                    </button>
                    <button className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Call Now: +91-XXXX-XXXX
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Enhanced FAQ List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="group">
                    <div className={`bg-white/80 backdrop-blur-sm border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                      openIndex === index 
                        ? 'border-amber-300/50 shadow-amber-100/50' 
                        : 'border-slate-200/50 hover:border-slate-300/50'
                    }`}>
                      
                      {/* Question Button */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-8 py-3 text-left flex items-center justify-between hover:bg-slate-50/50 transition-all duration-300"
                      >
                        <div className="flex  gap-5 flex-1 text-center items-center">
                          <div className={`flex-shrink-0 mt-1 transition-all duration-300 ${
                            openIndex === index ? 'scale-110' : 'group-hover:scale-105'
                          }`}>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              openIndex === index 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-600' 
                                : 'bg-slate-100 group-hover:bg-slate-200'
                            }`}>
                              <Scale className={`w-5 h-5 transition-colors duration-300 ${
                                openIndex === index ? 'text-white' : 'text-slate-600'
                              }`} />
                            </div>
                          </div>
                          <h3 className="text-base font-semibold text-slate-900 leading-relaxed ">
                            {faq.question}
                          </h3>
                        </div>
                        
                        <div className="flex-shrink-0 ml-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openIndex === index 
                              ? 'bg-amber-500 rotate-180' 
                              : 'bg-slate-200 group-hover:bg-slate-300'
                          }`}>
                            <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                              openIndex === index ? 'text-white' : 'text-slate-600'
                            }`} />
                          </div>
                        </div>
                      </button>

                      {/* Enhanced Answer */}
                      <div className={`px-8 transition-all duration-500 ease-out ${
                        openIndex === index 
                          ? 'pb-8 opacity-100 max-h-96' 
                          : 'pb-0 opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        <div className="pl-15">
                          <div className="h-px bg-gradient-to-r from-amber-200 via-slate-200 to-transparent mb-6"></div>
                          <div className="bg-gradient-to-r from-slate-50 to-amber-50/30 rounded-xl p-6">
                            <p className="text-slate-700 leading-relaxed text-base font-sans">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;