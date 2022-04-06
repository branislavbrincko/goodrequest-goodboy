function InputSectionInfo({ title, required = true }) {
  return (
    <div className="input-section-info">
      <h2 className="input-section-title">{title}</h2>
      <span className="input-section-additional-text">{required ? "Povinné" : "Nepovinné"}</span>
    </div>
  );
}

export default InputSectionInfo;
