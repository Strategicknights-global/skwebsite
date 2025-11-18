import React, { useEffect } from 'react';
import TeamCard from '@/components/TeamCard';
import ScrollReveal from '@/components/ScrollReveal';
import JobApplicationForm from '@/components/JobApplicationForm';
import Sathish from '@/Image/Sathish.jpeg'; // Ensure path is correct
import Logu from '@/Image/Logu.png';       // Ensure path is correct
import '../styles/Team.css';

const TeamPage: React.FC = () => {
  const teamMembers = [
    { name: "Sathish Kumar", position: "Founder", image: Sathish, description: "Leading the charge with a vision for transformative digital growth.", social: { linkedin: "https://www.linkedin.com/in/sathish-kumar-0683391b5" } },
    { name: "Loguhariharan P V", position: "Director of Strategy and Operations", image: Logu, description: "Architecting the strategic frameworks that drive client success.", social: { linkedin: "https://www.linkedin.com/in/loguhariharan-p-v-0b178a206"} },
  ];

  useEffect(() => {
    document.title = "Our Team | Strategic Knights";
  }, []);

  return (
    <div className="new-design-wrapper">
      <div className="background-aurora">
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
      </div>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text-content">
            <ScrollReveal>
              <h1 className="hero-title">
                Where Strategy Meets <span className="text-accent">Execution.</span>
              </h1>
              <p className="hero-subtitle">
                Meet the collective of strategists and innovators dedicated to elevating your brand's digital presence.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Our Services</button>
                <button className="btn btn-secondary">Contact Us →</button>
              </div>
            </ScrollReveal>
          </div>
          <div className="hero-image-container">
             <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Team collaborating" className="hero-visual"/>
          </div>
        </div>
      </section>
      
      <main className="main-content">
        <section className="team-section" id="team">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Meet Our Strategists</h2>
              <p className="section-subtitle">A curated team of industry veterans and creative innovators.</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <TeamCard
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    description={member.description}
                    social={member.social}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <section className="join-us-section">
        <div className="container">
          <div className="join-us-grid">
            <div className="join-us-text-content">
              <ScrollReveal>
                <h2 className="section-title">Ready to Build What's Next?</h2>
                <p className="section-subtitle">
                  Whether you're looking for a strategic partner or a place to make your mark, we'd love to connect.
                </p>
                <div className="contact-details">
                  <p><strong>Email:</strong> careers@strategicknights.com</p>
                  <p><strong>Office Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
                </div>
              </ScrollReveal>
            </div>
            <div className="join-us-form-wrapper">
              <ScrollReveal delay={200}>
                <JobApplicationForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;