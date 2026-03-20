import type { Animal } from '../../types/types.ts';
import AnimalCard from './AnimalCard.tsx';
import styles from './animal.card.module.css';

interface AnimalCardsGridProps {
  animals: Animal[];
}

const AnimalCardsGrid: React.FC<AnimalCardsGridProps> = ({animals}) => {
  return (
    <div id="animal-cards" className={styles.cardGrid}>
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
};

export default AnimalCardsGrid;