import { useEffect, useState, useRef } from 'react';

import styles from './Enigma.module.css';
import Lampki from '../Lampki/Lampki.jsx';
import Wirnik from '../Wirnik/Wirnik';
import InputText from '../InputText/InputText';
import {szyfrujLitere} from '../../enigmaLogic.js';

function Enigma(){
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const [inputValue, setInputValue] = useState("");
    const [zaszyfrowanyText, setZaszyfrowanyText] = useState("");
    const [prevZaszyfrowanaLitera, setPrevZaszyfrowanaLitera] = useState("");
    const prevInputValueLength = useRef(0)
    const firstOn = useRef(true)
    const [pozycja_I, setPozycja_I] = useState(0)
    const [pozycja_II, setPozycja_II] = useState(0)
    const [pozycja_III, setPozycja_III] = useState(0)

    const processInput = (newText) => {
        const cleanText = newText.toUpperCase().replaceAll(' ', '');
        const prevIn = prevInputValueLength.current
        const roznica = cleanText.length - prevInputValueLength.current;

        if(roznica > 0){
            const addedChars = cleanText.slice(prevIn);
            let szyfr = "";
            let aktualna_pozycja_III = pozycja_III;

            for (let i = 0; i < addedChars.length; i++){
                const znak = addedChars[i];
                aktualna_pozycja_III = (aktualna_pozycja_III + 1) % alfabet.length;

                const zaszyfrowany_znak = szyfrujLitere(znak, [pozycja_I, pozycja_II, aktualna_pozycja_III]);
                szyfr += zaszyfrowany_znak;
            }

            setPozycja_III(aktualna_pozycja_III);
            setZaszyfrowanyText(z => z + szyfr);
            setPrevZaszyfrowanaLitera(szyfr.slice(-1));
        }

        else if(cleanText.length < prevIn){
            const liczbaUsunietych = prevIn - cleanText.length;
            let cofnieta_pozycja_III = (pozycja_III - liczbaUsunietych) % alfabet.length;
            if (cofnieta_pozycja_III < 0) {
                cofnieta_pozycja_III += alfabet.length;
            }

            setPozycja_III(cofnieta_pozycja_III);
            setZaszyfrowanyText(z => z.slice(0, cleanText.length));
            setPrevZaszyfrowanaLitera("");
        }

        prevInputValueLength.current = cleanText.length;
    }

    //wpisywanie reczne
    const handleInputChange = (e) => {
        const upper = e.target.value.toUpperCase();
        setInputValue(upper);
        processInput(upper);
    }

    //wpisywanie przy uzyciu komponentu Klawiatura
    const handleKeyPress = (litera) => {
        const addedChar = inputValue + litera;
        setInputValue(addedChar);
        processInput(addedChar);
    }

    //usuwanie przy uzyciu komponentu Klawiatura
    const handleRemoveKeyPress = () => {
        const removedChar = inputValue.slice(0,-1);
        setInputValue(removedChar);
        processInput(removedChar);
    }

    return(
        <>

            <div className={styles.enigma}>
                <div className={styles.wirniki}>
                <Wirnik pozycja={pozycja_I} setPozycja={setPozycja_I} />
                <Wirnik pozycja={pozycja_II} setPozycja={setPozycja_II}/>
                <Wirnik pozycja={pozycja_III} setPozycja={setPozycja_III}/>
                </div>

                <Lampki 
                    zaszyfrowanaLitera={prevZaszyfrowanaLitera}
                />

                <InputText value={inputValue} onChange={handleInputChange} szyfr = {zaszyfrowanyText} />

            </div>
        </>
    )
}

export default Enigma;
