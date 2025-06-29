import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <div className="service-card h-full p-4 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="mb-4 text-sk-primary">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    </div>
  );
};

export default ServiceCard;
