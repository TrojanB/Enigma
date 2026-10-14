import useState from "react";
import useEffect from "react";
import useRef from "react";
import styles from "./Klawiatura.module.css";

function Klawiatura({pressedKey}) {

    const rzedy = [
        ["A", "W", "E", "R", "T", "Z", "U", "I", "O"],
        ["A","S","D","F","G","H","J","K"],
        ["P","Z","X","C","V","B","N","M","L"]
    ]

    return(
        <>
    {/* Lampki z literami ktore sie zapalają (nie mozna klikać) */}
    <div className={styles.container}>
        <div className={styles.klawiatura}>
            {rzedy.map((rzad,index) => (
                <div className={styles.rzad} key={index}>
                    {rzad.map((litera) => (
                        <div className={styles.klawiszSzyfr} key={litera}>
                            {litera}
                        </div>
                    ))}
                </div>
            ))}
        </div>


    {/* Klawiatura */}        
        <div className={styles.klawiatura}>
            {rzedy.map((rzad,index) => (
                <div className={styles.rzad} key={index}>
                    {rzad.map((litera) => (
                        <button key={litera} className={styles.klawisz}>{litera}</button>
                    ))}
                </div>
            ))}
        </div>
    </div>
        </>
    )
}

export default Klawiatura;