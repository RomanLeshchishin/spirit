import React from "react";
import TitleSection from "../../TitleComponent/TitleSection.tsx";
import InformationIcons from "../InformationIconsComponent/InformationIcons.tsx";
import {HorseIcon} from "../../../../constants/IconsConst.tsx";
import { TeamOutlined, CreditCardOutlined, EnvironmentOutlined, LikeOutlined } from "@ant-design/icons";

import styles from "./styles/OurAdvantages.module.scss"


const OurAdvantages = () => {
    return (
        <>
            <div className={styles.container}>
                <TitleSection textTitle={'Наши преимущества'} colorTitle={'#000'} />

                <div className={styles.iconsContainer}>
                    <InformationIcons icon={TeamOutlined} name={'Опытные тренеры'}  />
                    <InformationIcons icon={EnvironmentOutlined} name={'Удобное расположение рядом с метро'} />
                    <InformationIcons icon={CreditCardOutlined} name={'Приемлемые цены'} />
                    <InformationIcons icon={HorseIcon} name={'Спокойные лошади'} />
                    <InformationIcons icon={LikeOutlined} name={'Много положительных отзывов'} />
                </div>
            </div>
        </>
    );
};

export default OurAdvantages;
