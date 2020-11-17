import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import moment from "moment";

const Repos = ({ repos, username }) => {
  return (
    <Container className='mb-5'>
      <Row>
        <Col className='text-white h2 mb-3'>{username}'s Repos</Col>
      </Row>
      <Row>
        {repos.map((repo) => (
          <Col xs={12} md={6} lg={4}>
            <a href={repo.html_url}>
              <Card className='py-3 px-3 mb-3'>
                <Row>
                  <Col>
                    <strong className='h4 one-liner'>
                      <i className='fa fa-folder' />{" "}
                      {repo.name.length > 15 ? `${repo.name.slice(0, 15)}...` : repo.name}
                    </strong>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col>
                    {repo.language && (
                      <div className='mr-3'>
                        <i className='fa fa-file-code-o' /> {repo.language}
                      </div>
                    )}
                  </Col>
                  <Col>
                    <div className='text-right letter-spacing-1'>
                      <i className='fa fa-calendar' />{" "}
                      {moment(repo.created_at).format("MMM D YYYY  ")}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} className='flex-row'>
                    <div className='mr-3'>
                      <i className='fa fa-star' /> {repo.stargazers_count}
                    </div>
                    <div className='mr-3'>
                      <i className='fa fa-code-fork' /> {repo.forks}
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className='text-right'>{repo.size} kb</div>
                  </Col>
                </Row>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Repos;
