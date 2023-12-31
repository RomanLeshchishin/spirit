import React from "react";
import FormCustom from "../FormComponent/Form.tsx";
import TitleSection from "../TitleComponent/TitleSection.tsx";
import useStore from "../../store";
import {useNavigate} from "react-router";

import styles from "./styles/SignUp.module.scss"


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
                        optionsSelect={[
                            { value: 'trainingHorse1', label: '1 занятие по верховой езде' },
                            { value: 'trainingHorse2', label: '4 занятия по верховой езде' },
                            { value: 'trainingHorse3', label: '8 занятий по верховой езде' },
                            { value: 'trainingHorse4', label: '12 занятий по верховой езде' },
                            { value: 'horseRiding1', label: 'Часовая конная прогулка' },
                            { value: 'horseRiding2', label: 'Двухчасовая конная прогулка' },
                            { value: 'horseRiding3', label: 'Романтическая конная прогулка' },
                            { value: 'horseRiding4', label: 'Часовая конная прогулка от 3-х человек' },
                            { value: 'horseRiding5', label: '1 час тренировки + 1 час конной прогулки' },
                            { value: 'photosession1', label: 'Фотосессия 1 час' },
                            { value: 'photosession2', label: 'Фотосессия 1 час + 1 час конной прогулки' },
                            { value: 'excursion', label: 'Экскурсия по конюшне' },
                            { value: 'hippotherapy1', label: 'Иппотерапия 1 час' },
                            { value: 'hippotherapy2', label: 'Иппотерапия 2 часа' },
                            { value: 'rent', label: 'Аренда лошади' },
                            { value: 'wait', label: 'Постой лошадей' },
                            { value: 'transportation', label: 'Перевозка лошадей' },
                            { value: 'certificate', label: 'Подарочный сертификат' },
                        ]}
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
