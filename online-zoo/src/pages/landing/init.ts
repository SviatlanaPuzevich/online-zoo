import { ApiService } from '../../service/service';
import { ReviewCardList } from '../../components/reviewCard/reviewCardList';
import { AnimalCardList } from '../../components/animalCard/animalCardList';

async function initAnimalCards() {
  const animals = await ApiService.getAnimals();
  console.log(animals);

  const container = document.querySelector('#animal-cards') as HTMLElement;

  const list = new AnimalCardList(container, animals);
  list.render();
}


async function initReviewCards() {
  const reviews = await ApiService.getReviews();

  const container = document.querySelector('#reviews-container') as HTMLElement;

  const list = new ReviewCardList(container, reviews);
  list.render();
}

initAnimalCards();

initReviewCards();
