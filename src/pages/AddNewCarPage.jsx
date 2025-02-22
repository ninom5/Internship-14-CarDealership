import Header from "../components/Header";
import AddCar from "../components/AddCarForm";
import "../styles/newCarPage.css";

const AddNewCarPage = ({ setSavedCars }) => {
  return (
    <div className="add-car-page">
      <Header />
      <AddCar setSavedCars={setSavedCars} />
    </div>
  );
};

export default AddNewCarPage;
