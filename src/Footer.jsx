import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div >
      <footer className='footer' >
        <div className='footer-section'>
          <div className='col-md-auto mb-3'>
            <div>Developed By Rithika</div>
          </div>
          <div className='col-md-auto mb-3'>
            <div>Copyright &copy; 2024</div>
          </div>
          <div className='col-md-auto mb-3'>
            <div className='icon'>
              <a className='me-4' href='https://github.com/rithika74'><FontAwesomeIcon icon={faGithub} /></a>
              <a className='me-4' href='https://www.linkedin.com/in/rithika-p-076262288/'><FontAwesomeIcon icon={faLinkedin} /></a>
              <a className='me-4' href='#'><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer