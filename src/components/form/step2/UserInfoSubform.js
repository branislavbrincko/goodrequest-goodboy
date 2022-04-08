import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { updateForm } from "../../../redux/formSlice";
import InputErrorMessage from "../../InputErrorMessage";
import Select from "react-select";
import classNames from "classnames";

const phonePrefixInputStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    boxShadow: "none",
    fontSize: "1.6rem",
    borderRadius: "0.4rem",
    backgroundColor: "transparent",
    borderColor: isFocused ? "var(--primary-color)" : "transparent",
    "&:hover": { borderColor: "var(--primary-color)" },
    minHeight: "0",
    height: "100%",
  }),
  placeholder: (styles) => ({ ...styles, color: "var(--primary-text-color)" }),
  valueContainer: (styles) => ({ ...styles, padding: "0" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "1.6rem",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
  }),
};

const phonePrefixInputOptions = [
  { value: "+421", label: "🇸🇰 +421" },
  { value: "+420", label: "🇨🇿 +420" },
];

function UserInfoSubform() {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phone, phonePrefix } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange, handleInputBlur, handleInputChangeFromNameAndValue } = useForm();

  const handlePhoneInputChange = (e) => {
    // input is of type string, but we don't want to allow user to enter any character
    const inputValue = e.target.value;
    const onlyNumbersAndEmptyCharacter = new RegExp("^[0-9 ]*$").test(inputValue);
    if (!onlyNumbersAndEmptyCharacter) e.target.value = phone;
    handleInputChange(e);
  };
  const handlePhonePrefixInpupChange = ({ value }) => handleInputChangeFromNameAndValue("phonePrefix", value);
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
          onBlur={handleInputBlur}
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
          onBlur={handleInputBlur}
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
          onBlur={handleInputBlur}
          value={email}
        ></input>
      </div>
      <InputErrorMessage fieldName="email" />
      <div className="input-wrapper">
        <div className="country-select-wrapper">
          <Select
            options={phonePrefixInputOptions}
            components={{ IndicatorSeparator: () => null, DropdownIndicator: () => null }}
            styles={phonePrefixInputStyles}
            onChange={handlePhonePrefixInpupChange}
            defaultValue={phonePrefixInputOptions[0]}
          />
        </div>
        <label htmlFor="phone" className="input-label">
          Telefónne číslo
        </label>
        <input
          className={phoneInputClasses}
          type="text"
          name="phone"
          id="phone"
          onChange={handlePhoneInputChange}
          onBlur={handleInputBlur}
          value={phone}
        ></input>
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
