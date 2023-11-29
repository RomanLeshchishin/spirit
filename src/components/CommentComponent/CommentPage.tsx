import React from "react";
import Comment from "./Comment.tsx";
import '../../../public/img/avatar-1.png'
import Header from "../HeaderComponents/Header.tsx";

const CommentPage = () => {
    return (
        <>
            <Header />
            <Comment
                src={'../../../public/img/avatar-1.png'}
                alt={'Avatar'}
                user={'Никитина Мария'}
                data={'04.11.23'}
                time={'11:45'}
                comment={'Отличная конюшня, отзывчивый персонал, ухоженные лошади. Всем рекомендую!'} />
            <Comment
                src={'../../../public/img/avatar-2.png'}
                alt={'Avatar'}
                user={'Лещишин Роман'}
                data={'12.10.23'}
                time={'15:26'}
                comment={'Потрясающая конюшня и опытные тренеры. Спасибо за потрясающую конную прогулку по лесу.'} />
            <Comment
                src={'../../../public/img/avatar-3.png'}
                alt={'Avatar'}
                user={'Белогуб Вероника'}
                data={'25.09.23'}
                time={'20:43'}
                comment={'Спасибо за тренировку Казанцевой Анастасии Валерьевне. Всем её рекомендую, очень хорошо объясняет.'} />
        </>
    );
};

export default CommentPage;
