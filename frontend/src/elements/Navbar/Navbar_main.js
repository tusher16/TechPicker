import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Logo from '../../elements/Logo/Logo';

import classes from './Navbar_main.module.css';



function Navbar_main() {
    return(
        <div>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className={classes.nav_style} className="bg-neutral">
        <Container>
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Collection</Nav.Link>
            
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            <Nav>

            <Nav.Link href="#search"> <FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes">
                <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link eventKey={4} href="#memes">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        
        </Container>
        </Navbar>
        
        </div>
    )
}

export default Navbar_main;