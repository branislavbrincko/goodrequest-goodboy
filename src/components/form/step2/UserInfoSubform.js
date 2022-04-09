import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { updateForm } from "../../../redux/formSlice";
import InputErrorMessage from "../../InputErrorMessage";
import CountrySelect from "./CountrySelect";

function UserInfoSubform() {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phone, phonePrefix } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange } = useForm();

  const handlePhoneInputChange = (e) => {
    // input is of type string, but we don't want to allow user to enter any character
    const inputValue = e.target.value;
    const onlyNumbersAndEmptyCharacter = new RegExp("^[0-9 ]*$").test(inputValue);
    if (!onlyNumbersAndEmptyCharacter) e.target.value = phone;
    handleInputChange(e);
  };
  const getClasses = (fieldName) => classNames("input", { "input-error": errors[fieldName] });
  const phoneInputClasses = classNames("input", "input-phone", { "input-error": errors["phone"] });

  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="firstName" className="input-label">
          Meno*
        </label>
        <input
          className={getClasses("firstName")}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Zadajte Vaše meno"
          onChange={handleInputChange}
          value={firstName}
        ></input>
      </div>
      <InputErrorMessage fieldName="firstName" />
      <div className="input-wrapper">
        <label htmlFor="lastName" className="input-label">
          Priezvisko*
        </label>
        <input
          className={getClasses("lastName")}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Zadajte Vaše priezvisko"
          onChange={handleInputChange}
          value={lastName}
        ></input>
      </div>
      <InputErrorMessage fieldName="lastName" />
      <div className="input-wrapper">
        <label htmlFor="email" className="input-label">
          E-mailová adresa*
        </label>
        <input
          className={getClasses("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Zadajte Váš e-mail"
          onChange={handleInputChange}
          value={email}
        ></input>
      </div>
      <InputErrorMessage fieldName="email" />
      <div className="input-wrapper">
        <CountrySelect />
        <label htmlFor="phone" className="input-label">
          Telefónne číslo
        </label>
        <input className={phoneInputClasses} type="text" name="phone" id="phone" onChange={handlePhoneInputChange} value={phone}></input>
      </div>
      <InputErrorMessage fieldName="phone" />
      <button
        onClick={() => {
          dispatch(updateForm({ firstName: "jozko", lastName: "mrkva", email: "jozka@mrkva.com", phone: "123 456 789" }));
        }}
        type="button"
        style={{ position: "absolute", backgroundColor: "white", padding: "5px", border: "1px solid lightgrey", borderRadius: "8px" }}
      >
        Vyplniť test údaje
      </button>
    </div>
  );
}

export default UserInfoSubform;
