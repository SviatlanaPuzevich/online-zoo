import type { Animal } from '../../types/types.ts';
import AnimalCard from './AnimalCard.tsx';

interface AnimalCardsGridProps {
  animals: Animal[];
}

const AnimalCardsGrid: React.FC<AnimalCardsGridProps> = ({animals}) => {
  return (
    <div id="animal-cards" className="animal-slider__track">
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
};

export default AnimalCardsGrid;