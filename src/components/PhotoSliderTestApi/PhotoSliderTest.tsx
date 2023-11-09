import * as React from 'react';
import {Carousel} from "antd";
import styles from "./PhotoSliderTest.module.scss";
import {useQuery} from "@tanstack/react-query";
import {Photo} from "../../types";

const PhotoSliderTest = () => {

    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://653e4494f52310ee6a9ac0b6.mockapi.io/photos-main-page-slider')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

   const {data, isSuccess} = useQuery({
       queryFn: fetchPhotos,
       queryKey: ['photos']
   })

    return (
        <div className={styles.blockSlider}>
            <Carousel autoplay>
                {isSuccess && data?.map((photo) =>
               <div>
                   <img src={photo.imageUrl} alt={photo.name} style={{margin: "auto"}}></img>
                   <h2>{photo.name}</h2>
               </div>
                    )}
            </Carousel>
        </div>
    );
};
//slider, statistic, footer

export default PhotoSliderTest;
