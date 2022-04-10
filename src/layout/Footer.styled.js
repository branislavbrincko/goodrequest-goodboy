import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const FooterStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  margin-bottom: 10rem;
`;

export const FooterColumn = styled.section`
  width: 25%;
  padding: 3rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media only screen and (max-width: ${breakpoints.desktop}) {
    & {
      width: 50%;
    }
  }

  @media only screen and (max-width: ${breakpoints.laptop}) {
    & {
      width: 100%;
      padding: 1.5rem;
    }
  }
`;

export const FooterColumnTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  font-weight: 800;
`;

export const FooterColumnContent = styled.div`
  color: var(--secondary-text-color);
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 0.8rem;
`;

export const FooterLink = styled.a`
  border: 1px solid transparent;
  transition: all var(--transition-base-ms);

  &:focus {
    outline: none;
    color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
  }
`;

export const LogoImages = styled.div`
  display: flex;

  & > *:first-child {
    width: 5rem;
    height: 5rem;
  }

  & > *:last-child {
    width: 15rem;
    height: 3.5rem;
  }
`;
