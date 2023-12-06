import Header from "../HeaderComponents/Header.tsx";
import PhotoSlider from "../PhotoSlider/PhotoSlider.tsx";
import SiteStatistic from "../SiteStatistic/SiteStatistic.tsx";
import OurAdvantages from "../IconComponents/OurAdvantages.tsx";
import HowSignUp from "../IconComponents/HowSignUp.tsx";
import FormCustom from "../FormComponent/Form.tsx";
import ActiveLeisure from "../ActiveLeisureComponents/ActiveLeisure.tsx";
import Footer from "../Footer/Footer.tsx";
import AnswerCollapse from "../AnswerComponent/AnswerCollapse.tsx";
import AboutUs from "../AboutUsComponent/AboutUs.tsx";

import styles from "./styles/MainPage.module.scss";
import FormCustom from "../FormComponent/Form.tsx";



function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <PhotoSlider/>
                <AboutUs/>
                <ActiveLeisure />
                <OurAdvantages />
                <AnswerCollapse/>
                <SiteStatistic/>
                <HowSignUp />
                <FormCustom
                    namePlaceholder={'Введите ваше Ф.И.О.'}
                    phonePlaceholder={'Введите ваш телефон'}
                    emailPlaceholder={'Введите ваше e-mail'}
                    textAreaPlaceholder={'Введите ваш вопрос'}
                    heightTextArea={11}
                    buttonPlaceholder={'Записаться'}
                />
                <Footer map={true}/>
            </div>
        </>
    )
}

export default MainPage
