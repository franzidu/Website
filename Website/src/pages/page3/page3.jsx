import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./page3.module.scss";

function page3() {
  return (
    <div>
      <Navbar />
      <div className={styles.TextContainer}>
        <p>This is another another another subsite of my website</p>
      </div>
      <Footer />
    </div>
  );
}

export default page3;
