import { useSelector } from "react-redux";
import Select from "react-select";
import useForm from "../../../hooks/useForm";
import flagCz from "../../../images/flag-cz.svg";
import flagSk from "../../../images/flag-sk.svg";
import { SelectWrapper, phonePrefixInputStyles } from "./CountrySelect.styled";

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
  const { phonePrefix } = useSelector((state) => state.form);

  const currentOption = phonePrefixInputOptions.find((opt) => opt.value === phonePrefix);

  return (
    <SelectWrapper>
      <Select
        options={phonePrefixInputOptions}
        components={{ IndicatorSeparator: () => null, DropdownIndicator: () => null }}
        styles={phonePrefixInputStyles}
        onChange={handlePhonePrefixInpupChange}
        isSearchable={false}
        value={currentOption}
      />
    </SelectWrapper>
  );
}

export default CountrySelect;
