import React from "react";
import "./Testimonials.css";
import { Card } from "react-bootstrap";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";

const Testimonials = () => {
  return (
    <div className="testimonial" id="testimonial">
      <div>
        <h1>Testimonials</h1>
        <h4>
          What's Our Patients <br />
          Says
        </h4>
        <div className="testimonialDetails">
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
              margin: "30px",
            }}
          >
            <img
              src={user1}
              alt=""
              style={{
                marginTop: "-45px",
              }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text
                className="text"
                style={{
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textCenter: "center",
              }}
            >
              <p>Mohammad Islam</p>
              <p
                style={{
                  padding: "10px",
                }}
              >
                Ajloun
              </p>
            </Card.Header>
          </Card>
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
              margin: "30px",
              backgroundColor: "#13D1D3",
              color: "#FFF",
            }}
          >
            <img
              src={user2}
              alt=""
              style={{
                marginTop: "-45px",
              }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text
                className="text"
                style={{
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textCenter: "center",
              }}
            >
              <p>Noor Hassan</p>
              <p
                style={{
                  padding: "10px",
                }}
              >
                Jarash
              </p>
            </Card.Header>
          </Card>
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
              margin: "30px",
            }}
          >
            <img
              src={user3}
              alt=""
              style={{
                marginTop: "-45px",
              }}
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text
                className="text"
                style={{
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textCenter: "center",
              }}
            >
              <p>Nadia Omer</p>
              <p
                style={{
                  padding: "10px",
                }}
              >
                Irbid
              </p>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
