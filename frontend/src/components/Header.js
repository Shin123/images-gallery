import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
    backgroundColor: '#596886'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} expand="lg" variant="light">
            <Container>
                <Logo style={{ maxWidth: '12rem', maxHeight: '2rem' }}/>
            </Container>
        </Navbar>
    )
};

export default Header;