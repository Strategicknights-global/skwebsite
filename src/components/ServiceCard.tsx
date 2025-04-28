
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, features }) => {
  return (
    <div className="service-card h-full">
      <div className="mb-4 text-sk-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-1 text-sm text-gray-700 mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 mt-0.5 mr-2 text-sk-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Link
        to="/services"
        className="inline-block mt-auto text-sm font-medium text-sk-primary hover:text-sk-green transition-colors"
      >
        Learn more →
      </Link>
    </div>
  );
};

export default ServiceCard;
