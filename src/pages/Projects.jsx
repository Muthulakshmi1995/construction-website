import { useState } from "react";
import "./Projects.css";
import Navbar from "../components/Navbar";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      image: "/images/images/pr1.png",
      title: "Lakeview Villa – Chennai",
      location: "Chennai",
      size: "3,200 Sq.ft",
      category: "Residential",
    },
    {
      id: 2,
      image: "/images/images/pr2.png",
      title: "Metro Business Hub- Bangalore",
      location: "Bangalore",
      size: "12,000 Sq.ft",
      category: "Commercial",
    },
    {
      id: 3,
      image: "/images/images/pr3.png",
      title: "Green Meadows Residence",
      location: "Coimbatore",
      size: "2,400 Sq.ft",
      category: "Residential",
    },
    {
      id: 4,
      image: "/images/images/pr4.png",
      title: "Skyline Retail Plaza",
      location: "Hyderabad",
      size: "8,500 Sq.ft",
      category: "Commercial",
    },
    {
      id: 5,
      image: "/images/images/pr5.png",
      title: "Heritage Home Renovation",
      location: "Chennai",
      size: "1,800 Sq.ft",
      category: "Renovation",
    },
    {
      id: 6,
      image: "/images/images/pr6.png",
      title: "Palm Grove Apartments",
      location: "Trichy",
      size: "15,000 Sq.ft",
      category: "Residential",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Interior",
    "Renovation",
  ];

  return (
    <div className="projects-page">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="projects-hero">

        <h1>Building Landmarks. Delivering Excellence.</h1>

        <p>
          At BluePeak Infra & Constructions, every project reflects our
          commitment to quality, transparency, and timely delivery.
          Explore our completed and ongoing projects across residential
          and commercial sectors.
        </p>

      </section>


      {/* ================= FILTERS ================= */}

      <section className="projects-section">

        <div className="project-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="project-grid">

          {filteredProjects.map((project) => (

            <div className="project-card" key={project.id}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <h2>{project.title}</h2>

              <p>
                {project.location} | {project.size}
              </p>

              <button className="view-project hover-orange">
                View Project <span>→</span>
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="projects-cta">

        <h2>Ready to Build with Confidence?</h2>

        <p>
          Partner with BluePeak Infra & Constructions and experience
          structured planning, quality execution, and timely delivery.
        </p>

        <button className="hover-orange">
          Book Free Consultation Today <span>›</span>
        </button>

        <div className="cta-points">

          <span>● ISO Certified</span>
          <span>● Quality Assured</span>
          <span>● Trusted Partner</span>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="projects-footer">

        <div className="footer-about">

          <img
            src="/images/images/ChatGPT Image Mar 2, 2026, 12_14_05 PM.png"
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

export default Projects;