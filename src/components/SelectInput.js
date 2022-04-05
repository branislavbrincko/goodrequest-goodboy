import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";

const SelectInput = () => {
  const { shelterID } = useSelector((state) => state.form);
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
        <option value="1">Žilinský útulok o.z.</option>
        <option value="2">HAFKÁČI</option>
        <option value="3">Cerberus</option>
      </select>
    </>
  );
};

export default SelectInput;
