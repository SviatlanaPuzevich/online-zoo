import { Animal, Review, AnimalFact, AnimalItem } from '../types/types';


export class ApiService {
  static async getReviews(): Promise<Review[]> {
    const res = await fetch(
      'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback',
    );

    if (!res.ok) {
      throw new Error('Something went wrong. Please, refresh the page');
    }

    const json = await res.json();

    return json.data;
  }

  static async getAnimals(): Promise<Animal[]> {
    const res = await fetch(
      'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets',
    );

    if (!res.ok) {
      throw new Error('Something went wrong. Please, refresh the page');
    }

    const json = await res.json();

    return json.data;
  }

  static async getAnimalFact(id: number): Promise<AnimalFact> {
    const res = await fetch(
      `https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${id}`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch animal with id ${id}. Please try again.`,
      );
    }
    const json = await res.json();

    return json.data;
  }

  static async getCameras(): Promise<AnimalItem []> {
    const res = await fetch(
      'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras',
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch animal info. Please try again.`,
      );
    }
    const json = await res.json();

    return json.data;
  }
}
