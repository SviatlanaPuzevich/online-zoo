import type { AnimalFeeding } from '../../types/types.ts';
import styles from './animal.feed.card.module.css';
import Button from '../Buttons/Button.tsx';
import Arrow from '../Buttons/icons/Arrow.tsx';
import koalaImg from '../../assets/images/koala.png';

const animalImages = import.meta.glob<{ default: string }>('../../assets/images/*.png', { eager: true });

// interface AnimalCardsGridProps {
//   animalsData: AnimalFeeding[];
// }


interface AnimalFeedCardProps {
  animal: AnimalFeeding;
}

const AnimalFeedCard: React.FC<AnimalFeedCardProps> = ({ animal }) => {
  return (

    <div className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.card__image} src={animalImages[`../../assets/images/${animal.id}.png`]?.default}
             alt={animal.id || 'animal'} />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__text}>
          <p>{animal.text}</p>
        </div>
        <Button icon={<Arrow />} btnStyle="orange" extraClass={styles.card__button} text="FEED" popoverTarget="" />
      </div>
    </div>
  )
    ;
};

const AnimalFeedCardsGrid = () => {
  return (
    <div className={styles.donate__container}>

      <div className={styles.donate__featured}>
        <img className={styles.donate__image} src={koalaImg} alt="Koala" />
      </div>
      <AnimalFeedCard animal={{
        id: 'panda',
        text: 'Your $30 could give Lucas a slice of panda cake, made with our secret recipe.',
      }} />
      <AnimalFeedCard animal={{
        id: 'lemur',
        text: 'With your support, we can give Andy his favorite fruits. Especially when it\'s not fruit season in its natural habitat',
      }} />
      <AnimalFeedCard animal={{
        id: 'tiger',
        text: 'Your $150 will help to care for Senja, a Sumatran tiger, for three weeks.',
      }} />
      <AnimalFeedCard animal={{
        id: 'eagles',
        text: 'Sam & Lora have hatched and raised numerous young and will be happy with your help.',
      }} />

    </div>
  );
};


export default AnimalFeedCardsGrid;


