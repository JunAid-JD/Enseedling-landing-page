import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cancel, Close } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false); // New state variable

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      contactNumber: phone,
      message: message,
      createdOn: new Date().toDateString(),
    };

    console.log(formData);

    setIsLoading(true);
    setTimeout(() => {
      axios
        .post(
          "https://enseedling-backend.onrender.com/contact/create",
          formData
        )
        .then((response) => {
          console.log(response.data);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setIsLoading(false);
          setSuccess(true);
          // setShowModal(true);
        })
        .catch((error) => {
          console.error(error);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setIsLoading(false);
          setError(true);
        });
    }, 5000); // Adjust the delay as needed (in milliseconds)
  };

  // Close the success modal after a delay
  // useEffect(() => {
  //   if (showModal) {
  //     setTimeout(() => {
  //       setShowModal(false);
  //     }, 5000); // Delay of 5 seconds (5000 milliseconds)
  //   }
  // }, [showModal]);

  return (
    <div className="contact">
      {success && (
        <div className="submitbox">
          <div className="submitcontent">
            <div className="head">
              <h3>Form Submitted Successfully</h3>
              <Close onClick={() => setSuccess(!success)} />
            </div>
            <div className="body">
              <img
                src="/images/success.png"
                alt="logo"
                width="50px"
                height="50px"
              />
              <span>Will get back to you within 24 hours</span>
            </div>
            <div className="foot">
              <button onClick={() => setSuccess(!success)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="submitbox">
          <div className="submitcontent">
            <div className="head">
              <h3>Form Submition Unsuccessfully</h3>
              <Close onClick={() => setError(!error)} />
            </div>
            <div className="body">
              <Cancel style={{ color: "red", width: "50px", height: "50px" }} />
              <span>Try Again !</span>
            </div>
            <div className="foot">
              <button onClick={() => setError(!error)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div className="form">
        <h1>
          Connect with <span>Enseedling</span>
        </h1>
        <p>Keep in touch with us for latest updates</p>
        <div className="data">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number*"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              placeholder="Enter Message"
            ></textarea>
            <button
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              disabled={!name || !email || !message || !phone || isLoading}
              style={{ position: "relative" }}
            >
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )}
              {isLoading ? "" : "CONNECT"}
            </button>
          </form>
        </div>
        {/* <!-- Modal --> */}
        {/* {showModal && (
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Form submitted Successfully
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="modal-body"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/success.png"
                    alt="logo"
                    width="50px"
                    height="50px"
                  />
                  <span>Will get back to you within 24 hours</span>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
        {/* <!-- Modal -->
        {error && (
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Form submition Unsuccessfull
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="modal-body"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Cancel style={{ color: "red" }} />
                  <span>Try Again Later</span>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
        <div className="social">
          <div className="socialbox">
            <img src="/images/callimg.png" alt="log" />
            <div>
              <h5>PHONE</h5>
              <p>+1 (478) 246-0224</p>
            </div>
          </div>
          <div className="socialbox">
            <img src="/images/msgimg.png" alt="log" />
            <div>
              <h5>EMAIL</h5>
              <p>Sales@enseedling.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <img src="/images/contactimg.png" alt="logo" />
      </div>
    </div>
  );
};

export default Contact;
