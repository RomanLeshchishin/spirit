import * as React from "react";
import styles from "./styles/Photo.module.scss"
import {Image} from "antd";

interface PhotoProps {
    src: string,
    alt: string,
    name: string,
}

const Photo = ( { src, alt, name } : PhotoProps ) => {
    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image src={src} alt={alt} className={styles.image}/>
                        <p className={styles.name}>{name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Photo;
