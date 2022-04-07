import { ReactComponent as WalletIcon } from "../images/WalletIcon.svg";
import { ReactComponent as PawIcon } from "../images/PawIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store";

function DoubleButton() {
  const { useShelterID } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const getActiveClass = (btnId) => {
    if (btnId === 0) return useShelterID ? "active" : "";
    if (btnId === 1) return !useShelterID ? "active" : "";
  };

  const handleClick = (btnId) => {
    const payload = { useShelterID: btnId === 0 };
    dispatch(updateForm(payload));
  };

  return (
    <div className="double-button-container">
      <button type="button" className={"double-button " + getActiveClass(0)} onClick={() => handleClick(0)}>
        <WalletIcon className="double-button-icon" />
        <span>Chcem finančne prispieť konkrétnemu útulku</span>
      </button>
      <button type="button" className={"double-button " + getActiveClass(1)} onClick={() => handleClick(1)}>
        <PawIcon className="double-button-icon" />
        <span>Chcem finančne prispieť celej nadácii</span>
      </button>
    </div>
  );
}

export default DoubleButton;
