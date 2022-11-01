import React from 'react';
import { Card, Button } from 'react-bootstrap';

const welcomeStyle = {
    backgroundColor: '#ddf6f9',
    border: 'none'
}

const Welcome = () => {
  return (
    <Card style={welcomeStyle}>
      <Card.Body>
        <Card.Title>Hello, world!</Card.Title>
        <Card.Text>
        This is a simple application that retrieves photos usung Unspash API. In
        order to start enter any search term in the input field.
        </Card.Text>
        <Button href="https://unsplash.com">Learn more</Button>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
