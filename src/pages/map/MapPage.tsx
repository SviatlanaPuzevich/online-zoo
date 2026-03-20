import styles from './map.page.module.css';
import WorldMap from '../../components/Map/WorldMap.tsx';
import AnimalPin, { type MapLocation } from '../../components/MapPin/AnimalPin.tsx';
import { ANIMAL_LOCATIONS } from './pinsLocation.ts';



const MapPage = () => {
  return (<div className={styles.map}>
    <h2 className={styles.map__title}>find where are <br className={styles.title__break} /> the animals live</h2>
    <div className={styles.map__container}>
      <WorldMap />
      {ANIMAL_LOCATIONS.map((location: MapLocation) => {
        return <AnimalPin location={location} key={location.id} />;
      })}
    </div>
  </div>);
};

export default MapPage;