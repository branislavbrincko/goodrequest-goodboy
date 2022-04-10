import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsSk = {
  FoundationGoodBoy: "Nadácia Good Boy",
  AboutProject: "O projekte",
  HowTo: "Ako na to",
  Contact: "Kontakt",
  ChooseHowToContribute: "Vyberte si možnosť, ako chcete prispieť",
  AmountIwantToContribute: "Suma, ktorou chcem prispieť",
  ContributeToShelter: "Chcem finančne prispieť konkrétnemu útulku",
  ContributeToOrganisation: "Chcem finančne prispieť celej nadácii",
  Shelter: "Útulok",
  ChooseShelterFromList: "Vyberte útulok zo zoznamu",
  EnterPositiveValue: "Zadajte kladnú sumu!",
  EnterValue: "Zadajte sumu!",
  ChooseFromList: "Vyberte zo zoznamu!",
  WeNeedSomeInformationAboutYou: "Potrebujeme od Vás zopár informácií",
  FirstName: "Meno",
  LastName: "Priezvisko",
  Email: "E-mailová adresa",
  PhoneNumber: "Telefónne číslo",
  FirstNameIsRequiredField: "Meno je povinné pole!",
  FirstNameMustHaveAtLeast2characters: "Meno musí mať aspoň 2 znaky!",
  FirstNameMustHaveMaximum20characters: "Meno musí mať maximálne 20 znakov!",
  LastNameIsRequiredField: "Priezvisko je povinné pole!",
  LastNameMustHaveAtLeast2characters: "Priezvisko musí mať aspoň 2 znaky!",
  LastNameMustHaveMaximum30characters: "Priezvisko musí mať maximálne 30 znakov!",
  EmailMustHaveValidFormat: "Email musí mať správny tvar!",
  EmailIsRequiredField: "Email je povinné pole!",
  EnterPhoneNumberInFormat_xxx_xxx_xxx: "Zadajte telefónne číslo v tvare xxx xxx xxx",
};

const translationsCz = {
  FoundationGoodBoy: "Nadace Good Boy",
  AboutProject: "O projektu",
  HowTo: "Ako na to",
  Contact: "Kontakt",
  ChooseHowToContribute: "Vyberte si možnost, jak chcete přispět",
  AmountIwantToContribute: "Částka, kterou chci přispět",
  ContributeToShelter: "Chci finančně přispět konkrétnímu útulku",
  ContributeToOrganisation: "Chci finančně přispět celé nadaci",
  Shelter: "Útulek",
  ChooseShelterFromList: "Vyberte útulek ze seznamu",
  EnterPositiveValue: "Zadejte kladnou částku!",
  EnterValue: "Zadejte sumu!",
  ChooseFromList: "Vyberte ze seznamu!",
  WeNeedSomeInformationAboutYou: "Potřebujeme od Vás pár informací",
  FirstName: "Jméno",
  LastName: "Příjmení",
  Email: "E-mailová adresa",
  PhoneNumber: "Telefonní číslo",
  FirstNameIsRequiredField: "Jméno je povinné pole!",
  FirstNameMustHaveAtLeast2characters: "Jméno musí mít alespoň 2 znaky!",
  FirstNameMustHaveMaximum20characters: "Jméno musí mít maximálně 20 znaků!",
  LastNameIsRequiredField: "Příjmení je povinné pole!",
  LastNameMustHaveAtLeast2characters: "Příjmení musí mít alespoň 2 znaky!",
  LastNameMustHaveMaximum30characters: "Příjmení musí mít maximálně 30 znaků!",
  EmailMustHaveValidFormat: "Email musí mít správný tvar!",
  EmailIsRequiredField: "Email je povinné pole!",
  EnterPhoneNumberInFormat_xxx_xxx_xxx: "Zadejte telefonní číslo ve tvaru xxx xxx xxx",
};

console.log("setting up translations...");

i18n.use(initReactI18next).init({
  resources: {
    sk: { translation: translationsSk },
    cz: { translation: translationsCz },
  },
  lng: "sk",
  fallbackLng: "sk",
  interpolation: { escapeValue: false },
});
