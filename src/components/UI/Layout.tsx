import {Outlet} from "react-router-dom";
import Header from "../HeaderComponent/Header.tsx";
import Footer from "../FooterComponents/Footer.tsx";
import styles from "../MainComponents/MainPage.module.scss";
import MenuCustom from "../MenuComponents/Menu.tsx";

const Layout = () => {
    return (
        <div className={styles.container}>
            <MenuCustom />
            <div className={styles.head}>
                <Header/>
                <div className={styles.content}>
                    <Outlet/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
