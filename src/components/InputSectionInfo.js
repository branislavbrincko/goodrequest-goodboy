import { InputSectionAdditionalText, InputSectionInfoStyled, InputSectionTitle } from "./InputSectionInfo.styled";

function InputSectionInfo({ title, required = true }) {
  return (
    <InputSectionInfoStyled>
      <InputSectionTitle>{title}</InputSectionTitle>
      <InputSectionAdditionalText>{required ? "*Povinné pole" : ""}</InputSectionAdditionalText>
    </InputSectionInfoStyled>
  );
}

export default InputSectionInfo;
