export namespace CountryDto {
  export interface Currency {
    name: string;
    symbol: string;
  }

  export interface Language {
    name: string;
  }

  export interface ICountry {
    name: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: Array<string>;
    currencies: Array<Currency>;
    languages: Array<Language>;
    borders: Array<string>;
    flag: string;
  }
}
