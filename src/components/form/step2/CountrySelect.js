import Select from "react-select";
import flagSk from "../../../images/flag-sk.svg";
import flagCz from "../../../images/flag-cz.svg";
import useForm from "../../../hooks/useForm";

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
  }),
  placeholder: (styles) => ({ ...styles, color: "var(--primary-text-color)" }),
  valueContainer: (styles) => ({ ...styles, padding: "0" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "1.6rem",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
    width: "9.5rem",
  }),
  menu: (styles) => ({ ...styles, width: "9.5rem" }),
};

const Label = ({ flag, code }) => (
  <div className="country-select-label">
    <img src={flag} />
    <span style={{ paddingLeft: "3px" }}>{code}</span>
  </div>
);

const phonePrefixInputOptions = [
  {
    value: "+421",
    label: <Label flag={flagSk} code="+421" />,
    flag: flagSk,
  },
  {
    value: "+420",
    label: <Label flag={flagCz} code="+420" />,
    flag: flagCz,
  },
];

function CountrySelect() {
  const { handleInputChange } = useForm();
  const handlePhonePrefixInpupChange = ({ value }) => handleInputChange(null, "phonePrefix", value);

  return (
    <div className="country-select-wrapper">
      <Select
        options={phonePrefixInputOptions}
        components={{ IndicatorSeparator: () => null, DropdownIndicator: () => null }}
        styles={phonePrefixInputStyles}
        onChange={handlePhonePrefixInpupChange}
        defaultValue={phonePrefixInputOptions[0]}
        isSearchable={false}
      />
    </div>
  );
}

export default CountrySelect;
