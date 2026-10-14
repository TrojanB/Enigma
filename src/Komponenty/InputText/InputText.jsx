import styles from './InputText.module.css';

function InputText({value, onChange}) {

    return(
       <div className={styles.inputTextContainer}>
            <input 
                className={styles.inputText} 
                value={value} 
                onChange={onChange} 
            />

            <div className={styles.displayText}>
                {value}
            </div>

       </div>
    )
}

export default InputText;