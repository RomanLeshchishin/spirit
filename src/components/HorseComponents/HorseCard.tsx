import styles from "./styles/HorseCard.module.scss"

interface HorseCardProps {
    src: string,
    alt?: string,
    name: string,
    breed: string,
    suit: string,
    year: number,
}

const HorseCard = ( { src, alt, name, breed, suit, year } : HorseCardProps ) => {
    return (
        <>
            <div className={styles.card}>
                <img src={src} alt={alt} className={styles.image}/>
                <div className={styles.column}>
                    <p className={styles.nameHorse}>{name}</p>
                    <div className={styles.rowContainer}>
                        <div className={styles.row}>
                            <p className={styles.rowText}>Порода:</p>
                            <p className={styles.rowInf}>{breed}</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.rowText}>Масть:</p>
                            <p className={styles.rowInf}>{suit}</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.rowText}>Год:</p>
                            <p className={styles.rowInf}>{year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HorseCard;
