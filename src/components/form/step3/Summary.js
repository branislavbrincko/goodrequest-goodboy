import React from "react";
import { useSelector } from "react-redux";

function Summary() {
  const { firstName, lastName, email, phone, phonePrefix, value, shelterID, useShelterID } = useSelector((state) => state.form);
  const { shelters } = useSelector((state) => state.global);

  const supportType = useShelterID ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii";
  const shelter = shelters.find((shelter) => shelter.id === shelterID);
  const shelterName = shelter?.name || "-";

  return (
    <section className="summary">
      <div className="summary-row">
        <h2 className="summary-heading">Akou formou chcem pomôcť</h2>
        <p className="summary-text">{supportType}</p>
      </div>
      <div className="summary-row">
        <h2 className="summary-heading">Najviac mi záleží na útulku</h2>
        <p className="summary-text">{shelterName}</p>
      </div>
      <div className="summary-row">
        <h2 className="summary-heading">Suma ktorou chcem pomôcť</h2>
        <p className="summary-text">{value} €</p>
      </div>
      <div className="summary-row">
        <h2 className="summary-heading">Meno a priezvisko</h2>
        <p className="summary-text">
          {firstName} {lastName}
        </p>
      </div>
      <div className="summary-row">
        <h2 className="summary-heading">E-mailová adresa</h2>
        <p className="summary-text">{email}</p>
      </div>
      <div className="summary-row">
        <h2 className="summary-heading">Telefónne číslo</h2>
        <p className="summary-text">
          {phonePrefix} {phone}
        </p>
      </div>
    </section>
  );
}

export default Summary;
