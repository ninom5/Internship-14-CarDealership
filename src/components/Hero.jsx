import HeroImg from "../assets/cars_cropped.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-container__background">
          <img src={HeroImg} alt="hero garage background" />
        </div>
        <div className="filter-inputs">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
