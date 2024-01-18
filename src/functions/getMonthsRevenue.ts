import { CartType } from '../Types/Types';

const getMonthsRevenue = (arr: CartType[]) => {
  const yearRevenue = arr.reduce((acc, e) => acc + e.total, 0);
  const ebitdaVal = {
    jan: yearRevenue * 0.08,
    feb: yearRevenue * 0.06,
    mar: yearRevenue * 0.07,
    apr: yearRevenue * 0.04,
    may: yearRevenue * 0.05,
    jun: yearRevenue * 0.11,
    jul: yearRevenue * 0.1,
    aug: yearRevenue * 0.15,
    sep: yearRevenue * 0.12,
    oct: yearRevenue * 0.08,
    nov: yearRevenue * 0.04,
    dec: yearRevenue * 0.1,
  };
  const deprication = 0.9;
  const ebitVal = {
    jan: ebitdaVal.jan * deprication,
    feb: ebitdaVal.feb * deprication,
    mar: ebitdaVal.mar * deprication,
    apr: ebitdaVal.apr * deprication,
    may: ebitdaVal.may * deprication,
    jun: ebitdaVal.jun * deprication,
    jul: ebitdaVal.jul * deprication,
    aug: ebitdaVal.aug * deprication,
    sep: ebitdaVal.sep * deprication,
    oct: ebitdaVal.oct * deprication,
    nov: ebitdaVal.nov * deprication,
    dec: ebitdaVal.dec * deprication,
  };
  const taxes = 0.5;
  const ebtVal = {
    jan: ebitVal.jan * taxes,
    feb: ebitVal.feb * taxes,
    mar: ebitVal.mar * taxes,
    apr: ebitVal.apr * taxes,
    may: ebitVal.may * taxes,
    jun: ebitVal.jun * taxes,
    jul: ebitVal.jul * taxes,
    aug: ebitVal.aug * taxes,
    sep: ebitVal.sep * taxes,
    oct: ebitVal.oct * taxes,
    nov: ebitVal.nov * taxes,
    dec: ebitVal.dec * taxes,
  };

  return [
    {
      month: 'jan',
      EBITDA: Math.round(ebitdaVal.jan),
      EBIT: Math.round(ebitVal.jan),
      EBT: Math.round(ebtVal.jan),
    },
    {
      month: 'feb',
      EBITDA: Math.round(ebitdaVal.feb),
      EBIT: Math.round(ebitVal.feb),
      EBT: Math.round(ebtVal.feb),
    },
    {
      month: 'mar',
      EBITDA: Math.round(ebitdaVal.mar),
      EBIT: Math.round(ebitVal.mar),
      EBT: Math.round(ebtVal.mar),
    },
    {
      month: 'apr',
      EBITDA: Math.round(ebitdaVal.apr),
      EBIT: Math.round(ebitVal.apr),
      EBT: Math.round(ebtVal.apr),
    },
    {
      month: 'may',
      EBITDA: Math.round(ebitdaVal.may),
      EBIT: Math.round(ebitVal.may),
      EBT: Math.round(ebtVal.may),
    },
    {
      month: 'jun',
      EBITDA: Math.round(ebitdaVal.jun),
      EBIT: Math.round(ebitVal.jun),
      EBT: Math.round(ebtVal.jun),
    },
    {
      month: 'jul',
      EBITDA: Math.round(ebitdaVal.jul),
      EBIT: Math.round(ebitVal.jul),
      EBT: Math.round(ebtVal.jul),
    },
    {
      month: 'aug',
      EBITDA: Math.round(ebitdaVal.aug),
      EBIT: Math.round(ebitVal.aug),
      EBT: Math.round(ebtVal.aug),
    },
    {
      month: 'sep',
      EBITDA: Math.round(ebitdaVal.sep),
      EBIT: Math.round(ebitVal.sep),
      EBT: Math.round(ebtVal.sep),
    },
    {
      month: 'oct',
      EBITDA: Math.round(ebitdaVal.oct),
      EBIT: Math.round(ebitVal.oct),
      EBT: Math.round(ebtVal.oct),
    },
    {
      month: 'nov',
      EBITDA: Math.round(ebitdaVal.nov),
      EBIT: Math.round(ebitVal.nov),
      EBT: Math.round(ebtVal.nov),
    },
    {
      month: 'dec',
      EBITDA: Math.round(ebitdaVal.dec),
      EBIT: Math.round(ebitVal.dec),
      EBT: Math.round(ebtVal.dec),
    },
  ];
};

export default getMonthsRevenue;
