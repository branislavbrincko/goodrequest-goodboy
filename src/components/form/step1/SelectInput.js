import { useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import InputErrorMessage from "../../InputErrorMessage";
import Select from "react-select";

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    height: "70px",
    paddingTop: "24px",
    paddingLeft: "20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    borderColor: isFocused ? "var(--primary-color)" : "var(--light-grey)",
    "&:hover": { borderColor: "var(--primary-color)" },
    boxShadow: "none",
  }),
  dropdownIndicator: (styles) => ({ ...styles, marginTop: "-25px" }),
  placeholder: (styles) => ({ ...styles, color: "var(--primary-text-color)" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "16px",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
  }),
};

const labelStyles = { position: "absolute", zIndex: 5, left: "31px", top: "15px", fontSize: "16px", color: "black", fontWeight: "bold" };

const SelectInput = () => {
  const { shelters } = useSelector((state) => state.global);
  const { handleInputChangeFromNameAndValue } = useForm({ shouldParseToInt: true });

  const options = shelters.map((shelter) => ({ value: shelter.id, label: shelter.name }));
  const handleChange = ({ value }) => handleInputChangeFromNameAndValue("shelterID", value);

  return (
    <div style={{ position: "relative", marginBottom: "40px" }}>
      <div className="input-wrapper">
        <label htmlFor="shelterID" style={labelStyles}>
          Útulok
        </label>
        <Select
          id="shelterID"
          options={options}
          placeholder="Vyberte útulok zo zoznamu"
          styles={colourStyles}
          components={{ IndicatorSeparator: () => null }}
          onChange={handleChange}
        />
      </div>
      <InputErrorMessage fieldName="shelterID" />
    </div>
  );
};

export default SelectInput;