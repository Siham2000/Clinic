import React, { useRef } from "react";
import "./ContactUs.css";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4jh217",
        "template_e7erdql",
        form.current,
        "user_FQn0tzU78DZd9yqLfWmY7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactUs" id="contactUs">
      <div>
        <h1>Contact Us</h1>

        <div className="contactUsDetails">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputs">
              <input
                className="email"
                name="email"
                placeholder="Email Address*"
                type="text"
              />
              <br />
              <input placeholder="Name*" type="text" name="name" />
              <br />
              <textarea
                name="message"
                className="text"
                placeholder="Your Message"
              ></textarea>
              <br />

              <Button type="submit" className="submitBtn">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
