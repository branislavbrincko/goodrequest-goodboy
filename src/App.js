import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import DoubleButton from "./components/DoubleButton";
import Footer from "./components/Footer";
import InputSectionInfo from "./components/InputSectionInfo";
import RowButtons from "./components/RowButtons";
import dogImage from "./images/dog-image.png";
import { updateForm } from "./redux";

const NUMBER_OF_PAGES = 3;

function App() {
  const { firstName, lastName, email, phone, value, shelterId, useShelterId } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [currentPageId, setCurrentPageId] = useState(0);

  // Helpers and handlers
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

  const handleInputChange = (e) => {
    const payload = { [e.target.id]: e.target.value };
    dispatch(updateForm(payload));
  };

  // Component
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
                  <label htmlFor="firstName" className="input-label">
                    Meno
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Zadajte Vaše meno"
                    onChange={handleInputChange}
                    value={firstName}
                  ></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="lastName" className="input-label">
                    Priezvisko
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Zadajte Vaše priezvisko"
                    value={lastName}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="input-label">
                    E-mailová adresa
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Zadajte Váš e-mail"
                    value={email}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">
                    Telefónne číslo
                  </label>
                  <input className="input" type="number" name="phone" id="phone" placeholder="+421" value={phone} onChange={handleInputChange}></input>
                </div>
              </div>
              <div className={"page " + getHiddenClass(2)} id="page-2">
                <h1 className="main-heading">Sumar</h1>
                <h2>firstName: {firstName}</h2>
                <h2>lastName: {lastName}</h2>
                <h2>email: {email}</h2>
                <h2>phone: {phone}</h2>
                <h2>value: {value}</h2>
                <h2>shelterId: {shelterId}</h2>
                <h2>useShelterId: {`${useShelterId}`}</h2>
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
