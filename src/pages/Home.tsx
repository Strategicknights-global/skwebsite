
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';

const HomePage = () => {
  const services = [
    {
      title: "Website Designing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Custom, responsive websites that engage and convert visitors into customers.",
      features: ["Custom UI/UX Design", "Responsive Development", "SEO-friendly Architecture"]
    },
    {
      title: "E-commerce Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      description: "Scalable online stores with seamless checkout experiences and inventory management.",
      features: ["Custom E-commerce Solutions", "Payment Gateway Integration", "Inventory Management"]
    },
    {
      title: "Software Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "Custom software solutions tailored to your business needs and objectives.",
      features: ["Custom App Development", "API Integration", "Cloud-based Solutions"]
    },
    {
      title: "SEO",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: "Data-driven SEO strategies for higher rankings and increased organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      title: "Digital Marketing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      description: "Comprehensive digital marketing campaigns that drive traffic and increase conversions.",
      features: ["Marketing Strategy", "Campaign Management", "Analytics & Reporting"]
    },
    {
      title: "Social Media Marketing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Engaging social media presence and management to build brand awareness and loyalty.",
      features: ["Platform Strategy", "Content Creation", "Community Management"]
    },
  ];

  const benefits = [
    {
      title: "Data-Driven Strategy Development",
      description: "We analyze data to create strategies that deliver measurable results."
    },
    {
      title: "Real-Time Analytics & Reporting",
      description: "Monitor campaign performance with real-time analytics and comprehensive reports."
    },
    {
      title: "Advanced Targeting Capabilities",
      description: "Reach your ideal audience with precision targeting across multiple channels."
    },
    {
      title: "Multi-Channel Campaign Management",
      description: "Coordinate campaigns across all channels for consistent messaging and maximum impact."
    },
    {
      title: "AI-Powered Optimization",
      description: "Leverage artificial intelligence to continuously improve campaign performance."
    },
    {
      title: "Dedicated Support Team",
      description: "Our expert team is always available to provide guidance and support."
    }
  ];

  useEffect(() => {
    document.title = "Strategic Knights | Digital Marketing Solutions";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sk-gray to-sk-blue/30 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Transform Your Digital Presence
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Strategic Knights delivers premium digital marketing solutions that drive growth and elevate your brand to new heights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="cta-button-primary">
                  Get Started
                </Link>
                <Link to="/services" className="cta-button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-left">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-sk-green/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-sk-primary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Team" 
                className="relative z-10 rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive digital solutions for your business growth
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  features={service.features}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-sk-blue/20 via-white to-sk-gray/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="section-heading">Why Choose Strategic Knights?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We combine innovation with proven strategies to deliver exceptional results for our clients.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sk-primary h-full">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sk-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Strategic Knights for their digital growth.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-sk-primary font-medium rounded-md transition-all duration-300 hover:bg-sk-green hover:text-white transform hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
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
                <div className="text-4xl font-bold text-sk-primary mb-2">100%</div>
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

export default HomePage;
