
import React from 'react';

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, image, description }) => {
  return (
    <div className="team-card h-full">
      <div className="mb-5 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm font-medium text-sk-primary mb-3">{position}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TeamCard;
