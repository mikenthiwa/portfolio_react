import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { saveAs } from 'file-saver';
import './header.scss';
import Button from "react-bootstrap/Button";
import CV from '../../Assets/documents/MICHAEL MUTUA NTHIWA (CURRICULUM VITAE).pdf'


const NavBar = () =>  {

  const connectToSocialNetworks = (link) => {
      return window.open(link, '_blank');
  };

  const downloadCV = () => {
      return saveAs(CV, 'Michael Nthiwa(CV)');
  }

  const renderSocialLinks = () => {
      const icons = [
          [faLinkedin, 'http://linkedin.com/in/michaelnthiwamutua/mynetwork'],
          [faGithub, 'https://github.com/mikenthiwa']
      ];
      return icons.map((icon, index) => {
          return (
              <div className='socialIcon mr-4'
                   onClick={() => connectToSocialNetworks(icon[1])}
                   key={index}
              >
                <FontAwesomeIcon icon={icon[0]} size='2x' color={icon[0] === faLinkedin ? 'blue': ''} />
              </div>
          )
      })
  };

  return (
    <div className="navbar navbar-dark">
    <div className="icon-container">
        <div className="follow-label mr-1">Follow @</div>
        {renderSocialLinks()}
    </div>
      <div className="cv-button-cont">
          <Button size='sm' onClick={downloadCV}>Resume</Button>
      </div>
  </div>
);
}

export default NavBar;

