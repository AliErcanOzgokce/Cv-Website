import React, { useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const contactContainer = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      damping: 9,
      ease: "easeIn",
    },
  },
};

const contactPage = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { type: "tween", duration: 2 },
  },
};

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const style = {
    color: "White",
    marginBottom: "30px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userName !== "" && email !== "" && regex.test(email) !== false) {
      setLoader(true);

      //emailjs here...
      emailjs
        .sendForm(
          "service_t9fspdr",
          "template_m0g82rr",
          e.target,
          "JQY8Fe7l9WGRy4Zmb"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setUserName("");
      setEmail("");
      setMsg("");
      setError("Check your inbox...");
      setTimeout(() => {
        setError("");
      }, 4000);
      setError("Check your inbox...");
    } else if (userName === "" || email === "") {
      console.log("Seriously, You don't know anythig ? 😂😂");
      setError("Above fields are blank. 😶");
    } else if (regex.test(email) === false) {
      setError("Please enter correct Email!");
    }
  };

  return (
    <>
      <motion.div
        className="contact-page"
        variants={contactPage}
        initial="initial"
        animate="animate"
      >
        <div className="big-container">
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Icon icon="akar-icons:cross" style={style} />
            </motion.div>
          </NavLink>
          <motion.div className="connect-container" variants={contactContainer}>
            <form
              className="connect-form"
              //   onSubmit={handleSubmit}
              onSubmit={handleSubmit}
            >
              <h1>Let's Get in Contact 👋</h1>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="text"
                className="input"
                placeholder="Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                type="text"
                className="textarea"
                placeholder="Message"
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>

              <motion.button
                className="connect-btn"
                type="submit"
                style={{ background: loader ? "#ccc" : "#000" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>
              <p className="error">{error}</p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default Contact;
