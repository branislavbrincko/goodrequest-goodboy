import { useTranslation } from "react-i18next";
import logoPart1 from "../images/logo-part-1.png";
import logoPart2 from "../images/logo-part-2.png";
import {
  FooterColumn,
  FooterColumnContent,
  FooterColumnTitle,
  FooterLink,
  FooterLinkItem,
  FooterStyled,
  LogoImages,
} from "./Footer.styled";

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterStyled>
      <FooterColumn>
        <LogoImages>
          <img src={logoPart1} alt="logo image"></img>
          <img src={logoPart2} alt="logo text"></img>
        </LogoImages>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{t("FoundationGoodBoy")}</FooterColumnTitle>
        <FooterColumnContent>
          <ul>
            <FooterLinkItem>
              <FooterLink href="#">{t("AboutProject")}</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#">{t("HowTo")}</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#">{t("Kontakt")}</FooterLink>
            </FooterLinkItem>
          </ul>
        </FooterColumnContent>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{t("FoundationGoodBoy")}</FooterColumnTitle>
        <FooterColumnContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
        </FooterColumnContent>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{t("FoundationGoodBoy")}</FooterColumnTitle>
        <FooterColumnContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
        </FooterColumnContent>
      </FooterColumn>
    </FooterStyled>
  );
}

export default Footer;
