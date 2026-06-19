import { Review } from '../../types/types';
import { ReviewCard } from './reviewCard';

export class ReviewCardList {
  constructor(
    private container: HTMLElement,
    private animal: Review[],
  ) {}

  render() {
    const fragment = document.createDocumentFragment();

    this.animal.forEach((animal) => {
      const card = new ReviewCard(animal);
      fragment.appendChild(card.render());
    });

    this.container.appendChild(fragment);
  }
}
