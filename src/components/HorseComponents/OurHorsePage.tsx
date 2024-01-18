import HorseCard from "./HorseCard.tsx";

import styles from "./styles/OurHorsePage.module.scss"
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";
import Spinner from "../AuthorizationComponents/Spinner.tsx";

const OurHorsePage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://6579af271acd268f9af9bc32.mockapi.io/horses')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess, isLoading, error} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['horses']
    })

    return (
        <>
            {isLoading ? <Spinner/> : null}
            <div className={styles.horseCardContainer}>
                {isSuccess ?
                    data?.slice(0, 5).map((horse) =>
                    <HorseCard
                        src={horse.imageUrl}
                        alt={horse.name}
                        name={horse.name}
                        breed={horse.breed}
                        suit={horse.suit}
                        year={horse.year}
                    />
                )
                    :
                    <div>{error?.message}</div>
                }
            </div>
            <div className={styles.horseCardContainer}>
                {isSuccess ?
                    data?.slice(5, 10).map((horse) =>
                    <HorseCard
                        src={horse.imageUrl}
                        alt={horse.name}
                        name={horse.name}
                        breed={horse.breed}
                        suit={horse.suit}
                        year={horse.year}
                    />)
                    :
                    <div>{error?.message}</div>
                }
            </div>
        </>
    );
};

export default OurHorsePage;
