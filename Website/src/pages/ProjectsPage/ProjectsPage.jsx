import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./ProjectsPage.module.scss";

function page1() {
  return (
    <div>
      <Navbar />
      <div className={styles.TextContainer}>
        <h1>Projekte</h1>
        <p>This is another subsite of my website</p>
      </div>
      <Footer />
    </div>
  );
}

export default page1;
