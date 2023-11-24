import * as React from 'react';
import styles from "./LogoFooter.module.scss";
import logoFooter from "../../../public/img/logoFooter.svg";

const LogoFooter = () => {
    return (
        <div>
            <div className={styles.logoContent}>
                <img className={styles.logoImg} src={logoFooter} alt={"logoFooter"}/>
                <div className={styles.logoText}>SPIRIT</div>
            </div>
        </div>
    );
};

export default LogoFooter;
