import styled from "styled-components";

export const FormSubmissionResult = styled.div`
  font-size: 1.6rem;
  margin-bottom: 3.25rem;
  color: ${({ success }) => (success ? "var(--success-color)" : "var(--error-color)")};
`;
