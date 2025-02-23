import { useState } from "react";
import HeroImg from "../../assets/images/cars_cropped.jpg";

const Hero = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setSearchInput(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <section className="hero-section">
      <div className="hero-section__background">
        <img src={HeroImg} alt="hero garage background" />
      </div>
      <div className="filter-input">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="filter-button" onClick={handleButtonClick}>
          Filter
        </button>
      </div>
    </section>
  );
};

export default Hero;
