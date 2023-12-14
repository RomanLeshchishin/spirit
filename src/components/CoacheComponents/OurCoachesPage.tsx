import React from 'react';
import CoachCard from "./CoachCard.tsx";
import styles from './styles/OurCouchesPage.module.scss';
import {Photo} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";

const OurCoachesPage = () => {
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
                <CoachCard
                    even={(number + 1) % 2 == 0}
                    name={coach.fullName}
                    src={coach.imageUrl}
                    education={coach.education}
                    description={coach.description}
                />
            )}
        </div>
    );
};

export default OurCoachesPage;
