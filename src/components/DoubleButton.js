import { ReactComponent as WalletIcon } from "../images/WalletIcon.svg";
import { ReactComponent as PawIcon } from "../images/PawIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store";
import classNames from "classnames";

function DoubleButton() {
  const { useShelterID } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleClick = (btnId) => {
    const payload = { useShelterID: btnId === 0 };
    dispatch(updateForm(payload));
  };

  const classesButton1 = classNames("double-button", { active: useShelterID });
  const classesButton2 = classNames("double-button", { active: !useShelterID });

  return (
    <div className="double-button-container">
      <button type="button" className={classesButton1} onClick={() => handleClick(0)}>
        <WalletIcon className="double-button-icon" />
        <span>Chcem finančne prispieť konkrétnemu útulku</span>
      </button>
      <button type="button" className={classesButton2} onClick={() => handleClick(1)}>
        <PawIcon className="double-button-icon" />
        <span>Chcem finančne prispieť celej nadácii</span>
      </button>
    </div>
  );
}

export default DoubleButton;
