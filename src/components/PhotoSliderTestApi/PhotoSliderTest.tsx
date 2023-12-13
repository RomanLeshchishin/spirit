import * as React from 'react';
import {Carousel} from "antd";
import styles from "./PhotoSliderTest.module.scss";
import {useQuery} from "@tanstack/react-query";

const PhotoSliderTest = () => {

    async function fetchPhotos(){
        const res = await fetch('https://6579af271acd268f9af9bc32.mockapi.io/coaches')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

   const {data, isSuccess} = useQuery({
       queryFn: fetchPhotos,
       queryKey: ['photos']
   })

    return (
        <div className={styles.mainBlock}>
            <Carousel autoplay>
                {isSuccess && data?.map((photo: any) =>
               <div>
                   <img src={photo.imageUrl} alt={photo.fullName}></img>
               </div>
                    )}
            </Carousel>
        </div>
    );
};

export default PhotoSliderTest;
