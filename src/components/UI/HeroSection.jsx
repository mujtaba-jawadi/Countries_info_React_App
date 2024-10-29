import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid-col-two">
        <div className="hero-content">
          <h1 className="slogan-text">
            Flags, Facts and Beyond-
            <br />
            Explore the Earth
          </h1>
          <p className="paragraph">
            &quot;Embark on a journey through the nations of the world. Explore
            their unique flags, delve into their rich histories and uncover the
            landmarks that define their cultures. Every country has a story
            waiting to be discovered.&quot;
          </p>
          <NavLink to="/country">

          <button>
            Start Exploring <FaLongArrowAltRight />
          </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/globe.png"
            alt="Globe Image"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
