import { sendMessage } from "../sendMessage/sendMessage.js";
import { contactsSectionFormConfig } from "./contactsSectionFormConfig.js";

export function initContactsSection() {
  $("#contact__btn").on("click", () => sendMessage(contactsSectionFormConfig));
}
