import React from 'react';
import styles from "./Footer.module.scss";
import Logo from "../LogoComponent/Logo.tsx";
import SocialMedia from "./SocialMedia/SocialMedia.tsx";
import Contact from "./Contact/Contact.tsx";
import {EnvironmentOutlined, FieldTimeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";

const FooterContacts = () => {
    return (
        <div className={styles.contactsBlockColumn}>
            <div className={styles.contactsBlockRowLogo}>
                <a href="#">
                    <Logo width={408} height={140} type={'white'}/>
                </a>
                <SocialMedia/>
            </div>
            <div className={styles.contactsBlockRow}>
                <Contact contactLabel={"Телефон:"} contactText={"+7-950-632-87-85"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <PhoneOutlined className={styles.contactIcon}/>
                         }}/>
                <Contact contactLabel={"E-mail:"} contactText={"nikitina.ma2003@gmail.com"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <MailOutlined className={styles.contactIcon}/>
                         }}/>
            </div>
            <div className={styles.contactsBlockRow}>
                <Contact contactLabel={"Адрес:"} contactText={"г. Екатеринбург, ул. Ползунова, 56"}
                         icon={{
                             classBlockIcon: styles.blockIcon,
                             element: <EnvironmentOutlined className={styles.contactIcon}/>
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

export default FooterContacts;
