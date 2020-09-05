import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Projects from "../../Components/Projects";
import Profile from '../../Assets/images/feeling_proud_qne1.svg';
import Footer from "../../Components/Footer";
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

const Home = () => {

  const smoothScrollDown = useRef(null);

  const scrollDown = () => {
    smoothScrollDown.current.scrollIntoView({behavior: "smooth"})
  };

  const renderIntroCont = (className) => {
    return (
        <div className={className}>
          <span className="intro">I'm Michael, Full Stack Software Engineer.</span>
        </div>
    )
  }

  const renderSkillsIcons = (iconType, color, skillClass) => (
      <div className={skillClass}>
        <FontAwesomeIcon icon={iconType} size='3x' color={color} />
      </div>
  );

  const renderSKillCardContent = (className, component) => {
    return (
        <div className={className}>
          {component}
        </div>
    )
  };

  const renderSkillCont = (className) => {
    return (
        <div className={className}>
          {renderSkillsIcons(faCss3Alt, '#3FABC0', 'css anime')}
          {renderSkillsIcons(faReact, 'blue', 'react')}
          {renderSkillsIcons(faNode, 'green', 'node')}
          {renderSkillsIcons(faSass, '#C060DB', 'sass')}
          {renderSkillsIcons(faDocker, 'blue', 'docker')}
          {renderSkillsIcons(faHtml5, '#DD4E31', 'html5')}
        </div>
    )
  }

  const renderAvatarCont = (className, image) => {
    return (
      <div className={className}>
        <img src={image} alt='Profile'/>
      </div>
    )
  }

  const renderSections = (sectionName, classname, component) => {
    return sectionName === 'description'
        ? (<div className={classname}>
              {renderSKillCardContent('my-description', <Description />)}
              {renderSKillCardContent('skills-work', <Skills />)}
            </div>
        )
        : (<div className={classname}>
            {component}
          </div>
        )
  };

  const renderScrollDownButton = (className, ref, onclick) => {
    return (
        <div className={className} ref={ref} onClick={onclick}>
          <FontAwesomeIcon icon={faSortDown} size="2x"  className="scrollDownIcon glow"/>
        </div>
    )
  }
  return (
    <div className="home">
    <div className="home-container">
      {renderSections('navbar', '', <NavBar />)}
      <div className="intro-container">
        {renderIntroCont('intro-cont')}
        {renderSkillCont('skillIconCont')}
        {renderAvatarCont('avatar-container', Profile)}
        {renderScrollDownButton('row scroll-down-cont', smoothScrollDown, scrollDown)}
      </div>
    </div>
      {renderSections('description', 'description-cont')}
      {renderSections('projects', 'project-section', <Projects />)}
      {renderSections('footer', 'footer-section', <Footer />)}
    </div>
  );
}

export default Home;
