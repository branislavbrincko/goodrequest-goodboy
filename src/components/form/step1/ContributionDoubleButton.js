import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PawIcon } from "../../../images/PawIcon.svg";
import { ReactComponent as WalletIcon } from "../../../images/WalletIcon.svg";
import { clearErrorField, updateForm } from "../../../redux/formSlice";
import { DoubleButtonContainer, DoubleButtonStyled } from "./ContributionDoubleButton.styled";

function DoubleButton() {
  const { useShelterID } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = (btnId) => {
    const payload = { useShelterID: btnId === 0 };
    dispatch(clearErrorField("shelterID"));
    dispatch(updateForm(payload));
  };

  return (
    <DoubleButtonContainer>
      <DoubleButtonStyled type="button" onClick={() => handleClick(0)} active={useShelterID}>
        <WalletIcon className="double-button-icon" />
        <span>{t("ContributeToShelter")}</span>
      </DoubleButtonStyled>
      <DoubleButtonStyled type="button" onClick={() => handleClick(1)} active={!useShelterID}>
        <PawIcon className="double-button-icon" />
        <span>{t("ContributeToOrganisation")}</span>
      </DoubleButtonStyled>
    </DoubleButtonContainer>
  );
}

export default DoubleButton;
