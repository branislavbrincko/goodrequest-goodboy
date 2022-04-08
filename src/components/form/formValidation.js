import { clearErrorField, setErrorField } from "../../redux/formSlice";
import { store } from "../../store";
import { form } from "./formDefinition";

export const isFormInvalid = () => {
  const errors = store.getState().form.errors;
  // form is invalid if at least one of the errors message is set
  return Object.values(errors).some((message) => !!message);
};

export const isFormStepInvalid = (stepId) => {
  const errors = store.getState().form.errors;
  const formStepFields = form[stepId];
  if (!formStepFields) return false;
  const currentStepFieldNames = form[stepId].map((field) => field.name);
  const errorField = currentStepFieldNames.find((fieldName) => !!errors[fieldName]);
  return !!errorField;
};

const validateSchema = (schema, fieldName, fieldValue) => {
  if (!schema) return true; // if there is no schema, field needs no validation

  try {
    schema.validateSync(fieldValue);
    store.dispatch(clearErrorField(fieldName));
    return true;
  } catch (error) {
    if (error.name === "ValidationError") {
      store.dispatch(setErrorField(fieldName, error.message));
    } else {
      throw Error(error);
    }
    return false;
  }
};

export const validateField = (fieldName, fieldValue) => {
  const formState = store.getState().form;
  const currentStepId = store.getState().global.currentStep;
  const field = form[currentStepId].find((field) => field.name === fieldName);

  const schema = typeof field.validationSchema === "function" ? field.validationSchema(formState) : field.validationSchema;
  const fieldValid = validateSchema(schema, fieldName, fieldValue);

  return fieldValid;
};

export const validateStep = (stepId) => {
  let stepValid = true;
  const stepFields = form[stepId];

  stepFields.forEach((field) => {
    const fieldValue = store.getState().form[field.name];
    const fieldValid = validateField(field.name, fieldValue);
    stepValid = stepValid && fieldValid;
  });

  return stepValid;
};
