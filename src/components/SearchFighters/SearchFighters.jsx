import InputRegion from "./inputRegion";
import InputAge from "./inputAge";
import InputFights from "./inputNumberOfFights";
import InputGender from "./inputGender";
import InputWeight from "./inputWeightRange";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function SearchFighters() {
  const history = useHistory();
  const  dispatch = useDispatch();

  const handleNext = () => {
    console.log("CLICKED");
    history.push("/result");
    dispatch({
      type: 'GET_ALL_MEMBERS'
    })
  };

  return (
    <>
      <h1>Search Fighters</h1>
      <div className="container">
        <InputGender />

        <InputWeight />

        <InputRegion />

        <InputFights />

        <InputAge />

        <button onClick={handleNext} className="nextBtn">
          NEXT
        </button>
      </div>
    </>
  );
}

export default SearchFighters;
