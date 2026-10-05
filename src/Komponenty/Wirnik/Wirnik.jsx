import {useState} from "react";
import useEffect from "react";
import useRef from "react";
import styles from "./Wirnik.module.css";

function Wirnik( {pozycja} ) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [indeks, setIndeks] = useState(pozycja);

    const handleClickUp = () => {
        setIndeks((indeks + 1) % alfabet.length);
    }

    const handleClickDown = () => {
        setIndeks((indeks - 1 + alfabet.length) % alfabet.length);
    }

    return(
        <div className={styles.wirnikContainer}>
            <button className={styles.przyciskWirnik} onClick={handleClickUp}>⬆️</button>
            <div className={styles.displayLitera}>
                {alfabet[indeks]}
                {console.log("Indeks: ", indeks)}
            </div>
            <button className={styles.przyciskWirnik} onClick={handleClickDown}>⬇️</button>
        </div>
    )
}

Wirnik.defaultProps = {
    pozycja: 0
}

export default Wirnik;