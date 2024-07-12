import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/moonstar.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className={styles.head}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/ProjectsPage">Projekte</Link>
            </li>
          </ul>
          <Link Link to="/">
            <img className={styles.logo} src={Logo} alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link to="/page2">page2</Link>
              <Link to="/Contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
