import styled from "styled-components";

export const ShelterSelectWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const SelectLabelStyled = styled.label`
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 800;

  position: absolute;
  z-index: 5;
  left: 24px;
  top: 15px;
`;

export const shelterSelectInputStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    height: "7rem",
    paddingTop: "2.4rem",
    paddingLeft: "1.4rem",
    fontSize: "1.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    borderColor: isFocused ? "var(--primary-color)" : "var(--light-grey)",
    "&:hover": { borderColor: "var(--primary-color)" },
    boxShadow: "none",
  }),
  dropdownIndicator: (styles) => ({ ...styles, marginTop: "-2.5rem" }),
  placeholder: (styles) => ({ ...styles, color: "var(--secondary-text-color)" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "1.6rem",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
  }),
};
