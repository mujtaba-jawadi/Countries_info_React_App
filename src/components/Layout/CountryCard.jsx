import { NavLink } from "react-router-dom";
import "../../App.css";

export const CountryCard = ({ currentCountry }) => {
  const { flags, name, population, capital, region, currencies } =
    currentCountry;

  const divStyle = {
    backgroundImage: `url(${flags.svg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="container">
      <div className="container-card">
        <div className="card">
          <div className="container">
            <h3 className="card-title">
              {name.common.length > 15
                ? name.common.slice(0, 15) + "...."
                : name.common}
            </h3>
            <div className="country-flag" style={divStyle}></div>
            <p>
              <span className="card-description">
                <b>Capital:</b>{" "}
              </span>
              {capital[0]}
            </p>
            <p>
              <span className="card-description">
                <b>Region:</b>{" "}
              </span>
              {region}
            </p>
            {/* <p>
              <span className="card-description">
                <b>Currency Name:</b>{" "}
              </span>
              {currencies &&
                Object.keys(currencies).length > 0 &&
                `${currencies[Object.keys(currencies)[0]].name}`
               }
            </p>
            <p>
              <span className="card-description">
                <b>Currency Symbol:</b>{" "}
              </span>
              {currencies &&
                Object.keys(currencies).length > 0 &&
                `(${currencies[Object.keys(currencies)[0]].symbol})`
               }
            </p> */}
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
