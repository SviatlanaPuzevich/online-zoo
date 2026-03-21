export interface MenuItem {
  label: string;
  href: string;
}

export interface PopupContent {
  getScreen(): HTMLElement;
  onOpen?(): void;
  onClose?(): void;
}

export type PopupContentInput = HTMLElement | PopupContent | PopupContent[];

export type Review = {
  id: number;
  city: string;
  month: string;
  year: string;
  text: string;
  name: string;
};

export type Animal = {
  id: number;
  name: string;
  commonName: string;
  description: string;
};

export type AnimalFact = {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  size: string;
  diet: string;
  habitat: string;
  range: string;
  latitude: string;
  longitude: string;
  description: string;
  detailedDescription: string;
};

export type AnimalItem = {
  id: number;
  petId: number;
  text: string;
};

export type User = {
  login: string;
  name: string;
  email: string;
};

export interface PaymentState {
  name: string;
  email: string;
  amount: number;
  petId: number | undefined;
  petName: string;
  cardNumber: number;
  expDate: string;
}

export type Donation = Pick<
  PaymentState,
  'name' | 'email' | 'amount' | 'petId'
>;

export interface StateController<T> {
  reset(): void;
  update(partial: Partial<T>): void;
  getState(): PaymentState;
}

export type AnimalFeeding = {
  id: string;
  text: string;
};

