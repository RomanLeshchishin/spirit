import Header from "../HeaderComponents/Header.tsx";
import PhotoSlider from "../PhotoSlider/PhotoSlider.tsx";
import SiteStatistic from "../SiteStatistic/SiteStatistic.tsx";
import OurAdvantages from "../IconComponents/OurAdvantages.tsx";
import HowSignUp from "../IconComponents/HowSignUp.tsx";
import Footer from "../Footer/Footer.tsx";
import AnswerCollapse from "../AnswerComponent/AnswerCollapse.tsx";
import AboutUs from "../AboutUsComponent/AboutUs.tsx";

import styles from "./styles/MainPage.module.scss";



function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <PhotoSlider/>
                <AboutUs/>
                <OurAdvantages/>
                <AnswerCollapse/>
                <SiteStatistic/>
                <HowSignUp/>
                <Footer map={true}/>
            </div>
        </>
    )
}

export default MainPage
