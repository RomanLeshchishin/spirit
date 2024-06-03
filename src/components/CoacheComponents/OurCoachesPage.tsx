import CoachCard from "./CoachCard.tsx";
import styles from './styles/OurCouchesPage.module.scss';
import {Coach} from "../../types.ts";
import {useQuery} from "@tanstack/react-query";
import Spinner from "../AuthorizationComponents/Spinner.tsx";

const OurCoachesPage = () => {
    async function fetchCoaches(): Promise<Coach[] | undefined>{
        const res = await fetch('https://6579af271acd268f9af9bc32.mockapi.io/coaches')
        if (!res.ok) throw new Error('Failed to fetch coaches')
        return res.json()
    }

    const {data, isSuccess, isLoading, error} = useQuery({
        queryFn: fetchCoaches,
        queryKey: ['coaches']
    })

    return (
        <div className={styles.couchCardContainer}>
            {isLoading ? <Spinner/> : null}
            {isSuccess ? data?.map((coach, number) =>
                <CoachCard
                    even={(number + 1) % 2 == 0}
                    name={coach.fullName}
                    src={coach.imageUrl}
                    education={coach.education}
                    description={coach.description}
                />
                )
                :
                <div>{error?.message}</div>
            }
        </div>
    );
};

export default OurCoachesPage;
