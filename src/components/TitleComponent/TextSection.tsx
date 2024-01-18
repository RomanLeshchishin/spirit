import styles from './styles/TextSection.module.scss';

export interface TextSection{
    sizeText: string,
    colorText: string,
    text: string
}

const TextSection = ({sizeText, colorText, text} : TextSection) => {
    return (
        <div className={styles.textContent} style={{fontSize: sizeText, color: colorText}}>
            {text}
        </div>
    );
};

export default TextSection;
