import Header from "../components/Header";
import AddCar from "../components/AddCarForm";
import "../styles/newCarPage.css";

const AddNewCarPage = () => {
  return (
    <div className="add-car-page">
      <Header />
      <AddCar />
    </div>
  );
};

export default AddNewCarPage;
