import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Select from "react-select";
import useForm from "../../../hooks/useForm";
import InputErrorMessage from "../../InputErrorMessage";
import { InputWrapper } from "../../InputWrapper.styled";
import { SelectLabelStyled, shelterSelectInputStyles, ShelterSelectWrapper } from "./ShelterSelect.styled";

const SelectInput = () => {
  const { shelters } = useSelector((state) => state.global);
  const { shelterID } = useSelector((state) => state.form);
  const { handleInputChange } = useForm();
  const { t } = useTranslation();

  const options = shelters.map((shelter) => ({ value: shelter.id, label: shelter.name }));
  const currentShelter = shelters.find((shelter) => shelter.id === shelterID);
  const currentOption = currentShelter ? { value: currentShelter.id, label: currentShelter.name } : null;

  const handleChange = ({ value }) => handleInputChange(null, "shelterID", parseInt(value));

  return (
    <ShelterSelectWrapper>
      <InputWrapper>
        <SelectLabelStyled htmlFor="shelterID">{t("Shelter")}</SelectLabelStyled>
        <Select
          id="shelterID"
          options={options}
          placeholder={t("ChooseShelterFromList")}
          styles={shelterSelectInputStyles}
          components={{ IndicatorSeparator: () => null }}
          onChange={handleChange}
          value={currentOption}
        />
      </InputWrapper>
      <InputErrorMessage fieldName="shelterID" />
    </ShelterSelectWrapper>
  );
};

export default SelectInput;
