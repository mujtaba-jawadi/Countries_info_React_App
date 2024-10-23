import axios from "axios";

const api = axios.create({
   baseURL: "https://restcountries.com/v3.1"
})

//GET Method for getting Country Data from API

export const getCountryData = ()=>{
   return api.get("/all?fields=name,capital,currencies,region,population,lang,flags")
}