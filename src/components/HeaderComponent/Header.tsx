import styles from "./styles/Header.module.scss"
import Logo from "../LogoComponent/Logo.tsx";
import {useNavigate} from "react-router";
import useStore from "../../store";

const Header = () => {
    const store = useStore()
    const navigate = useNavigate()
    return (
        <>
            <div>
                <header className={styles.header}>
                    <div className={`${styles.container} ${styles.headerContainer}`}>
                        <a href="#">
                            <Logo width={154} height={50} type={'based'}/>
                        </a>
                        <p className={styles.text}>Записаться по телефону: +7-950-632-87-85</p>
                        {store.authUser ?
                            <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                                <a
                                    className={styles.textRegist}
                                    onClick={(e) => {
                                        navigate("/profile");
                                        e.preventDefault()
                                    }}
                                    href={''}>
                                    Профиль
                                </a>
                                <a
                                    className={styles.textRegist}
                                    onClick={(e) => {
                                        store.logOut;
                                        navigate("/login");
                                        e.preventDefault()
                                    }}
                                    href={''}>
                                    Выйти
                                </a>
                            </div>
                            :
                            <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                                <a
                                    className={styles.textRegist}
                                    onClick={(e) => {
                                        navigate("/login");
                                        e.preventDefault()
                                    }}
                                    href={''}>
                                    Войти
                                </a>
                                <a
                                    className={styles.textRegist}
                                    onClick={(e) => {
                                        navigate("/registration");
                                        e.preventDefault()}}
                                    href={''}>
                                    Зарегистрироваться
                                </a>
                            </div>
                        }
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
