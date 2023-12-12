import React from 'react';
import TitleSection from "../../TitleComponent/TitleSection.tsx";
import TextSection from "../../TitleComponent/TextSection.tsx";
import {aboutUs} from "../../../../constants/const.ts";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
    return (
        <div className={styles.aboutUsContent}>
            <TitleSection textTitle={"О нас"} colorTitle={"black"}/>
            <TextSection sizeText={"32px"} colorText={"black"} text={aboutUs}/>
        </div>
    );
};

export default AboutUs;
