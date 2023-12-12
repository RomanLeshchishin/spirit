import React from "react";
import {Image} from "antd";

import styles from "./styles/ActiveLeisureCard.module.scss"

interface ActiveLeisureCardProps {
    width: number,
    height: number,
    src: string,
    alt: string,
    title: string,
    btnText: string,
}

const ActiveLeisureCard = ( { width, height, src, alt, title, btnText } : ActiveLeisureCardProps ) => {
    return (
        <>
            <div className={styles.container}>
                <Image width={width} height={height} src={src} alt={alt} className={styles.image} />
                <p className={styles.title}>{title}</p>
                <button className={styles.btnCard}>{btnText}</button>
            </div>
        </>
    );
};

export default ActiveLeisureCard;
