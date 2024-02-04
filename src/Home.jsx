import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>

            <header >
                <Navbar collapseOnSelect expand="lg" className='bg fixed-top' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className=" mx-auto gap-4 ">
                                <Nav.Link ><li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li></Nav.Link>
                                <Nav.Link ><li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li></Nav.Link>
                                <Nav.Link ><li><a href="#skill" onClick={() => scrollToSection('skill')}>Skill</a></li></Nav.Link>
                                <Nav.Link ><li><a href="#work" onClick={() => scrollToSection('work')}>Work</a></li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Intro />
            <About />
            <Skills />
            <Cards />
            <Footer />

        </>
    )
}

export default Home