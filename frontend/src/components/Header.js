import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="/">{ title }</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;