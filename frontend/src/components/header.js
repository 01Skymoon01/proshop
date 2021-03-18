import React from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                <Navbar.Brand >PROSHOP</Navbar.Brand>
                    </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                        <Nav.Link > <i className={`fas fa-shopping-cart`}></i>cart</Nav.Link>
                        </LinkContainer>
                            <LinkContainer to='/login'>
                        <Nav.Link > <i className={`fas fa-sign-in-alt`}></i> Sign in</Nav.Link>
                            </LinkContainer>
                    </Nav>

                </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
};

export default Header;