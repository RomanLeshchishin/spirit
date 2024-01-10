import Header from "../HeaderComponent/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../FooterComponents/Footer.tsx";
import MenuCustom from "../MenuComponents/Menu.tsx";
import styles from "../MainComponents/MainPage.module.scss";

const Layout = () => {
    return (
        <>
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
        </>
    );
};

export default Layout;
