import React from 'react';

const OtherHero = ({ title, subtitle }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "384px", overflow: "hidden" }}>
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "sepia(30%) brightness(0.55)",
        }}
      />

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 8, 5, 0.65)" }} />

      {/* Gold bottom border accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", backgroundColor: "#C9A84C" }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding: "0 96px",
      }}>
        <div style={{ maxWidth: "720px" }}>
          {/* Eyebrow line */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "36px", height: "1px", backgroundColor: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif" }}>
              ASTERISMS LEGAL
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "300",
            color: "#E8E0D0",
            lineHeight: "1.1",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: "300",
              color: "#C9A84C",
              fontStyle: "italic",
              letterSpacing: "0.05em",
              margin: 0,
            }}>
              {subtitle}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherHero;