import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          {Details.map((ele, key) => {
            return (
              <div
                className="col-md-4 col-12 col-xxl-4 my-5 mx-auto "
                key={key}
              >
                <div
                  className="card text-dark bg-light cwidth  mx-auto"
                  onClick={() => navigate("/ProductDetails/" + key)}
                >
                  <img
                    src={ele.image}
                    alt="Iphone 7"
                    style={{ width: "16rem" }}
                    className="mx-auto my-2"
                  />

                  <div className="card-header ">
                    <div>{ele.name}</div>
                    <div>${ele.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default Layout;
