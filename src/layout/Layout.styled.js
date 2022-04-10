import styled from "styled-components";
import { breakpoints } from "../App.styled";

export const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  transition: width var(--transition-base-ms);
  padding-top: 9rem;

  @media only screen and (max-width: ${breakpoints.laptop}) {
    & {
      width: 95%;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--light-grey);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
