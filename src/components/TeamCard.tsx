import React from 'react';
import '../styles/TeamCard.css'; // Dedicated CSS for the team card

// Basic SVG icons for social media
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.848-.764-.024-1.482-.234-2.11-.583v.061c0 2.256 1.606 4.135 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.306 3.198 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>;

const TeamCard = ({ name, position, image, description, social }) => {
  return (
    <div className="team-card">
      <div className="card-header">
        <img src={image} alt={name} className="card-avatar" />
      </div>
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-position">{position}</p>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-socials">
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>}
          {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;