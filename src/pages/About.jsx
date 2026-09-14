import "./About.css";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Building Landmarks. Delivering Excellence.</h1>

          <p>
            At BluePeak Infra & Constructions, every project reflects our
            commitment to quality, transparency, and timely delivery.
            Explore our completed and ongoing projects across residential
            and commercial sectors.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>1,200+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>98.5%</h2>
          <p>Satisfaction Rate</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            BluePeak Infra & Constructions was founded with a clear mission —
            to bring transparency, quality, and reliability into the
            construction industry. What began as a small team of dedicated
            engineers and designers has grown into a trusted partner for
            residential and commercial projects, delivering structured
            planning, transparent pricing, and strict quality control at
            every stage.
          </p>

          <p>
            Over the years, we have successfully completed hundreds of
            projects, introduced advanced 3D design and VR walkthrough
            experiences, and built long-lasting relationships based on trust
            and performance. At BluePeak, we don't just construct buildings —
            we create strong foundations for dreams, businesses, and future
            generations.
          </p>
        </div>

        <div className="story-images">
          <img
            className="story-main-image"
            src="/src/assets/images/c2.png"
            alt="Construction team"
          />

          <img
            className="story-small-image"
            src="/src/assets/images/ChatGPT Image Mar 2, 2026, 02_19_55 PM.png"
            alt="Design consultation"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="mission-card">
          <img
            src="/src/assets/images/Mission-PNG-Clipart-Background.png"
            alt="Mission"
          />

          <h2>Our Mission</h2>

          <p>
            To deliver construction services with transparency, precision,
            and timely execution. We are committed to maintaining strict
            quality standards, fair pricing, and structured project
            management to ensure complete customer satisfaction at every
            stage.
          </p>
        </div>

        <div className="vision-card">
          <img
            src="/src/assets/images/ec470275507757cef73993b78b1027c4.jpg"
            alt="Vision"
          />

          <h2>Our Vision</h2>

          <p>
            To be a trusted leader in construction, known for innovation,
            reliability, and excellence in engineering — building spaces that
            stand strong, inspire confidence, and create lasting value for
            generations.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <img
              src="/src/assets/images/images.png"
              alt="Integrity"
            />
            <h3>Integrity</h3>
            <p>
              We maintain complete transparency in pricing, communication,
              and project execution to build lasting trust.
            </p>
          </div>

          <div className="value-card">
            <img
              src="/src/assets/images/premium-certified-quality-stamp_78370-1800.avif"
              alt="Quality"
            />
            <h3>Quality</h3>
            <p>
              Strict quality checks and premium materials ensure every
              structure is strong, safe, and durable.
            </p>
          </div>

          <div className="value-card">
            <img
              src="/src/assets/images/11320141.png"
              alt="Commitment"
            />
            <h3>Commitment</h3>
            <p>
              We are dedicated to delivering projects on time while
              maintaining the highest construction standards.
            </p>
          </div>

          <div className="value-card">
            <img
              src="/src/assets/images/1083501.png"
              alt="Customer Focus"
            />
            <h3>Customer Focus</h3>
            <p>
              We design and build every project around our client's vision,
              needs, and long-term satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p className="team-subtitle">
          Experienced professionals dedicated to your success
        </p>

        <div className="team-grid">
          <div className="team-member">
            <img src="/src/assets/images/P1.png" alt="Robert Anderson" />
            <h3>Robert Anderson</h3>
            <p>Chief Executive Officer</p>
          </div>

          <div className="team-member">
            <img src="/src/assets/images/p2.png" alt="Jennifer Martinez" />
            <h3>Jennifer Martinez</h3>
            <p>Head of Design</p>
          </div>

          <div className="team-member">
            <img src="/src/assets/images/p3.png" alt="Michael Thompson" />
            <h3>Michael Thompson</h3>
            <p>Project Manager</p>
          </div>

          <div className="team-member">
            <img src="/src/assets/images/p4.png" alt="Sarah Williams" />
            <h3>Sarah Williams</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Join Our Growing Family</h2>

        <p>Be part of a team that's building the future of construction</p>

        <button className="hover-orange">
          Book Free Consultation Today <span>›</span>
        </button>

        <div className="cta-points">
          <span>● ISO Certified</span>
          <span>● Quality Assured</span>
          <span>● Trusted Partner</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
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
          <a href="/services">Commercial Construction</a>
          <a href="/services">Maintenance Services</a>
          <a href="/services">Interior Planning & Designing</a>
          <a href="/services">Renovation & Remodeling</a>
          <a href="/services">Architectural Plans & Approvals</a>
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

export default About;