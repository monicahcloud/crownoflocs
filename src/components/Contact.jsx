import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select"
import img from "../images/monicah_color.jpg"

const ContactPage = () => {
  const form = useRef();
  const info = {
    address: "Serving surrounding areas: Racine, Kensoha, South Milwaukee",
    email: "mycrownlocs@gmail.com",
    phone: "262-770-5142",
  };

  const [formStatus, setFormStatus] = useState("Send");
  const services = [
    { value: "Sisterlocks Package", label: "Sisterlocks Package" },
    { value: "Microlocks", label: "Microlocks Package" },
    { value: "Retigthening", label: "Retigthening" },    
  ]

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    const { name, email, phone, service } = e.target.elements;

    const customerInfo = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      service: service.value,
    };
    console.log(customerInfo);

    emailjs
      .sendForm(
        "service_401yyq7",
        "template_637jotu",
        form.current,
        "49udXbCEUdTEO0ECJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Send");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div
        className="containter text-center"
        style={{
          color: "black",
          background: "white",
          fontSize: "20px",
          fontFamily: "serif",
          marginLeft: '5px'
        }}>
        <div className="row">
          <div className="col-12">

            <h2>Contact Us</h2>
            {info.address}
            <div >
            <img
            className="rounded-circle"
              width="150"
              src={img} alt="monicah-bw" /></div>
            <br />
            <h6>Monicah</h6>
            <h6>Trained Sisterlocks Loctician</h6>
            <h6>Email: {info.email}</h6>
            <h6>Phone: {info.phone}</h6>
            <br />
            <div className="col-12">
              <p > By completing this form, you acknowledge you have read and agree to the terms outlined in the <Link to="/policy"> policy </Link> of Crown of Locs and Natural Hair LLC.</p>
              <form ref={form} target="blank" onSubmit={onSubmit}>
                <div className="col-md-6 mx-auto form=group">
                  <div form-row="false">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      className="form-control"
                      type="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <Select
                      options={services}
                      placeholder="Select the service you are interested in."
                      name="service"
                    />

                    <textarea
                      className="form-control"
                      type="textarea"
                      name="message"
                      placeholder="Type Your Message"
                      rows="5"
                      required></textarea>
                    <br />

                    <button
                      className="btn btn-lg btn-warning d-grid gap-2 col-6 mx-auto"
                      type="submit">
                      {formStatus}
                    </button>
                    <br /></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;