import FormCustom from "../FormComponent/Form.tsx";
import TitleSection from "../TitleComponent/TitleSection.tsx";
import useStore from "../../store";
import {useNavigate} from "react-router";

import styles from "./styles/SignUp.module.scss"
import {optionsSelect} from "../../../constants/const.ts";


const SignUp = () => {
    const store = useStore()
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className={styles.title}>
                    <TitleSection textTitle={'Записаться'} colorTitle={'#000'} />
                </div>
                <div className={styles.formContainer}>
                    <FormCustom
                        namePlaceholder={store.authUser?.name ? `${store.authUser?.name} ${store.authUser?.surname}` : 'Введите ваше имя и фамилию'}
                        phonePlaceholder={store.authUser?.number || 'Введите ваш телефон'}
                        emailPlaceholder={store.authUser?.email || 'Введите ваше e-mail'}
                        numPeoplePlaceholder={'Введите количество человек'}
                        selectPlaceholder={'Выберите услугу'}
                        optionsSelect={optionsSelect}
                        datePickerPlaceholder={'Выберите дату'}
                        timePickerPlaceholder={'Выберете время'}
                        textAreaPlaceholder={'Введите ваши уточнения по поводу заказа'}
                        heightTextArea={11}
                        buttonPlaceholder={'Записаться'}
                        bigSize={true}
                    />
                    <button onClick={() => navigate('/profile')}>в профиль</button>
                </div>
            </div>
        </>
    );
};

export default SignUp;
