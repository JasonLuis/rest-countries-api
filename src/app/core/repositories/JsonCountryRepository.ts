import { numberFormatterDecimal } from '../../utils/numberFormatter';
import { Country } from '../model/Country';
import { ICountryRepository } from './ICountryRepository';

export class JsonCountryRepository implements ICountryRepository {
  private async loadData(): Promise<any[]> {
    const path = new URL(`../data/data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    return res;
  }

  public async getAll(): Promise<Array<Country>> {
    const data = await this.loadData();

    return data.map(this.mapToEntity);
  }

  public async getByName(name: string): Promise<Country | undefined> {
    const contries = await this.getAll();

    return contries.find(
      country => country.name.toLowerCase() === name.toLowerCase() || null
    );
  }

  public async filterByRegion(region: string): Promise<Array<Country>> {
    const countries = await this.getAll();
    return countries.filter(country => country.region === region);
  }

  public async filterByName(name: string): Promise<Array<Country>> {
    if (!name) return this.getAll();
    const countries = await this.getAll();
    return countries.filter(country =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  private mapToEntity(raw: any): Country {
    return {
      name: raw.name,
      nativeName: raw.nativeName,
      population: numberFormatterDecimal(raw.population),
      region: raw.region,
      subregion: raw.subregion,
      capital: raw.capital,
      topLevelDomain: raw.topLevelDomain,
      currencies: raw.currencies,
      languages: raw.languages,
      borders: raw.borders,
      flag: raw.flag
    };
  }
}
