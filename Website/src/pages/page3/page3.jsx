import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./page3.module.scss";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_udek5uu", "template_mnl7nfw", form.current, {
        publicKey: "_VwOGr2KUfIKCBo-l",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.FormContainer}>
          <div className={styles.Formular}>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className={styles.Formular}>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={styles.Formular}>
            <label>Nachricht</label>
            <textarea name="message" />
            <input className={styles.Button}type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
};

function page3() {
  return (
    <div>
      <Navbar />
      <div className={styles.TextContainer}>
        <h1>Kontakt</h1>
        <p>
          Über das folgende Formular kannst du mir eine Nachricht per E-Mail
          senden.
        </p>
        <p>
          Bitte gib deinen Namen und deine E-Mail Adresse an, damit ich dich
          erreichen kann.
        </p>
        <p>Ich werde mich versuche, mich schnellstmöglich bei dir zu melden.</p>
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
export default page3;
