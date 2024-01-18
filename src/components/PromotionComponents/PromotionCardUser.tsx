import styles from './styles/PromotionCard.module.scss';

export interface PromotionCardProps {
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
}
const PromotionCardUser = ({title, description, startDate, endDate} : PromotionCardProps) => {
    return (
        <>
            <div className={styles.cardContent}>
                <div className={styles.cardContentText}>
                    <div className={styles.nameText}>{title}</div>
                    <div className={styles.descriptionText}>{description}</div>
                    <div className={styles.descriptionText}>{startDate && endDate != new Date("1") ? `${startDate} - ${endDate}` : "бессрочная акция"}</div>
                </div>
            </div>
        </>
    );
};

export default PromotionCardUser;
