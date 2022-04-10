import styled from "styled-components";

export const NavbarStyled = styled.nav`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding-left: 10%;
  padding-right: 10%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);

  & a {
    margin-left: 0.8rem;
    border: 1px solid transparent;
    outline: none;
  }

  & a .navbar-icon {
    fill: var(--secondary-text-color);
    transition: all var(--transition-base-ms);
  }

  & a:hover .navbar-icon,
  & a:focus .navbar-icon {
    fill: var(--primary-color);
    outline: none;
  }
`;
