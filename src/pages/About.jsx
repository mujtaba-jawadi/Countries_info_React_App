import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section className="about-section container">
      <h2 className="container-title">
        Want to know about the Facts <br />
        Peoples are proud of
      </h2>

      <div className="container-card">
        {countryData.map((currentCountry) => {
      const { id, countryName, capital, population, interestingFact } = currentCountry;
          return (
            <div className="card" key={id}>
              <div className="container">
                <h3 className="card-title">{countryName}</h3>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact: </span>
                 {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
