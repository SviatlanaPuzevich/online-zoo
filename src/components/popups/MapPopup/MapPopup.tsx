import styles from './map.popup.module.css'


interface MapPopupProps {
  src: string;
}

const MapPopup: React.FC<MapPopupProps> = ({src})=> {
  return (
    <iframe src={src} loading='lazy' className={styles.frame}/>
  )
}

export default MapPopup