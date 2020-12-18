import './scss/index.scss';
import './app/components/tracking';
import './app/components/vkeyboard';
import Map from './app/components/map';
import change from './app/components/change';
import { getCountrysInfo /* getGlobalInfo */ } from './app/components/api';
import {listOfCounriesHandler} from './app/components/list-of-countries';
import { DATA_TIPE } from './app/components/const';
import { getCountPer100th, getCountPer100thFromMillion } from './app/components/util';

export const countryObj = {
  iso2: 'global',
  get iso() { return this.iso2; },
  set iso(value) {
    this.iso2 = value;
    change();
  },
};
export let objMap;

async function init() {
  let сountrysInfo = await getCountrysInfo();
  сountrysInfo.forEach((el) => {
    const element = el;
    element[DATA_TIPE.casesPer100th] = getCountPer100thFromMillion(element.casesPerOneMillion);
    element[DATA_TIPE.deathsPer100th] = getCountPer100thFromMillion(element.deathsPerOneMillion);
    element[DATA_TIPE.recoveredPer100th] = getCountPer100thFromMillion(element
      .recoveredPerOneMillion);
    element[DATA_TIPE.todayCasesPer100th] = getCountPer100th(element.todayCases,
      element.population);
    element[DATA_TIPE.todayDeathsPer100th] = getCountPer100th(element.todayDeaths,
      element.population);
    element[DATA_TIPE.todayRecoveredPer100th] = getCountPer100th(element.todayRecovered,
      element.population);
  });
  сountrysInfo = сountrysInfo.filter((el) => el.countryInfo.iso2 !== null);
  listOfCounriesHandler(сountrysInfo);

  objMap = new Map(сountrysInfo);
  objMap.createMap();
// const globalInfo = await getGlobalInfo();
// console.log(globalInfo);
}

init();
