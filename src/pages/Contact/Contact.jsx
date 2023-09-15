import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

function EmailForm() {
  const [message, setMessage] = useState("Your Message");
  const [email, setEmail] = useState("Your Email");
  const [name, setName] = useState("Your Name");

  const handleName = (e) => {
    e.preventDefault();
    setName("");
  };
  const handleMessage = (e) => {
    e.preventDefault();
    setMessage("");
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portofolio-be.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: email,
            text: `\tName: ${name}\n\tEmail: ${email}\n\n\tMessage: ${message}`,
          }),
        }
      );

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Email failed to send.");
      }
      setMessage("Your Message");
      setEmail("Your Email");
      setName("Your Name");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Element name="contact">
      <div className="containerC">
        <div className="titleContainer">
          <h1 className="headerH">CONTACT</h1>
          <h2 className="header2H">Get in touch</h2>
        </div>

        <div className="cont">
          <div className="leftSideC">
            <p>Did I get your attention?</p>
            <p>Then send me an email to discuss further or,</p>
            <p>
              Find me on <span>Social Media Platforms</span> to discover more
              about my educational and professional activity.
            </p>
            <div className="socialsC">
              <a
                href="https://www.linkedin.com/in/lorena-capraru"
                className="socialC"
              >
                <span>Linkedin</span>
                <FontAwesomeIcon icon={faLinkedin} className="social2A" />
              </a>

              <a href="https://github.com/LorenaCapraru">
                <span>GitHub</span>

                <FontAwesomeIcon icon={faGithub} className="social2A" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="nameEmail">
              <div>
                <input
                  type="text"
                  value={name}
                  onClick={handleName}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onClick={handleEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                value={message}
                onClick={handleMessage}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit" className="buttonC">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
}

export default EmailForm;
