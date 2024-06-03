import React from "react";
import Icon from '@ant-design/icons';

import styles from "./styles/InformationIcons.module.scss"

interface InformationIconsProps {
    icon: any,
    name: string,
    description?: string,
}

const InformationIcons = ( { icon, name, description } : InformationIconsProps ) => {
    return (
        <>
            {description ? (
                <div className={styles.iconContent}>
                    <Icon component={icon as React.ForwardRefExoticComponent<any>} className='iconDescr' onPointerEnterCapture onPointerLeaveCapture/>
                    <p className={styles.titleDescr}>{name}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            ) : (
                <div className={styles.iconContainer}>
                    <Icon component={icon as React.ForwardRefExoticComponent<any>} className='icon' onPointerEnterCapture onPointerLeaveCapture/>
                    <p className={styles.title}>{name}</p>
                </div>
            )}
        </>
    );
};

export default InformationIcons;
