import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './header.scss';

class NavBar extends Component {

  connectToSocialNetworks = (link) => {
      window.open(link, '_blank')
  };

  render() {
    return (
      <div className="navbar navbar-dark">
        <div className="icon-container">
            <div className="follow-label mr-1">Follow @</div>
            <div
                className='socialIcon mr-4'
                onClick={() => this.connectToSocialNetworks('http://linkedin.com/in/michaelnthiwamutua/mynetwork')}
            >
                <FontAwesomeIcon icon={faLinkedin} size='2x' color='blue'/>
            </div>
            <div
                className='socialIcon mr-4'
                onClick={() => this.connectToSocialNetworks('https://github.com/mikenthiwa')}
            >
                <FontAwesomeIcon icon={faGithub} size='2x'/>
            </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

