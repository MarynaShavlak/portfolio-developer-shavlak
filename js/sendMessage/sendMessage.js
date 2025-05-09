// import { hideHireModal } from "../hireModal.js";
//
// export function sendMessage() {
//   const isValid = isFormValid();
//   console.log("isValid", isValid);
//
//   if (isValid) {
//     const formData = {
//       name: $("#modal__contact-name").val(),
//       email: $("#modal__contact-email").val(),
//       phone: $("#modal__contact-phone").val(),
//       message: $("#modal__contact-message").val(),
//     };
//     console.log("It should be formData sending here with obj : ", formData);
//
//     hideHireModal();
//     resetSendFormData();
//     $(".contact-wrap").toggleClass("active");
//   }
// }
//
// function isFormValid() {
//   $(".modal__error-message").text("");
//   let hasError = false;
//   hasError =
//     validateField(
//       "#modal__contact-name",
//       "Name is required",
//       "Name should have at least 2 characters",
//     ) || hasError;
//   hasError =
//     validateField(
//       "#modal__contact-email",
//       "Email is required",
//       "Invalid email address",
//       isValidEmail,
//     ) || hasError;
//   hasError =
//     validateField(
//       "#modal__contact-phone",
//       "Phone number is required",
//       "Phone number should have 10 digits",
//       isValidPhone,
//     ) || hasError;
//   hasError =
//     validateField("#modal__contact-message", "Message is required") || hasError;
//   return !hasError;
//
//   function validateField(
//     selector,
//     requiredError,
//     formatError,
//     validationFunction = null,
//   ) {
//     console.log(selector);
//     let fieldValue = $(selector).val().trim();
//
//     if (fieldValue === "") {
//       $(`${selector}-error`).text(requiredError);
//       return true;
//     }
//     if (selector === "#modal__contact-name" && fieldValue.length < 2) {
//       $(`${selector}-error`).text(formatError);
//       return true;
//     }
//
//     if (validationFunction && !validationFunction(fieldValue)) {
//       $(`${selector}-error`).text(formatError);
//       return true;
//     }
//
//     return false;
//   }
//
//   function isValidEmail(email) {
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
//
//   function isValidPhone(phone) {
//     let phoneRegex = /^\d{10,}$/;
//     return phoneRegex.test(phone);
//   }
// }
//
// export function resetSendFormData() {
//   $("#modal__contact-name").text("");
//   $("#modal__contact-name").val("");
//   $("#modal__contact-email").text("");
//   $("#modal__contact-email").val("");
//   $("#modal__contact-phone").text("");
//   $("#modal__contact-phone").val("");
//   $("#modal__contact-message").text("");
//   $("#modal__contact-message").val("");
//   $(".modal__error-message").text("");
//   $(".contact-form--modal .control").removeClass("filled");
// }

import { hideHireModal } from "../hireModal/hireModal.js";

export function sendMessage(config) {
  console.log("sendMessage config:", config);

  if (!config || typeof config !== "object") {
    console.warn("Invalid config provided, falling back to defaultConfig");
  }

  if (!config.fields || !Array.isArray(config.fields)) {
    console.warn(
      "config.fields is missing or not an array, using defaultConfig.fields",
    );
  }

  const isValid = isFormValid(config);

  if (isValid) {
    const formData = {
      name: $(config.selectors.name).val(),
      email: $(config.selectors.email).val(),
      phone: $(config.selectors.phone).val(),
      message: $(config.selectors.message).val(),
    };
    console.log("Form data being sent:", formData);

    hideHireModal();
    resetSendFormData(config);
    $(config.toggleClassSelector).toggleClass("active");
  }
}

function isFormValid(config) {
  if (!config.fields || !Array.isArray(config.fields)) {
    console.error("config.fields is not an array:", config.fields);
    return false;
  }

  $(config.errorMessageSelector).text("");
  let hasError = false;

  for (const field of config.fields) {
    hasError =
      validateField(
        field.selector,
        field.requiredError,
        field.formatError,
        field.validationFunction,
        field.minLength,
      ) || hasError;
  }

  return !hasError;

  function validateField(
    selector,
    requiredError,
    formatError,
    validationFunction = null,
    minLength = null,
  ) {
    console.log("selector", selector);
    const fieldValue = $(selector).val().trim();

    if (fieldValue === "") {
      $(`${selector}-error`).text(requiredError);
      return true;
    }

    if (minLength && fieldValue.length < minLength) {
      $(`${selector}-error`).text(formatError);
      return true;
    }

    if (validationFunction && !validationFunction(fieldValue)) {
      $(`${selector}-error`).text(formatError);
      return true;
    }

    return false;
  }
}

export function resetSendFormData(config) {
  for (const field of Object.values(config.selectors)) {
    $(field).text("");
    $(field).val("");
    $(`${field}-error`).text("");
  }
  $(config.errorMessageSelector).text("");
  $(config.formControlSelector).removeClass("filled");
}
