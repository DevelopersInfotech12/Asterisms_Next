import React from 'react';
import { Scale, CheckCircle } from 'lucide-react';

const AboutIntro = () => {
  const expertiseItems = [
    "Supreme Court Practice",
    "High Court Litigation",
    "District Court Cases",
    "Tribunal Representation",
    "Legal Consultation",
    "Client Advisory",
  ];

  const infoPoints = [
    { label: "Founded On", value: "Helping clients achieve prompt legal solutions" },
    { label: "Approach", value: "Holistic and pragmatic legal strategies" },
    { label: "Commitment", value: "Fearlessly upholding client interests with fairness" },
    { label: "Team", value: "Well-trained advocates and experienced in-house staff" },
  ];

  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "80px", alignItems: "start" }}>

          {/* Left Column */}
          <div>
            {/* Eyebrow badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #2A2518",
              padding: "8px 20px",
              marginBottom: "32px",
            }}>
              <Scale size={14} color="#C9A84C" />
              <span style={{ color: "#8A7A5A", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Arial, sans-serif" }}>
                TRUSTED LEGAL EXCELLENCE
              </span>
            </div>

            {/* Heading */}
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "12px" }}>
                <div style={{ height: "1px", backgroundColor: "#2A2518", width: "60px" }} />
                <h1 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: "300",
                  color: "#E8E0D0",
                  margin: 0,
                  lineHeight: "1.1",
                }}>
                  About Us
                </h1>
                <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1 }} />
              </div>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: "300",
                color: "#C9A84C",
                fontStyle: "italic",
                margin: "0 0 16px",
                paddingLeft: "84px",
              }}>
                Asterisms Legal
              </h2>
              <p style={{ color: "#5A4A30", fontSize: "14px", fontFamily: "Georgia, serif", fontStyle: "italic", paddingLeft: "84px" }}>
                Fearlessly upholding justice with 21+ years of legal expertise and unwavering commitment
              </p>
            </div>

            {/* Content Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
              {[
                <><span style={{ color: "#C9A84C", fontStyle: "italic" }}>Asterisms Legal (AL)</span> is a full-service law firm founded with the sole motive of helping, assisting and guiding clients in achieving prompt legal solutions by way of a holistic and pragmatic approach — and to fearlessly uphold the interests of clients before the Courts of Law with all fairness.</>,
                <>Our team of extraordinarily well-trained and experienced Advocates, in-house staff and their in-depth knowledge builds our unique position to best address our clients' most pressing needs.</>,
                <>Our team has a wide range of experience handling litigations before the <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Supreme Court, State High Courts, District Courts and Tribunals</span>.</>,
                <>We also provide strategic advisory services in complex corporate, commercial, banking, and insolvency matters. Our commitment lies not only in resolving disputes but also in preventing them through sound legal structuring and compliance support.</>
              ].map((para, i) => (
                <p key={i} style={{ color: "#8A7A5A", fontSize: "14px", lineHeight: "1.9", fontFamily: "Georgia, serif", margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Expertise Areas */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A84C" }} />
                <h3 style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", margin: 0 }}>
                  OUR EXPERTISE
                </h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 40px" }}>
                {expertiseItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "#C9A84C", flexShrink: 0 }} />
                    <span style={{ color: "#8A7A5A", fontSize: "13px", fontFamily: "Georgia, serif", fontStyle: "italic" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Panel */}
          <div style={{ position: "sticky", top: "32px" }}>
            <div style={{ border: "1px solid #2A2518", backgroundColor: "#13110D", borderTop: "2px solid #C9A84C" }}>
              <div style={{ padding: "32px" }}>

                {/* Logo */}
                <div style={{ textAlign: "center", paddingBottom: "24px", borderBottom: "1px solid #2A2518", marginBottom: "28px" }}>
                  <div style={{ backgroundColor: "#0D0B08", padding: "16px", marginBottom: "12px", display: "inline-block" }}>
                    <img src="images/logo.png" alt="Asterisms Legal" style={{ width: "120px", display: "block" }} />
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "300", color: "#C9A84C", fontStyle: "italic", margin: "0 0 4px" }}>
                    Asterisms Legal
                  </h3>
                  <p style={{ color: "#5A4A30", fontSize: "11px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif", margin: 0 }}>
                    FULL-SERVICE LAW FIRM
                  </p>
                </div>

                {/* Key Points */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
                  {infoPoints.map((point, i) => (
                    <div key={i}>
                      <h4 style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Arial, sans-serif", margin: "0 0 6px" }}>
                        {point.label.toUpperCase()}
                      </h4>
                      <p style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0, lineHeight: "1.6" }}>
                        {point.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CCI Approval */}
                <div style={{ paddingTop: "24px", borderTop: "1px solid #2A2518", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "20px", height: "20px", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="#C9A84C">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: "#E8E0D0", fontSize: "12px", fontFamily: "Arial, sans-serif", margin: "0 0 4px", letterSpacing: "0.05em" }}>CCI Approved</p>
                    <p style={{ color: "#5A4A30", fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0, lineHeight: "1.6" }}>
                      Prior approval under Section 31(4) of the Competition Act, 2002
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;