/* eslint-disable no-useless-constructor */
import { Country } from '../model/Country';
import { ICountryRepository } from '../repositories/ICountryRepository';

export class GetAllCountries {
  constructor(private readonly repository: ICountryRepository) {}

  public async execute(): Promise<Array<Country>> {
    return await this.repository.getAll();
  }
}
