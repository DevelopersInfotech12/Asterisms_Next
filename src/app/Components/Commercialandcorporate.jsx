import React from 'react';

const CommercialandCorporate = () => {
  const keyHighlights = [
    { company: "Reliance Industries Ltd.", description: "Advised Reliance Industries Ltd. on corporate restructuring, joint ventures, and mergers & acquisitions, ensuring regulatory compliance and strategic business growth.", type: "Corporate Restructuring" },
    { company: "Tata Consultancy Services", description: "Provided comprehensive legal advisory for TCS in cross-border contracts, strategic partnerships, and investment agreements, safeguarding corporate interests.", type: "Strategic Partnerships" },
    { company: "Infosys Ltd.", description: "Represented Infosys in high-value mergers and acquisitions, due diligence processes, and corporate governance matters, ensuring smooth transactional execution.", type: "M&A Advisory" },
    { company: "Adani Group", description: "Advised Adani Group on corporate compliance, regulatory filings, joint ventures, and commercial contracts across multiple sectors, facilitating sustainable business operations.", type: "Corporate Compliance" }
  ];

  const expertise = ["Corporate & Commercial Advisory", "Mergers & Acquisitions (M&A)", "Joint Ventures & Strategic Partnerships", "Corporate Governance & Compliance", "Contract Drafting & Negotiation", "Cross-Border Transactions & Advisory"];
  const stats = [{ number: "500+", label: "Corporate Deals" }, { number: "₹2L Cr+", label: "Transaction Value" }, { number: "95%", label: "Satisfaction Rate" }, { number: "50+", label: "Top Corporates" }];

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>Asterisms Legal · Commercial & Corporate Practice</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
          Precision. Integrity.<br /><em style={{ color: "#c9a84c" }}>Outcome-Driven</em><br />Corporate Counsel.
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.95rem", color: "#9e9484", maxWidth: "520px", lineHeight: 1.7, margin: "1rem 0 0" }}>Guiding India's top corporations with strategic legal solutions.</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#2a2418", border: "1px solid #2a2418", marginBottom: "3rem" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#0f0e0c", padding: "1.4rem 1rem", textAlign: "center" }}>
              <span style={{ display: "block", fontSize: "1.6rem", color: "#c9a84c" }}>{s.number}</span>
              <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e665a", marginTop: "0.3rem" }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>About the Practice</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>Our Firm provides <strong style={{ color: "#c9a84c" }}>comprehensive corporate advisory</strong> covering commercial contracts, joint ventures, mergers & acquisitions, and corporate governance.</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>Recognized for <strong style={{ color: "#c9a84c" }}>expert guidance</strong> in cross-border transactions, regulatory compliance, and corporate structuring for leading corporations.</p>
          </div>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>Areas of Excellence</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>
            {expertise.map((item, i) => (
              <div key={i} style={{ background: "#141210", padding: "1.1rem 1.4rem", display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                <div style={{ width: "5px", height: "5px", background: "#c9a84c", borderRadius: "50%", marginTop: "7px", flexShrink: 0 }}></div>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#c5bfb3", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>Key Highlights</div>
          <div style={{ border: "1px solid #2a2418" }}>
            <div style={{ background: "#141210", padding: "1.2rem 1.6rem", borderBottom: "1px solid #2a2418" }}>
              <h3 style={{ margin: 0, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "Arial, sans-serif", fontWeight: 400 }}>Landmark Corporate Transactions</h3>
            </div>
            {keyHighlights.map((h, i) => (
              <div key={i} style={{ padding: "1.4rem 1.6rem", borderBottom: i < keyHighlights.length - 1 ? "1px solid #1e1c18" : "none", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                <div>
                  <div style={{ fontSize: "1.05rem", color: "#f5f0e8", marginBottom: "0.3rem" }}>{h.company}</div>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", color: "#7a7268", lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                </div>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c9a84c", background: "#1e1a10", border: "1px solid #2e2410", padding: "4px 10px", whiteSpace: "nowrap" }}>{h.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialandCorporate;