import React from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      {/* LEFT: Contact Form */}
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p className="contact-desc">
          Have a question or a project in mind? Feel free to reach out!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="57e69ae3-bde3-427f-b20c-c1babb73d03f"
          />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <div id="but">
            <button className="submitbut" id="button" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT: Contact Info */}
      <div className="contact-right">
        <h3>Get in Touch</h3>
        <p>Let’s connect and collaborate!</p>
        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/marikanti-sai-kumar-438866287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/saimudhiraj34/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a href="mailto:saimudhiraj6410@gmail.com">
            <FaEnvelope /> saimudhiraj6410@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
