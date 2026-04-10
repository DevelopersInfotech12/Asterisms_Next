"use client";

import React, { useState } from 'react';
import { Scale, Briefcase, Handshake, Gavel, Users, Shield, Home } from 'lucide-react';

const OtherPracticeAreas = ({ currentPractice }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allPracticeAreas = [
    { id: 'bankruptcy-insolvency', title: 'Bankruptcy & Insolvency Laws', description: 'We advise on insolvency resolution, liquidation, restructuring, and bankruptcy proceedings under the IBC. Our firm represents clients before NCLT and NCLAT.', icon: <Scale size={16} />, bgImage: '/images/img3.jpg' },
    { id: 'banking-law', title: 'Banking Law', description: 'We provide legal advisory to banks, NBFCs, and financial institutions on regulatory compliance, loan recovery, SARFAESI proceedings, and financial disputes.', icon: <Handshake size={16} />, bgImage: '/images/img2.jpg' },
    { id: 'commercial-corporate', title: 'Commercial, Corporate & Companies Law', description: 'Our firm handles corporate transactions, mergers & acquisitions, compliance, and commercial disputes, providing strategic legal solutions to businesses.', icon: <Gavel size={16} />, bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop' },
    { id: 'family-law', title: 'Matrimonial / Family Law', description: 'We handle divorce, child custody, maintenance, domestic violence, and family disputes with a client-sensitive approach and strong legal representation.', icon: <Users size={16} />, bgImage: '/images/matri.jpg' },
    { id: 'criminal-law', title: 'Criminal Law', description: 'We represent clients in bail matters, criminal trials, white-collar crimes, cyber offences, and appeals, ensuring strong defense and protection of rights.', icon: <Shield size={16} />, bgImage: '/images/criminal.jpg' },
    { id: 'civil-law', title: 'Civil Law', description: 'We handle property disputes, recovery suits, injunctions, contract disputes, and civil litigation, ensuring effective enforcement of legal rights.', icon: <Home size={16} />, bgImage: '/images/civil.jpg' },
    { id: 'arbitration-law', title: 'Arbitration Law', description: 'We provide arbitration and dispute resolution services, including domestic and international arbitration, mediation, and enforcement of arbitral awards.', icon: <Briefcase size={16} />, bgImage: '/images/arbitration.jpg' }
  ];

  const areas = allPracticeAreas.filter(a => a.id !== currentPractice);

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "1.2rem" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #2a2418)" }}></div>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "#f5f0e8", margin: 0, whiteSpace: "nowrap" }}>
              Other <em style={{ color: "#c9a84c" }}>Practices</em>
            </h2>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #2a2418)" }}></div>
          </div>
          <div style={{ height: "2px", background: "#2a2418", borderRadius: "2px", maxWidth: "400px", margin: "0 auto" }}>
            <div style={{ height: "2px", background: "#c9a84c", width: "75%", borderRadius: "2px" }}></div>
          </div>
        </div>

        {/* Desktop grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }} className="hidden md:grid">
          {areas.map((area) => (
            <div key={area.id} style={{ background: "#0f0e0c", display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <div style={{
                height: "180px", backgroundImage: `url(${area.bgImage})`, backgroundSize: "cover", backgroundPosition: "center",
                position: "relative", backgroundColor: "#1a1710"
              }}>
                <div style={{ position: "absolute", inset: 0, background: "rgba(10,9,8,0.55)" }}></div>
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", width: "36px", height: "36px", background: "#0f0e0c", border: "1px solid #2a2418", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c" }}>
                  {area.icon}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "1.3rem 1.4rem", flex: 1 }}>
                <h3 style={{ fontSize: "0.95rem", color: "#f5f0e8", marginBottom: "0.6rem", lineHeight: 1.4, fontWeight: 400 }}>{area.title}</h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.7, margin: 0 }}>{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div style={{ display: "none" }} className="md:hidden">
          <div style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", transition: "transform 0.3s ease", transform: `translateX(-${currentSlide * 100}%)` }}>
              {areas.map((area) => (
                <div key={`m-${area.id}`} style={{ minWidth: "100%", padding: "0 0.5rem", boxSizing: "border-box" }}>
                  <div style={{ background: "#141210", border: "1px solid #2a2418" }}>
                    <div style={{ height: "160px", backgroundImage: `url(${area.bgImage})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundColor: "#1a1710" }}>
                      <div style={{ position: "absolute", inset: 0, background: "rgba(10,9,8,0.55)" }}></div>
                      <div style={{ position: "absolute", bottom: "1rem", left: "1rem", width: "36px", height: "36px", background: "#0f0e0c", border: "1px solid #2a2418", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c" }}>{area.icon}</div>
                    </div>
                    <div style={{ padding: "1.2rem 1.4rem" }}>
                      <h3 style={{ fontSize: "0.95rem", color: "#f5f0e8", marginBottom: "0.6rem", lineHeight: 1.4, fontWeight: 400 }}>{area.title}</h3>
                      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.7, margin: 0 }}>{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            {areas.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", background: currentSlide === i ? "#c9a84c" : "#2a2418", cursor: "pointer", padding: 0 }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OtherPracticeAreas;