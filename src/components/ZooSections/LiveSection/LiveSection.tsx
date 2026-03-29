import styles from './live.section.module.css';
import Cameras from '../../Cameras/Cameras.tsx';
import Drawer from '../../Drawer/Drawer.tsx';


const LiveSection = () => {
  return (
    <section className={styles.live}>
      <div className={styles.drawer__container}>
        <Drawer />
      </div>
      <Cameras />
    </section>
  );
};

export default LiveSection;