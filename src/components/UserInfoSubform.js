import React from "react";
import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

function InputErrorMessage({ fieldName }) {
  const errors = useSelector((state) => state.form.errors);
  return <div className="input-error-message"> {errors[fieldName]} </div>;
}

function UserInfoSubform() {
  const { firstName, lastName, email, phone } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange } = useForm();

  const getErrorClass = (fieldName) => (errors[fieldName] ? " input-error" : "");

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
          value={lastName}
          onChange={handleInputChange}
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
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      <InputErrorMessage fieldName="email" />
      <div className="input-wrapper">
        <label htmlFor="phone" className="input-label">
          Telefónne číslo
        </label>
        <input
          className={"input" + getErrorClass("phone")}
          type="number"
          name="phone"
          id="phone"
          placeholder="+421"
          value={phone}
          onChange={handleInputChange}
        ></input>
      </div>
      <InputErrorMessage fieldName="phone" />
    </div>
  );
}

export default UserInfoSubform;
