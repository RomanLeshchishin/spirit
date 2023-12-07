import * as React from 'react';
import styles from "../../styles/_customInput.module.scss";

interface InputProps{
    label: string,
    placeholder: string
}
const CustomInput = ({label, placeholder} : InputProps) => {
    return (
        <div className={styles.inputContent}>
            <div className={styles.inputLabel}>{label}</div>
            <input className={styles.inputBlock} placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;
