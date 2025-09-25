"use client"

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, Scale, AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    // Note: Using state instead of localStorage as it's not supported in Claude artifacts
    setIsVisible(true);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleAccept = () => {
    // In a real app: localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
    // Redirect to Google
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className={`bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Gradient Header */}
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-4 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-40"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-36 h-16 rounded-2xl flex items-center justify-center shadow-lg  overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="Asterisms Legal Logo" 
                    className="w-36 h-36 object-contain"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <Scale className="w-8 h-8 text-white hidden" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Legal Disclaimer
                </h2>
                <p className="text-slate-300 font-medium">Asterisms Legal (AL)</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-slate-300">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm">Required Reading</span>
            </div>
          </div>
        </div>

        {/* Content with improved typography */}
        <div className="p-8  overflow-y-auto max-h-[60vh]">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-gray-700 leading-relaxed text-lg">
              As per the <span className="font-semibold text-blue-700">Bar Council of India</span> regulations, we are not permitted to solicit work or advertise. 
              By clicking <span className="font-semibold">'I Agree'</span>, you acknowledge and accept the following terms:
            </p>
          </div>

          <div className="font-sans ">
            {[
              "There has been no advertisement, personal communication, solicitation, invitation, or inducement of any kind from us or any of our members to solicit work through this website.",
              "The user wishes to obtain more information about us for their own personal use and knowledge.",
              "The information in our website about us is provided to the user only on his or her specific request and any information obtained or materials downloaded from this website is completely voluntary and any transmission, receipt, or use of this site will not establish a lawyer-client relationship."
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-200">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-gray-700 leading-relaxed">
              The information provided under this website is available at your request for <span className="font-semibold text-amber-700">informational purposes only</span> and should not be interpreted as soliciting or advertisement. 
              <span className="font-semibold text-red-600"> Asterisms Legal (AL)</span> or any of its members are not liable for any consequence of actions taken by users relying on material provided here. 
              <span className="font-semibold">For legal issues, seek independent legal advice accordingly.</span>
            </p>
          </div>
        </div>

        {/* Modern Action Buttons */}
        <div className="bg-gray-50/80 backdrop-blur-sm p-4 border-t border-gray-200/50">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAccept}
              className="group relative w-full sm:w-auto px-4 py-3 bg-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>I Accept & Understand</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </button>
            
            <button
              onClick={handleDecline}
              className="group relative w-full sm:w-auto px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold shadow-md hover:shadow-lg hover:border-red-300 hover:text-red-600 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <XCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>I Decline</span>
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            By proceeding, you confirm you have read and understood this disclaimer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;