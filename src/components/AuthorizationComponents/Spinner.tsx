import React from 'react';
import {Spin} from "antd";
import styles from './styles/Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <Spin size={"large"}/>
        </div>
    );
};

export default Spinner;
