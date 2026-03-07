export interface MenuItem {
  label: string;
  href: string;
}

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
