import { JsonCountryRepository } from '~~/src/app/core/repositories/JsonCountryRepository';
import { FilterCountriesByName } from '~~/src/app/core/useCases/FilterCountriesByName';
import { FilterCountriesByRegion } from '~~/src/app/core/useCases/FilterCountriesByRegion';
import { GetAllCountries } from '~~/src/app/core/useCases/GetAllCountries';
import { GetCountryByName } from '~~/src/app/core/useCases/GetCountryByName';

const repository = new JsonCountryRepository();

export const useCountries = () => {
  const getAllCountries = new GetAllCountries(repository);
  const getCountryByName = new GetCountryByName(repository);
  const filterByRegion = new FilterCountriesByRegion(repository);
  const filterByName = new FilterCountriesByName(repository);

  return {
    getAll: () => getAllCountries.execute(),
    getByName: (name: string) => getCountryByName.execute(name),
    filterByRegion: (region: string) => filterByRegion.execute(region),
    filterByName: (name: string) => filterByName.execute(name)
  };
};
