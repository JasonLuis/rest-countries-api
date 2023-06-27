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
    console.log('country', country);
    const path = new URL(`./data.json`, import.meta.url).href;
    const data = await fetch(path);
    const res = await data.json();

    if (!Array.isArray(res)) {
      throw new TypeError('O arquivo JSON não existe');
    }

    if (country === undefined || country.length === 0) {
      return res;
    }

    const filter = res.filter(item => item.name.includes(country));

    return filter;
  }
}
