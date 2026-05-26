import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Hammer, Truck, ShieldCheck, Building2, CheckCircle2 } from "lucide-react";
import "./styles.css";

function VVDemolitionWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    projectType: "",
    details: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New Estimate Request from ${formData.name || "Website Lead"}`);
    const body = encodeURIComponent(
      `New estimate request from V&V Demolition LLC website\n\n` +
      `Name: ${formData.name}\n` +
      `Phone or Email: ${formData.contact}\n` +
      `Project Address: ${formData.address}\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Project Details:\n${formData.details}\n\n` +
      `Please contact this customer to schedule an estimate.`
    );
    window.location.href = `mailto:vandvdemolitionllc@gmail.com?subject=${subject}&body=${body}`;
  };

  const services = [
    "Demolition",
    "Hardscape / Landscape",
    "Dirt Work",
    "Land Clearing",
    "Tree Trimming",
    "Junk Removal",
    "Hauling",
  ];

  const features = [
    { icon: ShieldCheck, title: "Safe & Professional", text: "Job sites handled with safety, planning, and clean execution from start to finish." },
    { icon: Truck, title: "Haul-Off Included", text: "Debris removal, dump runs, and cleanup can be included in your project estimate." },
    { icon: Building2, title: "Residential & Commercial", text: "From small tear-outs to larger demo projects, V&V Demolition LLC is ready to help." },
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <div className="brand">
            <img src="/logo.png" alt="V&V Demolition LLC Logo" className="brand-logo" />
            <div>
              <p className="brand-name">V&V Demolition LLC</p>
              <p className="brand-tag">Precision Meets Possibility</p>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-small" href="#contact">Get Estimate</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="badge">Demolition • Hardscape/Landscape • Dirt Work • Land Clearing • Tree Trimming • Junk Removal • Hauling</p>
            <h1>Professional demolition done right.</h1>
            <p className="hero-text">V&V Demolition LLC provides dependable demolition, hardscape and landscape services, dirt work, debris removal, and site preparation for homeowners, contractors, and businesses.</p>
            <div className="hero-actions">
              <a className="btn" href="#contact">Request a Free Estimate</a>
              <a className="btn-outline" href="#services">View Services</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="logo-card">
            <img src="/logo.png" alt="V&V Demolition LLC" className="main-logo" />
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2>Services</h2>
          </div>
          <Hammer className="section-icon" />
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service} className="service-card">
              <CheckCircle2 className="check" />
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="watermark left">V&V</div>
        <div className="watermark right">V&V</div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature-card">
              <Icon className="feature-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact-shell">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Get Started</p>
              <h2>Need an estimate?</h2>
              <p className="contact-text">Send project details, photos, and the address. We’ll help you price the work and plan the cleanout.</p>
              <div className="contact-info">
                <a href="tel:2055045947"><Phone /> 205-504-5947</a>
                <a href="mailto:vandvdemolitionllc@gmail.com"><Mail /> vandvdemolitionllc@gmail.com</a>
                <p><MapPin /> Serving Alabama and surrounding areas</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="estimate-form">
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
              <input name="contact" value={formData.contact} onChange={handleChange} required placeholder="Phone or Email" />
              <input name="address" value={formData.address} onChange={handleChange} required placeholder="Project Address" />
              <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                <option value="">Select Project Type</option>
                <option value="Demolition">Demolition</option>
                <option value="Hardscape / Landscape">Hardscape / Landscape</option>
                <option value="Dirt Work">Dirt Work</option>
                <option value="Land Clearing">Land Clearing</option>
                <option value="Tree Trimming">Tree Trimming</option>
                <option value="Junk Removal">Junk Removal</option>
                <option value="Hauling">Hauling</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="details" value={formData.details} onChange={handleChange} required placeholder="Tell us about the project" />
              <button type="submit" className="btn form-btn">Send Estimate Request</button>
              <p className="form-note">This opens an email with the customer’s request already filled out.</p>
            </form>
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} V&V Demolition LLC. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<VVDemolitionWebsite />);
