import styles from './styles/PromotionCard.module.scss';
import {useState} from "react";
import {DatePicker} from "antd";
import {dateFormat} from "../../../constants/const.ts";
import {IPromCardWithId} from "../../models/IPromCard.ts";
import * as dayjs from "dayjs";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../AuthorizationComponents/Spinner.tsx";

export interface PromotionCardProps {
    id: number,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
}
const PromotionCardAdmin = ({id, title, description, startDate, endDate} : PromotionCardProps) => {
    const [mode, setMode] = useState<string>('display')
    const queryClient = useQueryClient();
    const [promCard, setPromCard] = useState<IPromCardWithId>({
        id: id,
        createdAt: new Date(),
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate
    })

    const editPromotionCard = useMutation({
        mutationFn: (newPromCard: IPromCardWithId) => {
            return axios.put(`https://659fb2505023b02bfe8a3952.mockapi.io/promotions/${newPromCard.id}`, newPromCard)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["promotions"]})
    })

    const deletePromotionCard = useMutation({
        mutationFn: (id: number) => {
            return axios.delete(`https://659fb2505023b02bfe8a3952.mockapi.io/promotions/${id}`)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["promotions"]})
    })

    return (
        <>
            { mode == "display" ?
                <div className={styles.cardContent}>
                    <div className={styles.cardContentText}>
                        {queryClient.isMutating() ? <Spinner/> : null}
                        <div className={styles.nameText}>{title}</div>
                        <div className={styles.descriptionText}>{description}</div>
                        <div className={styles.descriptionText}>{startDate && endDate != new Date("1") ? `${startDate} - ${endDate}` : "бессрочная акция"}</div>
                        <div className={styles.buttonComponent} style={{display: "flex", flexDirection: "row", gap: "15px"}}>
                            <button onClick={() => setMode('edit')}>изменить</button>
                            <button onClick={() => deletePromotionCard.mutate(promCard.id)}>удалить</button>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.cardContent}>
                    <div className={styles.cardContentText}>
                        <input
                            value={promCard.title}
                            onChange={(e) => setPromCard({...promCard, title: e.target.value})}
                        />
                        <input
                            value={promCard.description}
                            onChange={(e) => setPromCard({...promCard, description: e.target.value})}
                        />
                        <div>
                            <DatePicker
                                placeholder={''}
                                format={dateFormat}
                                defaultValue={dayjs(promCard.startDate)}
                                className={styles.input2}
                                onChange={(date) => setPromCard({...promCard, startDate: date ? date.toDate() : new Date()})}
                            />
                            <DatePicker
                                placeholder={''}
                                format={dateFormat}
                                defaultValue={dayjs(promCard.endDate)}
                                className={styles.input2}
                                onChange={(date) => setPromCard({...promCard, endDate: date ? date.toDate() : new Date()})}
                            />
                            <button onClick={() => {
                                setMode('display');
                                editPromotionCard.mutate(promCard)
                            }}>сохранить</button>
                            <button onClick={() => deletePromotionCard.mutate(promCard.id)}>удалить</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default PromotionCardAdmin;
