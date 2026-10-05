import useState from "react";
import useEffect from "react";
import useRef from "react";
import styles from "./Klawiatura.module.css";

function Klawiatura() {
    return(
        <>
    <div className={styles.container}>
        <div className={styles.klawiatura}>
            <div className={styles.rzad}>
                <div className={styles.klawiszSzyfr}>Q</div>
                <div className={styles.klawiszSzyfr}>W</div>
                <div className={styles.klawiszSzyfr}>E</div>
                <div className={styles.klawiszSzyfr}>R</div>
                <div className={styles.klawiszSzyfr}>T</div>
                <div className={styles.klawiszSzyfr}>Z</div> 
                <div className={styles.klawiszSzyfr}>U</div>
                <div className={styles.klawiszSzyfr}>I</div>
                <div className={styles.klawiszSzyfr}>O</div>
            </div>

            <div className={styles.rzad}>
                <div className={styles.klawiszSzyfr}>A</div>
                <div className={styles.klawiszSzyfr}>S</div>
                <div className={styles.klawiszSzyfr}>D</div>
                <div className={styles.klawiszSzyfr}>F</div>
                <div className={styles.klawiszSzyfr}>G</div>
                <div className={styles.klawiszSzyfr}>H</div>
                <div className={styles.klawiszSzyfr}>J</div>
                <div className={styles.klawiszSzyfr}>K</div>
            </div>

            <div className={styles.rzad}>
                <div className={styles.klawiszSzyfr}>P</div>
                <div className={styles.klawiszSzyfr}>Z</div>
                <div className={styles.klawiszSzyfr}>X</div>
                <div className={styles.klawiszSzyfr}>C</div>
                <div className={styles.klawiszSzyfr}>V</div>
                <div className={styles.klawiszSzyfr}>B</div>
                <div className={styles.klawiszSzyfr}>N</div>
                <div className={styles.klawiszSzyfr}>M</div>
                <div className={styles.klawiszSzyfr}>L</div>
            </div>
        </div>



        <div className={styles.klawiatura}>
            <div className={styles.rzad}>
                <button className={styles.klawisz}>Q</button>
                <button className={styles.klawisz}>W</button>
                <button className={styles.klawisz}>E</button>
                <button className={styles.klawisz}>R</button>
                <button className={styles.klawisz}>T</button>
                <button className={styles.klawisz}>Z</button> 
                <button className={styles.klawisz}>U</button>
                <button className={styles.klawisz}>I</button>
                <button className={styles.klawisz}>O</button>
                <button className={styles.klawisz}>P</button>
            </div>

            <div className={styles.rzad}>
                <button className={styles.klawisz}>A</button>
                <button className={styles.klawisz}>S</button>
                <button className={styles.klawisz}>D</button>
                <button className={styles.klawisz}>F</button>
                <button className={styles.klawisz}>G</button>
                <button className={styles.klawisz}>H</button>
                <button className={styles.klawisz}>J</button>
                <button className={styles.klawisz}>K</button>
            </div>

            <div className={styles.rzad}>
                <button className={styles.klawisz}>P</button>
                <button className={styles.klawisz}>Z</button>
                <button className={styles.klawisz}>X</button>
                <button className={styles.klawisz}>C</button>
                <button className={styles.klawisz}>V</button>
                <button className={styles.klawisz}>B</button>
                <button className={styles.klawisz}>N</button>
                <button className={styles.klawisz}>M</button>
                <button className={styles.klawisz}>L</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default Klawiatura;