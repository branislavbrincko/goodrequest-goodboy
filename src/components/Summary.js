import React from "react";
import { useSelector } from "react-redux";
import { SummaryHeading, SummaryRow, SummaryText } from "./Summary.styled";

function Summary() {
  const { firstName, lastName, email, phone, phonePrefix, value, shelterID, useShelterID } = useSelector((state) => state.form);
  const { shelters } = useSelector((state) => state.global);

  const supportType = useShelterID ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii";
  const shelter = shelters.find((shelter) => shelter.id === shelterID);
  const shelterName = shelter?.name || "-";

  return (
    <section>
      <SummaryRow>
        <SummaryHeading>Akou formou chcem pomôcť</SummaryHeading>
        <SummaryText>{supportType}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>Najviac mi záleží na útulku</SummaryHeading>
        <SummaryText>{shelterName}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>Suma ktorou chcem pomôcť</SummaryHeading>
        <SummaryText>{value} €</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>Meno a priezvisko</SummaryHeading>
        <SummaryText>
          {firstName} {lastName}
        </SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>E-mailová adresa</SummaryHeading>
        <SummaryText>{email}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>Telefónne číslo</SummaryHeading>
        <SummaryText>{phone ? `${phonePrefix} ${phone}` : "-"}</SummaryText>
      </SummaryRow>
    </section>
  );
}

export default Summary;
