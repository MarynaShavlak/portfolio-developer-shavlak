export function setupCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) throw new Error(`Canvas with ID ${canvasId} not found`);
  const ctx = canvas.getContext("2d");
  return { canvas, ctx };
}
