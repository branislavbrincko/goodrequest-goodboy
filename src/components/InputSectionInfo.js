import styled from "styled-components";

const InputSectionInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const InputSectionTitle = styled.h2`
  font-size: 1.6rem;
  color: var(--black);
  font-weight: 800;
`;

const InputSectionAdditionalText = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
`;

function InputSectionInfo({ title, required = true }) {
  return (
    <InputSectionInfoStyled>
      <InputSectionTitle>{title}</InputSectionTitle>
      <InputSectionAdditionalText>{required ? "*Povinné pole" : ""}</InputSectionAdditionalText>
    </InputSectionInfoStyled>
  );
}

export default InputSectionInfo;
