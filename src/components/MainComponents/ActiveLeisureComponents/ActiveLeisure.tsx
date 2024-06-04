import styles from "./styles/ActiveLeisure.module.scss"
import ActiveLeisureCard from "./ActiveLeisureCard.tsx";
import TitleSection from "../../TitleComponent/TitleSection.tsx";

const ActiveLeisure = () => {
    return (
        <>
            <div className={styles.container}>
                <TitleSection textTitle={'Активный досуг'} />
                <div className={styles.activeCardContainer}>
                    <ActiveLeisureCard width={380} height={510} src={'https://storage.yandexcloud.net/spirit-36589/activeCard-1.png'} alt={'Конные прогулки'} title={'Конные прогулки'} btnText={'Подробнее'} />
                    <div className={styles.activeCard}>
                        <ActiveLeisureCard width={380} height={510} src={'https://storage.yandexcloud.net/spirit-36589/activeCard-2.png'} alt={'Фотосессии'} title={'Фотосессии'} btnText={'Подробнее'} />
                    </div>
                    <div className={styles.activeCard}>
                        <ActiveLeisureCard width={380} height={510} src={'https://storage.yandexcloud.net/spirit-36589/activeCard-3.png'} alt={'Аренда лошади'} title={'Аренда лошади'} btnText={'Подробнее'} />
                    </div>
                </div>
                <button className={styles.btnActive}>Все услуги</button>
            </div>
        </>
    );
};

export default ActiveLeisure;
