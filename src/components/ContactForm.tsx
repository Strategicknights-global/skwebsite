
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("ZVjXM3qF-gALzLIio");
      
      // Prepare the template parameters - use proper parameter names that match your template
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,  // Changed from from_email to reply_to 
        phone_number: formData.phone,  // Changed from phone to phone_number
        message: formData.message,
        // We don't need to_email here as it should be configured in the EmailJS template
      };
      
      console.log("Sending email with params:", templateParams);
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_85qrmwy', 
        'template_1jeutkn',
        templateParams
      );
      
      console.log("Email sent successfully:", response);
      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sk-primary focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sk-primary focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sk-primary focus:border-transparent"
          placeholder="Your phone number (optional)"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          name="message"
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sk-primary focus:border-transparent"
          placeholder="How can we help you?"
        />
      </div>
      <div className="text-center md:text-left">
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-sk-primary hover:bg-sk-primary/90 text-white py-3 px-8 rounded-md font-medium transition-all duration-300"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
