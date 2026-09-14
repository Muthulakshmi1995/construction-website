import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const A = "/src/assets/images/";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    location: "Chennai",
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: "66",
      stars: "★★★★★",
      text:
        "The pricing was transparent and there were no hidden charges. The project was completed on time and the finishing quality was excellent.",
      name: "Priya Sharma",
      role: "Villa Construction - Bangalore",
      image: "businesswoman-posing_23-2148142829.avif",
    },
    {
      rating: "66",
      stars: "★★★★★",
      text:
        "Excellent planning, clear communication and quality execution throughout the project. The team was professional and reliable.",
      name: "Ananya Menon",
      role: "Residential Project - Chennai",
      image: "p2.png",
    },
    {
      rating: "66",
      stars: "★★★★★",
      text:
        "From design to completion, everything was handled smoothly. I would definitely recommend the team for construction projects.",
      name: "Rahul Verma",
      role: "Commercial Project - Bangalore",
      image: "p3.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you ${formData.name || "Customer"}! We will contact you soon.`
    );
  };

  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      text: "Custom-built homes with quality and timely delivery.",
      image: "c1.png",
    },
    {
      id: "commercial",
      title: "Commercial Construction",
      text: "Modern and durable spaces designed for business.",
      image: "c2.png",
    },
    {
      id: "maintenance",
      title: "Maintenance Services",
      text: "Reliable repair and upkeep solutions for your property.",
      image: "c3.png",
    },
    {
      id: "interior",
      title: "Interior Planning & Designing",
      text: "Smart, stylish interiors tailored to your lifestyle.",
      image: "c4.png",
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      text: "Upgrade old spaces into modern, functional designs.",
      image: "c5.png",
    },
    {
      id: "architectural",
      title: "Architectural Plans",
      text: "Accurate blueprints and approval-ready designs.",
      image: "c6.png",
    },
  ];

  const whyChooseUs = [
    {
      icon: "✓",
      title: "Guaranteed Price Protection",
      text: "No hidden costs. No surprises. Transparent and detailed quotations before project start.",
    },
    {
      icon: "✓",
      title: "440+ Quality Checks",
      text: "Every stage of construction undergoes strict quality inspection.",
    },
    {
      icon: "◷",
      title: "Timely Delivery",
      text: "We follow structured planning and milestone tracking to ensure on-time completion.",
    },
    {
      icon: "▣",
      title: "Payment in Stages",
      text: "Pay in flexible construction-linked stages for financial convenience.",
    },
    {
      icon: "⌁",
      title: "24/7 Real-Time Tracking",
      text: "Monitor your project progress digitally from anywhere.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Technical Consultation",
      text:
        "Share your vision, site requirements and expectations with our experienced team. We understand your needs, review the project scope and guide you toward the right approach.",
      image: "ChatGPT Image Mar 2, 2026, 02_19_55 PM.png",
    },
    {
      number: "2",
      title: "Booking",
      text:
        "Once the requirements are clear, our team prepares the next steps and helps you move forward confidently with transparent communication and project coordination.",
      image: "ChatGPT Image Mar 2, 2026, 02_21_10 PM.png",
    },
    {
      number: "3",
      title: "Design and Planning",
      text:
        "Collaborate with our experienced designers and planners to refine your requirements, layouts, materials and execution strategy before work begins.",
      image: "ChatGPT Image Mar 2, 2026, 02_23_26 PM.png",
    },
    {
      number: "4",
      title: "Home Construction",
      text:
        "Our execution team manages the construction process with quality checks, regular updates and structured supervision from foundation to finishing.",
      image: "ChatGPT Image Mar 2, 2026, 02_01_01 PM.png",
    },
    {
      number: "5",
      title: "Move-in",
      text:
        "Once the work is completed and quality checks are finished, we hand over your completed space so you can move in with confidence.",
      image: "ChatGPT Image Mar 2, 2026, 02_25_23 PM.png",
    },
  ];

  const banks = [
    "bajaj.webp",
    "basic.webp",
    "godrej.webp",
    "hdfc_home_loan.webp",
    "housing.webp",
    "sbi_home_loan.webp",
  ];

  return (
    <div className="home-page">
      <Navbar />

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Build Your Future with
              <span>Confidence</span>
            </h1>

            <p>
              Premium construction materials with guaranteed quality checks,
              price protection, and 24/7 project tracking.
            </p>
          </div>

          <div className="expert-card" id="expert">
            <h2>Talk to Our Expert</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="🇮🇳 +91 - Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="">Project Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Interior">Interior</option>
                <option value="Renovation">Renovation</option>
              </select>

              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>

              <button type="submit" className="hero-consult-btn hover-orange">
                <span>Book Free Consultation</span>
                <b>›</b>
              </button>
            </form>
          </div>
        </div>

       
      </section>

      {/* SERVICES */}
      <section className="services-home section-white">
        <div className="section-heading">
          <h2>Our Services</h2>
        </div>

        <div className="services-home-grid">
          {services.map((service, index) => (
            <div className="service-home-card" key={index}>
              <div className="service-card-image">
                <img src={`${A}${service.image}`} alt={service.title} />

                <div className="service-hover">
                  <a
                    href={`/services${
                      service.id === "residential" ? "" : `#${service.id}`
                    }`}
                    className="view-details-btn"
                  >
                    <span>View Details</span>
                    <b>›</b>
                  </a>
                </div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED */}
      <section className="trusted-section">
        <div className="trusted-icon">
          <img src={`${A}11320141.png`} alt="Trusted" />
        </div>

        <div className="trusted-text">
          <h2>Trusted by 500+ Happy Clients Across India</h2>
          <p>
            From independent homes to large commercial projects, we have
            successfully delivered spaces that stand strong and inspire
            confidence.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section section-white">
        <div className="section-heading">
          <h2>Why Choose Us</h2>
          <p>
            Comprehensive solutions designed for modern construction projects
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div className={`why-card why-card-${index + 1}`} key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VR */}
      <section className="vr-section">
        <div className="vr-content">
          <div className="vr-left">
            <h2>Experience Your Project in Virtual Reality</h2>

            <p>
              Walk through your construction project before it’s built. Our VR
              technology lets you visualize every detail, make changes in
              real-time, and ensure everything meets your expectations.
            </p>

            <ul>
              <li>Immersive 3D visualization</li>
              <li>Real-time modifications</li>
              <li>Multi-user collaboration</li>
              <li>Cost-saving insights</li>
            </ul>

            <a href="/contact" className="small-yellow-btn hover-orange">
              Book Free Consultation
              <span>›</span>
            </a>
          </div>

          <div className="vr-image-card">
            <img
              src={`${A}ChatGPT Image Mar 2, 2026, 02_01_01 PM.png`}
              alt="Virtual Reality Project"
            />

            <div className="vr-project-number">
              <small>Active Projects</small>
              <strong>1,247</strong>
            </div>

            <div className="vr-satisfaction">
              <small>Satisfaction Rate</small>
              <strong>98.5%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section section-white">
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>A streamlined process designed for efficiency and transparency</p>
        </div>

        <div className="timeline">
          {processSteps.map((step, index) => (
            <div
              className={`timeline-row ${
                index % 2 === 0 ? "row-left" : "row-right"
              }`}
              key={step.number}
            >
              <div className="timeline-side timeline-image">
                <img src={`${A}${step.image}`} alt={step.title} />
              </div>

              <div className="timeline-number">
                <span>{step.number}</span>
              </div>

              <div className="timeline-side timeline-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="section-heading dark-heading">
          <h2>What Our Clients Say</h2>
          <p>Trusted by happy customers across the country</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-rating-number">
            {testimonials[currentTestimonial].rating}
          </div>

          <div className="testimonial-stars">
            {testimonials[currentTestimonial].stars}
          </div>

          <p className="testimonial-text">
            “{testimonials[currentTestimonial].text}”
          </p>

          <div className="testimonial-user">
            <img
              src={`${A}${testimonials[currentTestimonial].image}`}
              alt={testimonials[currentTestimonial].name}
            />

            <div>
              <h3>{testimonials[currentTestimonial].name}</h3>
              <p>{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-controls">
          <button
            onClick={() =>
              setCurrentTestimonial(
                (prev) =>
                  (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            ‹
          </button>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentTestimonial ? "active" : ""}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
            }
          >
            ›
          </button>
        </div>

        <div className="stats-row">
          <div>
            <strong>500+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>1,200+</strong>
            <span>Projects Completed</span>
          </div>

          <div>
            <strong>98.5%</strong>
            <span>Satisfaction Rate</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support Available</span>
          </div>
        </div>
      </section>

      {/* BANKING PARTNERS */}
      <section className="bank-section">
        <div className="section-heading">
          <h2>Our Banking Partners</h2>
          <p>Helping customers get easy access to home construction loans</p>
        </div>

        <div className="bank-slider">
          <div className="bank-track">
            {[...banks, ...banks].map((bank, index) => (
              <div className="bank-card" key={index}>
                <img src={`${A}${bank}`} alt="Banking Partner" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <h2>
            Ready to Transform Your
            <span>Construction Project?</span>
          </h2>

          <p>
            Join hundreds of successful projects built with premium materials,
            expert guidance, and unmatched reliability. Get started in minutes
            with our streamlined process.
          </p>

          <a href="/contact" className="home-cta-button hover-orange">
            <span>Book Free Consultation</span>
            <b>›</b>
          </a>

          <div className="cta-badges">
            <span>● ISO Certified</span>
            <span>● Quality Assured</span>
            <span>● Trusted Partner</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src={`${A}ChatGPT Image Mar 2, 2026, 12_14_05 PM.png`}
              alt="Blue Peak Infra & Constructions"
            />

            <p>
              Premium construction materials with guaranteed quality, price
              protection, and 24/7 support for your projects.
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

          <div className="footer-column contact-column">
            <h3>Contact Us</h3>
            <p>⌖ 123 Construction Ave, Building District, City 12345</p>
            <p>⌕ +91-1234567890</p>
            <p>✉ info@supportconstruction.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;