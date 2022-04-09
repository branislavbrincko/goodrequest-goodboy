import classNames from "classnames";
import { useSelector } from "react-redux";
import { formatPhoneNumber, onlyPhoneNumberCharacters } from "../../../helpers/phoneNumber";
import useForm from "../../../hooks/useForm";
import InputErrorMessage from "../../InputErrorMessage";
import CountrySelect from "./CountrySelect";

function UserInfoSubform() {
  const { firstName, lastName, email, phone } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange } = useForm();

  const handlePhoneInputChange = (e) => {
    const inputValue = e.target.value;

    // input is of type string, but we don't want to allow user
    // to enter any letters, only numbers and empty character
    const valueOk = onlyPhoneNumberCharacters(inputValue);
    if (!valueOk) return;

    // format number ("123123123" -> "123 123 123")
    e.target.value = formatPhoneNumber(inputValue);
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
    </div>
  );
}

export default UserInfoSubform;
