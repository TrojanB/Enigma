import { useEffect, useState, useRef } from 'react';

import styles from './Enigma.module.css';
import Klawiatura from '../Klawiatura/Klawiatura';
import Wirnik from '../Wirnik/Wirnik';
import InputText from '../InputText/InputText';



function Enigma(){
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const [inputValue, setInputValue] = useState("");
    const prevInputValueLength = useRef(0)
    const firstOn = useRef(true)
    const [pozycja_I, setPozycja_I] = useState(0)
    const [pozycja_II, setPozycja_II] = useState(0)
    const [pozycja_III, setPozycja_III] = useState(0)

    //wpisywanie reczne
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //wpisywanie przy uzyciu komponentu Klawiatura
    const handleKeyPress = (litera) => {
        setInputValue(prev => prev + litera);
        console.log(litera);
    }

    //usuwanie przy uzyciu komponentu Klawiatura
    const handleRemoveKeyPress = () => {
        setInputValue(prev => prev.slice(0, -1));
        console.log("usunieto znak");
    }

    useEffect(() => {
        console.log(firstOn.current)
        if(firstOn.current){
            firstOn.current = false
            return;
        }
        const roznica = inputValue.replaceAll(' ', '').length - prevInputValueLength.current

        setPozycja_I((pozycja_I + roznica) % alfabet.length);
        
        prevInputValueLength.current = inputValue.replaceAll(' ','').length

    }, [inputValue])

    return(
        <>

            <div className={styles.enigma}>
                <div className={styles.wirniki}>
                <Wirnik pozycja={pozycja_III} setPozycja={setPozycja_III} />
                <Wirnik pozycja={pozycja_II} setPozycja={setPozycja_II}/>
                <Wirnik pozycja={pozycja_I} setPozycja={setPozycja_I}/>
                </div>

                <InputText value={inputValue} onChange={handleInputChange} />

                <Klawiatura 
                    pressedKey={inputValue.slice(-1)}
                    onKeyPressed={handleKeyPress}
                    onRemoveKeyPressed={handleRemoveKeyPress}
                />
            </div>
        </>
    )
}

export default Enigma;
