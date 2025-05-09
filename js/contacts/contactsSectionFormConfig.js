import { isValidEmail, isValidPhone } from "../sendMessage/helpers.js";

export const contactsSectionFormConfig = {
  selectors: {
    name: "#contact-name",
    email: "#contact-email",
    phone: "#contact-phone",
    message: "#contact-message",
  },
  fields: [
    {
      selector: "#contact-name",
      requiredError: "Name is required",
      formatError: "Name should have at least 2 characters",
      minLength: 2,
    },
    {
      selector: "#contact-email",
      requiredError: "Email is required",
      formatError: "Invalid email address",
      validationFunction: isValidEmail,
    },
    {
      selector: "#contact-phone",
      requiredError: "Phone number is required",
      formatError: "Phone number should have 10 digits",
      validationFunction: isValidPhone,
    },
    {
      selector: "#contact-message",
      requiredError: "Message is required",
      formatError: null,
    },
  ],
  errorMessageSelector: ".contacts__error-message",
  toggleClassSelector: ".contact-wrap",
  formControlSelector: ".contact-form .control",
};
