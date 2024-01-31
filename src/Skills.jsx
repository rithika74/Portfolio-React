import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faBootstrap, faGithub, faNpm, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Skills = () => {
  return (
    <>
    
    <div style={{marginTop:'200px', fontSize:'36px', fontWeight:'bolder', textAlign:'center'}}>Professional Skillset</div>

    <div className='skill'>
        <div className='logo'><FontAwesomeIcon icon={faHtml5} size='5x' border-3 /></div>
        <div className='logo fs-1 fw-bolder '>C++</div>
        <div className='logo'><FontAwesomeIcon icon={faReact} size='5x'/></div>
        <div className='logo'><FontAwesomeIcon icon={faBootstrap} size='5x'/></div>
        <div className='logo fs-1 fw-bolder '>JS</div>
        <div className='logo'><FontAwesomeIcon icon={faGithub} size='5x'/></div>
        <div className='logo'><FontAwesomeIcon icon={faNpm} size='5x'/></div>
        <div className='logo'><FontAwesomeIcon icon={faCss3Alt} size='5x'/></div>
        <div className='logo'><FontAwesomeIcon icon={faDatabase}  size='5x'/></div>
    </div>
    
    <Footer/>
    
    
    </>
  )
}

export default Skills