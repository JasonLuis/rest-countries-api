/* eslint-disable no-useless-constructor */
import { Country } from '../model/Country';
import { ICountryRepository } from '../repositories/ICountryRepository';

export class GetCountryByName {
  constructor(private readonly repository: ICountryRepository) {}

  public async execute(name: string): Promise<Country | undefined> {
    return await this.repository.getByName(name);
  }
}
