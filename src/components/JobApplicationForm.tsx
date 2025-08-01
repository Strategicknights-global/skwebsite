import React from 'react';
import '../styles/Form.css'; // Dedicated CSS for this form

const JobApplicationForm = () => {
  return (
    <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
      <h3 className="form-title">Join Our Ranks</h3>
      <div className="form-grid">
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" placeholder="Sathish" required />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Kumar" required />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="input-group">
        <label htmlFor="portfolio">Portfolio Link</label>
        <input id="portfolio" name="portfolio" type="text" placeholder="https://github.com/..." />
      </div>
      <div className="input-group">
        <label htmlFor="coverLetter">Why Us?</label>
        <textarea id="coverLetter" name="coverLetter" placeholder="Tell us what makes you a strategic knight..." required></textarea>
      </div>
      <button className="btn-submit" type="submit">Apply Now</button>
    </form>
  );
};

export default JobApplicationForm;