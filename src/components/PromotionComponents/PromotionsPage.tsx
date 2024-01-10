import styles from './styles/PromotionsPage.module.scss';
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";
import PromotionCard from "./PromotionCard.tsx";

const PromotionsPage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://6579af271acd268f9af9bc32.mockapi.io/coaches')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['coaches']
    })

    return (
        <div className={styles.couchCardContainer}>
            {isSuccess && data?.map((coach, number) =>
                <PromotionCard
                    even={(number + 1) % 2 == 0}
                    name={coach.name}
                    src={coach.imageUrl}
                    description={coach.description}
                />
            )}
        </div>
    );
};

export default PromotionsPage;
