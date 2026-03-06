import { Animal, Review } from '../types/types';


export class ApiService {

  static async getReviews(): Promise<Review[]> {
    const res = await fetch(
      'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback',
    );

    if (!res.ok) {
      throw new Error('reviews are not available.');
    }

    const json = await res.json();

    return json.data;
  }

  static async getAnimals(): Promise<Animal[]> {
    const res = await fetch(
      'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets',
    );

    if (!res.ok) {
      throw new Error('info about animal are not available.');
    }

    const json = await res.json();

    return json.data;
  }
}
