import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import styles from "./Impressum.module.scss";

function Impressum() {
  return (
    <div>
      <Navbar />
      <div className={styles.TextContainer}>
        <h1>Impressum</h1>
        <p>
          Aufgrund von privater Nutzung und Bereitstellung dieser Webseite und
          allen verbundenen Subseiten sind die Kontaktdaten der verantwortlichen
          Person vorbehalten.
        </p>
        <h1>Datenschutzerklärung</h1>
        <p>Die Datenschutzerklärung befindet sich in Bearbeitung.</p>
        <p>
          Für die Inhalte und Richtigkeit von verlinkten Webseiten ist der
          Betreiber dieser Webseite nicht verantwortlich.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
