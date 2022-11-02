import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#596886',
};

const SITE_URL = process.env.REACT_APP_SITE_URL || 'http://127.0.0.1:3000';

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} expand='lg' variant='light'>
      <Container>
        <Nav.Link href={SITE_URL}>
          <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
