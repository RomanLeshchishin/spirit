import * as React from 'react';
import styles from "./styles/Authorizathion.module.scss";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.blockLogin}>
            <div className={styles.textHeading}>Login to your account</div>
            <CustomInput label={"Логин"} placeholder={"Введите свою почту"}/>
            <div className={styles.blockLabel}>
                <div className={styles.inputLabel}>Пароль</div>
                <a href={''} className={styles.textForgot}>Forgot？</a>
            </div>
            <input className={styles.inputBlock} placeholder={"Введите свой пароль"}/>
            <CustomButton classBtn={styles.loginButton} text={"Войти"}/>
            <div className={styles.blockLabelBottom}>
                <div className={styles.textBottomLabelLeft}>Нет аккаунта ?</div>
                <a className={styles.textForgot} onClick={() => navigate("/register")} href={''}>Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default Login;
