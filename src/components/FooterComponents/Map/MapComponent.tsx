import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from './MapComponent.module.scss';

interface mapState {
    center: number[],
    zoom: number
}
const MapComponent = () => {
    const mapState: mapState = {
        center: [56.914917, 60.669355],
        zoom: 16
    }
    const coordinates:number[] = [56.914917, 60.669355]
    return (
        <YMaps enterprise query={{
            apikey: '3fe00455-5aad-4a7b-97d7-c16188256cc2'
        }}>
            <Map defaultState={mapState} className={styles.mapContent}>
                <Placemark geometry={coordinates}/>
            </Map>
        </YMaps>
    )
}

export default MapComponent
