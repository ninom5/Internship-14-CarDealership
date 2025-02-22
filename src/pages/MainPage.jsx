import Hero from "../components/Hero";
import Header from "../components/Header";
import CarsCards from "../components/CarsCardsMain";

const MainPage = ({ savedCars, setSavedCars }) => {
  return (
    <>
      <Header />
      <Hero />
      <CarsCards cars={savedCars} setSavedCars={setSavedCars} />
    </>
  );
};

export default MainPage;
