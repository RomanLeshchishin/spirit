import styles from "./styles/Header.module.scss"
import Logo from "../LogoComponent/Logo.tsx";

const Header = () => {
    return (
        <>
            <div>
                <header className={styles.header}>
                    <div className={`${styles.container} ${styles.headerContainer}`}>
                        <a href="#">
                            <Logo width={154} height={50} type={'based'}/>
                        </a>
                        <p className={styles.text}>Записаться по телефону: +7-950-632-87-85</p>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
