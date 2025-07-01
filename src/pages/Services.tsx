
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | Strategic Knights";
  }, []);

  const services = [
    {
      title: "Website Design & Development",
      description: "Custom, responsive websites that engage and convert",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Custom UI/UX Design", "Responsive Development", "Performance Optimization", "SEO-friendly Architecture"]
    },
    {
      title: "E-commerce Development",
      description: "Build and optimize your online store",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ["Custom E-commerce Solutions", "Payment Gateway Integration", "Inventory Management", "Mobile Commerce"]
    },
    {
      title: "Data & AI Solutions",
      description: "Automate, predict, personalize, and optimize business with AI-driven solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["Generative AI", "Computer Vision & Image Recognition", "Predictive Analytics & BI Dashboards", "AI Automation & Chatbots"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      features: ["Marketing Strategy", "Campaign Management", "Analytics & Reporting", "ROI Optimization"]
    },
    {
      title: "Cybersecurity and Website Protection",
      description: "Secure, scan, detect, and defend with complete website protection solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: ["SSL Setup & Renewal", "Malware Scanning & Removal", "Firewall & Threat Detection", "Peneration testing"]
    },
    {
      title: "Branding and Identity Design",
      description: "Build a strong, memorable brand identity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["Brand Development", "Visual Identity", "Brand Guidelines", "Brand Messaging"]
    },
    {
      title: "Mobile App development",
      description: "Design, develop, and deploy high-performance mobile apps for all platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
        </svg>


      ),
      features: ["Cross-platform app development (iOS & Android)", "UI/UX design for mobile interfaces", "Backend integration & API development", "App deployment & maintenance support"]
    },
    {
      title: "Video Marketing & Production",
      description: "Engage audiences with impactful videos, shorts, and YouTube SEO.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25Z" />
        </svg>
      ),
      features: ["Promo/Explainer Video Creation", "Reels & Shorts for Social Media", "YouTube Marketing & SEO"]
    },
    {
      title: "Marketplace Management",
      description: "Boost visibility and sales through optimized marketplace presence and ads.",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
      </svg>
      ),
      features: ["Amazon/Flipkart Seller Account Setup", "Product Listing Optimization", "Marketplace Ads Management", "Performance Analysis"]
    },
  ];

  const processSteps = [
    {
  number: "01",
  title: "Discovery",
  description: "We analyze your needs and goals to create a strategy."
},
{
  number: "02",
  title: "Planning",
  description: "Detailed project planning and resource allocation."
},
{
  number: "03",
  title: "Execution",
  description: "Implementation of strategies with continuous monitoring."
},
{
  number: "04",
  title: "Optimization",
  description: "Regular analysis and optimization for best results."
},
{
  number: "05",
  title: "Reporting & Scaling",
  description: "Performance reports and scaling strategies for long-term growth."
}
  ];

  const pricingPlans = [
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sk-blue/30 via-white to-sk-gray/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in">
              Comprehensive digital solutions tailored to elevate your business in the modern marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive digital solutions for your business growth
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="service-card h-full">
                  <div className="mb-5 text-sk-primary">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-sk-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
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
        <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <h2 className="section-heading">Our Process</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        A systematic approach to deliver exceptional results
      </p>
    </ScrollReveal>

    {/* 👇 Horizontal scroll with hidden scrollbar */}
    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
      {processSteps.map((step, index) => (
        <ScrollReveal key={step.number} delay={index * 150}>
          <div className="min-w-[260px] bg-white p-8 rounded-lg shadow-md border-t-4 border-sk-primary h-full">
            <div className="text-3xl font-bold text-sk-primary mb-3">{step.number}</div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 150}>
                <div 
                  className={`p-8 rounded-lg ${plan.highlight ? 'bg-sk-primary text-white shadow-xl scale-105 z-10' : 'bg-white text-gray-900 shadow-md'} h-full flex flex-col`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>{plan.period}</span>
                  </div>
                  <p className={`mb-6 ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <ul className={`space-y-3 mb-8 flex-grow ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`w-5 h-5 mr-2 ${plan.highlight ? 'text-white' : 'text-sk-green'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 font-medium rounded-md transition-all duration-300 ${plan.highlight ? 'bg-white text-sk-primary hover:bg-sk-green hover:text-white' : 'bg-sk-primary text-white hover:bg-sk-green'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sk-blue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <ScrollReveal>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Have a project in mind? Let's discuss how we can help transform your digital presence.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-sk-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-sk-green"
                  >
                    Send Us a Message
                  </Link>
                </ScrollReveal>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact Us" 
                  className="absolute inset-0 w-full h-full object-cover"
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
