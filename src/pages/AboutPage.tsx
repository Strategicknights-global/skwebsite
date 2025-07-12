
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import Ksglobals from '@/Image/Ksglobals.png';
import '../styles/AboutPage.css'

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Strategic Knights";
  }, []);

  const foundations = [
    {
      title: "Values",
      description: "Our core values guide every decision and interaction, ensuring excellence in all we do.",
      items: [
        "Integrity & Trust",
        "Innovation & Creativity",
        "Excellence & Quality",
        "Client-Centric Approach"
      ]
    },
    {
      title: "Goals",
      description: "Strategic objectives that drive our growth and impact in the digital landscape.",
      items: [
        "Market Leadership",
        "Client Success Stories",
        "Innovation Pipeline",
        "Global Expansion"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sk-blue/30 via-white to-sk-gray/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in">About Strategic Knights</h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in">
              We're on a mission to transform businesses through innovative digital marketing solutions and cutting-edge strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
                <p className="text-gray-700 mb-6">
                  To be the global leader in digital innovation, transforming businesses through cutting-edge marketing solutions and setting new standards of excellence in the digital realm.
                </p>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-gray-700">
                  To empower businesses with innovative digital solutions that drive growth, enhance brand value, and create lasting impact in an ever-evolving digital landscape.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Team Meeting" 
                className="rounded-lg shadow-lg w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

     {/* Our Foundation */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <h2 className="section-heading text-center">Our Foundation</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        The pillars that drive our success and innovation
      </p>
    </ScrollReveal>

    <div className="flex flex-wrap justify-center gap-8">
      {foundations.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sk-primary w-full max-w-xs flex flex-col text-left">
            <h3 className="text-xl font-bold mb-3 text-sk-primary">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <ul className="space-y-2">
              {item.items.map((bullet, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-sk-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Quality Assurance" 
                className="rounded-lg shadow-lg w-full"
              />
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Quality Assurance</h2>
              <p className="text-gray-700 mb-6">
                Maintaining the highest standards of quality in every project and deliverable is our top priority. We believe that quality is not just about meeting expectations but exceeding them consistently.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-0.5 mr-3 text-sk-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-medium text-lg">Rigorous Testing</h3>
                    <p className="text-gray-600">Every solution undergoes comprehensive testing before delivery.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-0.5 mr-3 text-sk-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-medium text-lg">Best Practices</h3>
                    <p className="text-gray-600">We adhere to industry best practices and standards in all our work.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-0.5 mr-3 text-sk-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-medium text-lg">Continuous Improvement</h3>
                    <p className="text-gray-600">We constantly evaluate and refine our processes for better outcomes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-0.5 mr-3 text-sk-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="font-medium text-lg">Client Satisfaction</h3>
                    <p className="text-gray-600">We measure success by the satisfaction and success of our clients.</p>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Our Partnerships</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Proud to partner with industry leaders to deliver exceptional value to our clients.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <ScrollReveal>
  <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center">
    <button
      className="text-2xl font-bold text-center text-sk-primary"
      onClick={() => window.location.href = "https://ksglobals.com"}
    >
      KS Globals
    </button>
  </div>
</ScrollReveal>

<ScrollReveal>
  <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center">
    <button
      className="text-2xl font-bold text-center text-sk-primary"
      onClick={() => window.location.href = "https://ksglobals.com"}
    >
      <img
        src={Ksglobals} // Replace this with the correct import or public path
        alt="KS Globals"
        className="h-8 object-contain"
      />
    </button>
  </div>
</ScrollReveal>

            {/* Add more partners as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sk-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to transform your digital presence and drive sustainable growth for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-sk-primary font-medium rounded-md transition-all duration-300 hover:bg-sk-green hover:text-white transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal>
              <div className="stat-card">
                <div className="text-4xl font-bold text-sk-primary mb-2">10+</div>
                <div className="text-gray-600 font-medium">Clients Served</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="stat-card">
                <div className="text-4xl font-bold text-sk-primary mb-2">95%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="stat-card">
                <div className="text-4xl font-bold text-sk-primary mb-2">10+</div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="stat-card">
                <div className="text-4xl font-bold text-sk-primary mb-2">3+</div>
                <div className="text-gray-600 font-medium">Products Delivered</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
