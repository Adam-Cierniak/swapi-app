import { useFetch } from '../../../lib';
import { isValidUrl } from '../../../utils/isValidUrl';

export type Person = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};
export const usePersonViaUrl = (url: string) => {
  if (!isValidUrl(url)) {
    console.log('URL not valid!');
  }
  const context = useFetch<any>(url);
  return context;
};
