import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='card-black'>
      <Container>
        <Row>
          <Col className='text-center py-3'>&copy; Git Dojo 2020</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
