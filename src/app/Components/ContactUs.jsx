'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Linkedin, Instagram } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 3000);
    }, 2000);
  };

  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#141210", border: "1px solid #2a2418", color: "#c5bfb3", fontFamily: "Arial, sans-serif", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "0.5rem" };
  const fieldGap = { marginBottom: "1.2rem" };

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#0f0e0c", color: "#f5f0e8", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)", padding: "3rem 2rem 2rem", borderBottom: "1px solid #2a2418" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "1rem" }}>Asterisms Legal · Contact</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 400, color: "#f5f0e8", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
          Get In Touch.<br /><em style={{ color: "#c9a84c" }}>Let's Discuss.</em>
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.95rem", color: "#9e9484", maxWidth: "460px", lineHeight: 1.7, margin: "1rem 0 0" }}>
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2418", border: "1px solid #2a2418" }}>

          {/* Contact Info */}
          <div style={{ background: "#0f0e0c", padding: "2rem" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
              Contact Information
            </div>

            {[
              { label: "Location", value: "B - 18, LGF, Defence Colony\nNew Delhi - 110024" },
              { label: "Phone", value: "+91-9811898418\n+91-9910356257" },
              { label: "Email", value: "asterismslegal@gmail.com" }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: "1.6rem" }}>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e665a", marginBottom: "0.4rem" }}>{item.label}</div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.88rem", color: "#c5bfb3", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</div>
              </div>
            ))}

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #2a2418" }}>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e665a", marginBottom: "0.8rem" }}>Follow Us</div>
              <div style={{ display: "flex", gap: "0.8rem" }}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#141210", border: "1px solid #2a2418", color: "#c9a84c", textDecoration: "none" }}>
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "#141210", border: "1px solid #2a2418", color: "#c9a84c", textDecoration: "none" }}>
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div style={{ marginTop: "1.5rem", border: "1px solid #2a2418", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5103459886956!2d77.225781!3d28.572814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35b16740f3b%3A0xa36b87ea84da1c0c!2s28%C2%B034'19.2%22N%2077%C2%B013'43.3%22E!5e0!3m2!1sen!2sin!4v1694613952928!5m2!1sen!2sin"
                width="100%" height="180" style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.85) sepia(0.3)" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#0f0e0c", padding: "2rem" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem", paddingBottom: "0.6rem", borderBottom: "1px solid #2a2418" }}>
              Send a Message
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
              <div>
                <label style={labelStyle}>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" style={inputStyle} />
              </div>
            </div>

            <div style={fieldGap}>
              <label style={labelStyle}>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" style={inputStyle} />
            </div>

            <div style={fieldGap}>
              <label style={labelStyle}>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={8} placeholder="Your message" style={{ ...inputStyle, resize: "none" }} />
            </div>

            <button onClick={handleSubmit} disabled={isSubmitting || isSubmitted}
              style={{ width: "100%", padding: "0.85rem", background: isSubmitted ? "#1e1a10" : "#c9a84c", border: "1px solid #c9a84c", color: isSubmitted ? "#c9a84c" : "#0f0e0c", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", cursor: isSubmitting || isSubmitted ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? (
                <><div style={{ width: "14px", height: "14px", border: "2px solid #0f0e0c", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}></div> Sending...</>
              ) : isSubmitted ? (
                <><CheckCircle size={14} /> Message Sent</>
              ) : (
                <><Send size={14} /> Send Message</>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;