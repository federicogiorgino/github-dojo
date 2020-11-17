import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InfoPanel = ({ infos }) => {
  return (
    <div className='card-black'>
      <Container className='flex-center mb-5'>
        <Row className='mt-5'>
          <Col>
            <img src={infos.avatar_url} className='avatar' alt='Logo' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <h1 className='text-white text-capitalize display-5 text-center'>{infos.name}</h1>
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col>
            <a href={infos.html_url} className='text-main h3'>
              @{infos.login}
            </a>
          </Col>
        </Row>
        {infos.bio && (
          <Row className='mt-1'>
            <Col>{infos.bio} </Col>
          </Row>
        )}
        <Row className='mt-3'>
          {infos.location && (
            <Col>
              <p className='text-white'>
                <i class='fa fa-street-view'></i> {infos.location}
              </p>
            </Col>
          )}

          {infos.company && (
            <Col>
              <p className='text-white'>{infos.company}</p>
            </Col>
          )}
        </Row>

        <Row>
          <Col md={4}>
            <div className='card card-dark flex-center py-1 px-4 mb-4 text-white'>
              <strong>Followers</strong>
              <div>{infos.followers}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className='card card-dark flex-center py-1 px-4 mb-4 text-white'>
              <strong>Following</strong>
              <div>{infos.following}</div>
            </div>
          </Col>
          <Col md={4}>
            <div className='card card-dark flex-center py-1 px-4 mb-4 text-white'>
              <strong>Repos</strong>
              <div>{infos.public_repos}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoPanel;
