import AddCar from "../../components/CarForm/AddCarForm.jsx";
const AddNewCarPage = ({ setSavedCars }) => {
  return (
    <div className="add-car-page">
      <AddCar setSavedCars={setSavedCars} />
    </div>
  );
};

export default AddNewCarPage;
