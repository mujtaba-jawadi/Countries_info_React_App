import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//GET Method for getting Countries Data from API

export const getCountryData = () => {
  return api.get(
    "/all?fields=name,capital,currencies,region,population,lang,flags"
  );
};
//GET Method for getting Individual Country Data
export const getIndividualCountryData = (name) => {
  return api.get(
    `/name/${name}?fields=name,capital,currencies,region,population,languages,flags,borders,subregion,tld,timezones,continents,maps,latlng`
  );
};
