import React from "react";
import COUNTRIES from '../../constants/countriesStatesCities.json'

const useCountriesStateCities = () => {
  const [countries] = React.useState(COUNTRIES);
  return [countries];
};

export default useCountriesStateCities;
