import React from 'react';
import styles from "./Footer.module.scss"
import {Link} from "react-router-dom"

function Footer() {
    return ( 
        <div className={styles.Footer}>
            <span className={styles.Container}>
                <div className={styles.FooterContent}>
                    <span className={styles.Headline}>Soziale Medien</span>
                    <a href="https://www.linkedin.com/in/franziska-dudichum-151145210/" target="_blank">LinkedIn</a>
                    <a>Xing</a>
                    <a>Instagram</a>
                </div>
                <div className={styles.FooterContent}>
                    <span className={styles.Headline}>Kontakt</span>
                    <Link to="/Impressum">Impressum &<br></br>Datenschutzerklärung</Link>
                    <Link to="/Contact">Kontaktformular</Link>
                </div>
            </span>
            <p className={styles.MiniText}>@Franziska Dudichum 2024. Alle Rechte vorbehalten.</p>
        </div>
     );
}

export default Footer;