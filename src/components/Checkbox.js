import React from "react";
import { CheckboxInput, CheckboxStyled } from "./Checkbox.styled";

function Checkbox({ name, label, checked, onChange }) {
  return (
    <CheckboxStyled htmlFor={name}>
      <CheckboxInput type="checkbox" name={name} id={name} checked={checked} onChange={onChange} />
      <div className="checkbox-box">
        <svg className="checkobox-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" height="50%" width="50%" viewBox="0 0 270 270">
          <path d="M 30,180 90,240 250,30" />
        </svg>
      </div>
      {label}
    </CheckboxStyled>
  );
}

export default Checkbox;
