import React from "react";
import HorseCard from "./HorseCard.tsx";

import styles from "./styles/OurHorsePage.module.scss"
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";

const OurHorsePage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://6579af271acd268f9af9bc32.mockapi.io/horses')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['horses']
    })

    return (
        <>
            <div className={styles.horseCardContainer}>
                {isSuccess && data?.slice(0, 5).map((horse) =>
                    <HorseCard
                        src={horse.imageUrl}
                        alt={horse.name}
                        name={horse.name}
                        breed={horse.breed}
                        suit={horse.suit}
                        year={horse.year}
                    />
                )}
            </div>
            <div className={styles.horseCardContainer}>
                {isSuccess && data?.slice(5, 10).map((horse) =>
                    <HorseCard
                        src={horse.imageUrl}
                        alt={horse.name}
                        name={horse.name}
                        breed={horse.breed}
                        suit={horse.suit}
                        year={horse.year}
                    />
                )}
            </div>
        </>
    );
};

export default OurHorsePage;
