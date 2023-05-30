

import React from 'react';

import abdullahPhoto from '../../assets/abdullah.jpg';
import alaaPhoto from '../../assets/alaa.jpg';
import ayahPhoto from '../../assets/ayah.png';
import basharPhoto from '../../assets/bashar.jpg';
import hamzaPhoto from '../../assets/hamza.jpg';

import facebookIcon from '../../assets/facebookIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import linkedInIcon from '../../assets/linkedinIcon.png';

import './team.css';
//import { GrLinkedin } from 'react-icons/gr';

const teamData = [
  {
    id: 1,
    name: 'Abdullah Aljoulani',
    photo: abdullahPhoto,
    paragraph: 'Engineer | Resourceful  | Insightful',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/abdullah-aljoulani', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-aljoulani-4b155a175/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://web.facebook.com/abdulla.joulani', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/abdullajoulani/', icon: instagramIcon },
    ],
  },
  {
    id: 2,
    name: 'Ala\'a Nsairat',
    photo: alaaPhoto,
    paragraph: 'Engineer | Logical  | Problem solver ',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/NSALAA9', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/alaa-nsairat-60a10b22b/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/alaa.nsairat.12', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/alaakh196/', icon: instagramIcon },
    ],
  },
  {
    id: 3,
    name: 'Ayah Abdalqader',
    photo: ayahPhoto,
    paragraph: 'Analyst | Scientist | Full Stack Developer',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/Ayah-AQ', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ayayazouri/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/Yazouri.Aya', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/ayayazouri', icon: instagramIcon },
    ],
  },
  {
    id: 4,
    name: 'Bashar Alirani',
    photo: basharPhoto,
    paragraph: ' Creative |  Knowledgeable  | Full Stack Developer ',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/BasharIrani23', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/bashar-al-erani-483a7b256/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/bashar.alerani.5/', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/bashar.m0h/', icon: instagramIcon },
    ],
  },
  {
    id: 5,
    name: 'Hamza Tamari',
    photo: hamzaPhoto,
    paragraph: 'Experienced | Strategic | Full Stack Developer  ',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.https://github.com/Hamzamt99/abdullah', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/abdullah', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://facebook.com/abdullah', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://instagram.com/abdullah', icon: instagramIcon },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-container">
      {teamData.map((member) => (
        <div key={member.id} className="team-card">
          <img src={member.photo} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.paragraph}</p>
          <div className="social-media">
            {member.socialMedia.map((account) => (
              <a
                key={account.platform}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={account.icon} alt={account.platform} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;

/*import React from 'react';

import abdullahPhoto from '../../assets/abdullah.jpg';
import alaaPhoto from '../../assets/alaa.jpg';
import ayahPhoto from '../../assets/ayah.png';
import basharPhoto from '../../assets/bashar.jpg';
import hamzaPhoto from '../../assets/hamza.jpg';

import facebookIcon from '../../assets/facebookIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import linkedInIcon from '../../assets/linkedinIcon.png';

import './team.css';

const teamData = [
  {
    id: 1,
    name: 'Abdullah Aljoulani',
    photo: abdullahPhoto,
    paragraph: 'Engineer | Resourceful  | Insightful',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/abdullah-aljoulani', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-aljoulani-4b155a175/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://web.facebook.com/abdulla.joulani', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/abdullajoulani/', icon: instagramIcon },
    ],
  },
  {
    id: 2,
    name: 'Ala\'a Nsairat',
    photo: alaaPhoto,
    paragraph: 'Engineer | Logical  | Problem solver ',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/NSALAA9', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/alaa-nsairat-60a10b22b/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/alaa.nsairat.12', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/alaakh196/', icon: instagramIcon },
    ],
  },
  {
    id: 3,
    name: 'Ayah Abdalqader',
    photo: ayahPhoto,
    paragraph: 'Analyst | Scientist | Full Stack Developer',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/Ayah-AQ', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ayayazouri/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/Yazouri.Aya', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/ayayazouri', icon: instagramIcon },
    ],
  },
  {
    id: 4,
    name: 'Bashar Alirani',
    photo: basharPhoto,
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.com/BasharIrani23', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/bashar-al-erani-483a7b256/', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://www.facebook.com/bashar.alerani.5/', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://www.instagram.com/bashar.m0h/', icon: instagramIcon },
    ],
  },
  {
    id: 5,
    name: 'Hamza Tamari',
    photo: hamzaPhoto,
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: [
      { platform: 'GitHub', url: 'https://github.https://github.com/Hamzamt99/abdullah', icon: githubIcon },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/abdullah', icon: linkedInIcon },
      { platform: 'Facebook', url: 'https://facebook.com/abdullah', icon: facebookIcon },
      { platform: 'Instagram', url: 'https://instagram.com/abdullah', icon: instagramIcon },
    ],
  },
];

const Team = () => {
  const [cardColors, setCardColors] = React.useState([]);

  React.useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const colors = teamData.map(() => getRandomColor());
    setCardColors(colors);
  }, []);

  return (
    <div className="team-container">
      {teamData.map((member, index) => (
        <div
          key={member.id}
          className="team-card"
          style={{ backgroundColor: cardColors[index] }}
        >
          <img src={member.photo} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.paragraph}</p>
          <div className="social-media">
            {member.socialMedia.map((account) => (
              <a
                key={account.platform}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={account.icon} alt={account.platform} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;*/



