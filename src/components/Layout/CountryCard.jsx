import { NavLink } from "react-router-dom";
import "../../App.css";

export const CountryCard = ({ currentCountry }) => {
  const { flags, name, capital, region } =
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
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
