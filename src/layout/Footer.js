import logoPart1 from "../images/logo-part-1.png";
import logoPart2 from "../images/logo-part-2.png";
import { FooterColumn, FooterColumnContent, FooterColumnTitle, FooterLink, FooterLinkItem, LogoImages, StyledFooter } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <FooterColumn>
        <LogoImages>
          <img src={logoPart1} alt="logo image"></img>
          <img src={logoPart2} alt="logo text"></img>
        </LogoImages>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>Nadácia Good Boy</FooterColumnTitle>
        <FooterColumnContent>
          <ul>
            <FooterLinkItem>
              <FooterLink href="#">O projekte</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#">Ako na to</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#">Kontakt</FooterLink>
            </FooterLinkItem>
          </ul>
        </FooterColumnContent>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>Nadácia Good Boy</FooterColumnTitle>
        <FooterColumnContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</FooterColumnContent>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>Nadácia Good Boy</FooterColumnTitle>
        <FooterColumnContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</FooterColumnContent>
      </FooterColumn>
    </StyledFooter>
  );
}

export default Footer;
