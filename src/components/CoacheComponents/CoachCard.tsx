import React from 'react';
import styles from './styles/CoachCard.module.scss';

export interface CoachCardProps{
    even: boolean,
    name: string,
    src: string,
    alt?: string,
    education: string,
    description: string
}
const CoachCard = ({even, name, src, alt, education, description} : CoachCardProps) => {
    return (
    <>
        {even ?
            <div className={styles.cardContent}>
            <div className={styles.cardContentText}>
                <div className={styles.nameText}>{name}</div>
                <div className={styles.educationText}>{education}</div>
                <div className={styles.descriptionText}>{description}</div>
            </div>
            <img className={styles.cardContentImage} src={src} alt={alt}/>
        </div>
            :
            <div className={styles.cardContent}>
                <img className={styles.cardContentImage} src={src} alt={alt}/>
                <div className={styles.cardContentText}>
                    <div className={styles.nameText}>{name}</div>
                    <div className={styles.educationText}>{education}</div>
                    <div className={styles.descriptionText}>{description}</div>
                </div>
            </div>
        }
    </>
    );
};

export default CoachCard;
