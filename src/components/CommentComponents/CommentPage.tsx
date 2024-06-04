import {useState} from "react";
import Comment from "./Comment.tsx";
import Modal from "../ModalComponent/Modal.tsx";
import FormComment from "../FormComponent/FormComment.tsx";

import styles from "./styles/CommentPage.module.scss";

const CommentPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const layout = <FormComment
        namePlaceholder={'Введите ваше Ф.И.О.'}
        phonePlaceholder={'Введите ваш телефон'}
        emailPlaceholder={'Введите ваше e-mail'}
        textAreaPlaceholder={'Введите ваш коммнетарий'}
        heightTextArea={11}
    />

    const closeModal = () => {
        setModalActive(false);
    };

    return (
        <>
            <div className={styles.containerComment}>
                <Comment
                    src={'https://storage.yandexcloud.net/spirit-36589/avatar-1.png'}
                    alt={'Avatar'}
                    user={'Никитина Мария'}
                    data={'04.11.23'}
                    time={'11:45'}
                    comment={'Отличная конюшня, отзывчивый персонал, ухоженные лошади. Всем рекомендую!'} />
                <Comment
                    src={'https://storage.yandexcloud.net/spirit-36589/avatar-2.png'}
                    alt={'Avatar'}
                    user={'Лещишин Роман'}
                    data={'12.10.23'}
                    time={'15:26'}
                    comment={'Потрясающая конюшня и опытные тренеры. Спасибо за потрясающую конную прогулку по лесу.'} />
                <Comment
                    src={'https://storage.yandexcloud.net/spirit-36589/avatar-3.png'}
                    alt={'Avatar'}
                    user={'Белогуб Вероника'}
                    data={'25.09.23'}
                    time={'20:43'}
                    comment={'Спасибо за тренировку Казанцевой Анастасии Валерьевне. Всем её рекомендую, очень хорошо объясняет.'} />
                <button onClick={() => { setModalActive(true) }} className={styles.btnAddComment}>Добавить отзыв</button>
            </div>
            <Modal
                active={modalActive} setActive={setModalActive}
                textBtn1={"Назад"}
                textBtn2={"Отправить"}
                onClick1={closeModal}
                onClick2={closeModal}
                layout={layout}
            />
        </>
    );
};

export default CommentPage;
