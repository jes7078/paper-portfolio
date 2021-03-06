/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="https://pinellas-ale-trail.netlify.com/" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/PinellasAleTrail.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://pinellas-ale-trail.netlify.com/"
                target="_blank"
              >
                Capstone
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="https://pinellas-ale-trail.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/PinellasAleTrailAPI.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://pinellas-ale-trail.herokuapp.com/index.html"
                target="_blank"
              >
                Capstone API
              </Button>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="https://who-works-here-jeffreysojack.netlify.com/" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/WhoWorksHere.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://who-works-here-jeffreysojack.netlify.com/"
                target="_blank"
              >
                WhoWorksHere
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="https://minesweeper-jeffreysojack.netlify.com/" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/MineSweeper.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://minesweeper-jeffreysojack.netlify.com/"
                target="_blank"
              >
                MineSweeper
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
