import styles from './styles/PromotionsPage.module.scss';
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";
import PromotionCardUser from "./PromotionCardUser.tsx";
import Spinner from "../AuthorizationComponents/Spinner.tsx";

const PromotionsUserPage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://659fb2505023b02bfe8a3952.mockapi.io/promotions')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess, isLoading, error} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['promotions']
    })

    return (
        <div className={styles.couchCardContainer}>
            {isLoading ? <Spinner/> : null}
            {isSuccess ?
                data?.map((promotion) =>
                <PromotionCardUser
                    title={promotion.title}
                    description={promotion.description}
                    startDate={promotion.startDate}
                    endDate={promotion.endDate}
                />
                )
                :
                <div>{error?.message}</div>
            }
        </div>
    );
};

export default PromotionsUserPage;
