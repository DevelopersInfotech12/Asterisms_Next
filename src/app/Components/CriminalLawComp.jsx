import React from 'react';

const CriminalLawComp = () => {
  const keyHighlights = [
    { company: "Bail & Anticipatory Bail Matters", description: "Successfully represented clients in securing regular and anticipatory bail before Sessions Courts and High Courts, ensuring protection of personal liberty.", type: "Bail Matters" },
    { company: "White-Collar Crime Defense", description: "Defended clients in complex financial and economic offences including fraud, cheating, and corporate criminal liability cases.", type: "Economic Offences" },
    { company: "Trial & Criminal Litigation", description: "Handled criminal trials involving serious offences under IPC and special laws, providing strong courtroom advocacy and strategic defense.", type: "Criminal Trials" },
    { company: "Cyber Crime & Fraud Cases", description: "Advised and represented clients in cybercrime matters including online fraud, data theft, and digital offences.", type: "Cyber Crime" }
  ];

  const expertise = ["Bail & Anticipatory Bail", "Criminal Trials & Litigation", "White-Collar Crimes", "FIR Quashing & Appeals", "Cyber Crime & Fraud Cases", "Criminal Advisory & Defense"];
  const stats = [{ number: "400+", label: "Cases Handled" }, { number: "90%", label: "Successful Outcomes" }, { number: "10+", label: "Years Experience" }, { number: "250+", label: "Bail Matters" }];

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>Asterisms Legal · Criminal Law Practice</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
          Precision. Integrity.<br /><em style={{ color: "#c9a84c" }}>Outcome-Driven</em><br />Criminal Defense Counsel.
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.95rem", color: "#9e9484", maxWidth: "520px", lineHeight: 1.7, margin: "1rem 0 0" }}>
          Strong legal defense and strategic representation — Sessions Courts, High Courts & Supreme Court of India.
        </p>
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
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>Comprehensive services in <strong style={{ color: "#c9a84c" }}>Criminal Law</strong>, representing clients in bail applications, trials, and appeals across all courts.</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.92rem", color: "#9e9484", lineHeight: 1.8, margin: 0 }}>Committed to protecting the <strong style={{ color: "#c9a84c" }}>rights and liberty of our clients</strong> with strong courtroom advocacy and strategic defense.</p>
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
              <h3 style={{ margin: 0, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "Arial, sans-serif", fontWeight: 400 }}>Criminal Defense Expertise</h3>
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

export default CriminalLawComp;