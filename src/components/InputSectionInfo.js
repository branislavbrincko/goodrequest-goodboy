function InputSectionInfo({ title, additionalText }) {
  return (
    <div className="input-section-info">
      <h2 className="input-section-title">{title}</h2>
      <span className="input-section-additional-text">{additionalText}</span>
    </div>
  );
}

export default InputSectionInfo;
