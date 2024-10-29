import { useEffect, useState, useTransition } from "react";
import { Loader } from "../components/UI/Loader";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCard";
import "../App.css";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);


  // console.log(search, filter)

  const searchCountry = (country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }else {
      return country
    }
  }

  const filterContinent = (country)=>{
    if(filter === "All") return country;
    return country.region === filter;
  }

  const filteredCountries = countries.filter((country)=> searchCountry(country) && filterContinent(country) )


  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className=" container-card container">
        {filteredCountries.map((currentCountry, index) => {
          return <CountryCard currentCountry={currentCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
