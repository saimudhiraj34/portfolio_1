import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-container" 
     style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}id="contact">
      <div className="contact-inside">
        <h2>Contact Me</h2>
        <p className="contact-desc">
          Have a question or a project in mind? Feel free to reach out!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          {/* Web3Forms access key */}
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
    </div>
  );
};
