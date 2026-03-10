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
