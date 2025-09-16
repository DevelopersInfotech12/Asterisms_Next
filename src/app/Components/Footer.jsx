import React from 'react';
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Resolve Your Legal Matters?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Get expert legal consultation from our experienced team of attorneys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Schedule Consultation
            </button>
            <div className="flex items-center gap-4 text-slate-900">
              <Phone className="w-6 h-6" />
              <span className="text-lg font-semibold">+91-9811893418</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-800 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row - Company Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 pb-6 border-b border-slate-700">
            <div className="mb-2 lg:mb-0">
              <div className="flex items-center mb-4 ">
                <div className="w-36  rounded-2xl flex items-center shadow-lg">
                  {/* <span className="text-slate-900 font-black text-2xl">AL</span> */}
                  <img src="/images/logo.png" alt="" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">ASTERISMS LEGAL</h3>
                  <p className="text-yellow-400 font-medium">Professional Law Services</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-sans max-w-md leading-relaxed">
                Full-service law firm providing comprehensive legal solutions through 
                expert guidance and strategic counsel for businesses and individuals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-yellow-500 transition-all duration-300 group">
                  <Clock className="w-10 h-10 text-yellow-500 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-2">24/7 Support</h4>
                <p className="text-gray-400">Always Available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-yellow-500 transition-all duration-300 group">
                  <MapPin className="w-10 h-10 text-yellow-500 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-2">Delhi Office</h4>
                <p className="text-gray-400">Prime Location</p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Links and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide">PRACTICE AREAS</h4>
              <ul className="space-y-2">
                {[
                  "Bankruptcy & Insolvency Laws",
                  "Banking Law", 
                  "Commercial & Corporate Law",
                  "Companies Law"
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base font-sans">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className='ml-12'> 
              <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide">COMPANY</h4>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Practices", "Career"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-base font-sans">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-8 tracking-wide">CONTACT</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919811893418" className="text-gray-300 hover:text-yellow-400 transition-colors block text-base font-sans">
                      +91-9811893418
                    </a>
                    <a href="tel:+919910356257" className="text-gray-300 hover:text-yellow-400 transition-colors block text-base font-sans">
                      +91-9910356257
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <a href="mailto:asterismslegal@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors text-base font-sans">
                    asterismslegal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-8 tracking-wide">FOLLOW US</h4>
              <div className="flex gap-4 mb-8">
                <a href="#" className="w-16 h-16 bg-slate-700 hover:bg-yellow-500 rounded-2xl flex items-center justify-center transition-all duration-300 group">
                  <Instagram className="w-8 h-8 text-yellow-500 group-hover:text-slate-900" />
                </a>
                <a href="#" className="w-16 h-16 bg-slate-700 hover:bg-yellow-500 rounded-2xl flex items-center justify-center transition-all duration-300 group">
                  <Linkedin className="w-8 h-8 text-yellow-500 group-hover:text-slate-900" />
                </a>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl">
                <ArrowUp className="w-5 h-5" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-900 py-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Legal Notice</a>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 <span className="text-yellow-400">Asterisms Legal</span>. 
              Designed by <span className="text-yellow-400">DEVELOPERS INFOTECH PVT LTD</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;