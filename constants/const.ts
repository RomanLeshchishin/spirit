import {photoSlide} from "../src/types";
import {CoachCardProps} from "../src/components/CoacheComponents/CoachCard.tsx";

export const coaches: CoachCardProps[] = [
    {
        name: 'Казанцева Анастасия Валерьевна',
        src: '../public/img/coach-1.png',
        alt: 'coach-1',
        education: 'Тренер по конному спорту. Специализация выездка. Второй спортивный ' +
            'разряд по выездке. Участвовала в в городских и междугородних стартах.',
        description: 'Лошадьми я "заболела" еще в детстве, но заниматься с лошадьми начала ' +
            'гораздо позже. Мне всегда нравился вид гуляющих в поле лошадей, очень интересно было ' +
            'наблюдать за взаимодействием всадника и лошади. Захотелось узнать, как справляется всадник ' +
            'с таким мощным и прекрасным животным. Так я узнала, что есть такая дисциплина в конном спорте, ' +
            'как Выездка. С тех пор и по сей день я стараюсь совершенствовать свои знания и умения, и развиться дальше. ' +
            'Мой интерес к этим животным не ослабевает ни на один миг!',
    },
    {
        name: 'Тарасенко Марина Алексндровна',
        src: '../public/img/coach-2.png',
        alt: 'coach-2',
        education: 'Тренер по конному спорту. Специализация троеборье. Сертифицированный тренер FEI. Второй спортивный разряд по выездке. ' +
            'Ученики призеры и победители региональных и межрегиональных соревнований.',
        description: 'Начала заниматься конным спортом в 11 лет. Интерес к лошадям проявлялся еще с самого раннего детства. ' +
            'Прошла обучение в СДЮШОР по конному спорту. Долго не могла определиться со специализацией. ' +
            'Пока не поняла, что моё - это троеборье , где всадник и лошадь должны на 100 % доверять друг другу ,чтобы преодолеть 3 дня напряжённых и сложных испытаний.',
    },
    {
        name: 'Казанцева Анастасия Валерьевна',
        src: '../public/img/coach-1.png',
        alt: 'coach-1',
        education: 'Тренер по конному спорту. Специализация выездка. Второй спортивный ' +
            'разряд по выездке. Участвовала в в городских и междугородних стартах.',
        description: 'Лошадьми я "заболела" еще в детстве, но заниматься с лошадьми начала ' +
            'гораздо позже. Мне всегда нравился вид гуляющих в поле лошадей, очень интересно было ' +
            'наблюдать за взаимодействием всадника и лошади. Захотелось узнать, как справляется всадник ' +
            'с таким мощным и прекрасным животным. Так я узнала, что есть такая дисциплина в конном спорте, ' +
            'как Выездка. С тех пор и по сей день я стараюсь совершенствовать свои знания и умения, и развиться дальше. ' +
            'Мой интерес к этим животным не ослабевает ни на один миг!',
    }
]

export const optionsSelect = [
    { value: '1 занятие по верховой езде', label: '1 занятие по верховой езде' },
    { value: '4 занятия по верховой езде', label: '4 занятия по верховой езде' },
    { value: '8 занятий по верховой езде', label: '8 занятий по верховой езде' },
    { value: '12 занятий по верховой езде', label: '12 занятий по верховой езде' },
    { value: 'Часовая конная прогулка', label: 'Часовая конная прогулка' },
    { value: 'Двухчасовая конная прогулка', label: 'Двухчасовая конная прогулка' },
    { value: 'Романтическая конная прогулка', label: 'Романтическая конная прогулка' },
    { value: 'Часовая конная прогулка от 3-х человек', label: 'Часовая конная прогулка от 3-х человек' },
    { value: '1 час тренировки + 1 час конной прогулки', label: '1 час тренировки + 1 час конной прогулки' },
    { value: 'Фотосессия 1 час', label: 'Фотосессия 1 час' },
    { value: 'Фотосессия 1 час + 1 час конной прогулки', label: 'Фотосессия 1 час + 1 час конной прогулки' },
    { value: 'Экскурсия по конюшне', label: 'Экскурсия по конюшне' },
    { value: 'Иппотерапия 1 час', label: 'Иппотерапия 1 час' },
    { value: 'Иппотерапия 2 часа', label: 'Иппотерапия 2 часа' },
    { value: 'Аренда лошади', label: 'Аренда лошади' },
    { value: 'Постой лошадей', label: 'Постой лошадей' },
    { value: 'Перевозка лошадей', label: 'Перевозка лошадей' },
    { value: 'Подарочный сертификат', label: 'Подарочный сертификат' },
]

export const dateFormat = 'DD/MM/YYYY';

export const photoSliderList: photoSlide[] = [
    {
        src: 'https://storage.yandexcloud.net/spirit-36589/slider-1.svg',
        heading: 'Конный клуб “Spirit”',
        description: 'Добро пожаловать в КК “Spirit”! Лучшее место, ' +
            'чтобы насладиться природой и получить невероятные эмоции ' +
            'от общения с лошадьми. Ждём вас!',
        buttonText: 'Записаться'
    },
    {
        src: 'https://storage.yandexcloud.net/spirit-36589/slider-2.svg',
        heading: 'Активный отдых для всех!',
        description: 'Верховая езда, тренировки, конные прогулки, группы ' +
            'снятия стресса, праздники и многое другое в нашем клубе.',
        buttonText: 'Подробнее'
    },
    {
        src: 'https://storage.yandexcloud.net/spirit-36589/slider-3.svg',
        heading: 'Для детей',
        description: 'На базе КК «Spirit» действует детско-юношеская школа ' +
            'верховой езды для детей от 8 до 14 лет, а также пони-клуб для детей до 8 лет.',
        buttonText: 'Записаться'
    },
    {
        src: 'https://storage.yandexcloud.net/spirit-36589/slider-4.svg',
        heading: 'Для лошадей',
        description: 'Уютный клуб с опытными теренрами. Просторные денники, конная ' +
            'тропа по Калиновскому лесопарку, удобная инфраструктура, ежедневный выгул, ' +
            'услуги массажиста, стоматолога, коваля и берейтора.',
        buttonText: 'Узнать больше'
    },
    {
        src: 'https://storage.yandexcloud.net/spirit-36589/slider-5.svg',
        heading: 'Экскурсии',
        description: 'Двухчасовые экскурсии по конюшне для детей и взрослых. ' +
            'Обучающие курсы для детей «Теория и практика верховой езды».',
        buttonText: 'Заказать'
    }
]

export const aboutUs: string = "КК «Spirit» носит имя дикого мустанга Спирита из одноимённого мультфильма “Спирит: Душа прерий”. " +
    "Этот мультфильм о свободе, любви и дружбе.\n" +
    "В нём Спирит знакомится с молодым индейцем Ручейком, и начинается их увлекательная история, полная приключений, " +
    "испытаний и радостей, которые они с честью выдержат и разделят между собой. \n" +
    "Мы надеемся, что вы как Спирит и Ручеёк сможете подружиться с нашими лошадками и разделить с ними радости" +
    " и трудности тренировок, найдёте общий язык и наконец влюбитесь в наших питомцев.\n" +
    "Будем ждать вас в КК “Spirit”!"

export const aboutSpiritClub: string = 'Уже более двух десятков лет существует Конный Клуб «Spirit», ' +
    'который работает около лесопарка “Пышминские озерки”. ' +
    'Визит к нам - это возможность насладиться живописной природой Урала' +
    ' и пообщаться с самыми добрыми и ласковыми лошадками.'
