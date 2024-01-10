import styles from './styles/PromotionCard.module.scss';
import {useState} from "react";

export interface PromotionCardProps {
    even?: boolean,
    name: string,
    src: string,
    alt?: string,
    description: string
}
const PromotionCard = ({even, name, src, alt, description} : PromotionCardProps) => {
    const [mode, setMode] = useState<string>('display')
    return (
        <>
            {even ?
                <div className={styles.cardContent}>
                    <div className={styles.cardContentText}>
                        <div className={styles.nameText}>{name}</div>
                        <div className={styles.descriptionText}>{description}</div>
                        <div className={styles.buttonComponent} style={{display: "flex", flexDirection: "row", gap: "15px"}}>
                            {mode == 'edit' ?
                                <button onClick={() => {
                                    setMode('display');
                                }}>сохранить
                                </button>
                                :
                                <button onClick={() => setMode('edit')}>изменить</button>
                            }
                            <button>удалить</button>
                        </div>
                    </div>
                    <img className={styles.cardContentImage} src={src} alt={alt}/>
                </div>
                :
                <div className={styles.cardContent}>
                    <img className={styles.cardContentImage} src={src} alt={alt}/>
                    <div className={styles.cardContentText}>
                        <div className={styles.nameText}>{name}</div>
                        <div className={styles.descriptionText}>{description}</div>
                        <div className={styles.buttonComponent} style={{display: "flex", flexDirection: "row", gap: "15px"}}>
                            {mode == 'edit' ?
                                <button onClick={() => {
                                    setMode('display');
                                }}>сохранить
                                </button>
                                :
                                <button onClick={() => setMode('edit')}>изменить</button>
                            }
                            <button>удалить</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default PromotionCard;
