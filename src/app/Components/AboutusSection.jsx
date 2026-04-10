"use client";

import React from 'react';

const AboutusSection = () => {
  const sections = [
    {
      label: "OUR MISSION",
      title: "Our Mission",
      content: "Our mission is to deliver innovative and effective legal solutions that empower our clients to achieve their business goals and navigate legal challenges with confidence. We strive to build lasting relationships based on trust, communication, and collaboration, ensuring that our clients receive personalized attention and support at every stage of their legal journey.",
      image: "/images/img1.jpg",
      imageAlt: "Legal professionals working together",
      imageLeft: false,
    },
    {
      label: "OUR APPROACH",
      title: "Our Approach",
      content: "At Asterisms Legal, we take a strategic and results-oriented approach to every case. Our team of experienced attorneys combines legal expertise with practical business acumen to develop tailored strategies that address the unique needs and objectives of each client. We are committed to delivering timely, cost-effective, and favorable outcomes while upholding the highest ethical standards.",
      image: "/images/img1.jpg",
      imageAlt: "Strategic legal consultation",
      imageLeft: true,
    },
    {
      label: "OUR VALUES",
      title: "Our Values",
      content: "Integrity, professionalism, and excellence are at the core of everything we do. We believe in transparency, honesty, and accountability in our interactions with clients, colleagues, and the community. Our dedication to continuous learning and improvement ensures that we stay at the forefront of legal developments and provide our clients with the best possible representation.",
      image: "/images/img1.jpg",
      imageAlt: "Professional legal ethics and integrity",
      imageLeft: false,
    },
  ];

  return (
    <div style={{ backgroundColor: "#0D0B08" }}>
      {sections.map((section, index) => (
        <section
          key={index}
          style={{
            borderBottom: "1px solid #2A2518",
            padding: "80px 0",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              direction: section.imageLeft ? "rtl" : "ltr",
            }}>

              {/* Text Content */}
              <div style={{ direction: "ltr" }}>
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "28px", height: "1px", backgroundColor: "#C9A84C" }} />
                  <span style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif" }}>
                    {section.label}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: "300",
                  color: "#E8E0D0",
                  marginBottom: "24px",
                  lineHeight: "1.15",
                }}>
                  {section.title.split(" ")[0]}{" "}
                  <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
                    {section.title.split(" ").slice(1).join(" ")}
                  </span>
                </h2>

                {/* Gold accent line */}
                <div style={{ width: "48px", height: "1px", backgroundColor: "#C9A84C", marginBottom: "24px" }} />

                {/* Content */}
                <p style={{
                  color: "#8A7A5A",
                  fontSize: "14px",
                  lineHeight: "1.9",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  margin: 0,
                }}>
                  {section.content}
                </p>
              </div>

              {/* Image */}
              <div style={{ direction: "ltr", position: "relative" }}>
                <div style={{ position: "relative", border: "1px solid #2A2518" }}>
                  {/* Corner accents */}
                  <div style={{ position: "absolute", top: "-8px", left: "-8px", width: "28px", height: "28px", borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C", zIndex: 2 }} />
                  <div style={{ position: "absolute", bottom: "-8px", right: "-8px", width: "28px", height: "28px", borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C", zIndex: 2 }} />

                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      display: "block",
                      filter: "sepia(25%) brightness(0.7)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, rgba(201,168,76,0.08), transparent)" }} />
                </div>

                {/* Section number watermark */}
                <div style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: section.imageLeft ? "auto" : "-20px",
                  left: section.imageLeft ? "-20px" : "auto",
                  backgroundColor: "#C9A84C",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ color: "#0D0B08", fontSize: "16px", fontFamily: "Georgia, serif", fontWeight: "700" }}>
                    0{index + 1}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutusSection;