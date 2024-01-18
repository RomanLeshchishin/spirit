import styles from './styles/PromotionCard.module.scss';
import React, {useState} from "react";
import {IPromCard} from "../../models/IPromCard.ts";
import {dateFormat} from "../../../constants/const.ts";
import {DatePicker} from "antd";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

type CreatingPromotionCardProps = {
    setMode : React.Dispatch<React.SetStateAction<string>>
}

const CreatingPromotionCard = ({setMode} : CreatingPromotionCardProps) => {
    const queryClient = useQueryClient();
    const [promCard, setPromCard] = useState<IPromCard>({
        createdAt: new Date(),
        title: "",
        description: "",
        startDate: new Date(),
        endDate: new Date()
    })

     const createPromotionCard = useMutation({
        mutationFn: (newPromCard: IPromCard) => {
            return axios.post('https://659fb2505023b02bfe8a3952.mockapi.io/promotions', newPromCard)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["promotions"]})
    })

    return (
        <>
            <div className={styles.cardContent}>
                <div className={styles.cardContentText}>
                    <input
                        placeholder={'Введите название акции'}
                        onChange={(e) => setPromCard({...promCard, title: e.target.value})}
                    />
                    <input
                        placeholder={'Введите описание акции'}
                        onChange={(e) => setPromCard({...promCard, description: e.target.value})}
                    />
                    <div>
                        <DatePicker
                            placeholder={'Выберите дату начала акции'}
                            format={dateFormat}
                            className={styles.input2}
                            onChange={(date) => setPromCard({...promCard, startDate: date ? date.toDate() : new Date()})}
                        />
                        <DatePicker
                            placeholder={'Выберите дату конца акции'}
                            format={dateFormat}
                            className={styles.input2}
                            onChange={(date) => setPromCard({...promCard, endDate: date ? date.toDate() : new Date()})}
                        />
                    </div>
                    <button onClick={() => {
                        setMode("display");
                        console.log(promCard)
                        createPromotionCard.mutate(promCard)
                    }}>сохранить</button>
                </div>
            </div>
        </>
    );
};

export default CreatingPromotionCard;
