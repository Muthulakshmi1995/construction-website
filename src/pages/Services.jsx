import "./Services.css";
import Navbar from "../components/Navbar";

function Services() {
  return (
    <div className="services-page">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <h1>Building Excellence Across Every Project</h1>

        <p>
          At BluePeak Infra & Constructions, we provide end-to-end
          construction solutions — from planning and design to execution
          and handover. Our structured process, expert team, and strict
          quality standards ensure reliable and lasting results.
        </p>

      </section>


      {/* ================= COMMERCIAL ================= */}

      <section className="service-detail">

        <div className="service-detail-content">

          <h2>Commercial Construction</h2>

          <h3>Smart Infrastructure for Growing Businesses</h3>

          <p>
            From office buildings to retail spaces and warehouses, we
            construct durable and scalable commercial structures.
          </p>

          <h4>What We Offer:</h4>

          <ul>
            <li>Office complexes</li>
            <li>Retail & showroom spaces</li>
            <li>Industrial buildings</li>
            <li>Structural steel construction</li>
            <li>Compliance & safety approvals</li>
            <li>Project timeline management</li>
          </ul>

      <a href="/contact" className="service-button hover-orange">
  Discuss Your Project <span>›</span>
</a>

        </div>
<div className="service-image">
  <img
    src="/src/assets/images/c2.png"
    alt="Commercial Construction"
  />
<div className="image-hover">
  <div className="view-details-btn">
    <span>View Details</span>
    <b>›</b>
  </div>
</div>
</div>
    
      </section>


      {/* ================= MAINTENANCE ================= */}

      <section className="service-detail reverse">

    <div className="service-image">
  <img
    src="/src/assets/images/c3.png"
    alt="Commercial Construction"
  />
 <div className="image-hover">
  <div className="view-details-btn">
    <span>View Details</span>
    <b>›</b>
  </div>
</div>
</div>

        <div className="service-detail-content">

          <h2>Maintenance Services</h2>

          <h3>Protecting Your Investment</h3>

          <p>
            We provide ongoing maintenance solutions to keep your property
            safe, functional, and efficient.
          </p>

          <h4>What We Offer:</h4>

          <ul>
            <li>Electrical & plumbing repairs</li>
            <li>Structural inspections</li>
            <li>Waterproofing solutions</li>
            <li>Annual Maintenance Contracts (AMC)</li>
            <li>Emergency repair support</li>
          </ul>

          <a href="/contact" className="service-button hover-orange">
  Request Maintenance <span>›</span>
</a>

        </div>

      </section>


      {/* ================= INTERIOR ================= */}

      <section className="service-detail">

        <div className="service-detail-content">

          <h2>Interior Planning & Designing</h2>

          <h3>Designed for Comfort & Functionality</h3>

          <p>
            Our interior experts transform empty spaces into beautiful,
            functional environments tailored to your lifestyle or business
            needs.
          </p>

          <h4>What We Offer:</h4>

          <ul>
            <li>3D interior visualization</li>
            <li>Modular kitchen & wardrobe design</li>
            <li>False ceiling & lighting design</li>
            <li>Space optimization planning</li>
            <li>Material & finish selection</li>
          </ul>

         <a href="/contact" className="service-button hover-orange">
  Start Designing <span>›</span>
</a>

        </div>

       <div className="service-image">
  <img
    src="/src/assets/images/c4.png"
    alt="Commercial Construction"
  />
 <div className="image-hover">
  <div className="view-details-btn">
    <span>View Details</span>
    <b>›</b>
  </div>
</div>
</div>
      </section>


      {/* ================= RENOVATION ================= */}

      <section className="service-detail reverse">

   <div className="service-image">
  <img
    src="/src/assets/images/c5.png"
    alt="Commercial Construction"
  />
 <div className="image-hover">
  <div className="view-details-btn">
    <span>View Details</span>
    <b>›</b>
  </div>
</div>
</div> 

        <div className="service-detail-content">

          <h2>Renovation & Remodeling</h2>

          <h3>Revive, Redesign, Reimagine</h3>

          <p>
            Upgrade your existing property with modern layouts, structural
            enhancements, and fresh aesthetics.
          </p>

          <h4>What We Offer:</h4>

          <ul>
            <li>Structural strengthening</li>
            <li>Layout modifications</li>
            <li>Exterior facade upgrade</li>
            <li>Interior remodeling</li>
            <li>Budget-friendly renovation plans</li>
          </ul>

          <a href="/contact" className="service-button hover-orange">
  Plan Your Renovation <span>›</span>
</a>

        </div>

      </section>


      {/* ================= ARCHITECTURAL ================= */}

      <section className="service-detail">

        <div className="service-detail-content">

          <h2>Architectural Plans & Approvals</h2>

          <h3>Precision Planning for Perfect Execution</h3>

          <p>
            Our architects create detailed technical drawings and handle
            required approvals to ensure smooth project execution.
          </p>

          <h4>What We Offer:</h4>

          <ul>
            <li>Architectural blueprints</li>
            <li>Structural drawings</li>
            <li>3D elevation designs</li>
            <li>Vastu planning (optional)</li>
            <li>Government approvals & documentation</li>
          </ul>

          <a href="/contact" className="service-button hover-orange">
  Get Architectural Plan <span>›</span>
</a>

        </div>

    <div className="service-image">
  <img
    src="/src/assets/images/c6.png"
    alt="Commercial Construction"
  />
  <div className="image-hover">
  <div className="view-details-btn">
    <span>View Details</span>
    <b>›</b>
  </div>
</div>
</div>
      </section>


      {/* ================= CTA ================= */}

      <section className="services-cta">

        <h2>Ready to Build with Confidence?</h2>

        <p>
          Partner with BluePeak Infra & Constructions and experience
          structured planning, quality execution, and timely delivery.
        </p>
<a href="/contact" className="service-button hover-orange">
  Book Free Consultation Today <span>›</span>
</a>
      </section>


      {/* ================= FOOTER ================= */}

      <footer className="services-footer">

        <div className="footer-about">

          <img
            src="/src/assets/images/ChatGPT Image Mar 2, 2026, 12_14_05 PM.png"
            alt="BluePeak Infra & Constructions"
          />

          <p>
            Building quality spaces with trust, experience and innovation.
          </p>

        </div>


        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

        </div>


        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="/services">Commercial Construction</a>
          <a href="/services">Maintenance Services</a>
          <a href="/services">Interior Planning</a>
          <a href="/services">Renovation & Remodeling</a>
          <a href="/services">Architectural Plans</a>

        </div>


        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@bluepeakinfra.com</p>

        </div>

      </footer>


      <div className="services-footer-bottom">

        © 2026 BluePeak Infra & Constructions. All Rights Reserved.

      </div>

    </div>
  );
}

export default Services;