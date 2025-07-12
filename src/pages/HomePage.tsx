import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';

const heroImageSrc = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";

import '../styles/HomePage.css'; // Make sure this is imported

const HomePage = () => {
  useEffect(() => {
    document.title = "Strategic Knights | Digital Marketing Solutions";
  }, []);

  const services = [
    { title: "Website Designing", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
    { title: "E-commerce Development", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>) },
    { title: "Mobile App Development", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>) },
    { title: " Data & AI Solutions", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>) },
    { title: "Digital Marketing", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>) },
    { title: "Cybersecurity and Website Protection", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>) },
    { title: "Branding and Identity Design", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>) },
    { title: "Video Marketing & Production", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25Z" /></svg>) },
    { title: "Marketplace Management", icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>) }
  ];

  const benefits = [
    { title: "Data-Driven Strategy Development", description: "We analyze data to create strategies that deliver measurable results." },
    { title: "Real-Time Analytics & Reporting", description: "Monitor campaign performance with real-time analytics and comprehensive reports." },
    { title: "Advanced Targeting Capabilities", description: "Reach your ideal audience with precision targeting across multiple channels." },
    { title: "Multi-Channel Campaign Management", description: "Coordinate campaigns across all channels for consistent messaging and maximum impact." },
    { title: "AI-Powered Optimization", description: "Leverage artificial intelligence to continuously improve campaign performance." },
    { title: "Dedicated Support Team", description: "Our expert team is always available to provide guidance and support." }
  ];

  return (
    <div>
      {/* Redesigned Hero Section */}
      <section className="homepage-hero-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content-grid">
            {/* Left Side: Text Content */}
            <div className="hero-text-content">
              <ScrollReveal>
                <h1>
                  Transform Your <span className="gradient-text">Digital Presence</span>
                </h1>
                <p>
                  Strategic Knights is your growth partner - blending digital marketing, SEO, social media magic, and powerful tech solutions to help your brand rise, shine, and lead.
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

            {/* Right Side: Graphical Elements */}
            <div className="hero-graphics-container">
              {/* THE PURPLE BLOB DIV HAS BEEN REMOVED FROM HERE */}
              <ScrollReveal delay={200}>
                <img 
                  src={heroImageSrc} 
                  alt="A team of professionals planning a growth strategy"
                  className="hero-main-image"
                />
              </ScrollReveal>
            </div>
          </div>
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
                <div className="service-card">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="homepage-benefits-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Why Choose Strategic Knights?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="benefit-card">
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Strategic Knights for their digital growth.
            </p>
            <Link
              to="/contact"
              className="cta-button-animated"
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