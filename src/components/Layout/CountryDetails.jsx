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
            <h3>
              Official Name: <span>{country.name.official}</span>
            </h3>
            <p>
              <span className="card-description">
                <b>Capital:</b>
              </span>
              {country.capital[0]}
            </p>
            <p>
              <span className="card-description">
                <b>Region:</b>
              </span>
              {country.region}
            </p>
            <p>
              <span className="card-description">
                <b>Sub-Region:</b>
              </span>
              {country.subregion}
            </p>
            <p>
              <span className="card-description">
                <b>Continent:</b>
              </span>
              {country.continents}
            </p>
            <p>
              <span className="card-description">
                <b>Population:</b>
              </span>
              {country.population.toLocaleString()}
            </p>

            <p>
              <span className="card-description">
                <b>Languages:</b>
              </span>
              {Object.keys(country.languages)
                .map((key) => country.languages[key])
                .join(", ")}
            </p>
            <p>
              <span className="card-description">
                <b>Timezone:</b>
              </span>
              {country.timezones[0]}
            </p>

            <p>
              <span className="card-description">
                <b>Currency Name:</b>{" "}
              </span>
              {country.currencies &&
                Object.keys(country.currencies).length > 0 &&
                `${
                  country.currencies[Object.keys(country.currencies)[0]].name
                }`}
            </p>
            <p>
              <span className="card-description">
                <b>Currency Symbol:</b>{" "}
              </span>
              {country.currencies &&
                Object.keys(country.currencies).length > 0 &&
                `(${
                  country.currencies[Object.keys(country.currencies)[0]].symbol
                })`}
            </p>
            <p>
              <span className="card-description">
                <b>Top Level Domain:</b>
              </span>
              ({country.tld[0]})
            </p>
            <p>
              <span className="card-description">
                <b>Latitude:</b>
              </span>
              ({country.latlng[0]})
            </p>
            <p>
              <span className="card-description">
                <b>Longitude:</b>
              </span>
              ({country.latlng[1]})
            </p>
            <p>
              <span className="card-description">
                <b>Maps:</b>
              </span>
              <a href={country.maps.googleMaps}>Go to Map</a>
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
