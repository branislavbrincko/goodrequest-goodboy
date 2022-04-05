import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

const SelectInput = () => {
  const { shelterID } = useSelector((state) => state.form);
  const { shelters } = useSelector((state) => state.global);
  const { handleInputChange } = useForm({ shouldParseToInt: true });

  return (
    <>
      <label htmlFor="shelterID" className="input-label">
        Útulok
      </label>
      <select className="input" name="shelterID" id="shelterID" placeholder="Vyberte útulok zo zoznamu" value={shelterID} onChange={handleInputChange}>
        <option disabled value="0">
          Vyberte útulok zo zoznamu
        </option>
        {shelters.map((shelter) => (
          <option key={shelter.id} value={shelter.id}>
            {shelter.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
