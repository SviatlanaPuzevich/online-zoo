import styles from './animal.card.module.css';
import Button from '../Buttons/Button.tsx';
import Arrow from '../Buttons/icons/Arrow.tsx';
import type { Animal } from '../../types/types.ts';
import classNames from 'classnames';

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card__image-wrapper']}>
        <img src={`/images/gallery/${animal.id}.png`} alt={animal.commonName}
             className={styles.card__image} />
        <span className={classNames(styles.card__badge, 'subheader')}>{animal.name}</span>
      </div>
      <div className={styles.card__content}>
        <p className={classNames(styles.card__title, 'subheader')}>{animal.commonName}</p>
        <p className={styles.card__text}>
          {animal.description}
        </p>

        <Button icon={<Arrow />} btnStyle="orange" text="VIEW LIVE CAM" to={`/zoo/${animal.id}`} />

      </div>
    </div>);
};

export default AnimalCard;