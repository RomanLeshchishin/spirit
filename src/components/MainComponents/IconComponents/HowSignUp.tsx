import React from "react";
import TitleSection from "../../TitleComponent/TitleSection.tsx";
import InformationIcons from "../InformationIconsComponent/InformationIcons.tsx";
import { PhoneOutlined, FieldTimeOutlined, SkinOutlined } from "@ant-design/icons";

import styles from "./styles/HowSignUp.module.scss"


const HowSignUp = () => {
    return (
        <>
            <div className={styles.container}>
                <TitleSection textTitle={'Как записаться и подготовиться?'} colorTitle={'#fff'} />

                <div className={styles.iconsContainer}>
                    <InformationIcons
                        icon={PhoneOutlined}
                        name={'Как записаться?'}
                        description={'Как записаться? Вам необходимо выбрать подходящий день, время и уточнить прогноз погоды в Екатеринбурге. После этого нужно позвонить нам по телефону или оставить заявку с помощью раздела в меню “Записаться”. Менеджеры конного клуба проверят есть ли свободные места в выбранную вами дату, а также подробно ответят на ваши вопросы.'} />
                    <InformationIcons
                        icon={FieldTimeOutlined}
                        name={'Во сколько приехать?'}
                        description={'Рекомендуем вам спланировать время так, чтобы приехать к нам за 10-15 минут до времени записи для проведения инструктажа. После катания у Вас будет возможность покормить лошадей приготовленными заранее угощениями. В качестве угощений могут быть яблоки, морковь, кусочки сахара и арбузные корки.'}
                    />
                    <InformationIcons
                        icon={SkinOutlined}
                        name={'Во что одеться?'}
                        description={'Одежда в первую очередь должна быть свободной и комфортной. Если это зимнее время года, то рекомендуем взять с собой перчатки с прорезиненными ладонями и надевать тёплую одежду. Также не забывайте, что лошадь обладает характерным запахом, которым может пропахнуть одежда. Рекомендуется надевать обувь с небольшим каблуком.'}
                    />
                </div>
            </div>
        </>
    );
};

export default HowSignUp;
