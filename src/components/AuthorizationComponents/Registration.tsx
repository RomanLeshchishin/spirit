import * as React from 'react';
import styles from "../Login/Login.module.scss";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import {useNavigate} from "react-router";

const Registration = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.blockLogin}>
            <div className={styles.textHeading}>Register to your account</div>
            <CustomInput label={"Имя"} placeholder={"Введите своё имя"}/>
            <CustomInput label={"Фамилия"} placeholder={"Введите свою фамилию"}/>
            <CustomInput label={"Телефон"} placeholder={"Введите свой телефон"}/>
            <CustomInput label={"Логин"} placeholder={"Введите свою почту"}/>
            <CustomInput label={"Пароль"} placeholder={"Введите свой пароль"}/>
            <CustomButton classBtn={styles.loginButton} text={"Зарегистрироваться"}/>
            <div className={styles.blockLabelBottom}>
                <div className={styles.textBottomLabelLeft}>У вас есть аккаунт ?</div>
                <a className={styles.textForgot} onClick={() => navigate("/login")} href={''}>Войти</a>
            </div>
        </div>
    );
};

export default Registration;
