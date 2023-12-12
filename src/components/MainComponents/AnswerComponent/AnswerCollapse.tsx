import React from 'react';
import { Collapse } from 'antd';
import styles from './AnswerCollapse.module.scss';
import TitleSection from "../../TitleComponent/TitleSection.tsx";

const AnswerCollapse: React.FC = () => {
    return (
        <div>
            <TitleSection textTitle={"Ответы на популярные вопросы"} colorTitle={"black"}/>
            <Collapse className={styles.collapseContent}>
                <Collapse.Panel key={"1"} header={"Где вы находитесь?"}>
                    <div>Наш конный клуб находится...</div>
                </Collapse.Panel>
                <Collapse.Panel key={"2"} header={"Какие лошади у вас есть?"}>
                    <div>Разные...</div>
                </Collapse.Panel>
                <Collapse.Panel key={"3"} header={"Какой опыт у тренеров клуба?"}>
                    <div>В основном 3-5 лет...</div>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
};

export default AnswerCollapse;
