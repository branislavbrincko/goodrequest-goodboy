import { useState } from "react";
import { ReactComponent as WalletIcon } from "../images/WalletIcon.svg";
import { ReactComponent as PawIcon } from "../images/PawIcon.svg";

function DoubleButton() {
  const [selectedBtnId, setSelectedBtnId] = useState(0);

  const getActiveClass = (btnId) => (selectedBtnId == btnId ? "active" : "");

  return (
    <div className="double-button-container">
      <button type="button" className={"double-button " + getActiveClass(0)} onClick={() => setSelectedBtnId(0)}>
        <WalletIcon className="double-button-icon" />
        <span>Chcem finančne prispieť konkrétnemu útulku</span>
      </button>
      <button type="button" className={"double-button " + getActiveClass(1)} onClick={() => setSelectedBtnId(1)}>
        <PawIcon className="double-button-icon" />
        <span>Chcem finančne prispieť celej nadácii</span>
      </button>
    </div>
  );
}

export default DoubleButton;
