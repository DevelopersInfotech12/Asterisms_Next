import React from 'react';

const BankruptcyandInsolvency = () => {
  const keyHighlights = [
    {
      company: "TATA Steel Ltd.",
      description: "In the first successful corporate acquisition under the IBC, the Firm represented TATA Steel Ltd. in the corporate insolvency resolution process initiated against Bhushan Steel Ltd., enabling TATA Steel Ltd. to successfully acquire Bhushan Steel Ltd.",
      type: "Corporate Acquisition"
    },
    {
      company: "Arcelor Mittal India Private Limited",
      description: "In a highly publicized litigation, the Firm successfully advised and appeared for Arcelor Mittal India Private Limited in the highly valuable corporate insolvency resolution process of Essar Steel India Limited. This acquisition was a crucial strategic step for Arcelor Mittal to build a meaningful production presence in India.",
      type: "Strategic Acquisition"
    },
    {
      company: "Kalpraj Dharamshri and Rekha Jhunjhunwala",
      description: "The Firm represented Kalpraj Dharamshri and Rekha Jhunjhunwala, who led the consortium which successfully acquired Ricoh India Limited by way of the corporate insolvency resolution process under the Code.",
      type: "Consortium Leadership"
    },
    {
      company: "ArcelorMittal India Private Limited",
      description: "The Firm has advised, and appeared for and on behalf of, ArcelorMittal India Private Limited in a heavily contested corporate insolvency resolution process of Odisha Slurry Pipelines Infrastructure Limited (OSPIL) under the Code. The Committee of Creditors unanimously approved the Resolution Plan submitted by Arcelor Mittal and later, the said decision was upheld by the Adjudicating Authority, Cuttack and the National Company Law Appellate Tribunal, New Delhi.",
      type: "Complex Resolution"
    }
  ];

  const expertise = [
    "Insolvency and Bankruptcy Code, 2016 (IBC)",
    "Multi-national Corporations Advisory",
    "High-stakes Landmark Cases",
    "National Company Law Tribunal Representation",
    "Strategic Evaluation of Cases",
    "Supreme Court of India Representation"
  ];

  const stats = [
    { number: "2016", label: "Since IBC Enactment" },
    { number: "100+", label: "Cases Handled" },
    { number: "₹50K Cr+", label: "Asset Value" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>
          Asterisms Legal · Bankruptcy & Insolvency Practice
        </p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
          Precision. Integrity.<br />
          <em style={{ color: "#c9a84c" }}>Outcome-Driven</em><br />
          Insolvency Counsel.
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.95rem", color: "#9e9484", maxWidth: "520px", lineHeight: 1.7, margin: "1rem 0 0" }}>
          Trusted advisors in IBC matters — NCLT, NCLAT & the Supreme Court of India.
        </p>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#2a2418", border: "1px solid #2a2418", marginBottom: "3rem" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#0f0e0c", padding: "1.4rem 1rem", textAlign: "center" }}>
              <span style={{ display: "block", fontSize: "1.6rem", color: "#c9a84c" }}>{s.number}</span>
              <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e665a", marginTop: "0.3rem" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* About */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
            About the Practice
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>
              The Firm has <strong style={{ color: "#c9a84c" }}>extensive experience</strong> dealing with matters on IBC, 2016. We have expertise in both pursuing and defending insolvency and bankruptcy proceedings.
            </p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>
              Our team is equipped with <strong style={{ color: "#c9a84c" }}>in-depth knowledge</strong>, handling landmark IBC cases and providing diverse solutions to domestic and international clients.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
            Areas of Excellence
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>
            {expertise.map((item, i) => (
              <div key={i} style={{ background: "#141210", padding: "1.1rem 1.4rem", display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                <div style={{ width: "5px", height: "5px", background: "#c9a84c", borderRadius: "50%", marginTop: "7px", flexShrink: 0 }}></div>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#c5bfb3", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
            Key Highlights
          </div>
          <div style={{ border: "1px solid #2a2418" }}>
            <div style={{ background: "#141210", padding: "1.2rem 1.6rem", borderBottom: "1px solid #2a2418" }}>
              <h3 style={{ margin: 0, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "Arial, sans-serif", fontWeight: 400 }}>
                Landmark Cases & Acquisitions
              </h3>
            </div>
            {keyHighlights.map((h, i) => (
              <div key={i} style={{ padding: "1.4rem 1.6rem", borderBottom: i < keyHighlights.length - 1 ? "1px solid #1e1c18" : "none", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                <div>
                  <div style={{ fontSize: "1.05rem", color: "#f5f0e8", marginBottom: "0.3rem" }}>{h.company}</div>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", color: "#7a7268", lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                </div>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c9a84c", background: "#1e1a10", border: "1px solid #2e2410", padding: "4px 10px", whiteSpace: "nowrap" }}>
                  {h.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BankruptcyandInsolvency;