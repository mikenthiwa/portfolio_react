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
import Description from "../../Components/Description";
import Skills from "../../Components/Skills";
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollDown = () => {
    this.myRef.current.scrollIntoView({behavior: "smooth"})
  };


  renderSkillsIcons = (iconType, color, skillClass) => (
      <div className={skillClass}>
        <FontAwesomeIcon icon={iconType} size='3x' color={color} />
      </div>
  );


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
      <div className="description-cont" ref={this.myRef}>
        <div className="my-description">
          <Description />
        </div>
        <div className="skills-work">
          <div className="skills-sec">
            <Skills />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
