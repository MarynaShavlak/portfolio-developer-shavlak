export function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + words[i] + ' ';
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth > maxWidth && currentLine !== '') {
            lines.push(currentLine);  // Push the current line when it's too wide
            currentLine = words[i] + ' ';  // Start a new line with the current word
        } else {
            currentLine = testLine;  // Add the word to the current line
        }
    }
    lines.push(currentLine); // Add the last line

    return lines;
}
