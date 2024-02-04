import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faBootstrap, faGithub, faNpm, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Skills = () => {
  return (
    <section id='skill' className='skills'>

      <div className='skill-section'>Professional Skillset</div>

      <div>
        <Container className='skill-div'>
          <Row className="justify-content-center">
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faHtml5} size='5x' border-3 /></div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo fs-1 fw-bolder '>C++</div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faReact} size='5x' /></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faBootstrap} size='5x' /></div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo fs-1 fw-bolder '>JS</div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faGithub} size='5x' /></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faNpm} size='5x' /></div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faCss3Alt} size='5x' /></div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <div className='logo'><FontAwesomeIcon icon={faDatabase} size='5x' /></div>
            </Col>
          </Row>
        </Container>
      </div>


    </section>
  )
}

export default Skills