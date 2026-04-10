'use client'
import { useState } from 'react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+919910356257"
  const message = "Hi! I'm interested in Legal Advice."

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 50, fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* Chat bubble */}
      {isOpen && (
        <div style={{
          marginBottom: "1rem", background: "#141210", border: "1px solid #2a2418",
          padding: "1.4rem", width: "240px",
          animation: "fadeInUp 0.3s ease-out"
        }}>
          <div style={{ marginBottom: "0.8rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 0.3rem" }}>Asterisms Legal</p>
            <h4 style={{ fontSize: "1rem", fontWeight: 400, color: "#f5f0e8", margin: 0 }}>Support</h4>
          </div>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.82rem", color: "#7a7268", lineHeight: 1.6, margin: "0 0 1.2rem" }}>
            Hi! How can we help you with your legal needs today?
          </p>
          <button onClick={openWhatsApp} style={{
            width: "100%", padding: "0.65rem", background: "#c9a84c", border: "1px solid #c9a84c",
            color: "#0f0e0c", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.14em",
            textTransform: "uppercase", cursor: "pointer", fontWeight: 600
          }}>
            Start Chat
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <button onClick={() => setIsOpen(!isOpen)} style={{
          background: "#25d366", border: "none", borderRadius: "50%",
          width: "52px", height: "52px", display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          transition: "transform 0.2s", color: "white"
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>

        {/* Logo badge */}
        <div style={{
          position: "absolute", top: "-4px", left: "-4px", width: "20px", height: "20px",
          background: "#0f0e0c", border: "1px solid #2a2418", borderRadius: "50%",
          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <img src="/images/logo.png" alt="AL"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onError={e => { e.target.style.display = "none"; e.target.parentElement.innerHTML = '<span style="color:#c9a84c;font-size:8px;font-weight:bold;font-family:Arial">A</span>'; }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;