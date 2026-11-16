"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    /* The original portfolio used an Adobe-hosted form.
       For now this shows a confirmation. Can be wired to
       a Formspree/Netlify Forms/email endpoint later. */
    setSubmitted(true);
  }

  return (
    <div className="site-container">
      <div className="contact-page">
        <h1>Contact</h1>
        <p className="contact-intro">
          Get in touch for enquiries, collaborations or just to say hello.
        </p>

        {submitted ? (
          <p style={{ color: "#444" }}>
            Thank you for your message. I&rsquo;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
