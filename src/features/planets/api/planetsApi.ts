import { useFetch } from '../../../lib';
import { apiRoutes } from '../../../routes';

export type PlanetsResponse = {
  count: number;
  next: string;
  previous: string;
  results: PlanetData[];
};
export type PlanetData = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export const useGetPlanets = () => {
  const context = useFetch<PlanetsResponse>(apiRoutes.planets);
  return context;
};
