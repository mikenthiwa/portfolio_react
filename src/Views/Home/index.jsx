import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faNode,
  faSass,
  faDocker,
  faHtml5,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';
import NavBar from '../../Components/NavBar/navBar';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollDown = () => {
    this.myRef.current.scrollIntoView({behavior: "smooth"})
  };

  openMail = () => {
    window.location.href='mailto:mike.nthiwa@gmail.com'
  };
  renderSkillsIcons = (iconType, color, skillClass) => (
      <div className={skillClass}>
        <FontAwesomeIcon icon={iconType} size='3x' color={color} />
      </div>
  );

  renderDescription = (rowContainer, header, content, button) => {
    return (
      <div>
        <div className={`row ${rowContainer} mb-2`}>
          <div className="descriptionHeader">{header}</div>
          <div className="descriptionContent">
            {content}
          </div>
          <div className='form mt-5'>
            {button === 'message me'
              ? <button
                type="button"
                className="btn btn-primary mb-5"
                onClick={this.openMail}
              >
                Message me
            </button>
              :''
            }
          </div>
        </div>

        <div className="divider mb-5" />
      </div>
    )
  };

  render(){
    return (
      <div className="home">
      <div className="home-container">
        <div>
          <NavBar />
        </div>
        <div className="intro-container">
          <div className="intro-cont">
            <span className="intro">Hey!, I'm Michael, Full Stack Software Engineer</span>
          </div>
          <div className='skillIconCont'>
            {this.renderSkillsIcons(faCss3Alt, '#3FABC0', 'css')}
            {this.renderSkillsIcons(faReact, 'blue', 'react')}
            {this.renderSkillsIcons(faNode, 'green', 'node')}
            {this.renderSkillsIcons(faSass, '#C060DB', 'sass')}
            {this.renderSkillsIcons(faDocker, 'blue', 'docker')}
            {this.renderSkillsIcons(faHtml5, '#DD4E31', 'html5')}
          </div>
          <div className="row scroll-down-cont" onClick={this.scrollDown}>
            <div className="scrollLabel">Dive deep to learn what I do</div>
            <div>
              <FontAwesomeIcon icon={faSortDown} size="2x"  className="scrollDownIcon glow"/>
            </div>
          </div>
        </div>
      </div>
        <div className="description-cont container mt-5" ref={this.myRef}>
            {
              this.renderDescription(
                'rowContainer',
                'Hi',
                'I am a software engineer based in Nairobi,\n' +
                'Kenya. I\'m passionate about web technology,' +
                'and I develop web-based and mobile applications.'
              )
            }

          {
            this.renderDescription(
              'middle-row-container',
              'What can I do?',
              'I can design and develop web and mobile applications' +
              'that can run across various devices using the latest technologies.'
            )
          }
          <div>
          {
            this.renderDescription(
                'rowContainer',
                'Do you need help with your project?',
                'I am currently available for both long-term ' +
                'and short-term projects. So if you need my services ' +
                'or have any queries, message me.',
                'message me'
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
