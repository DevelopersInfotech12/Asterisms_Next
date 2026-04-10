"use client";

import React, { useState } from 'react';

const CareerComp = () => {
  const [activeTab, setActiveTab] = useState('internship');
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const tabs = [
    { id: 'internship', label: 'Internship' },
    { id: 'assessment', label: 'Assessment Internship' },
    { id: 'associate', label: 'Associate' }
  ];

  const practiceAreas = [
    'Bankruptcy & Insolvency',
    'Banking Law',
    'Commercial & Corporate',
    'Civil Law',
    'Criminal Law',
    'Family Law',
    'Arbitration'
  ];

  const inputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #2a2418',
    color: '#c5bfb3',
    fontFamily: 'Arial, sans-serif',
    fontSize: '0.88rem',
    padding: '0.5rem 0',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s'
  };

  const labelStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '10px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#c9a84c',
    display: 'block',
    marginBottom: '0.3rem'
  };

  const sectionLabel = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '10px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#c9a84c',
    marginBottom: '1.2rem',
    paddingBottom: '0.6rem',
    borderBottom: '1px solid #2a2418',
    display: 'block'
  };

  const UploadBox = () => (
    <div style={{ border: '1px solid #2a2418', background: '#141210', padding: '1.2rem', textAlign: 'center', cursor: 'pointer' }}>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.82rem', color: '#6e665a', margin: 0 }}>
        <span style={{ color: '#c9a84c' }}>Click to upload</span> or drag & drop · PDF preferred · Max 10MB
      </p>
    </div>
  );

  const PracticeSelect = ({ name, label, required }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <select name={name} onChange={handleChange} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
        <option value="" disabled selected>Select area</option>
        {practiceAreas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>
    </div>
  );

  const Field = ({ name, label, placeholder, required, full }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: full ? '1 / -1' : undefined }}>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        style={{ ...inputStyle }}
      />
    </div>
  );

  const TextArea = ({ name, label, placeholder, required }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: '1 / -1' }}>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        rows={4}
        style={{ ...inputStyle, resize: 'vertical' }}
      />
    </div>
  );

  const SubmitRow = ({ note }) => (
    <div style={{ marginTop: '1.8rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: '0.7rem 2rem',
          background: submitted ? '#141210' : '#c9a84c',
          border: '1px solid #c9a84c',
          color: submitted ? '#c9a84c' : '#0f0e0c',
          fontFamily: 'Arial, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'all 0.2s'
        }}
      >
        {submitted ? '✓ Submitted' : 'Submit Application'}
      </button>
      <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.78rem', color: '#4e4840' }}>{note}</span>
    </div>
  );

  const formGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem 2rem' };

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: '#0f0e0c', color: '#f5f0e8', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(160deg, #0f0e0c 60%, #1a1710 100%)', padding: '3rem 2rem 2rem', borderBottom: '1px solid #2a2418' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.18em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Asterisms Legal · Careers
        </p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 400, color: '#f5f0e8', lineHeight: 1.2, margin: '0 0 0.5rem' }}>
          Join <em style={{ color: '#c9a84c' }}>Asterisms Legal.</em>
        </h1>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.95rem', color: '#9e9484', maxWidth: '520px', lineHeight: 1.7, margin: '1rem 0 0' }}>
          We are a Asterisms Legal practice from Defence Colony, New Delhi. We look for exceptional legal minds who value precision, intellectual rigour, and substantive work from day one.
        </p>
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 2rem' }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, border: '1px solid #2a2418', marginBottom: '2.5rem', width: 'fit-content' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.6rem',
                cursor: 'pointer',
                border: 'none',
                borderRight: '1px solid #2a2418',
                color: activeTab === tab.id ? '#0f0e0c' : '#7a7268',
                background: activeTab === tab.id ? '#c9a84c' : '#0f0e0c',
                fontWeight: activeTab === tab.id ? 700 : 400,
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- INTERNSHIP --- */}
        {activeTab === 'internship' && (
          <div>
            <span style={sectionLabel}>Internship</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#f5f0e8', margin: '0 0 0.7rem' }}>Law Student Internship</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.88rem', color: '#9e9484', lineHeight: 1.8, margin: '0 0 2rem' }}>
              We welcome law students from the 3rd year onwards for internships across our practice areas. Interns at Asterisms Legal are given real work — drafting, research, and court assistance — not administrative tasks. Duration: 4–8 weeks.
            </p>
            <div style={formGrid}>
              <Field name="name" label="Full Name" placeholder="Your full name" required />
              <Field name="email" label="Email Address" placeholder="your@email.com" required />
              <Field name="phone" label="Phone Number" placeholder="+91 XXXXX XXXXX" required />
              <Field name="university" label="University / Law School" placeholder="Name of your institution" required />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Year of Study *</label>
                <select name="year" onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="" disabled selected>Select year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                  <option>5th Year</option>
                  <option>LLM</option>
                </select>
              </div>
              <PracticeSelect name="area" label="Preferred Practice Area" />
              <Field name="startDate" label="Preferred Start Date" placeholder="e.g. June 2025" />
              <Field name="duration" label="Duration (weeks)" placeholder="e.g. 4 weeks" />
              <TextArea name="coverNote" label="Cover Note" placeholder="Briefly tell us why you want to intern at Asterisms Legal and what you hope to learn" required />
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Upload CV / Resume</label>
                <UploadBox />
              </div>
            </div>
            <SubmitRow note="We review applications on a rolling basis." />
          </div>
        )}

        {/* --- ASSESSMENT INTERNSHIP --- */}
        {activeTab === 'assessment' && (
          <div>
            <span style={sectionLabel}>Assessment Internship</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#f5f0e8', margin: '0 0 0.7rem' }}>Assessment Internship</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.88rem', color: '#9e9484', lineHeight: 1.8, margin: '0 0 2rem' }}>
              Our assessment internship is a structured 2-week programme designed to evaluate candidates for potential long-term association. Candidates will be given assignments, research tasks, and courtroom observation opportunities to demonstrate their capabilities.
            </p>
            <div style={formGrid}>
              <Field name="name" label="Full Name" placeholder="Your full name" required />
              <Field name="email" label="Email Address" placeholder="your@email.com" required />
              <Field name="phone" label="Phone Number" placeholder="+91 XXXXX XXXXX" required />
              <Field name="university" label="University / Law School" placeholder="Name of your institution" required />
              <Field name="yearGrad" label="Year of Study / Graduation Year" placeholder="e.g. 5th Year / 2025" required />
              <Field name="cgpa" label="CGPA / Percentage" placeholder="Academic performance" />
              <Field name="startDate" label="Preferred Start Date" placeholder="e.g. July 2025" required />
              <PracticeSelect name="area" label="Area of Interest" required />
              <TextArea name="sop" label="Statement of Purpose" placeholder="Describe your interest in law, areas of focus, and what you bring to this programme" required />
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Upload CV + Writing Sample</label>
                <UploadBox />
              </div>
            </div>
            <SubmitRow note="Shortlisted candidates will be contacted within 7 working days." />
          </div>
        )}

        {/* --- ASSOCIATE --- */}
        {activeTab === 'associate' && (
          <div>
            <span style={sectionLabel}>Associate Position</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#f5f0e8', margin: '0 0 0.7rem' }}>Associate Position</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.88rem', color: '#9e9484', lineHeight: 1.8, margin: '0 0 2rem' }}>
              We are looking for advocates with 1–5 years of post-enrolment experience who are passionate about building a serious legal practice. Associates at Asterisms Legal work on substantive matters from day one. We value intellectual rigour, drafting ability, and a genuine appetite for litigation and advisory work.
            </p>
            <div style={formGrid}>
              <Field name="name" label="Full Name" placeholder="Your full name" required />
              <Field name="email" label="Email Address" placeholder="your@email.com" required />
              <Field name="phone" label="Phone Number" placeholder="+91 XXXXX XXXXX" required />
              <Field name="barNumber" label="Bar Enrolment Number" placeholder="Bar Council enrolment number" required />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Years of Experience *</label>
                <select name="experience" onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="" disabled selected>Select range</option>
                  <option>0–1 Year</option>
                  <option>1–2 Years</option>
                  <option>2–3 Years</option>
                  <option>3–5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>
              <Field name="currentFirm" label="Current / Previous Firm" placeholder="Name of firm (if any)" />
              <PracticeSelect name="primaryArea" label="Primary Practice Area" required />
              <PracticeSelect name="secondaryArea" label="Secondary Practice Area" />
              <TextArea name="notableCases" label="Notable Cases / Work" placeholder="Briefly describe 2–3 significant matters you have worked on" required />
              <TextArea name="whyAL" label="Why Asterisms Legal?" placeholder="Tell us why you want to join Asterisms Legal and what you bring to the firm" required />
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Upload CV + Writing Sample</label>
                <UploadBox />
              </div>
            </div>
            <SubmitRow note="We treat all applications with strict confidentiality." />
          </div>
        )}

      </div>
    </div>
  );
};

export default CareerComp;