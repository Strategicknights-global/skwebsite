import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import '../styles/ServicesPage.css'; // Make sure the correct CSS is imported

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | Strategic Knights";
  }, []);

  // --- VERIFIED ARRAY WITH ALL 9 SERVICES ---
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom, responsive websites that engage and convert",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> ),
      features: ["Custom UI/UX Design", "Responsive Development", "Performance Optimization", "SEO-friendly Architecture"]
    },
    {
      title: "E-commerce Development",
      description: "Build and optimize your online store for maximum sales.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> ),
      features: ["Custom Storefronts", "Payment Gateway Integration", "Inventory Management", "Mobile Commerce"]
    },
    {
      title: "Data & AI Solutions",
      description: "Automate, predict, and optimize with AI-driven solutions.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg> ),
      features: ["Generative AI", "Computer Vision", "Predictive Analytics", "AI Automation & Chatbots"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that deliver measurable ROI.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> ),
      features: ["Marketing Strategy", "Campaign Management", "Analytics & Reporting", "ROI Optimization"]
    },
    {
      title: "Cybersecurity and Website Protection",
      description: "Secure, scan, and defend your digital assets completely.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
),
      features: ["SSL Setup & Renewal", "Malware Scanning & Removal", "Firewall & Threat Detection", "Penetration Testing"]
    },
    {
      title: "Branding and Identity Design",
      description: "Build a strong, memorable brand identity that resonates.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> ),
      features: ["Brand Development", "Visual Identity", "Brand Guidelines", "Brand Messaging"]
    },
    {
      title: "Mobile App development",
      description: "High-performance mobile apps for all platforms.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg> ),
      features: ["Cross-platform Development", "Mobile UI/UX Design", "Backend & API Integration", "App Store Deployment"]
    },
    {
      title: "Video Marketing & Production",
      description: "Engage audiences with impactful videos, shorts, and YouTube SEO.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25Z" /></svg> ),
      features: ["Promo/Explainer Video Creation", "Reels & Shorts Production", "YouTube Marketing & SEO", "Video Editing"]
    },
    {
      title: "Marketplace Management",
      description: "Boost visibility and sales on Amazon, Flipkart, and more.",
      icon: ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg> ),
      features: ["Seller Account Setup", "Product Listing Optimization", "Marketplace Ads Management", "Performance Analysis"]
    },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "We analyze your needs and goals to create a strategy." },
    { number: "02", title: "Planning", description: "Detailed project planning and resource allocation." },
    { number: "03", title: "Execution", description: "Implementation of strategies with continuous monitoring." },
    { number: "04", title: "Optimization", description: "Regular analysis and optimization for best results." },
    { number: "05", title: "Reporting & Scaling", description: "Performance reports and scaling for long-term growth." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="animate-fade-in">Our Services</h1>
          <p className="animate-fade-in">
            Comprehensive digital solutions tailored to elevate your business in the modern marketplace.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">What We Offer</h2>
            <p className="mb-12">
              From concept to launch and beyond, we provide the expertise to make your vision a reality.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="service-card-detailed">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>
                  <ul className="features-list space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <svg className="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Our Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional results
            </p>
          </ScrollReveal>
          <div className="process-marquee-wrapper">
            <div className="process-steps-container">
              {[...processSteps, ...processSteps].map((step, index) => (
                <div key={`step-${index}`} className="process-step-card">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="text-content">
                <ScrollReveal>
                  <h2>Have a Project in Mind?</h2>
                  <p>Let's discuss how we can help transform your digital presence and achieve your business goals.</p>
                  <Link to="/contact" className="cta-button">
                    Send Us a Message
                  </Link>
                </ScrollReveal>
              </div>
              <div className="hidden md:block image-container">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact Us" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;