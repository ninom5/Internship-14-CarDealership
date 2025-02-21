import HeroImg from "../assets/cars_cropped.jpg";
import Car from "./CarCard";

const addedCars = JSON.parse(localStorage.getItem("cars"));

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-contaner">
        <div className="hero-container__background">
          <img src={HeroImg} alt="hero garage background" />
        </div>
        <div className="filter-inputs">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div className="car-cards">
        {addedCars &&
          addedCars.map((car, index) => <Car key={index} car={car} />)}
      </div>
    </section>
  );
};

export default Hero;
