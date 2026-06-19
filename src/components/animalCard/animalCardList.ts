import { Animal } from '../../types/types';
import { AnimalCard } from './animalCard';

export class AnimalCardList {
  constructor(
    private container: HTMLElement,
    private animal: Animal[],
  ) {}

  render() {
    const fragment = document.createDocumentFragment();

    this.animal.forEach((animal) => {
      const card = new AnimalCard(animal);
      fragment.appendChild(card.render());
    });

    this.container.appendChild(fragment);
  }
}
