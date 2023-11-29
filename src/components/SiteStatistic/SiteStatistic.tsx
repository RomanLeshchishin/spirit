import * as React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
import styles from './SiteStatistic.module.scss';
import {CSSProperties} from "react";
import {aboutSpiritClub} from "../../const";
import horses from '../../../public/img/about-spirit.svg';
import TitleSection from "../TitleComponent/TitleSection.tsx";

const formatter = (value: number) => <CountUp end={value} separator=""/>;
const statisticValue: object[CSSProperties] = {
    color: "#000",
    fontSize: "128px",
    fontWeight: "700",
    fontFamily: "Montserrat Alternates",
    fontStyle: "normal",
    lineHeight: "normal",
    textAlign: "center"
}
const SiteStatistic: React.FC = () => (
    <div className={styles.blockAbout}>
        <TitleSection textTitle={"О КК “Spirit”"} colorTitle={'black'} />
        <div className={styles.blockAboutContent}>
            <img src={horses} alt={"horses"}/>
            <div className={styles.blockAboutText}>
                <div className={styles.textAbout}>{aboutSpiritClub}</div>
                <Row gutter={24}>
                    <Col span={6}>
                        <Statistic value={10} formatter={formatter} valueStyle={statisticValue}/>
                        <div className={styles.statisticTitle}>Сотрудников</div>
                    </Col>
                    <Col span={6}>
                        <Statistic value={10} precision={2} formatter={formatter} valueStyle={statisticValue}/>
                        <div className={styles.statisticTitle}>Лошадей</div>
                    </Col>
                    <Col span={12}>
                        <Statistic value={25000} precision={2} formatter={formatter} valueStyle={statisticValue}/>
                        <div className={styles.statisticTitle}>Посетило клиентов</div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

export default SiteStatistic;
