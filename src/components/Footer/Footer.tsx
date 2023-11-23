import * as React from 'react';
import styles from './Footer.module.scss';
import Contact from "../Contact/Contact";
import {EnvironmentOutlined, FieldTimeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
    return (
        <div className={styles.contactsBlockColumn}>
            <div className={styles.contactsBlockRow} style={{gap:"859px"}}>
                <div style={{width:"488px", textAlign: "center"}}>Spirit</div>
                <SocialMedia/>
            </div>
            <div className={styles.contactsBlockRow}>
                <Contact contactLabel={"Телефон:"} contactText={"+7-950-632-87-85"}
                         icon={{
                              classBlockIcon: styles.blockIcon,
                              element: <PhoneOutlined className={styles.contactIcon}/>
                }}/>
                <Contact contactLabel={"Адрес:"} contactText={"г. Екатеринбург, ул. Ползунова, 56"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <EnvironmentOutlined className={styles.contactIcon}/>
                         }}/>
            </div>
            <div className={styles.contactsBlockRow}>
                <Contact contactLabel={"E-mail:"} contactText={"nikitina.ma2003@gmail.com"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <MailOutlined className={styles.contactIcon}/>
                         }}/>
                <Contact contactLabel={"Режим работы:"} contactText={"Пн: Выходной Вт-Вс: с 10:00-20:00"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <FieldTimeOutlined className={styles.contactIcon}/>
                         }}/>
            </div>
        </div>
    );
};

export default Footer;
