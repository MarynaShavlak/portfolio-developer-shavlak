export function renderIcon(icon) {
  // If it’s an SVG element string (starts with <svg)
  if (icon.trim().startsWith("<svg")) {
    return icon; // Directly insert raw SVG string
  }

  // If it's a file path (like "hubmee.svg")
  if (icon.endsWith(".svg") || icon.endsWith(".png") || icon.endsWith(".jpg")) {
    return `<img src="assets/images/icons/${icon}" alt="Icon" class="timeline__event__img-icon" width="32" height="32"/>`;
    // ^ Adjust the path as needed
  }

  // Else, assume it's a Font Awesome HTML string
  return icon;
}
