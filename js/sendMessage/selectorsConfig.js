import { isValidEmail, isValidPhone } from "./helpers.js";

export const modalFormConfig = {
  selectors: {
    name: "#modal__contact-name",
    email: "#modal__contact-email",
    phone: "#modal__contact-phone",
    message: "#modal__contact-message",
  },
  fields: [
    {
      selector: "#modal__contact-name",
      requiredError: "Name is required",
      formatError: "Name should have at least 2 characters",
      minLength: 2,
    },
    {
      selector: "#modal__contact-email",
      requiredError: "Email is required",
      formatError: "Invalid email address",
      validationFunction: isValidEmail,
    },
    {
      selector: "#modal__contact-phone",
      requiredError: "Phone number is required",
      formatError: "Phone number should have 10 digits",
      validationFunction: isValidPhone,
    },
    {
      selector: "#modal__contact-message",
      requiredError: "Message is required",
      formatError: null,
    },
  ],
  errorMessageSelector: ".modal__error-message",
  toggleClassSelector: ".contact-wrap",
  formControlSelector: ".contact-form--modal .control",
};
