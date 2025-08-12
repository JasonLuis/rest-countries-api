/* eslint-disable no-useless-constructor */
import { Country } from '../model/Country';
import { ICountryRepository } from '../repositories/ICountryRepository';

export class FilterCountriesByName {
  constructor(private readonly repository: ICountryRepository) {}

  public async execute(name: string): Promise<Array<Country>> {
    return await this.repository.filterByName(name);
  }
}
