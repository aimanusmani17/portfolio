// import React from 'react';
// import Styles from '../Styles/Contact.module.css';

// const Contact = () => {
//     return (
//       <section id="contact" className={Styles.contactSection}>
//         <h2>Contact Me</h2>
//         <p>If you'd like to work together or have any questions, feel free to reach out!</p>
//         <a href="mailto:aiman@example.com" className={Styles.contactBtn}>Email Me</a>
//       </section>
//     );
//   }

// export default Contact

import React, { useState } from "react";
import Styles from "../Styles/Contact.module.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <section className={Styles.contactSection}>
      <div>
        <h1 className={Styles.contactHeading}>Let's Connect</h1>
      </div>

      <div className={Styles.formContainer}>
        <div className={Styles.taglineContainer}>
          <h2 className={Styles.tagline}>
            Let's Build Something
            <br />
            Great Together!
          </h2>
        </div>
        <div className={Styles.contactForm}>
          <form onSubmit={handleSubmit} className={Styles.contactForm}>
            <div className={Styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={Styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={Styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className={Styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
