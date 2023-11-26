import * as React from "react";
import logo from "../../../public/img/logo.png";
import logoMin from "../../../public/img/logoMin.png";
import logoWhite from "../../../public/img/logoWhite.png";

import styles from "./styles/Logo.module.scss"

interface LogoProps {
    width: number;
    height: number;
    type: string;
}

const Logo = ( { width, height, type }: LogoProps ) => {
    const getLogo = (type: string) => {
        switch (type) {
            case 'min':
                return <img width={width} height={height} src={logoMin} alt="Spirit"/>
            case 'based':
                return <img width={width} height={height} src={logo} alt="Spirit"/>
            case 'white':
                return <img width={width} height={height} src={logoWhite} alt="Spirit"/>
        }
    }
    return (
        <>
            <div className={styles.logoContainer}>
                {getLogo(type)}
            </div>
        </>
    );
};

export default Logo;
