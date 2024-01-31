import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img1.png'
import Footer from './Footer';


const Intro = () => {
  return (
    <div>
      <section>
        <Container >
          <Row>
            <Col>
              <div className='home'>
                <p>Hello There! <br /> I'M <span>RITHIKA</span> </p>
                <p>MERN Stack Developer</p>
              </div>
            </Col>
            <Col>
              <div className='about'>
                <img src={img} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer/>

    </div>
  )
}

export default Intro