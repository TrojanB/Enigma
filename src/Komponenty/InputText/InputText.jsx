import styles from './InputText.module.css';
import {useState, useEffect, useRef} from "react";

function InputText({value, onChange, szyfr}) {

    const [placeholder,setPlaceholder] = useState("Type message or cipher")
    const inputRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder(prev => 
                prev.slice(-1) === "|"
                ? prev.slice(0,-1)
                : prev + "|"
            )
        }, 500)

        return () => clearInterval(interval)
    }, [])

    const handleFocus = () => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const preventScroll = () => {
            window.scrollTo(scrollX, scrollY);
        };

        requestAnimationFrame(preventScroll);
        setTimeout(preventScroll, 50);
        setTimeout(preventScroll, 150);
        setTimeout(preventScroll, 300);
    };

    return(
       <div className={styles.inputTextContainer}>
            <input 
                placeholder={placeholder}
                className={styles.inputText} 
                value={value} 
                ref = {inputRef}
                onChange={onChange} 
                onFocus={handleFocus}
            />

            <div className={styles.displayText}>
               {szyfr}
            </div>

       </div>
    )
}

export default InputText;