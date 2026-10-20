import {useState} from "react";
import {useEffect} from "react";
import useRef from "react";
import styles from "./Wirnik.module.css";

/* 
Okablowanie w enigmie było strasznie skomplikowane. 

Dla alfabetu ABCDEFGHIJKLMNOPQRSTUVWXYZ     

I wirnik przyjmował literę i dla tej litery zwracał inną literę po czym sie obracał o 1 pozycję i przyjmował inną literę.

*/

function Wirnik( {pozycja, setPozycja} ) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const handleClickUp = () => {
        console.log("DO GORY")
        setPozycja(poz => (poz + 1) % alfabet.length);
    }

    const handleClickDown = () => {
        setPozycja(poz => (poz - 1 + alfabet.length) % alfabet.length);
    }
    
    return(
        <div className={styles.wirnikContainer}>
            <button className={`${styles.przyciskWirnik} ${styles.przyciskWirnikGora}`} onClick={handleClickUp}>⬆️</button>
            <div className={styles.displayLitera}>
                {alfabet[pozycja]}
            </div>
            <button className={`${styles.przyciskWirnik} ${styles.przyciskWirnikDol}`} onClick={handleClickDown}>⬇️</button>
        </div>
    )
}

Wirnik.defaultProps = {
    pozycja: 0
}

export default Wirnik;