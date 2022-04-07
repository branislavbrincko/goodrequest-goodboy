import { store } from "../store";
import { form } from "../formDefinition";
import { clearErrorField, setErrorField } from "../actions/formActions";

export const isFormInvalid = () => {
  const errors = store.getState().form.errors;
  // form is invalid if at least one of the errors message is set
  return Object.values(errors).some((message) => !!message);
};

const validateSchema = (schema, fieldName, fieldValue) => {
  if (!schema) return true; // if there is no schema, field needs no validation

  try {
    schema.validateSync(fieldValue);
    clearErrorField(fieldName);
    return true;
  } catch (error) {
    if (error.name === "ValidationError") {
      setErrorField(fieldName, error.message);
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
