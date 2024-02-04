import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img2.png'

const About = () => {
    return (

        <section id='about' >
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className='about'>
                            <h1>About <span>Me</span></h1><br />
                            <p >Hello! I'm <span>Rithika</span> and I'm from Malappuram, Kerala. I'm a passionate individual with a <span>Diploma in Computer Engineering</span>. Currently, I'm gaining valuable experience as an intern at Softroniics, where I specialize as a <span>MERN Stack Developer</span>. <br /><br />
                                My journey into the world of technology has been exhilarating, and I thrive on the challenges and opportunities it presents.</p>
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

export default About