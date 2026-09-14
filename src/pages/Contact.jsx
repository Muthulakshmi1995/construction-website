import { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "Chennai",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <h1>Let’s Build Something Great Together</h1>

        <p>
          Have a project in mind? Get in touch with BluePeak Infra &
          Constructions today. Our experts are ready to guide you
          from planning to completion.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>
            We’re here to <span>help,</span>
            <br />
            <span>anytime</span>
          </h2>

          <div className="contact-cards">
            {/* OFFICE */}
            <div className="contact-card">
              <div className="contact-icon">⌖</div>

              <div>
                <h3>Office Address</h3>
                <p>BluePeak Infra &</p>
                <p>Constructions</p>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="contact-card">
              <div className="contact-icon">⌕</div>

              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact-card">
              <div className="contact-icon">♡</div>

              <div>
                <h3>Email Address</h3>
                <p>info@bluepeak.com</p>
                <p>support@bluepeak.com</p>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="contact-card">
              <div className="contact-icon">◷</div>

              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            {/* NAME + EMAIL */}
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PHONE + PROJECT TYPE */}
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>

                <div className="phone-input">
                  <span>🇮🇳</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91- Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Project Type</label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Interior">Interior</option>
                  <option value="Renovation">Renovation</option>
                </select>
              </div>
            </div>

            {/* LOCATION */}
            <div className="form-group location-group">
              <label>Location</label>

              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* SEND BUTTON */}
            <button type="submit" className="send-btn hover-orange">
              <span>Send Message</span>
              <b>›</b>
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="map-card">
          {/* LOCATION BOX */}
          <div className="map-label">
            <strong>India</strong>
            <span>Chennai, Tamil Nadu</span>
          </div>

          {/* LOCATION MARKER */}
          <div className="map-marker">
            <div className="map-marker-pin"></div>
            <div className="map-marker-dot"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Ready to Start Your Construction Journey?</h2>

        <p>
          Book a free technical consultation and get a transparent cost
          estimate for your project.
        </p>

        <button className="hover-orange">
          <span>Book Free Consultation Today</span>
          <b>›</b>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <div className="footer-about">
          <img
            src="/src/assets/images/ChatGPT Image Mar 2, 2026, 12_14_05 PM.png"
            alt="BluePeak Infra & Constructions"
          />

          <p>
            Premium construction materials with guaranteed quality,
            price protection, and 24/7 support for your projects.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <a href="/services">Residential Construction</a>
          <a href="/services#commercial">Commercial Construction</a>
          <a href="/services#maintenance">Maintenance Services</a>
          <a href="/services#interior">
            Interior Planning & Designing
          </a>
          <a href="/services#renovation">Renovation & Remodeling</a>
          <a href="/services#architectural">
            Architectural Plans & Approvals
          </a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 123 Construction Ave, Building District, City 12345</p>
          <p>📞 +91-1234567890</p>
          <p>✉ info@supportconstruction.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;