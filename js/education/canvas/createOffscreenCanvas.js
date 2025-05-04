export function createOffscreenCanvas(canvas) {
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    return offscreen;
}
