import styles from './styles/PromotionsPage.module.scss';
import {Photo} from "../../types.ts";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import PromotionCardAdmin from "./PromotionCardAdmin.tsx";
import {useState} from "react";
import CreatingPromotionCard from "./creatingPromotionCard.tsx";
import Spinner from "../AuthorizationComponents/Spinner.tsx";

const PromotionsAdminPage = () => {
    const queryClient = useQueryClient();
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://659fb2505023b02bfe8a3952.mockapi.io/promotions')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess, isLoading, error} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['promotions']
    })

    const [mode, setMode] = useState('display')

    return (
        <div className={styles.couchCardContainer}>
            {isLoading ? <Spinner/> : null}
            {isSuccess ?
                data?.map((promotion) =>
                <PromotionCardAdmin
                    id={promotion.id}
                    title={promotion.title}
                    description={promotion.description}
                    startDate={promotion.startDate}
                    endDate={promotion.endDate}
                />
            )
                :
                <div>{error?.message}</div>
            }
            {
                mode == 'create' ? <CreatingPromotionCard setMode={setMode}/> : queryClient.isMutating() ? <Spinner/> : null
            }
            {
                mode == 'display' ?
                    <button onClick={() => setMode('create')}>создать</button>
                    :
                    <button onClick={() => setMode('display')}>закрыть</button>
            }
        </div>
    );
};

export default PromotionsAdminPage;
