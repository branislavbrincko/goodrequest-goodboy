import React from "react";
import { useSelector } from "react-redux";
import { SummaryHeading, SummaryRow, SummaryText } from "./Summary.styled";
import { useTranslation } from "react-i18next";

function Summary() {
  const { firstName, lastName, email, phone, phonePrefix, value, shelterID, useShelterID } = useSelector((state) => state.form);
  const { shelters } = useSelector((state) => state.global);
  const { t } = useTranslation();

  const supportType = useShelterID ? t("IwantToSupportShelter") : t("IwantToSupportOrganisation");

  const shelter = shelters.find((shelter) => shelter.id === shelterID);
  const shelterName = shelter?.name || "-";

  return (
    <section>
      <SummaryRow>
        <SummaryHeading>{t("HowIwantToHelp")}</SummaryHeading>
        <SummaryText>{supportType}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>{t("ShelterIwantSupport")}</SummaryHeading>
        <SummaryText>{shelterName}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>{t("AmountIwantToGive")}</SummaryHeading>
        <SummaryText>{value} €</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>{t("FullName")}</SummaryHeading>
        <SummaryText>
          {firstName} {lastName}
        </SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>{t("Email")}</SummaryHeading>
        <SummaryText>{email}</SummaryText>
      </SummaryRow>
      <SummaryRow>
        <SummaryHeading>{t("PhoneNumber")}</SummaryHeading>
        <SummaryText>{phone ? `${phonePrefix} ${phone}` : "-"}</SummaryText>
      </SummaryRow>
    </section>
  );
}

export default Summary;
