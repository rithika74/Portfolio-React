import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img1.png'


const Intro = () => {
  return (

    <section id='home'>
      <Container >
        <Row>
          <Col md={12} lg={6}>
            <div className='home'>
              <p>Hello There! <br /> I'M <span>RITHIKA</span> </p>
              <p>MERN Stack Developer</p>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className='about'>
              <img src={img} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>


  )
}

export default Intro