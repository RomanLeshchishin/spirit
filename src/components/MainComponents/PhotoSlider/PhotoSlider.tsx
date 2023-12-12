import * as React from 'react';
import {Carousel} from "antd";
import {photoSliderList} from "../../../../constants/const.ts";
import styles from './PhotoSlider.module.scss';

const PhotoSlider: React.FC = () => {
    return (
        <div className={styles.mainBlock}>
            <Carousel autoplay>
                {
                    photoSliderList.map((photoSlide) =>
                    <div key={photoSlide.heading} className={styles.sliderBlock}>
                        <img src={photoSlide.src} alt={photoSlide.heading}></img>
                        <div className={styles.contentBlock}>
                            <div className={styles.textBlock}>
                                <div className={styles.textHeading}>{photoSlide.heading}</div>
                                <div className={styles.textDescription}>{photoSlide.description}</div>
                            </div>
                            <button className={styles.btnBrown}>{photoSlide.buttonText}</button>
                        </div>
                    </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default PhotoSlider;
