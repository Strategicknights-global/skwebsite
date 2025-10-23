import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import TextType from "@/components/TextType";

import {
  FaChartLine,
  FaRegClock,
  FaBullseye,
  FaBroadcastTower,
  FaRobot,
  FaHeadset,
} from "react-icons/fa";

import firstpageimage from "../Image/firstpage.jpg";

import "../styles/HomePage.css";
import "@/components/TextType.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Strategic Knights | Digital Marketing Solutions";

    // ✅ Add fade-in animation keyframes dynamically
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInWords {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // --- Services ---
  const services = [
    {
      title: "Website Designing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Data & AI Solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
    {
      title: "Cybersecurity and Website Protection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
      ),
    },
    {
      title: "Branding and Identity Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Video Marketing & Production",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Marketplace Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      icon: <FaChartLine className="benefit-icon" />,
      title: "Data-Driven Strategy Development",
      description:
        "We analyze data to create strategies that deliver measurable results.",
    },
    {
      icon: <FaRegClock className="benefit-icon" />,
      title: "Real-Time Analytics & Reporting",
      description:
        "Monitor campaign performance with real-time analytics and comprehensive reports.",
    },
    {
      icon: <FaBullseye className="benefit-icon" />,
      title: "Advanced Targeting Capabilities",
      description:
        "Reach your ideal audience with precision targeting across multiple channels.",
    },
    {
      icon: <FaBroadcastTower className="benefit-icon" />,
      title: "Multi-Channel Campaign Management",
      description:
        "Coordinate campaigns across all channels for consistent messaging and maximum impact.",
    },
    {
      icon: <FaRobot className="benefit-icon" />,
      title: "AI-Powered Optimization",
      description:
        "Leverage artificial intelligence to continuously improve campaign performance.",
    },
    {
      icon: <FaHeadset className="benefit-icon" />,
      title: "Dedicated Support Team",
      description:
        "Our expert team is always available to provide guidance and support.",
    },
  ];

  return (
    <div>
       
      {/* Hero Section */}
      <section className="homepage-hero-section" style={{
    position: "relative",
    background: "linear-gradient(135deg, #5a189a, #7b2cbf, #9d4edd)",
    color: "white",
    paddingBottom: "100px",
  }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content-grid">
            <div className="hero-text-content">
              <ScrollReveal>
                <TextType
                  texts={[
                    "Transform Your Digital Presence",
                    "Strategic Knights Rising Together",
                    "Grow Smart, Lead the Digital Future.",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={60}
                  delay={1500}
                />

                {/* ✅ Word-by-word fade-in paragraph */}
                <p
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "16px",
                    color:"white"
                  }}
                >
                  {"Strategic Knights is your growth partner — blending digital marketing, SEO, social media magic, and powerful tech solutions to help your brand rise, shine, and lead."
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        style={{
                          opacity: 0,
                          animation: "fadeInWords 0.5s ease forwards",
                          animationDelay: `${index * 0.12}s`,
                        }}
                      >
                        {word}
                      </span>
                    ))}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-10">
                  <Link to="/contact" className="hero-cta-button">
                    Get Started
                  </Link>
                  <Link to="/services" className="hero-cta-secondary">
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="hero-graphics-container">
              <ScrollReveal delay={200}>
                <img
                  src={firstpageimage}
                  alt="Team planning a growth strategy"
                  className="hero-main-image"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="wave-divider" style={{
    border: "none",
    marginBottom: "-1px", // ✅ Fix thin white line gap
  }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
              906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
              214.34,3V0H0V27.35A600.21,600.21,0,0,0,
              321.39,56.44Z"
              className="wave-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="homepage-services-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="service-item">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="homepage-benefits-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Why Choose Strategic Knights?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="benefit-card">
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Strategic
              Knights for their digital growth.
            </p>
            <Link to="/contact" className="cta-button-animated">
              Get Started Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
