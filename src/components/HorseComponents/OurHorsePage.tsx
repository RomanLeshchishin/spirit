import React from "react";
import HorseCard from "./HorseCard.tsx";

import styles from "./styles/OurHorsePage.module.scss"

const OurHorsePage = () => {
    return (
        <>
            <div className={styles.horseCardContainer}>
                <HorseCard
                    src={'../../../public/img/horse-1.png'}
                    alt={'Бумер'}
                    name={'Бумер'}
                    breed={'Орловский рысак'}
                    color={'Гнедая'}
                    year={2012}
                />
                <HorseCard
                    src={'../../../public/img/horse-2.png'}
                    alt={'Женева'}
                    name={'Женева'}
                    breed={'Орловский рысак'}
                    color={'Гнедая'}
                    year={2016}
                />
                <HorseCard
                    src={'../../../public/img/horse-3.png'}
                    alt={'Карат'}
                    name={'Карат'}
                    breed={'Орловский рысак'}
                    color={'Рыжая'}
                    year={2011}
                />
                <HorseCard
                    src={'../../../public/img/horse-4.png'}
                    alt={'Доминикана'}
                    name={'Доминикана'}
                    breed={'Орловский рысак'}
                    color={'Серая'}
                    year={2019}
                />
                <HorseCard
                    src={'../../../public/img/horse-5.png'}
                    alt={'Нюша'}
                    name={'Нюша'}
                    breed={'Орловский рысак'}
                    color={'Серая'}
                    year={2014}
                />
            </div>
            <div className={styles.horseCardContainer}>
                <HorseCard
                    src={'../../../public/img/horse-6.png'}
                    alt={'Звёздочка'}
                    name={'Звёздочка'}
                    breed={'Орловский рысак'}
                    color={'Пегая (Тобиано)'}
                    year={2013}
                />
                <HorseCard
                    src={'../../../public/img/horse-7.png'}
                    alt={'Ласточка'}
                    name={'Ласточка'}
                    breed={'Будёновская'}
                    color={'Гнедая'}
                    year={2015}
                />
                <HorseCard
                    src={'../../../public/img/horse-8.png'}
                    alt={'Изумруд'}
                    name={'Изумруд'}
                    breed={'Русская верховая'}
                    color={'Пегая (Тобиано) '}
                    year={2015}
                />
                <HorseCard
                    src={'../../../public/img/horse-9.png'}
                    alt={'Венера'}
                    name={'Венера'}
                    breed={'Донская'}
                    color={'Вороная'}
                    year={2013}
                />
                <HorseCard
                    src={'../../../public/img/horse-10.png'}
                    alt={'Буран'}
                    name={'Буран'}
                    breed={'Орловский рысак'}
                    color={'Саврасая'}
                    year={2016}
                />
            </div>
        </>
    );
};

export default OurHorsePage;
