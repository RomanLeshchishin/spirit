import styles from './Footer.module.scss';
import MapComponent from "./Map/MapComponent.tsx";
import FooterContacts from "./FooterContacts.tsx";

export interface Footer{
    map?: boolean
}

const Footer = ({map} : Footer) => {
    return (
        <>
        {
            map
            ?
            <div className={styles.footer}>
                <MapComponent/>
                <FooterContacts/>
            </div>
            :
                <div className={styles.footer}>
                    <FooterContacts/>
                </div>
        }
        </>
    );
};

export default Footer;
