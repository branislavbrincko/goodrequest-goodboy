import React from "react";
import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);
  return <div className="input-error-message"> {errors[fieldName]} </div>;
}

function UserInfoSubform() {
  const { firstName, lastName, email, phone, phonePrefix } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange, handleInputBlur } = useForm();

  const getErrorClass = (fieldName) => (errors[fieldName] ? " input-error" : "");

  const handlePhoneInputChange = (e) => {
    // input is of type string, but we don't want to allow user to enter any character
    const inputValue = e.target.value;
    const onlyNumbersAndEmptyCharacter = new RegExp("^[0-9 ]*$").test(inputValue);
    if (!onlyNumbersAndEmptyCharacter) e.target.value = phone;
    handleInputChange(e);
  };

  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="firstName" className="input-label">
          Meno
        </label>
        <input
          className={"input" + getErrorClass("firstName")}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Zadajte Vaše meno"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={firstName}
        ></input>
      </div>
      <InputErrorMessage fieldName="firstName" />
      <div className="input-wrapper">
        <label htmlFor="lastName" className="input-label">
          Priezvisko
        </label>
        <input
          className={"input" + getErrorClass("lastName")}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Zadajte Vaše priezvisko"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={lastName}
        ></input>
      </div>
      <InputErrorMessage fieldName="lastName" />
      <div className="input-wrapper">
        <label htmlFor="email" className="input-label">
          E-mailová adresa
        </label>
        <input
          className={"input" + getErrorClass("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Zadajte Váš e-mail"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={email}
        ></input>
      </div>
      <InputErrorMessage fieldName="email" />
      <div className="input-wrapper">
        <select className="input-phone-country-select" name="phonePrefix" id="phonePrefix" onChange={handleInputChange} value={phonePrefix}>
          <option value="+421">🇸🇰 &nbsp; +421</option>
          <option value="+420">🇨🇿 &nbsp; +420</option>
        </select>
        <label htmlFor="phone" className="input-label">
          Telefónne číslo
        </label>
        <input
          className={"input input-phone" + getErrorClass("phone")}
          type="text"
          name="phone"
          id="phone"
          onChange={handlePhoneInputChange}
          onBlur={handleInputBlur}
          value={phone}
        ></input>
      </div>
      <InputErrorMessage fieldName="phone" />
    </div>
  );
}

export default UserInfoSubform;
