import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./ContactForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);

  const emailSentMessageAnimation = {
    hidden: {
      y: "3vh",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjzifrn",
        "template_xsbffju",
        e.target,
        "user_vciSLxoFailuPgBKUaz3i"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 4000);
  };
  return (
    <div className="contactForm__container">
      <div className="contactForm__form">
        <div className="contactForm__formTitle">
          <h2>
            Get In Touch <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </h2>
        </div>
        <div className="contactForm__formMain">
          <form className="form" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="input"
              required
              //   onChange={(e) => setNameInput(e.target.value)}
              //   placeholder={`${(<FontAwesomeIcon icon={faUser} />)} Name`}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email*"
              className="input"
              required
              //   onChange={(e) => setEmailInput(e.target.value)}
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message*"
              className="input textarea"
              required
              //   onChange={(e) => setMessageInput(e.target.value)}
            />
            <div className="contactForm__buttonsContainer">
              <div className="buttonMessageContainer">
                <motion.button
                  whileTap={{ scale: 0.5 }}
                  type="submit"
                  className="button"
                >
                  Send Email
                </motion.button>
                {emailSent && (
                  <motion.div
                    className="sentMessage"
                    variants={emailSentMessageAnimation}
                    initial="hidden"
                    animate="show"
                  >
                    Message Sent!
                  </motion.div>
                )}
              </div>
              <div className="requiredContainer">
                <span className="requiredMessage">* = required</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
