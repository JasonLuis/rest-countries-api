import { Country } from '../model/Country';

export interface ICountryRepository {
  getAll(): Promise<Array<Country>>;
  getByName(name: string): Promise<Country | undefined>;
  filterByRegion(region: string): Promise<Array<Country>>;
  filterByName(name: string): Promise<Array<Country>>;
}
