import * as React from 'react';
import styles from './Contact.module.scss';
import Icon, {IconProps} from "../../UI/Icon.tsx";

interface ContactProps{
    contactLabel: string,
    contactText: string
    icon: IconProps
}

const Contact = ({contactLabel, contactText, icon} : ContactProps) => {
    return (
        <div className={styles.contact}>
            <Icon {...icon}/>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>{contactLabel}</div>
                <div className={styles.contactNumber}>{contactText}</div>
            </div>
        </div>
    );
};

export default Contact;
