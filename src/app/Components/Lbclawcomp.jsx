"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, FileText } from 'lucide-react';

const Lbclawcomp = ({ title, description, brochurePdfUrl, fileName, whatsInside, moreInfoTitle, moreInfoDesc, moreInfoButtonText, moreInfoButtonLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = brochurePdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>Asterisms Legal · Document Library</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: 0 }}>
          <em style={{ color: "#c9a84c" }}>{title}</em>
        </h1>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2.5rem 2rem" }}>

        {/* Header bar */}
        <div style={{ background: "#141210", border: "1px solid #2a2418", padding: "1.2rem 1.6rem", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <FileText size={16} color="#c9a84c" />
            <div>
              <div style={{ fontSize: "1rem", color: "#f5f0e8" }}>{title}</div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e665a", marginTop: "0.2rem" }}>Interactive PDF Viewer</div>
            </div>
          </div>
          <button onClick={handleDownload} disabled={isDownloading} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            padding: "0.6rem 1.4rem", background: isDownloading ? "#141210" : "#c9a84c",
            border: "1px solid #c9a84c", color: isDownloading ? "#c9a84c" : "#0f0e0c",
            fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
            textTransform: "uppercase", cursor: isDownloading ? "wait" : "pointer", fontWeight: 600, transition: "all 0.2s"
          }}>
            <Download size={14} /> {isDownloading ? 'Downloading...' : 'Download PDF'}
          </button>
        </div>

        {/* PDF Viewer */}
        <div style={{ border: "1px solid #2a2418", borderTop: "none", marginBottom: "1.5rem" }}>
          <iframe src={brochurePdfUrl} title={title}
            style={{ width: "100%", height: "600px", border: "none", display: "block", background: "#141210" }} />
        </div>

        {/* Info grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>

          {/* What's Inside */}
          <div style={{ background: "#0f0e0c", padding: "1.6rem" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
              What's Inside
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {whatsInside.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                  <div style={{ width: "5px", height: "5px", background: "#c9a84c", borderRadius: "50%", marginTop: "7px", flexShrink: 0 }}></div>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#c5bfb3", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info */}
          <div style={{ background: "#141210", padding: "1.6rem" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
              {moreInfoTitle}
            </div>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#7a7268", lineHeight: 1.7, margin: "0 0 1.4rem" }}>{moreInfoDesc}</p>
            <Link href={moreInfoButtonLink}>
              <button style={{
                padding: "0.6rem 1.4rem", background: "transparent", border: "1px solid #c9a84c",
                color: "#c9a84c", fontFamily: "Arial, sans-serif", fontSize: "11px",
                letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer"
              }}>
                {moreInfoButtonText}
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lbclawcomp;