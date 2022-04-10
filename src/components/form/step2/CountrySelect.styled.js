import styled from "styled-components";
import { breakpoints } from "../../../App.styled";

export const SelectWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  height: 3rem;
  left: 2rem;

  & img {
    width: 2.5rem;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    & {
      bottom: 0.4rem;
    }

    & img {
      width: 2rem;
    }
  }

  @-moz-document url-prefix() and @media only screen and (max-width: ${breakpoints.tablet}) {
    & {
      bottom: 0.3rem;
    }
  }
`;

export const phonePrefixInputStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    cursor: "pointer",
    boxShadow: "none",
    fontSize: "1.6rem",
    borderRadius: "0.4rem",
    backgroundColor: "transparent",
    borderColor: isFocused ? "var(--primary-color)" : "transparent",
    "&:hover": { borderColor: "var(--primary-color)" },
    minHeight: "0",
  }),
  placeholder: (styles) => ({ ...styles, color: "var(--primary-text-color)" }),
  valueContainer: (styles) => ({ ...styles, padding: "0" }),
  singleValue: (styles) => ({ ...styles, color: "var(--primary-text-color)" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: "1.6rem",
    backgroundColor: isDisabled ? undefined : isSelected ? "var(--primary-color)" : isFocused ? "var(--light-grey)" : undefined,
    color: isDisabled ? "var(--lightgrey)" : isSelected ? "white" : data.color,
    cursor: "pointer",
    width: "9.5rem",
  }),
  menu: (styles) => ({ ...styles, width: "9.5rem" }),
};
