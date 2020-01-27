
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Jeffrey Sojack</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Web Developer
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <section className="category category-absolute">
        <h6>
        <a id="github" href="https://github.com/jes7078">
        GitHub
          </a>
        </h6>
        <h6>
        {/* <a href="www.linkedin.com/in/jeffrey-sojack" style={{color: "white", fontSize:"2rem"} }>
        LinkedIn
          </a> */}
            <a id="linkedin" href="www.linkedin.com/in/jeffrey-sojack">
        LinkedIn
          </a>
        </h6>
        </section>
      </div>
    </>
  );
}

export default IndexHeader;
