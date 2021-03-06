import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 30rem;
`;

export const LoaderStyled = styled.div`
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid var(--primary-color);
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
