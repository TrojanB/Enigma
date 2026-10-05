import styles from './Enigma.module.css';
import Klawiatura from '../Klawiatura/Klawiatura';
import Wirnik from '../Wirnik/Wirnik';

function Enigma(){
    return(
        <>
            <div className={styles.enigma}>
                <Wirnik pozycja={0} />
                <Wirnik pozycja={1} />
                <Wirnik pozycja={2} />

                <Klawiatura />
            </div>
        </>
    )
}

export default Enigma;
