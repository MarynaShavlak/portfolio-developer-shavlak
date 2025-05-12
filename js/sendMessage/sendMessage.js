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

    const body = `
  <p>You've received a new message from your portfolio contact form:</p>
  <p><strong>Name:</strong> ${formData.name}<br>
  <strong>Email:</strong> ${formData.email}<br>
  <strong>Phone:</strong> ${formData.phone}</p>
  <p><strong>Message:</strong><br>${formData.message.replace(/\n/g, "<br>")}</p>
`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shavlakmaryna@gmail.com",
      Password: "9CC2BAC86D6FCE84EDA924D359C83D1BD186",
      To: "shavlakmaryna@gmail.com",
      From: "shavlakmaryna@gmail.com",
      Subject: "Interest in Collaborating – Frontend Development Opportunity",
      Body: body,
    }).then((message) => alert(message));

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
