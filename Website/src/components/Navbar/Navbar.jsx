import React from 'react';
import styles from "./Navbar.module.scss"
import Logo from "../../assets/images/moonstar.svg"

function Navbar() {
    return ( 
        <div>
            <div className={styles.head}>
                    <img className={styles.logo} src={Logo} alt="Logo" />
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                                <a href="/page1">page1</a>
                                <a href="/page2">page2</a>
                            </li>
                        </ul>
                    </nav>
                 </div>
            </div>
        
     );
}

export default Navbar;