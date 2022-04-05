import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../redux";

function UserInfoSubform() {
  const { firstName, lastName, email, phone } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const payload = { [e.target.id]: e.target.value };
    dispatch(updateForm(payload));
  };

  return (
    <div>
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
        <input className="input" type="email" name="email" id="email" placeholder="Zadajte Váš e-mail" value={email} onChange={handleInputChange}></input>
      </div>
      <div className="input-wrapper">
        <label htmlFor="phone" className="input-label">
          Telefónne číslo
        </label>
        <input className="input" type="number" name="phone" id="phone" placeholder="+421" value={phone} onChange={handleInputChange}></input>
      </div>
    </div>
  );
}

export default UserInfoSubform;
