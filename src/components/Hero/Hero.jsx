import { useState } from "react";
import HeroImg from "../../assets/cars_cropped.jpg";

const Hero = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-container__background">
          <img src={HeroImg} alt="hero garage background" />
        </div>
        <div className="filter-input">
          <input
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
