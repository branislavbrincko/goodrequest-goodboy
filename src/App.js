import "./App.css";
import DoubleButton from "./components/DoubleButton";
import Footer from "./components/Footer";
import RowButtons from "./components/RowButtons";
import InputSectionInfo from "./components/InputSectionInfo";
import dogImage from "./images/dog-image.png";
import { useState } from "react";

const NUMBER_OF_PAGES = 2;

function App() {
  const [currentPageId, setCurrentPageId] = useState(0);

  const getHiddenClass = (pageId) => (pageId !== currentPageId ? "page-hidden" : "");

  const goToPrevPage = () => {
    if (currentPageId > 0) {
      setCurrentPageId(currentPageId - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPageId < NUMBER_OF_PAGES - 1) {
      setCurrentPageId(currentPageId + 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
            <form>
              <div className={"page " + getHiddenClass(0)} id="page-1">
                <h1 className="main-heading">Vyberte si možnosť, ako chcete prispieť</h1>
                <DoubleButton />
                <InputSectionInfo title="O projekte" additionalText="Nepovinné" />
                <div className="input-wrapper">
                  <div style={{ height: "50px", border: "1px solid lightgrey", borderRadius: "8px" }}></div>
                </div>
                <InputSectionInfo title="Suma, ktorou chcem prispieť" />
                <div className="input-wrapper">
                  <RowButtons />
                </div>
              </div>
              <div className={"page " + getHiddenClass(1)} id="page-2">
                <h1 className="main-heading">Potrebujeme od Vás zopár informácií</h1>
                <InputSectionInfo title="O vás" />
                <div className="input-wrapper">
                  <label htmlFor="firstname" className="input-label">
                    Meno
                  </label>
                  <input className="input" type="text" name="firstname" id="firstname" placeholder="Zadajte Vaše meno"></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="surname" className="input-label">
                    Priezvisko
                  </label>
                  <input className="input" type="text" name="surname" id="surname" placeholder="Zadajte Vaše priezvisko"></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="input-label">
                    E-mailová adresa
                  </label>
                  <input className="input" type="email" name="email" id="email" placeholder="Zadajte Váš e-mail"></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="number" className="input-label">
                    Telefónne číslo
                  </label>
                  <input className="input" type="number" name="number" id="number" placeholder="+421"></input>
                </div>
              </div>
              <div className="action-buttons-container">
                <button className="action-button action-button-back" type="button" onClick={goToPrevPage}>
                  Späť
                </button>
                <button className="action-button action-button-next" type="button" onClick={goToNextPage}>
                  Pokračovať
                </button>
              </div>
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
