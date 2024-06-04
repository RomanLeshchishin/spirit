import Header from "../HeaderComponent/Header.tsx";
import PhotoSlider from "./PhotoSlider/PhotoSlider.tsx";
import OurAdvantages from "./IconComponents/OurAdvantages.tsx";
import HowSignUp from "./IconComponents/HowSignUp.tsx";
import FormCustom from "../FormComponent/Form.tsx";
import ActiveLeisure from "./ActiveLeisureComponents/ActiveLeisure.tsx";
import Footer from "../FooterComponents/Footer.tsx";
import AnswerCollapse from "./AnswerComponent/AnswerCollapse.tsx";
import AboutUs from "./AboutUsComponent/AboutUs.tsx";
import MenuCustom from "../MenuComponents/Menu.tsx";

import styles from "./MainPage.module.scss";



function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <MenuCustom />
                <div className={styles.head}>
                    <Header />
                    <div className={styles.content}>
                        <PhotoSlider/>
                        <AboutUs/>
                        <ActiveLeisure />
                        <OurAdvantages />
                        <AnswerCollapse/>
                        <HowSignUp />
                        <FormCustom
                            namePlaceholder={'Введите ваше Ф.И.О.'}
                            phonePlaceholder={'Введите ваш телефон'}
                            emailPlaceholder={'Введите ваше e-mail'}
                            textAreaPlaceholder={'Введите ваш вопрос'}
                            heightTextArea={11}
                            buttonPlaceholder={'Задать вопрос'}
                        />
                        <Footer map={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
