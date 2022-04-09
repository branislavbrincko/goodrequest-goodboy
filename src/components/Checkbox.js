import React from "react";
import "./checkbox.css";

function Checkbox({ name, label, checked, onChange }) {
  return (
    <label className="custom-checkbox" htmlFor={name}>
      <input className="checkbox-input" type="checkbox" name={name} id={name} checked={checked} onChange={onChange} />
      <div className="checkbox-box">
        <svg className="checkobox-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" height="50%" width="50%" viewBox="0 0 270 270">
          <path d="M 30,180 90,240 250,30" />
        </svg>
      </div>
      {label}
    </label>
  );
}

export default Checkbox;
