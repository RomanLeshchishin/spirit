import React from 'react';
import {coaches} from "../../../constants/const.ts";
import CoachCard from "./CoachCard.tsx";
import styles from './styles/OurCouchesPage.module.scss';

const OurCoachesPage = () => {
    return (
        <div className={styles.couchCardContainer}>
            {coaches.map((coach, number) =>
                <CoachCard
                    even={(number + 1) % 2 == 0}
                    name={coach.name}
                    src={coach.src}
                    education={coach.education}
                    description={coach.description}
                />
            )}
        </div>
    );
};

export default OurCoachesPage;
