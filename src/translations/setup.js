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
