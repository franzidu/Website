import React from "react";
import styles from "./Tiles.module.scss"
import Button from '@mui/material/Button';
function Tiles() {
    return ( 
        <div className={styles.Tiles}>
            <div className={styles.Tile}>
                <h2>This is a Tile</h2>
                <p>Hello, this is a Tile</p>
                <Button variant="contained" >Let´s dive in!</Button>
                <Button variant="contained" disabled>I´m disabled</Button>
            </div>
        </div>
     );
}

export default Tiles;