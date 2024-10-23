import { SiHp } from "react-icons/si";
import "../../App.css";

export const CountryCard = ({ currentCountry }) => {
  const { flags, name, population, capital, region, currencies } =
    currentCountry;
  return (
    <section className="container">
      <div className="container-card">
        <div className="card">
          <div className="container">
            <h3 className="card-title">{name.common}</h3>
            <img src={flags.svg} alt={flags.alt} className="country-flag" />
            <p>
              <span className="card-description">
                <b>Capital:</b>{" "}
              </span>
              {capital}
            </p>
            <p>
              <span className="card-description">
                <b>Population:</b>{" "}
              </span>
              {population}
            </p>
            <p>
              <span className="card-description">
                <b>Region:</b>{" "}
              </span>
              {region}
            </p>
            <p>
              <span className="card-description">
                <b>Currency:</b>{" "}
              </span>
              {currencies &&
                Object.keys(currencies).length > 0 &&
                `${currencies[Object.keys(currencies)[0]].name}
                (${currencies[Object.keys(currencies)[0]].symbol})`
               }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
