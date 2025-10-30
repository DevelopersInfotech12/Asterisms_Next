"use client"

import React, { useState } from 'react';
import {
    Award,
    Users,
    TrendingUp,
    Globe,
    Calendar,
    MapPin,
    Briefcase,
    GraduationCap,
    Target,
    Lightbulb,
    Heart,
    ChevronRight,
    Star,
    Building,
    Leaf,
    Zap,
    Scale,
    FileText,
    BookOpen
} from 'lucide-react';

const Attorneyscomp = () => {
    const [selectedAttorney, setSelectedAttorney] = useState('gautam');
    const [activeTab, setActiveTab] = useState('journey');

    // Attorney profiles data
    const attorneysData = {
        gautam: {
            name: "Gautam Singhal",
            title: "Advocate & Insolvency Professional | Specialist in Corporate Insolvency, Banking & Financial Disputes",
            company: "Asterisms Legal",
            role: "Founding Partner | Advocate & Insolvency Professional",
            location: "Delhi, India",
            experience: "20+ Years",
            bio: "Founding Partner at Asterisms Legal with extensive expertise in Corporate Insolvency, Banking & Financial Disputes, Commercial Litigation, and Corporate Law. With over two decades of legal experience, I specialize in providing strategic legal solutions for complex commercial matters. My practice encompasses comprehensive legal advisory services across insolvency proceedings, banking regulations, civil litigation, and corporate structuring.",
            profileImage: "/images/gautam.jfif",

            achievements: [
                { icon: Scale, label: "Legal Expertise", value: "20+ Years" },
                { icon: Building, label: "Founding Partner", value: "Asterisms Legal" },
                { icon: Award, label: "Specialization", value: "Insolvency Law" },
                { icon: Briefcase, label: "Practice Areas", value: "8+ Domains" }
            ],

            journey: [
                {
                    year: "Nov 2022 - Present",
                    title: "Founding Partner | Advocate & Insolvency Professional",
                    company: "Asterisms Legal",
                    description: "Leading a full-service law firm specializing in Legal Advice, Commercial Litigation, Corporate Law, Civil Litigation, Insolvency Law, Bankruptcy Law, Banking, and Legal Consulting. Providing comprehensive legal solutions for corporate and individual clients.",
                    icon: Building
                },
                {
                    year: "Mar 2007 - Oct 2022",
                    title: "Partner",
                    company: "Kumar Law Firm",
                    description: "Served as Partner for over 15 years, handling complex commercial litigation matters, corporate advisory, and insolvency proceedings. Built expertise in banking and financial dispute resolution.",
                    icon: Briefcase
                },
                {
                    year: "Aug 2004 - Feb 2007",
                    title: "Self Employed - Advocate",
                    company: "Independent Practice",
                    description: "Established independent legal practice focusing on civil litigation and commercial disputes. Developed foundational expertise in various areas of law and built strong client relationships.",
                    icon: Scale
                }
            ],

            education: [
                {
                    institution: "Amity University",
                    degree: "Bachelor of Laws - LLB(H)",
                    year: "Sep 1999 - Jun 2004",
                    skills: "Commercial Litigation and Litigation"
                },
                {
                    institution: "Delhi University",
                    degree: "Bachelor of Commerce - BCom",
                    year: "1996 - 1999",
                    skills: "Commercial Litigation"
                }
            ],

            values: [
                {
                    icon: Scale,
                    title: "Legal Excellence",
                    description: "Committed to delivering exceptional legal services with deep expertise in insolvency law, corporate matters, and commercial litigation."
                },
                {
                    icon: Users,
                    title: "Client-Centric Approach",
                    description: "Focused on understanding client needs and providing tailored legal solutions that achieve optimal outcomes in complex legal matters."
                },
                {
                    icon: Target,
                    title: "Strategic Advisory",
                    description: "Providing strategic legal counsel that helps businesses navigate complex regulatory frameworks and achieve their commercial objectives."
                },
                {
                    icon: Award,
                    title: "Insolvency Expertise",
                    description: "Specialized knowledge in insolvency and bankruptcy proceedings, helping creditors and debtors navigate the resolution process effectively."
                }
            ],

            skills: [
                "Commercial Litigation",
                "Corporate Law",
                "Civil Litigation",
                "Insolvency Law",
                "Litigation",
                "Bankruptcy Law",
                "Banking",
                "Legal Advice",
                "Legal Consulting"
            ]
        },

        rajat: {
            name: "Rajat Chaudhary",
            title: "Advocate, Partner, Co-founder Asterisms Legal, Bar Council of Delhi",
            company: "Asterisms Legal",
            role: "Advocate, Partner, Co-founder",
            location: "Defence Colony, New Delhi, Delhi, India",
            experience: "8+ Years",
            bio: "Advocate, Partner, and Co-founder at Asterisms Legal with comprehensive expertise in diverse legal domains. Specializing in Insolvency Law, Company Law, Commercial Litigation, Corporate Law, Bankruptcy Law, and Legal Assistance. Committed to providing high-quality legal services and strategic counsel to clients across various industries. Member of the Bar Council of Delhi.",
            profileImage: "/images/rajat.jpg",

            achievements: [
                { icon: Scale, label: "Legal Practice", value: "8+ Years" },
                { icon: Building, label: "Co-founder", value: "Asterisms Legal" },
                { icon: Award, label: "Bar Council", value: "Delhi" },
                { icon: FileText, label: "Specialization", value: "Corporate Law" }
            ],

            journey: [
                {
                    year: "Nov 2022 - Present",
                    title: "Advocate, Partner, Co-founder",
                    company: "Asterisms Legal",
                    description: "Co-founded and leading Asterisms Legal, providing comprehensive legal services across multiple domains. Specializing in corporate matters, insolvency proceedings, commercial litigation, and legal advisory services for businesses and individuals.",
                    icon: Building
                },
                {
                    year: "Dec 2017 - Nov 2022",
                    title: "Associate Lawyer",
                    company: "Kumar Law Firm",
                    description: "Worked as Associate Lawyer handling diverse legal matters including commercial litigation, corporate advisory, and regulatory compliance. Gained extensive experience in legal services and client representation.",
                    icon: Briefcase
                }
            ],

            education: [
                {
                    institution: "University of Delhi",
                    degree: "Bachelor of Laws - LLB, Law",
                    year: "2014 - 2017",
                    skills: ""
                },
                {
                    institution: "University of Delhi",
                    degree: "Bachelor's Degree",
                    year: "2014 - 2017",
                    skills: ""
                }
            ],

            values: [
                {
                    icon: Scale,
                    title: "Comprehensive Legal Services",
                    description: "Providing end-to-end legal solutions across multiple practice areas including insolvency, corporate law, and commercial litigation."
                },
                {
                    icon: Briefcase,
                    title: "Professional Excellence",
                    description: "Dedicated to maintaining the highest standards of legal practice and professional ethics in all client engagements."
                },
                {
                    icon: Users,
                    title: "Client Partnership",
                    description: "Building long-term relationships with clients through responsive service, clear communication, and strategic legal guidance."
                },
                {
                    icon: Target,
                    title: "Business-Oriented Solutions",
                    description: "Delivering practical legal solutions that align with clients' business objectives and support their growth strategies."
                }
            ],

            skills: [
                "Insolvency Law",
                "Company Law",
                "Commercial Litigation",
                "Law",
                "Commercial",
                "Legal Assistance",
                "Corporate Law",
                "Bankruptcy Law"
            ]
        }
    };

    const currentAttorney = attorneysData[selectedAttorney];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
                        <div className="mx-8">
                            <h1 className="text-5xl text-slate-900 leading-[1.1] tracking-relaxed font-bold">
                                Meet Our Legal
                                <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-bold">
                                    Experts
                                </span>
                            </h1>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1 max-w-md"></div>
                    </div>
                    <p className="text-base font-sans font-semibold max-w-2xl mx-auto text-slate-600 font-light leading-relaxed">
                        Experienced legal professionals specializing in corporate law, insolvency, and commercial litigation
                    </p>
                </div>

                {/* Attorney Selection Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-700">
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setSelectedAttorney('gautam');
                                    setActiveTab('journey');
                                }}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${selectedAttorney === 'gautam'
                                    ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-gray-900 shadow-lg shadow-amber-500/20 scale-105'
                                    : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                <Scale size={20} />
                                <span className='font-bold text-xl'>Gautam Singhal</span>
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedAttorney('rajat');
                                    setActiveTab('journey');
                                }}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${selectedAttorney === 'rajat'
                                    ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-gray-900 shadow-lg shadow-amber-500/20 scale-105'
                                    : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                <Scale size={20} />
                                <span className='font-bold text-xl'>Rajat Chaudhary</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Attorney Profile Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
                    <div className="relative bg-white p-8 md:p-12">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251,191,36,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(251,191,36,0.1) 0%, transparent 50%)`
                            }}></div>
                        </div>

                        <div className="relative grid md:grid-cols-3 gap-8 items-center">
                            {/* Profile Image */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-72 h-96 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-2xl border-4 border-amber-400/20 overflow-hidden">
                                        <img
                                            src={currentAttorney.profileImage}
                                            alt={currentAttorney.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML += '<div class="w-full h-full flex items-center justify-center"><svg class="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg></div>';
                                            }}
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-amber-500 rounded-full p-3 shadow-lg">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="md:col-span-2 text-center md:text-left text-gray-900">
                                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{currentAttorney.name}</h3>
                                <p className="text-xl mb-4 text-orange-500">{currentAttorney.role}</p>
                                <p className="text-sm mb-4 font-sans text-gray-600">{currentAttorney.title}</p>
                                <p className="mb-6 leading-relaxed max-w-2xl font-sans text-justify text-gray-700">{currentAttorney.bio}</p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                        <MapPin size={16} />
                                        <span>{currentAttorney.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                                        <Calendar size={16} />
                                        <span>{currentAttorney.experience}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="p-8 bg-gray-900">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {currentAttorney.achievements.map((achievement, index) => (
                                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-shadow">
                                        <achievement.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                                    <div className="text-sm text-gray-400 font-sans">{achievement.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-700">
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold text-white mb-4">
                                Areas of <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text">Expertise</span>
                            </h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {currentAttorney.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-400/30 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Scale className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-amber-300 font-bold text-sm">{skill}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12 font-sans">
                    <div className="bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-700">
                        <div className="flex flex-col md:flex-row gap-2 justify-center text-green-900">
                            {[
                                { id: 'journey', label: 'Professional Journey', icon: TrendingUp },
                                { id: 'values', label: 'Professional Values', icon: Heart },
                                { id: 'education', label: 'Education', icon: GraduationCap }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl w-full md:w-auto text-center font-medium transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-gray-900 shadow-lg shadow-amber-500/20'
                                            : 'text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    <tab.icon size={18} />
                                    <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Content Sections */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Professional Journey */}
                    {activeTab === 'journey' && (
                        <div className="p-8 md:p-12">
                            <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text mb-8 text-center">Professional Journey</h3>
                            <div className="space-y-6">
                                {currentAttorney.journey.map((item, index) => {
                                    const colors = [
                                        { iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600', textColor: 'text-orange-400', line: 'bg-orange-500', border: 'border-orange-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600', textColor: 'text-blue-400', line: 'bg-blue-500', border: 'border-blue-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600', textColor: 'text-purple-400', line: 'bg-purple-500', border: 'border-purple-500/30' }
                                    ];
                                    const color = colors[index % colors.length];

                                    return (
                                        <div key={index} className={`flex gap-6 bg-gray-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-md border ${color.border}`}>
                                            <div className="flex flex-col items-center">
                                                <div className={`${color.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300`}>
                                                    <item.icon className="w-7 h-7 text-white" />
                                                </div>
                                                {index < currentAttorney.journey.length - 1 && (
                                                    <div className={`w-0.5 h-16 ${color.line} mt-4`}></div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                                    <span className={`${color.textColor} font-semibold text-sm`}>{item.year}</span>
                                                </div>
                                                <p className={`${color.textColor} font-medium mb-3 font-sans`}>{item.company}</p>
                                                <p className="text-gray-300 leading-relaxed font-sans">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Professional Values */}
                    {activeTab === 'values' && (
                        <div className="p-8 md:p-12">
                            <h3 className="text-3xl font-bold text-4xl font-bold text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text  mb-8 text-center">Professional Values</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {currentAttorney.values.map((value, index) => {
                                    const colors = [
                                        { iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600', border: 'border-amber-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-green-500 to-green-600', border: 'border-green-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600', border: 'border-blue-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-red-500 to-red-600', border: 'border-red-500/30' }
                                    ];
                                    const color = colors[index % colors.length];

                                    return (
                                        <div key={index} className={`bg-gray-800 p-8 rounded-2xl hover:shadow-md transition-all duration-300 border ${color.border}`}>
                                            <div className={`${color.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                                                <value.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                                            <p className="text-gray-300 leading-relaxed font-sans text-justify">{value.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {activeTab === 'education' && (
                        <div className="p-8 md:p-12">
                            <h3 className="text-3xl font-bold text-4xl font-bold text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text  mb-8 text-center">Education & Qualifications</h3>
                            <div className="space-y-6 max-w-4xl mx-auto">
                                {currentAttorney.education.map((edu, index) => {
                                    const colors = [
                                        { iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600', textColor: 'text-amber-400', border: 'border-amber-500/30' },
                                        { iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600', textColor: 'text-orange-400', border: 'border-orange-500/30' }
                                    ];
                                    const color = colors[index % colors.length];

                                    return (
                                        <div key={index} className={`flex gap-6 bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-all duration-300 border ${color.border}`}>
                                            <div className={`${color.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                                <GraduationCap className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                                                <p className={`${color.textColor} font-medium mb-2`}>{edu.degree}</p>
                                                <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                                                {edu.skills && <p className="text-gray-300 text-sm font-sans">Focus: {edu.skills}</p>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Attorneyscomp;