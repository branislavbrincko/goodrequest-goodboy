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

export const IconsContainer = styled.div`
  padding-top: 0.6rem;
`;

export const langInputStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    boxShadow: "none",
    fontSize: "1.4rem",
    borderRadius: "0.4rem",
    backgroundColor: "transparent",
    borderColor: isFocused ? "var(--primary-color)" : "transparent",
    "&:hover": { borderColor: "var(--primary-color)" },
    minHeight: "0",
  }),
  valueContainer: (styles) => ({ ...styles, paddingRight: "0" }),
  singleValue: (styles) => ({ ...styles, color: "var(--secondary-text-color)" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "1.4rem",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
    textAlign: "center",
  }),
};
