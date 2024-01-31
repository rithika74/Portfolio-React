import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='p-5'>
        <footer style={{marginTop:'150px'}}>
        <div className='d-flex flex-wrap justify-content-evenly '>
          <div>Developed By Rithika</div>
          <div>Copyright &copy; 2024</div>
          <div className='icon'>
            <a className='me-4' href='https://github.com/rithika74'><FontAwesomeIcon icon={faGithub} /></a>
            <a className='me-4' href='https://www.linkedin.com/in/rithika-p-076262288/'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className='me-4' href='#'><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer