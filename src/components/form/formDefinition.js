import * as yup from "yup";

//
// Default values for value field
//
export const DEFAULT_VALUES = ["5", "10", "20", "30", "50", "100"];

//
// Validation schemas for fields
//

const valueSchema = yup.number().typeError("EnterValue").required("EnterValue").positive("EnterPositiveValue");

const shelterIDSchema = (formState) => {
  const testFunction = (value) => {
    const { useShelterID } = formState;
    if (useShelterID) return value > 0;
    return true;
  };
  return yup.number().test("test-shelter-ID", "ChooseFromList", testFunction);
};

const firstNameSchema = yup
  .string()
  .trim()
  .required("Meno je povinné pole!")
  .min(2, "Meno musí mať aspoň 2 znaky!")
  .max(20, "Meno musí mať maximálne 20 znakov!");

const lastNameSchema = yup
  .string()
  .trim()
  .required("Priezvisko je povinné pole!")
  .min(2, "Priezvisko musí mať aspoň 2 znaky!")
  .max(30, "Priezvisko musí mať maximálne 30 znakov!");

const emailSchema = yup.string().email("Email musí mať správny tvar!").required("Email je povinné pole!");

const phoneSchema = yup
  .string()
  .trim()
  .matches(/^$|([0-9]{3} [0-9]{3} [0-9]{3})$/, "Zadajte telefónne číslo v tvare xxx xxx xxx"); // matches number in format "xxx xxx xxx" or empty string

//
// Definition
//

export const form = [
  // step 1 fields
  [
    { name: "shelterID", defaultValue: 0, validationSchema: shelterIDSchema },
    { name: "value", defaultValue: DEFAULT_VALUES[0], validationSchema: valueSchema },
    { name: "useShelterID", defaultValue: true, validationSchema: null },
    { name: "useCustomValue", defaultValue: false, validationSchema: null },
  ],
  // step 2 fields
  [
    {
      name: "firstName",
      defaultValue: "",
      validationSchema: firstNameSchema,
    },
    { name: "lastName", defaultValue: "", validationSchema: lastNameSchema },
    { name: "email", defaultValue: "", validationSchema: emailSchema },
    { name: "phone", defaultValue: "", validationSchema: phoneSchema },
    { name: "phonePrefix", defaultValue: "+421", validationSchema: null },
  ],
  // step 3 fields
  [
    {
      name: "consent",
      defaultValue: false,
    },
  ],
];

export const NUMBER_OF_STEPS = form.length;

//
// Prepare default values for redux store
//

let defaultValues = { errors: {} };

form.forEach((step) => {
  step.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
    if (field.validationSchema) defaultValues.errors[field.name] = "";
  });
});

export const defaultFormValues = defaultValues;
