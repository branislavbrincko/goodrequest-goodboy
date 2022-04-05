import "./App.css";
import DoubleButton from "./components/DoubleButton";
import Footer from "./components/Footer";
import RowButtons from "./components/RowButtons";
import InputSectionInfo from "./components/InputSectionInfo";
import dogImage from "./images/dog-image.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className="main-heading">Vyberte si možnosť, ako chcete prispieť</h1>
            <form>
              <DoubleButton />
              <InputSectionInfo title="O projekte" additionalText="Nepovinné" />
              <div className="input-wrapper">
                {/* FAKE SELECT INPUT */}
                <div style={{ height: "50px", border: "1px solid lightgrey", borderRadius: "8px" }}></div>
              </div>
              <InputSectionInfo title="Suma, ktorou chcem prispieť" />
              <div className="input-wrapper">
                <RowButtons />
              </div>
              <div className="action-buttons-container">
                <button className="action-button action-button-back" type="button">
                  Späť
                </button>
                <button className="action-button action-button-next" type="button">
                  Pokračovať
                </button>
              </div>
            </form>
          </div>
          <div className="column">
            <img src={dogImage} alt="dog image" />;
          </div>
        </div>
        <div className="divider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
