import Header from "../HeaderComponents/Header.tsx";
import PhotoSlider from "../PhotoSlider/PhotoSlider.tsx";
import SiteStatistic from "../SiteStatistic/SiteStatistic.tsx";
import OurAdvantages from "../IconComponents/OurAdvantages.tsx";
import HowSignUp from "../IconComponents/HowSignUp.tsx";
import FormCustom from "../FormComponent/Form.tsx";
import ActiveLeisure from "../ActiveLeisureComponents/ActiveLeisure.tsx";

import styles from "./styles/MainPage.module.scss";
import MenuCustom from "../MenuComponents/Menu.tsx";

function MainPage() {
    return (
        <>
            <div className={styles.container}>
                <MenuCustom />
                <div className={styles.content}>
                    <Header />
                    <PhotoSlider/>
                    <ActiveLeisure />
                    <OurAdvantages />
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
                </div>
            </div>
        </>
    )
}

export default MainPage
