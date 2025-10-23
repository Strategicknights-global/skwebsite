import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal'; // Assuming this is your custom animation component
import Ksglobals from '@/Image/Ksglobals.png'; // Make sure the path to your image is correct
import '../styles/AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Strategic Knights";
  }, []);

  // Updated foundation data with icons
  const foundations = [
    {
      title: "Values",
      description: "Our core values guide every decision and interaction, ensuring excellence in all we do.",
      items: [
        "Integrity & Trust",
        "Innovation & Creativity",
        "Excellence & Quality",
        "Client-Centric Approach"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      title: "Goals",
      description: "Strategic objectives that drive our growth and impact in the digital landscape.",
      items: [
        "Market Leadership",
        "Client Success Stories",
        "Innovation Pipeline",
        "Global Expansion"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="about-page">
      {/* --- Hero Section --- */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <ScrollReveal>
            <h1 className="hero-title">Forging Digital Dominance</h1>
            <p className="hero-subtitle">
              We are Strategic Knights—a collective of innovators and strategists dedicated to transforming businesses in the digital realm.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* --- Mission/Vision Section --- */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content Column */}
          <ScrollReveal>
            <div className="space-y-12">
              <div className="flex items-start gap-5">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="vm-label">Mission</h3>
                  <p className="section-text mt-3">
                    To empower businesses with transformative digital solutions that drive growth, enhance brand value, and create a lasting impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="vm-label">Vision</h3>
                  <p className="section-text mt-3">
                    To be the world's most trusted partner in digital innovation, setting new standards of excellence and leading our clients to unparalleled success.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Column */}
          <ScrollReveal delay={200}>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* --- Our Foundation Section (NEW DESIGN) --- */}
      <section className="foundation-section">
        <div className="wave-top">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60.9832C0 60.9832 359.5 120.358 720 60.9832C1080.5 1.60815 1440 60.9832 1440 60.9832V100.165H0V60.9832Z" fill="#f7fafc"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-title text-center">Our Foundation</h2>
            <p className="section-text text-center mb-16 max-w-3xl mx-auto">
              These are the pillars of our identity, guiding our actions, shaping our culture, and driving our success.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {foundations.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="foundation-card">
                  <div className="foundation-card-inner">
                    <div className="foundation-card-icon">{item.icon}</div>
                    <h3 className="foundation-card-title">{item.title}</h3>
                    <p className="foundation-card-description">{item.description}</p>
                    <ul className="mt-6 space-y-4">
                      {item.items.map((bullet, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Assurance Section --- */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Column */}
      <ScrollReveal delay={200}>
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
          alt="Team collaborating on quality assurance"
          className="rounded-lg shadow-lg w-full"
        />
      </ScrollReveal>

      {/* Content Column */}
      <ScrollReveal>
        <h2 className="section-title mb-6">Quality Assurance</h2>
        <p className="section-text mb-8">
          Maintaining the highest standards of quality in every project and deliverable is our top priority. We believe that quality is not just about meeting expectations but exceeding them consistently.
        </p>

        {/* --- NEWLY ADDED LIST FROM IMAGE --- */}
        <ul className="space-y-6">
          {/* List Item 1: Rigorous Testing */}
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-800">Rigorous Testing</h4>
              <p className="mt-1 text-gray-600">Every solution undergoes comprehensive testing before delivery.</p>
            </div>
          </li>

          {/* List Item 2: Best Practices */}
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-800">Best Practices</h4>
              <p className="mt-1 text-gray-600">We adhere to industry best practices and standards in all our work.</p>
            </div>
          </li>

          {/* List Item 3: Continuous Improvement */}
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-800">Continuous Improvement</h4>
              <p className="mt-1 text-gray-600">We constantly evaluate and refine our processes for better outcomes.</p>
            </div>
          </li>

          {/* List Item 4: Client Satisfaction */}
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-800">Client Satisfaction</h4>
              <p className="mt-1 text-gray-600">We measure success by the satisfaction and success of our clients.</p>
            </div>
          </li>
        </ul>
      </ScrollReveal>
    </div>
  </div>
</section>

      {/* --- CTA Section --- */}
      <section className="cta-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="cta-title">Ready to Work Together?</h2>
            <p className="cta-text">
              Let's collaborate to transform your digital presence and drive sustainable growth for your business.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;