/* eslint-disable no-useless-constructor */
import { Country } from '../model/Country';
import { ICountryRepository } from '../repositories/ICountryRepository';

export class FilterCountriesByRegion {
  constructor(private readonly repository: ICountryRepository) {}

  public async execute(region: string): Promise<Array<Country>> {
    return await this.repository.filterByRegion(region);
  }
}
