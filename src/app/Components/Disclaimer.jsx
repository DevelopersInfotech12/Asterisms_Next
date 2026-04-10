"use client"

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, Scale, AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleAccept = () => setIsVisible(false);

  const handleDecline = () => {
    setIsVisible(false);
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(10,9,8,0.92)",
      backdropFilter: "blur(4px)", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 50, padding: "1rem"
    }}>
      <div style={{
        background: "#0f0e0c", border: "1px solid #2a2418",
        maxWidth: "720px", width: "100%", maxHeight: "90vh",
        overflow: "hidden", display: "flex", flexDirection: "column",
        transform: isLoaded ? "scale(1)" : "scale(0.96)",
        opacity: isLoaded ? 1 : 0, transition: "all 0.4s ease",
        fontFamily: "Georgia, 'Times New Roman', serif"
      }}>

        {/* Header */}
        <div style={{ background: "#141210", borderBottom: "1px solid #2a2418", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "52px", height: "40px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                <img src="/images/logo.png" alt="Asterisms Legal"
                  style={{ width: "52px", height: "52px", objectFit: "contain" }}
                  onError={e => { e.target.style.display = "none"; }} />
              </div>
              <div style={{ position: "absolute", top: "-4px", right: "-4px", width: "16px", height: "16px", background: "#c9a84c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Shield size={9} color="#0f0e0c" />
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 400, color: "#f5f0e8", margin: 0 }}>Legal Disclaimer</h2>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", margin: "0.2rem 0 0" }}>Asterisms Legal (AL)</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <AlertTriangle size={14} color="#c9a84c" />
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e665a" }}>Required Reading</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem", overflowY: "auto", flex: 1 }}>

          <div style={{ background: "#141210", borderLeft: "3px solid #c9a84c", padding: "1.2rem 1.4rem", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>
              As per the <strong style={{ color: "#c9a84c" }}>Bar Council of India</strong> regulations, we are not permitted to solicit work or advertise.
              By clicking <strong style={{ color: "#f5f0e8" }}>'I Agree'</strong>, you acknowledge and accept the following terms:
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            {[
              "There has been no advertisement, personal communication, solicitation, invitation, or inducement of any kind from us or any of our members to solicit work through this website.",
              "The user wishes to obtain more information about us for their own personal use and knowledge.",
              "The information in our website is provided to the user only on his or her specific request and any information obtained or materials downloaded from this website is completely voluntary and any transmission, receipt, or use of this site will not establish a lawyer-client relationship."
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid #1e1c18" }}>
                <div style={{ flexShrink: 0, width: "24px", height: "24px", background: "#141210", border: "1px solid #2a2418", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#c9a84c" }}>
                  {i + 1}
                </div>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#9e9484", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#141210", borderLeft: "3px solid #2a2418", padding: "1.2rem 1.4rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#7a7268", lineHeight: 1.8, margin: 0 }}>
              The information provided under this website is available at your request for <strong style={{ color: "#c9a84c" }}>informational purposes only</strong> and should not be interpreted as soliciting or advertisement.
              {" "}<strong style={{ color: "#f5f0e8" }}>Asterisms Legal (AL)</strong> or any of its members are not liable for any consequence of actions taken by users relying on material provided here.{" "}
              <strong style={{ color: "#c5bfb3" }}>For legal issues, seek independent legal advice accordingly.</strong>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ background: "#141210", borderTop: "1px solid #2a2418", padding: "1.2rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
          <div style={{ display: "flex", gap: "1rem", width: "100%", justifyContent: "center" }}>
            <button onClick={handleAccept} style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 2rem", background: "#c9a84c", border: "1px solid #c9a84c",
              color: "#0f0e0c", fontFamily: "Arial, sans-serif", fontSize: "11px",
              letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", fontWeight: 600
            }}>
              <CheckCircle size={14} /> I Accept & Understand
            </button>
            <button onClick={handleDecline} style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 2rem", background: "transparent", border: "1px solid #2a2418",
              color: "#7a7268", fontFamily: "Arial, sans-serif", fontSize: "11px",
              letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer"
            }}>
              <XCircle size={14} /> I Decline
            </button>
          </div>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4e4840", margin: 0 }}>
            By proceeding, you confirm you have read and understood this disclaimer
          </p>
        </div>

      </div>
    </div>
  );
};

export default Disclaimer;