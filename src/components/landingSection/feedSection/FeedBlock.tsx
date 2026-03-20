import styles from './feed.block.module.css';
import type { ReactNode } from 'react';

interface FeedBlockProps {
  title: string;
  text: string;
  pathToImg: string;
  imgDesc: string;
  icon: ReactNode;
}

const FeedBlock: React.FC<FeedBlockProps> = ({ title, text, pathToImg, imgDesc, icon }) => {
  return (
    <div className={styles.item}>

      <div className={styles.item__img}>
        <div className="image-wrapper">
          <img src={pathToImg} alt={imgDesc} />
        </div>
      </div>
      <div className={styles.item__content}>
        <div className={styles.item__icon}>
          {icon}
        </div>
        <div className="subheader">{title}</div>
        <p className={styles.item__description}>{text}
        </p>
      </div>
    </div>
  );
};

export default FeedBlock;