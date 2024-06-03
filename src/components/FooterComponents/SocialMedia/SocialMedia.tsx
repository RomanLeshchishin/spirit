import instagram from '../../../../public/img/instagram.svg';
import vk from '../../../../public/img/vk.png';
import tikTok from '../../../../public/img/tikTok.png';
import styles from './SocialMedia.module.scss';

const SocialMedia = () => {
    return (
        <div className={styles.socialContent}>
            <div className={styles.socialLabel}>Мы в соцсетях:</div>
            <div className={styles.socialImgContent}>
                <img src={instagram} alt={"instagram"} className={styles.socialImg}/>
                <img src={vk} alt={"instagram"} className={styles.socialImg}/>
                <img src={tikTok} alt={"TikTok"} className={styles.socialImgTk}/>
            </div>
        </div>
    );
};

export default SocialMedia;
