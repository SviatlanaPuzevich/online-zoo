import type {
  Animal,
  AnimalFact,
  AnimalItem,
  Donation,
  LoginForm,
  LoginResponse,
  RegisterForm,
  Review,
} from '../types/types.ts';

const BASE_URL: string = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod';

export class ApiService {

  static async getReviews(): Promise<Review[]> {
    const res = await fetch(
      `${BASE_URL}/feedback`,
    );

    if (!res.ok) {
      throw new Error('Something went wrong. Please, refresh the page');
    }

    const json = await res.json();

    return json.data;
  }

  static async getAnimals(): Promise<Animal[]> {
    const res = await fetch(
      `${BASE_URL}/pets`,
    );

    if (!res.ok) {
      throw new Error('Something went wrong. Please, refresh the page');
    }

    const json = await res.json();

    return json.data;
  }

  static async getAnimalFact(id: number): Promise<AnimalFact> {
    const res = await fetch(
      `${BASE_URL}/pets/${id}`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch animal with id ${id}. Please try again.`,
      );
    }
    const json = await res.json();

    return json.data;
  }

  static async getCameras(): Promise<AnimalItem[]> {
    const res = await fetch(
      `${BASE_URL}/cameras`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch animal info. Please try again.`);
    }
    const json = await res.json();

    return json.data;
  }

  static  async login(data : LoginForm): Promise<LoginResponse> {
    const res = await fetch(
      `${BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error("Login or password are not correct.");
    }

    const json = await res.json();
    return json.data;
  }

  static  async register(data : RegisterForm): Promise<LoginResponse> {
    const res = await fetch(
      `${BASE_URL}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    // if (!res.ok) {
    //   throw new Error(res.message);
    // }

    const json = await res.json();
    return json.data;
  }

  static async sendDonation(data: Donation): Promise<unknown> {

    const payload = {
      ...data,
      petId: data.petId ?? 1,
    };

    const res = await fetch(
      `${BASE_URL}/donations`,
      {
        method: 'POST',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to send donation. Please try again.`);
    }

    return await res.json();
  }
}