import styles from './live.section.module.css';
import Cameras from '../../Cameras/Cameras.tsx';


const LiveSection = () => {
  return (
    <section className={styles.live}>
      <Cameras />
    </section>
  );
};

export default LiveSection;