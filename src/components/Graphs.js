import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Doughnut, HorizontalBar } from "react-chartjs-2";

const Graphs = ({ repos, stats, username }) => {
  const languagesData = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }],
  };

  if (stats) {
    stats.forEach((element, index) => {
      languagesData.labels.push(element.label);
      languagesData.datasets[0].data.push(element.value);
      languagesData.datasets[0].backgroundColor.push(element.color);
    });
  }

  const reposData = {
    labels: [],
    datasets: [{ data: [], backgroundColor: "#1f9bcf", barThickness: 20 }],
  };

  if (repos) {
    repos
      .filter((repo) => !repo.fork)
      .sort((x, y) => y["stargazers_count"] - x["stargazers_count"])
      .slice(0, 6)
      .forEach((element) => {
        reposData.labels.push(element.name);
        reposData.datasets[0].data.push(element.stargazers_count);
      });
  }

  return (
    <Container className='mb-4'>
      <Row>
        <Col className='text-white h2 mb-2'>{username}'s stats</Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className='card py-4 px-4 mb-3'>
            <strong className='h4 mb-3'>Favourite Languages</strong>
            <Doughnut
              height={200}
              responsive={true}
              data={languagesData}
              borderColor='none'
              options={{
                legend: {
                  position: "left",
                },
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className='card py-4 px-4 mb-3'>
            <strong className='h4 mb-3'> Top Starred Repositories</strong>

            <HorizontalBar
              data={reposData}
              height={200}
              responsive={true}
              options={{ axes: { display: true }, legend: { display: false } }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Graphs;
