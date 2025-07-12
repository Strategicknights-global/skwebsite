import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';

import './HomePage.css';

const HomePage = () => {
  const services = [
    {
      title: "Website Designing",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M2 3h20v16H2V3zm1 1v14h18V4H3zm4 2h10v2H7V6zm0 4h8v2H7v-2zm0 4h6v2H7v-2zm12 0h2v2h-2v-2zm0-4h2v2h-2v-2z"/>
        </svg>
      ),
    },
    {
      title: "E-commerce Development",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M7 18a2 2 0 0 1-2 2H3a1 1 0 0 1 0-2h1v-6H4a1 1 0 0 1 0-2h1V7a5 5 0 0 1 10 0v1h1a1 1 0 0 1 0 2h-1v6h1a1 1 0 0 1 0 2h-2a2 2 0 0 1-2-2H7zm2-8a3 3 0 0 0-6 0v1h6v-1zm6 0a3 3 0 0 0-6 0v1h6v-1z"/>
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M16 1H8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-4 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6-4H6V4h12v14z"/>
        </svg>
      ),
    },
    {
      title: "Data & AI Solutions",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M13 16h-2v-4h2v4zm0-8h-2V4h2v4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M12 2a9.94 9.94 0 0 0-7.07 2.93A10 10 0 0 0 2 12a10 10 0 0 0 2.93 7.07A9.94 9.94 0 0 0 12 22a9.94 9.94 0 0 0 7.07-2.93A10 10 0 0 0 22 12a10 10 0 0 0-2.93-7.07A9.94 9.94 0 0 0 12 2zm0 2c4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8zm-1 5v6h2V9h-2zm0 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      ),
    },
    {
      title: "Cybersecurity and Website Protection",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M12 2L2 7v8.95C2 16.77 3.92 19.36 7.1 21h9.8c3.18-1.64 5.1-4.23 5.1-6.05V7l-10-5zm0 2.82L19.5 7 12 10.18 4.5 7 12 4.82z"/>
        </svg>
      ),
    },
    {
      title: "Branding and Identity Design",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 3.96L17.87 19H6.13L12 5.96z"/>
        </svg>
      ),
    },
    {
      title: "Video Marketing & Production",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M18 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H6V5h12v14zm-7-7v4h6v-4h-6z"/>
        </svg>
      ),
    },
    {
      title: "Marketplace Management",
      icon: (
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="#5A67D8">
          <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 2v4h12V4H6zm0 6v8h12v-8H6z"/>
        </svg>
      ),
    }
  ];

  const benefits = [
    // ... (rest of your benefits array)
  ];

  useEffect(() => {
    document.title = "Strategic Knights | Digital Marketing Solutions";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient-overlay"></div>
        <div className="container hero-content">
          <div className="animate-fade-in">
            <h1 className="hero-heading">
              Transform Your <span>Digital Presence</span>
            </h1>
            <p className="hero-subtext">
              Strategic Knights is your growth partner - blending digital marketing, SEO, social media magic, and powerful tech solutions to help your brand rise, shine, and lead. We craft strategies and build software that move you forward, fast.
            </p>
            <div className="hero-cta-buttons">
              <Link to="/contact" className="cta-button-primary">
                Kick Start
              </Link>
              <Link to="/services" className="cta-button-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="animate-fade-in-left hero-image-container">
            <img
              src="[https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80)"
              alt="SEO experts planning brand growth strategy"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive digital solutions for your business growth
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  icon={<div className="service-card-icon-wrapper">{service.icon}</div>}
                  className="service-card"
                  titleClass="service-card-title light" // Added 'light' class to title
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Why Choose Strategic Knights?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We combine innovation with proven strategies to deliver exceptional results for our clients.
            </p>
          </ScrollReveal>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Join hundreds of successful businesses that trust Strategic Knights for their digital growth.
            </p>
            <Link
              to="/contact"
              className="cta-button-white"
            >
              Get Started Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;