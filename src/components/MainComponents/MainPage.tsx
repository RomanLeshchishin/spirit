import Header from "../HeaderComponents/Header.tsx";
import PhotoSlider from "../PhotoSlider/PhotoSlider.tsx";
import SiteStatistic from "../SiteStatistic/SiteStatistic.tsx";
import OurAdvantages from "../IconComponents/OurAdvantages.tsx";
import HowSignUp from "../IconComponents/HowSignUp.tsx";

import styles from "./styles/MainPage.module.scss";

function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <PhotoSlider/>
                <SiteStatistic/>
                <OurAdvantages />
                <HowSignUp />
            </div>
        </>
    )
}

export default MainPage