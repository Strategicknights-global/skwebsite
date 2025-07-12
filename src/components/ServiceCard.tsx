// src/components/ServiceCard.tsx

import React from 'react';

// Define the type for the component's props
interface ServiceCardProps {
  title: string;
  icon: React.ReactNode; // Use React.ReactNode for more flexibility with SVG elements
  className?: string; // Make optional as it might not always be provided
  iconWrapperClass?: string; // Add this prop and make it optional
  titleClass?: string; // Add this prop and make it optional
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  className,
  iconWrapperClass,
  titleClass,
}) => {
  return (
    <div className={`service-card ${className || ''}`}>
      {/* Apply iconWrapperClass to the div surrounding the icon */}
      <div className={`${iconWrapperClass || ''}`}>
        {icon}
      </div>
      {/* Apply titleClass to the h3 for the title */}
      <h3 className={`${titleClass || ''}`}>{title}</h3>
    </div>
  );
};

export default ServiceCard;