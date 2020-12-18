import { DATA_TIPE } from './const';
import { countryObj, objMap, objGrafic} from '../../index';

export function change() {
  const time = document.getElementById('checkboxTime').checked;
  const popul = document.getElementById('checkboxPopul').checked;
  const list = document.getElementById('select').value.toString();
  let rezult;
  switch (list) {
    case 'cases':
      if (time && popul) rezult = DATA_TIPE.todayCasesPer100th;
      if (!time && popul) rezult = DATA_TIPE.casesPer100th;
      if (time && !popul) rezult = DATA_TIPE.todayCases;
      if (!time && !popul) rezult = DATA_TIPE.cases;
      break;
    case 'deaths':
      if (time && popul) rezult = DATA_TIPE.todayDeathsPer100th;
      if (!time && popul) rezult = DATA_TIPE.deathsPer100th;
      if (time && !popul) rezult = DATA_TIPE.todayDeaths;
      if (!time && !popul) rezult = DATA_TIPE.deaths;
      break;
    case 'recovered':
      if (time && popul) rezult = DATA_TIPE.todayRecoveredPer100th;
      if (!time && popul) rezult = DATA_TIPE.recoveredPer100th;
      if (time && !popul) rezult = DATA_TIPE.todayRecovered;
      if (!time && !popul) rezult = DATA_TIPE.recovered;
      break;
  }
  // console.log(objGrafic);
  // console.log(countryObj.iso);
  if (objGrafic.chart) {
    objGrafic.chart.destroy();
  }
  objMap.createMarker(rezult);
  objGrafic.initChartConfig(rezult);
  // objGrafic.initChartConfig(rezult);
  // objGrafic.createMarker(rezult);
  //objMap.zoomMap(countryObj.iso2);
  // create(rezult, country)
}
