import { useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import InputErrorMessage from "../../InputErrorMessage";
import { InputWrapper } from "../../InputWrapper.styled";
import CountrySelect from "./CountrySelect";
import { InputLabelStyled, InputStyled } from "./UserInfoInputs.styled";

function UserInfoSubform() {
  const { firstName, lastName, email, phone } = useSelector((state) => state.form);
  const errors = useSelector((state) => state.form.errors);
  const { handleInputChange, handlePhoneInputChange } = useForm();

  return (
    <div>
      <InputWrapper>
        <InputLabelStyled htmlFor="firstName">Meno*</InputLabelStyled>
        <InputStyled
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Zadajte Vaše meno"
          onChange={handleInputChange}
          value={firstName}
          error={errors["firstName"]}
        ></InputStyled>
      </InputWrapper>
      <InputErrorMessage fieldName="firstName" />
      <InputWrapper>
        <InputLabelStyled htmlFor="lastName">Priezvisko*</InputLabelStyled>
        <InputStyled
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Zadajte Vaše priezvisko"
          onChange={handleInputChange}
          value={lastName}
          error={errors["lastName"]}
        ></InputStyled>
      </InputWrapper>
      <InputErrorMessage fieldName="lastName" />
      <InputWrapper>
        <InputLabelStyled htmlFor="email">E-mailová adresa*</InputLabelStyled>
        <InputStyled
          type="email"
          name="email"
          id="email"
          placeholder="Zadajte Váš e-mail"
          onChange={handleInputChange}
          value={email}
          error={errors["email"]}
        ></InputStyled>
      </InputWrapper>
      <InputErrorMessage fieldName="email" />
      <InputWrapper>
        <CountrySelect />
        <InputLabelStyled htmlFor="phone">Telefónne číslo</InputLabelStyled>
        <InputStyled
          type="text"
          name="phone"
          id="phone"
          onChange={handlePhoneInputChange}
          value={phone}
          error={errors["phone"]}
          isPhone
        ></InputStyled>
      </InputWrapper>
      <InputErrorMessage fieldName="phone" />
    </div>
  );
}

export default UserInfoSubform;
