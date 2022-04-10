import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ReactComponent as FacebookIcon } from "../images/facebook.svg";
import { ReactComponent as InstragramIcon } from "../images/instagram.svg";
import { setCurrentLang } from "../redux/globalSlice";
import { NavbarStyled, IconsContainer, langInputStyles } from "./Navbar.styled";

const langOptions = [
  { value: "sk", label: "sk" },
  { value: "cz", label: "cz" },
];

function Navbar() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentLang } = useSelector((state) => state.global);

  const updateLang = ({ value }) => {
    dispatch(setCurrentLang(value));
  };

  const currentLangOption = langOptions.find((opt) => opt.value === currentLang);

  return (
    <NavbarStyled>
      <span>{t("FoundationGoodBoy")}</span>
      <div style={{ display: "flex", alignItem: "center" }}>
        <Select
          options={langOptions}
          components={{ IndicatorSeparator: () => null }}
          isSearchable={false}
          styles={langInputStyles}
          onChange={updateLang}
          value={currentLangOption}
        />
        <IconsContainer>
          <a href="#">
            <FacebookIcon className="navbar-icon" width="24" height="24" />
          </a>
          <a href="#">
            <InstragramIcon className="navbar-icon" width="24" height="24" />
          </a>
        </IconsContainer>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
