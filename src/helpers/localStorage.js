const FORM_VALUES = "goodboy-form-values";
const STEP_VALUE = "goodboy-step-value";

const updateLocalStorage = (itemName, value) => localStorage.setItem(itemName, JSON.stringify(value));
const clearLocalStorage = (itemName) => localStorage.removeItem(itemName);

const formValuesFromLocalStorageStr = localStorage.getItem(FORM_VALUES);
export const formValuesFromLocalStorage = formValuesFromLocalStorageStr && JSON.parse(formValuesFromLocalStorageStr);

const stepValueFromLocalStorageStr = localStorage.getItem(STEP_VALUE);
export const stepValueFromLocalStorage = stepValueFromLocalStorageStr && JSON.parse(stepValueFromLocalStorageStr);

export const updateFormValuesInLocalStorage = (formValues) => updateLocalStorage(FORM_VALUES, formValues);
export const clearFormValuesFromLocalStorage = () => clearLocalStorage(FORM_VALUES);
export const updateStepInLocalStorage = (stepValue) => updateLocalStorage(STEP_VALUE, stepValue);
