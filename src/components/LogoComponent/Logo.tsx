import * as React from "react";
import logo from "../../../public/img/logo.png";
import logoMin from "../../../public/img/logoMin.png";

import styles from "./styles/Logo.module.scss"

interface LogoProps {
    width: number;
    height: number;
    min?: boolean;
}

const Logo = ( { width, height, min }: LogoProps ) => {
    return (
        <>
            <div className={styles.logoContainer}>
                {min ? (
                    <img width={width} height={height} src={logoMin} alt="Spirit"/>
                ) : (
                    <img width={width} height={height} src={logo} alt="Spirit"/>
                )}
            </div>
        </>
    );
};

export default Logo;
