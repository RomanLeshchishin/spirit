import styles from "./styles/PhotoGalleryPage.module.scss"
import Photo from "./Photo.tsx";
import TitleSection from "../TitleComponent/TitleSection.tsx";
import {useQuery} from "@tanstack/react-query";
import {Input} from "antd";
import {useState} from "react";

const PhotoGalleryPage = () => {
    async function fetchPhotos(): Promise<Photo[] | undefined>{
        const res = await fetch('https://658437734d1ee97c6bcf4104.mockapi.io/walkPhoto')
        if (!res.ok) throw new Error('Failed to fetch photos!')
        return res.json()
    }

    const {data, isSuccess} = useQuery({
        queryFn: fetchPhotos,
        queryKey: ['photo']
    })

    const [value, setValue] = useState('');

    const filteredPhoto = data?.filter(photo => {
        return photo.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <>
            <div>
                <TitleSection textTitle={'Фотогалерея'} colorTitle={'#000'} />
                <Input
                    className={styles.input}
                    placeholder={'Введите имя человека'}
                    onChange={(event) => setValue(event.target.value)}
                />
                <div>
                    <p className={styles.title}>Фото с прогулок</p>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(0, 6).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(6, 12).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                </div>

                <div>
                    <p className={styles.title}>Фото с тренировок</p>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(12, 18).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(18, 24).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                </div>

                <div>
                    <p className={styles.title}>Фото с фотоссесий</p>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(24, 30).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                    <div className={styles.photoContainer}>
                        {isSuccess && filteredPhoto?.slice(30, 36).map((walkPhoto) =>
                            <Photo
                                src={walkPhoto.imageUrl}
                                alt={walkPhoto.name}
                                name={walkPhoto.name}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoGalleryPage;
