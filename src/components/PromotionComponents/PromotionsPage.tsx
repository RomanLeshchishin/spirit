import styles from './styles/PromotionsPage.module.scss';
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";
import PromotionCard from "./PromotionCard.tsx";
import {useState} from "react";
import CreatingPromotionCard from "./creatingPromotionCard.tsx";

const PromotionsPage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://659fb2505023b02bfe8a3952.mockapi.io/promotions')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['coaches']
    })

    const [mode, setMode] = useState('display')

    return (
        <div className={styles.couchCardContainer}>
            {isSuccess && data?.map((promotion) =>
                <PromotionCard
                    id={promotion.id}
                    title={promotion.title}
                    description={promotion.description}
                    startDate={promotion.startDate}
                    endDate={promotion.endDate}
                />
            )}
            {
                mode == "create" ? <CreatingPromotionCard setMode={setMode}/> : null
            }
            <button onClick={() => setMode('create')}>создать</button>
        </div>
    );
};

export default PromotionsPage;
