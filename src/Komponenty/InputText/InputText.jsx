import styles from './InputText.module.css';
import {useState, useEffect} from "react";

function InputText({value, onChange, szyfr}) {

    const [placeholder,setPlaceholder] = useState("Type message or cipher")

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

    return(
       <div className={styles.inputTextContainer}>
            <input 
                placeholder={placeholder}
                className={styles.inputText} 
                value={value} 
                onChange={onChange} 
            />

            <div className={styles.displayText}>
               {szyfr}
            </div>

       </div>
    )
}

export default InputText;