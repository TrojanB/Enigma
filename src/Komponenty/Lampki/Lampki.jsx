import useState from "react";
import useEffect from "react";
import useRef from "react";
import styles from "./Lampki.module.css";

function Lampki({zaszyfrowanaLitera}) {

    const rzedy = [
        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
        ["A","S","D","F","G","H","J","K"],
        ["P","Z","X","C","V","B","N","M","L"]
    ]

    return(
        <>
    {/* Lampki z literami ktore sie zapalają (nie mozna klikać) */}
    <div className={styles.container}>
        <div className={styles.lampki}>
            {rzedy.map((rzad,index) => (
                <div className={styles.rzad} key={index}>
                    {rzad.map((litera) => (
                        <div key={litera} 
                        className={`${styles.lampka} ${
                            zaszyfrowanaLitera === litera ? styles.aktywna : ""
                        }`}
                        >
                            {litera}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
        </>
    )
}

export default Lampki;