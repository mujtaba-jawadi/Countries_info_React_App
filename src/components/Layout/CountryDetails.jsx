import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndividualCountryData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [country, setCountry] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualCountryData(params.id);
      console.log(res.data[0]);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);
  console.log(country);

  if (isPending) return <Loader />;

  return (
    <main className="country-details-section main">
      {country && (
        <div className="container grid-col-two detail-page">
          <div className="country-details-image">
            <img src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <div className="country-details-content">
            <h1>{country.name.common}</h1>
            <p>
              <span className="card-description">
                <b>Capital:</b>
              </span>
              {country.capital[0]}
            </p>
            <p>
              <span className="card-description">
                <b>Population:</b>
              </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">
                <b>Region:</b>
              </span>
              {country.region}
            </p>
            <NavLink to="/country">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      )}
    </main>
  );
};
