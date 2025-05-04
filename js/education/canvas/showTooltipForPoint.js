export function showTooltipForPoint(index) {
    const items = document.querySelectorAll('.education-item');
    if (index >= items.length) return;

    const tooltip = items[index];
    tooltip.style.opacity = 0;
    tooltip.style.transition = 'opacity 0.5s ease-in-out';


    requestAnimationFrame(() => {
        tooltip.style.opacity = 1;
    });
}
