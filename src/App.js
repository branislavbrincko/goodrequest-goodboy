import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ActionButtons from "./components/ActionButtons";
import Checkbox from "./components/Checkbox";
import DoubleButton from "./components/DoubleButton";
import Footer from "./components/Footer";
import InputSectionInfo from "./components/InputSectionInfo";
import RowButtons from "./components/RowButtons";
import SelectInput from "./components/SelectInput";
import Summary from "./components/Summary";
import UserInfoSubform from "./components/UserInfoSubform";
import useForm from "./hooks/useForm";
import dogImage from "./images/dog-image.png";
import { fetchShelters } from "./redux";

function App() {
  const dispatch = useDispatch();
  const { handleInputChange } = useForm();

  // Fetch data from API
  useEffect(() => {
    dispatch(fetchShelters());
  }, [dispatch]);

  // Data from global state
  const { useShelterID, consent } = useSelector((state) => state.form);

  // Local state
  const [currentStepId, setCurrentStepId] = useState(0);

  // Helpers and handlers
  const getActiveClass = (stepId) => (stepId === currentStepId ? "step-active" : "");

  // Component
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
            <form className="form">
              <div className={"step " + getActiveClass(0)} id="step-1">
                <h1 className="main-heading">Vyberte si možnosť, ako chcete prispieť</h1>
                <DoubleButton />
                <InputSectionInfo title="O projekte" required={useShelterID} />
                <div className="input-wrapper">
                  <SelectInput />
                </div>
                <InputSectionInfo title="Suma, ktorou chcem prispieť" />
                <div className="input-wrapper">
                  <RowButtons />
                </div>
              </div>
              <div className={"step " + getActiveClass(1)} id="step-2">
                <h1 className="main-heading">Potrebujeme od Vás zopár informácií</h1>
                <InputSectionInfo title="O vás" />
                <UserInfoSubform />
              </div>
              <div className={"step " + getActiveClass(2)} id="step-3">
                <h1 className="main-heading">Skontrolujte si zadané údaje</h1>
                <Summary />
                <div className="consent-container">
                  <Checkbox name="consent" label="Súhlasím so spracovaním mojich osobných údajov" checked={consent} onChange={handleInputChange} />
                </div>
              </div>
              <ActionButtons currentStepId={currentStepId} setCurrentStepId={setCurrentStepId} />
            </form>
          </div>
          <div className="column">
            <img src={dogImage} alt="dog image" />
          </div>
        </div>
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
