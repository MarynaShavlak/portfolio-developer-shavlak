import { wrapText } from "./utils/wrapText.js";

// const TOOLTIP_HEIGHT = 180;
const ICON_SIZE = 48;
const ICON_PADDING = 10;
const TEXT_LEFT_MARGIN = ICON_PADDING + ICON_SIZE + 60;
const TRIANGLE_HEIGHT = 10;
const TRIANGLE_WIDTH = 12;
const TOOLTIP_OFFSET = 15;
const BACKGROUND_COLOR = '#333333';
const TEXT_COLOR = '#FFFFFF';
const MAX_TOOLTIP_WIDTH = 300; // Max width for the tooltip background
const TOOLTIP_HEIGHTS = {
    '1': 140,
    '2': 200,
    '3': 120,
    '4': 100,
    '5': 100,
}

export function drawTooltip(ctx, x, y, data, position, baseRadius, index) {
    console.log('index', index)
    const { tooltipX, tooltipY, tooltipWidth } = calculateTooltipPosition(ctx, x, y, position, baseRadius, data, index);
    drawBackground(ctx, tooltipX, tooltipY, tooltipWidth, index);
    drawContent(ctx, tooltipX, tooltipY, data, tooltipWidth);
    drawTriangle(ctx, x, y, position, baseRadius);
}

function calculateTooltipPosition(ctx, x, y, position, baseRadius, data, index) {
    const maxTextWidth = getMaxTextWidth(ctx, data); // Get the max text width
    const tooltipWidth = Math.min(Math.max(TOOLTIP_OFFSET + TEXT_LEFT_MARGIN + maxTextWidth + ICON_PADDING, 280), MAX_TOOLTIP_WIDTH); // Limit the width to 300px

    let tooltipX, tooltipY;

    if (position === 'top') {
        tooltipX = x - tooltipWidth / 2;
        tooltipY = y - baseRadius - TOOLTIP_HEIGHTS[index] - TRIANGLE_HEIGHT - TOOLTIP_OFFSET;
    } else if (position === 'bottom') {
        tooltipX = x - tooltipWidth / 2;
        tooltipY = y + baseRadius + TRIANGLE_HEIGHT + TOOLTIP_OFFSET;
    } else if (position === 'right') {
        tooltipX = x + baseRadius + TRIANGLE_HEIGHT + TOOLTIP_OFFSET;
        tooltipY = y - TOOLTIP_HEIGHTS[index] / 2;
    } else if (position === 'bottom-right') {
        tooltipX = x + baseRadius + TRIANGLE_HEIGHT + TOOLTIP_OFFSET;
        tooltipY = y + baseRadius + TRIANGLE_HEIGHT + TOOLTIP_OFFSET;
    }

    return { tooltipX, tooltipY, tooltipWidth };
}

function getMaxTextWidth(ctx, data) {
    const lines = [
        ...wrapText(ctx, data.organization, MAX_TOOLTIP_WIDTH), // Use a maximum width to avoid overflow
        ...wrapText(ctx, data.period, MAX_TOOLTIP_WIDTH),
        ...wrapText(ctx, data.speciality, MAX_TOOLTIP_WIDTH)
    ];

    const textWidths = lines.map(line => ctx.measureText(line).width);
    return Math.max(...textWidths);
}

function drawBackground(ctx, tooltipX, tooltipY, tooltipWidth, index) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(tooltipX, tooltipY, tooltipWidth, TOOLTIP_HEIGHTS[index]);
}

function drawContent(ctx, x, y, data, tooltipWidth) {
    const iconX = x + ICON_PADDING;
    const iconY = y + ICON_PADDING;

    // Draw icon placeholder (square instead of actual icon)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(iconX, iconY, ICON_SIZE, ICON_SIZE);

    // Text section
    const textX = x + TEXT_LEFT_MARGIN + ICON_PADDING+20;
    const maxWidth = tooltipWidth - TEXT_LEFT_MARGIN;  // Maximum width for the text
    ctx.fillStyle = TEXT_COLOR;

    const organizationLines = wrapText(ctx, data.organization, maxWidth);
    let yOffset = iconY;

    // Draw each line of wrapped text
    ctx.font = 'bold 16px Arial';
    organizationLines.forEach((line) => {
        ctx.fillText(line, textX, yOffset);
        yOffset += 16; // Line height
    });

    const periodLines = wrapText(ctx, data.period, maxWidth);
    periodLines.forEach((line) => {
        ctx.font = '14px Arial';
        ctx.fillText(line, textX, yOffset);
        yOffset += 14;
    });

    const specialityLines = wrapText(ctx, data.speciality, maxWidth);
    specialityLines.forEach((line) => {
        ctx.font = '14px Arial';
        ctx.fillText(line, textX, yOffset);
        yOffset += 14;
    });
}

function drawTriangle(ctx, x, y, position, baseRadius) {
    ctx.beginPath();
    ctx.fillStyle = BACKGROUND_COLOR;

    if (position === 'top') {
        ctx.moveTo(x, y - baseRadius - TOOLTIP_OFFSET);
        ctx.lineTo(x - TRIANGLE_WIDTH / 2, y - baseRadius - TOOLTIP_OFFSET - TRIANGLE_HEIGHT);
        ctx.lineTo(x + TRIANGLE_WIDTH / 2, y - baseRadius - TOOLTIP_OFFSET - TRIANGLE_HEIGHT);
    } else if (position === 'bottom') {
        ctx.moveTo(x, y + baseRadius + TOOLTIP_OFFSET);
        ctx.lineTo(x - TRIANGLE_WIDTH / 2, y + baseRadius + TOOLTIP_OFFSET + TRIANGLE_HEIGHT);
        ctx.lineTo(x + TRIANGLE_WIDTH / 2, y + baseRadius + TOOLTIP_OFFSET + TRIANGLE_HEIGHT);
    } else if (position === 'right') {
        ctx.moveTo(x + baseRadius + TOOLTIP_OFFSET, y);
        ctx.lineTo(x + baseRadius + TOOLTIP_OFFSET + TRIANGLE_HEIGHT, y - TRIANGLE_WIDTH / 2);
        ctx.lineTo(x + baseRadius + TOOLTIP_OFFSET + TRIANGLE_HEIGHT, y + TRIANGLE_WIDTH / 2);
    }

    ctx.closePath();
    ctx.fill();
}
