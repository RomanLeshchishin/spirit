import React from "react";

import styles from "./styles/TitleSection.module.scss";

interface TitleSectionProps {
    textTitle: string,
    colorTitle: string,
}

const TitleSection = ( { textTitle, colorTitle } : TitleSectionProps ) => {
    return (
        <>
            <p className={styles.textTitle} style={{color: colorTitle}}>
                {textTitle}
            </p>
        </>
    );
};

export default TitleSection;
