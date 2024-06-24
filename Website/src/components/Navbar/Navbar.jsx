import React from 'react';
import styles from "./Navbar.module.scss"
import Logo from "../../assets/images/moonstar.svg"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <div>
            <div className={styles.head}>
                    <img className={styles.logo} src={Logo} alt="Logo" />
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/page1">page1</Link>
                                <Link to="/page2">page2</Link>
                            </li>
                        </ul>
                    </nav>
                 </div>
            </div>
        
     );
}

export default Navbar;