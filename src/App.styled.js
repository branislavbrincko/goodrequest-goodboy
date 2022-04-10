import styled from "styled-components";

export const breakpoints = {
  mobile: "320px",
  tablet: "481px",
  laptop: "769px",
  desktop: "1025px",
  extraLarge: "1201px",
};

export const MainRow = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  &:first-child {
    flex-grow: 1;
    padding-right: 3rem;
  }

  @media only screen and (max-width: ${breakpoints.desktop}) {
    &:first-child {
      padding-right: 0rem;
    }

    &:last-child {
      display: none;
    }
  }
`;
