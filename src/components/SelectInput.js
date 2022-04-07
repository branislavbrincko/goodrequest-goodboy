import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { InputErrorMessage } from "./UserInfoSubform";

const SelectInput = () => {
  const { shelterID } = useSelector((state) => state.form);
  const { shelters } = useSelector((state) => state.global);
  const { handleInputChange, handleInputBlur } = useForm({ shouldParseToInt: true });

  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="shelterID" className="input-label">
          Útulok
        </label>
        <select
          className="input"
          name="shelterID"
          id="shelterID"
          placeholder="Vyberte útulok zo zoznamu"
          value={shelterID}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        >
          <option disabled value="0">
            Vyberte útulok zo zoznamu
          </option>
          {shelters.map((shelter) => (
            <option key={shelter.id} value={shelter.id}>
              {shelter.name}
            </option>
          ))}
        </select>
      </div>
      <InputErrorMessage fieldName="shelterID" />
    </div>
  );
};

export default SelectInput;
