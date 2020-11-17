import React, { useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

const Home = (props) => {
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/${username}`);
  };

  return (
    <Container className='vh-100 flex-center'>
      <div className='logo-container mb-3'>
        <img
          alt='gh'
          className='logo'
          src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
        />
      </div>
      <h1 className='text-main text-xl-center'>Git Dojo</h1>
      <Form className='flex-center' onSubmit={onSubmitHandler}>
        <Form.Row className='mt-3 mb-3 '>
          <Col>
            <Form.Control placeholder='Github username' onChange={onChangeHandler} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Button variant='info' type='submit'>
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default Home;
