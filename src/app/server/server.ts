import { numberFormatterDecimal } from '../helper';
import { CountryDto } from '../model/ICountry';

export class ServerAPI {
  async getAllCountrys(): Promise<Array<any>> {
    const path = new URL(`./data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    return res;
  }

  async filterCountryByRegion(region: string): Promise<Array<any>> {
    const path = new URL(`./data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    const filter = res.filter(item => item.region === region);

    return filter;
  }

  async filterCountriesByName(country?: string): Promise<Array<any>> {
    const path = new URL(`./data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    if (country === undefined || country.length === 0) {
      return res;
    }

    const filter = res.filter(item =>
      item.name.toLowerCase().includes(country.toLowerCase())
    );

    return filter;
  }

  async getCountryByName(country: string): Promise<CountryDto.ICountry> {
    const path = new URL(`./data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    const countries: Array<CountryDto.ICountry> = res.map(item => {
      return {
        name: item.name as string,
        nativeName: item.nativeName as string,
        population: numberFormatterDecimal(item.population as number),
        region: item.region as string,
        subregion: item.subregion as string,
        capital: item.capital as string,
        topLevelDomain: item.topLevelDomain as string[],
        currencies: item.currencies as CountryDto.Currency[],
        languages: item.languages as CountryDto.Language[],
        borders: item.borders as string[],
        flag: item.flag as string
      };
    });

    const filter = countries.find(
      item => item.name.toLowerCase() === country.toLowerCase()
    );

    if (!filter) {
      throw new Error('País não encontrado');
    }

    return filter;
  }
}
