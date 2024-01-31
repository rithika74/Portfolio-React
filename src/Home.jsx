import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet , Link} from 'react-router-dom';

const Home = () => {
    return (
        <>

            <header>
                <div className='bg fixed-top '>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/skills'>Skill</Link></li>
                    <li><Link to='/work'>Work</Link></li>

                </div>
                {/* <Navbar expand="lg" className=' fixed-top '>
                    <Container >
                        <Navbar.Brand href="/" className=' fs-3 text-light fw-bold '>R</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className=" ms-auto fs-4 ">
                                <Nav.Link className=' text-light '>Home</Nav.Link>
                                <Nav.Link className=' text-light '>About</Nav.Link>
                                <Nav.Link className=' text-light '>Work</Nav.Link>
                                <Nav.Link className=' text-light '>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
            </header>

            <Outlet/>
        </>
    )
}

export default Home