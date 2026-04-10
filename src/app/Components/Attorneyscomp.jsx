"use client";

import React, { useState } from 'react';
import {
    Award, Users, TrendingUp, Calendar, MapPin, Briefcase,
    GraduationCap, Target, Heart, Scale, FileText, Building
} from 'lucide-react';

const Attorneyscomp = () => {
    const [selectedAttorney, setSelectedAttorney] = useState('gautam');
    const [activeTab, setActiveTab] = useState('journey');

    const attorneysData = {
        gautam: {
            name: "Gautam Singhal",
            title: "Advocate & Insolvency Professional | Specialist in Corporate Insolvency, Banking & Financial Disputes",
            role: "Founding Partner | Advocate & Insolvency Professional",
            location: "Delhi, India",
            experience: "20+ Years",
            bio: "Founding Partner at Asterisms Legal, possessing extensive expertise in Corporate Insolvency, Banking & Financial Disputes, Commercial Litigation, and Corporate Law. With over two decades of legal experience, he specializes in delivering strategic legal solutions for complex commercial matters.",
            profileImage: "/images/gautam.jfif",
            achievements: [
                { icon: Scale, label: "Legal Expertise", value: "20+ Years" },
                { icon: Building, label: "Founding Partner", value: "Asterisms Legal" },
                { icon: Award, label: "Specialization", value: "Insolvency Law" },
                { icon: Briefcase, label: "Practice Areas", value: "8+ Domains" }
            ],
            journey: [
                {
                    year: "Nov 2022 – Present",
                    title: "Founding Partner | Advocate & Insolvency Professional",
                    company: "Asterisms Legal",
                    description: "Leading a full-service law firm specializing in Legal Advice, Commercial Litigation, Corporate Law, Civil Litigation, Insolvency Law, Bankruptcy Law, Banking, and Legal Consulting.",
                    icon: Building
                },
                {
                    year: "Mar 2007 – Oct 2022",
                    title: "Partner",
                    company: "Kumar Law Firm",
                    description: "Served as Partner for over 15 years, handling complex commercial litigation matters, corporate advisory, and insolvency proceedings. Built expertise in banking and financial dispute resolution.",
                    icon: Briefcase
                },
                {
                    year: "Aug 2004 – Feb 2007",
                    title: "Self Employed – Advocate",
                    company: "Independent Practice",
                    description: "Established independent legal practice focusing on civil litigation and commercial disputes. Developed foundational expertise in various areas of law.",
                    icon: Scale
                }
            ],
            education: [
                { institution: "Amity University", degree: "Bachelor of Laws – LLB(H)", year: "Sep 1999 – Jun 2004", skills: "Commercial Litigation and Litigation" },
                { institution: "Delhi University", degree: "Bachelor of Commerce – BCom", year: "1996 – 1999", skills: "Commercial Litigation" }
            ],
            values: [
                { icon: Scale, title: "Legal Excellence", description: "Committed to delivering exceptional legal services with deep expertise in insolvency law, corporate matters, and commercial litigation." },
                { icon: Users, title: "Client-Centric Approach", description: "Focused on understanding client needs and providing tailored legal solutions that achieve optimal outcomes in complex legal matters." },
                { icon: Target, title: "Strategic Advisory", description: "Providing strategic legal counsel that helps businesses navigate complex regulatory frameworks and achieve their commercial objectives." },
                { icon: Award, title: "Insolvency Expertise", description: "Specialized knowledge in insolvency and bankruptcy proceedings, helping creditors and debtors navigate the resolution process effectively." }
            ],
            skills: ["Commercial Litigation", "Corporate Law", "Civil Litigation", "Insolvency Law", "Litigation", "Bankruptcy Law", "Banking", "Legal Advice", "Legal Consulting"]
        },
        rajat: {
            name: "Rajat Chaudhary",
            title: "Advocate, Partner, Co-founder Asterisms Legal, Bar Council of Delhi",
            role: "Advocate, Partner, Co-founder",
            location: "Defence Colony, New Delhi, India",
            experience: "8+ Years",
            bio: "Advocate, Partner, and Co-founder at Asterisms Legal, with comprehensive expertise across diverse legal domains. Member of the Bar Council of Delhi. Specialized in Insolvency Law, Company Law, Commercial Litigation, Corporate Law, and Bankruptcy Law.",
            profileImage: "/images/rajat.jpg",
            achievements: [
                { icon: Scale, label: "Legal Practice", value: "8+ Years" },
                { icon: Building, label: "Co-founder", value: "Asterisms Legal" },
                { icon: Award, label: "Bar Council", value: "Delhi" },
                { icon: FileText, label: "Specialization", value: "Corporate Law" }
            ],
            journey: [
                {
                    year: "Nov 2022 – Present",
                    title: "Advocate, Partner, Co-founder",
                    company: "Asterisms Legal",
                    description: "Co-founded and leading Asterisms Legal, providing comprehensive legal services across multiple domains including corporate matters, insolvency proceedings, and commercial litigation.",
                    icon: Building
                },
                {
                    year: "Dec 2017 – Nov 2022",
                    title: "Associate Lawyer",
                    company: "Kumar Law Firm",
                    description: "Handled diverse legal matters including commercial litigation, corporate advisory, and regulatory compliance. Gained extensive experience in legal services and client representation.",
                    icon: Briefcase
                }
            ],
            education: [
                { institution: "University of Delhi", degree: "Bachelor of Laws – LLB, Law", year: "2014 – 2017", skills: "" },
                { institution: "University of Delhi", degree: "Bachelor's Degree", year: "2014 – 2017", skills: "" }
            ],
            values: [
                { icon: Scale, title: "Comprehensive Legal Services", description: "Providing end-to-end legal solutions across multiple practice areas including insolvency, corporate law, and commercial litigation." },
                { icon: Briefcase, title: "Professional Excellence", description: "Dedicated to maintaining the highest standards of legal practice and professional ethics in all client engagements." },
                { icon: Users, title: "Client Partnership", description: "Building long-term relationships with clients through responsive service, clear communication, and strategic legal guidance." },
                { icon: Target, title: "Business-Oriented Solutions", description: "Delivering practical legal solutions that align with clients' business objectives and support their growth strategies." }
            ],
            skills: ["Insolvency Law", "Company Law", "Commercial Litigation", "Law", "Commercial", "Legal Assistance", "Corporate Law", "Bankruptcy Law"]
        }
    };

    const attorney = attorneysData[selectedAttorney];

    const tabBtnStyle = (id) => ({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 24px",
        fontSize: "13px",
        letterSpacing: "0.08em",
        fontFamily: "Arial, sans-serif",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s",
        backgroundColor: activeTab === id ? "#C9A84C" : "transparent",
        color: activeTab === id ? "#0D0B08" : "#5A4A30",
        fontWeight: activeTab === id ? "600" : "400",
    });

    const selectorBtnStyle = (key) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 32px",
        fontSize: "14px",
        letterSpacing: "0.08em",
        fontFamily: "Georgia, serif",
        fontStyle: "italic",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s",
        backgroundColor: selectedAttorney === key ? "#C9A84C" : "transparent",
        color: selectedAttorney === key ? "#0D0B08" : "#8A7A5A",
        fontWeight: selectedAttorney === key ? "600" : "400",
    });

    return (
        <div style={{ backgroundColor: "#0D0B08", padding: "80px 0" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
                        — THE TEAM
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "12px" }}>
                        <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }} />
                        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
                            Meet Our Legal{" "}
                            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Experts</span>
                        </h1>
                        <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }} />
                    </div>
                    <p style={{ color: "#8A7A5A", fontSize: "14px", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                        Experienced legal professionals specializing in corporate law, insolvency, and commercial litigation
                    </p>
                </div>

                {/* Attorney Selector */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
                    <div style={{ border: "1px solid #2A2518", backgroundColor: "#13110D", display: "flex" }}>
                        {Object.entries({ gautam: "Gautam Singhal", rajat: "Rajat Chaudhary" }).map(([key, name]) => (
                            <button
                                key={key}
                                onClick={() => { setSelectedAttorney(key); setActiveTab('journey'); }}
                                style={selectorBtnStyle(key)}
                            >
                                <Scale size={14} color={selectedAttorney === key ? "#0D0B08" : "#C9A84C"} />
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Profile Card */}
                <div style={{ border: "1px solid #2A2518", backgroundColor: "#13110D", marginBottom: "2px" }}>
                    {/* Gold top bar */}
                    <div style={{ height: "2px", backgroundColor: "#C9A84C" }} />

                    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "0" }}>
                        {/* Image */}
                        <div style={{ position: "relative", borderRight: "1px solid #2A2518" }}>
                            <img
                                src={attorney.profileImage}
                                alt={attorney.name}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(20%) brightness(0.8)", minHeight: "360px" }}
                            />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #13110D)" }} />
                        </div>

                        {/* Info */}
                        <div style={{ padding: "48px" }}>
                            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 8px", fontStyle: "italic" }}>
                                {attorney.name}
                            </h2>
                            <p style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "0.08em", fontFamily: "Arial, sans-serif", margin: "0 0 4px" }}>
                                {attorney.role}
                            </p>
                            <p style={{ color: "#5A4A30", fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: "0 0 24px" }}>
                                {attorney.title}
                            </p>

                            <div style={{ width: "32px", height: "1px", backgroundColor: "#C9A84C", marginBottom: "20px" }} />

                            <p style={{ color: "#8A7A5A", fontSize: "14px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic", margin: "0 0 28px" }}>
                                {attorney.bio}
                            </p>

                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                {[{ icon: <MapPin size={12} />, value: attorney.location }, { icon: <Calendar size={12} />, value: attorney.experience }].map((item, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #2A2518", padding: "6px 16px", color: "#8A7A5A", fontSize: "12px", fontFamily: "Arial, sans-serif" }}>
                                        <span style={{ color: "#C9A84C" }}>{item.icon}</span>
                                        {item.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div style={{ borderTop: "1px solid #2A2518", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", backgroundColor: "#0D0B08" }}>
                        {attorney.achievements.map((a, i) => (
                            <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid #2A2518" : "none" }}>
                                <div style={{ width: "44px", height: "44px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#C9A84C" }}>
                                    <a.icon size={18} />
                                </div>
                                <div style={{ color: "#E8E0D0", fontSize: "18px", fontFamily: "Georgia, serif", fontWeight: "300", marginBottom: "4px", fontStyle: "italic" }}>{a.value}</div>
                                <div style={{ color: "#5A4A30", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif" }}>{a.label.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div style={{ border: "1px solid #2A2518", borderTop: "none", backgroundColor: "#13110D", padding: "40px 48px", marginBottom: "40px" }}>
                    <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px", textAlign: "center" }}>
                        — AREAS OF EXPERTISE
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                        {attorney.skills.map((skill, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #2A2518", padding: "8px 16px", backgroundColor: "#0D0B08" }}>
                                <div style={{ width: "4px", height: "4px", backgroundColor: "#C9A84C" }} />
                                <span style={{ color: "#8A7A5A", fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic" }}>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Navigation */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2px" }}>
                    <div style={{ border: "1px solid #2A2518", backgroundColor: "#13110D", display: "flex" }}>
                        {[
                            { id: "journey", label: "Professional Journey", icon: <TrendingUp size={13} /> },
                            { id: "values", label: "Professional Values", icon: <Heart size={13} /> },
                            { id: "education", label: "Education", icon: <GraduationCap size={13} /> },
                        ].map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={tabBtnStyle(tab.id)}>
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div style={{ border: "1px solid #2A2518", borderTop: "none", backgroundColor: "#13110D", padding: "48px" }}>

                    {/* Journey */}
                    {activeTab === "journey" && (
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
                                <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A84C" }} />
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
                                    Professional <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Journey</span>
                                </h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                {attorney.journey.map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "32px", alignItems: "flex-start", backgroundColor: "#0D0B08", padding: "28px 32px", borderLeft: "2px solid #C9A84C" }}>
                                        <div style={{ flexShrink: 0, width: "40px", height: "40px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C" }}>
                                            <item.icon size={16} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                                                <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "300", color: "#E8E0D0", margin: 0, fontStyle: "italic" }}>{item.title}</h4>
                                                <span style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.1em", fontFamily: "Arial, sans-serif", flexShrink: 0 }}>{item.year}</span>
                                            </div>
                                            <p style={{ color: "#C9A84C", fontSize: "12px", letterSpacing: "0.08em", fontFamily: "Arial, sans-serif", margin: "0 0 10px" }}>{item.company}</p>
                                            <p style={{ color: "#5A4A30", fontSize: "13px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Values */}
                    {activeTab === "values" && (
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
                                <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A84C" }} />
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
                                    Professional <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Values</span>
                                </h3>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                                {attorney.values.map((v, i) => (
                                    <div key={i} style={{ backgroundColor: "#0D0B08", padding: "32px", borderLeft: "2px solid #C9A84C" }}>
                                        <div style={{ width: "36px", height: "36px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", marginBottom: "20px" }}>
                                            <v.icon size={16} />
                                        </div>
                                        <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 12px", fontStyle: "italic" }}>{v.title}</h4>
                                        <p style={{ color: "#5A4A30", fontSize: "13px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }}>{v.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {activeTab === "education" && (
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
                                <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A84C" }} />
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
                                    Education &{" "}
                                    <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Qualifications</span>
                                </h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxWidth: "720px", margin: "0 auto" }}>
                                {attorney.education.map((edu, i) => (
                                    <div key={i} style={{ display: "flex", gap: "24px", backgroundColor: "#0D0B08", padding: "28px 32px", borderLeft: "2px solid #C9A84C" }}>
                                        <div style={{ flexShrink: 0, width: "40px", height: "40px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C" }}>
                                            <GraduationCap size={16} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 6px", fontStyle: "italic" }}>{edu.institution}</h4>
                                            <p style={{ color: "#C9A84C", fontSize: "12px", letterSpacing: "0.08em", fontFamily: "Arial, sans-serif", margin: "0 0 4px" }}>{edu.degree}</p>
                                            <p style={{ color: "#5A4A30", fontSize: "11px", fontFamily: "Arial, sans-serif", letterSpacing: "0.08em", margin: "0 0 6px" }}>{edu.year}</p>
                                            {edu.skills && <p style={{ color: "#8A7A5A", fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }}>Focus: {edu.skills}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Attorneyscomp;