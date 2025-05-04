export function drawNumberedPoints(points, scale) {
    const canvas = document.getElementById('numbersCanvas');
    const ctx = canvas.getContext('2d');
    const numPoints = 5;
    const spacing = Math.floor(points.length / (numPoints + 1));
    const baseRadius = 14;
    const pulseDuration = 2000; // Total duration of one pulse in ms
    const delayBetween = 800; // Delay between pulses
    const initialDelay = 800; // Initial delay for the first circle

    const pulseCircle = (x, y, number, startTime) => {
        const animate = (timestamp) => {
            const elapsed = timestamp - startTime;
            const t = elapsed / pulseDuration;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw already shown circles first
            for (let j = 0; j < number - 1; j++) {
                const { x: px, y: py } = points[(j + 1) * spacing];
                drawStaticCircle(px, py, baseRadius, j + 1, 1); // No animation, just static
            }

            if (t < 1) {
                const scale = 1 + 0.3 * Math.sin(t * Math.PI); // Smooth pulse scale
                const radius = baseRadius * scale;

                const opacity = Math.min(t * 2, 1); // Fade in effect (linear interpolation)
                drawStaticCircle(x, y, radius, number, opacity);
                requestAnimationFrame(animate);
            } else {
                drawStaticCircle(x, y, baseRadius, number, 1); // Fully visible at the end
                startPulsing(x, y, number); // Start continuous pulsing after initial appearance
            }
        };
        requestAnimationFrame((ts) => animate(ts));
    };

    const startPulsing = (x, y, number) => {
        const pulse = () => {
            const timestamp = performance.now();
            const scale = 1 + 0.3 * Math.sin((timestamp % pulseDuration) / pulseDuration * Math.PI); // Continuous pulse
            const radius = baseRadius * scale;
            drawStaticCircle(x, y, radius, number, 1); // Full opacity while pulsing
        };

        setInterval(pulse, 16); // Update every frame (~60 FPS)
    };

    const drawStaticCircle = (x, y, radius, number, opacity) => {
        ctx.beginPath();
        ctx.arc(x, y, radius , 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 213, 235, ${opacity})`; // Smooth fade-in effect
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.fillStyle = '#1A1A1A';
        ctx.font = `900 ${18}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(number.toString(), x, y);
    };

    // Start animation with delay
    for (let i = 1; i <= numPoints; i++) {
        const index = i * spacing;
        const { x, y } = points[index];
        const delay = (i - 1) * delayBetween + (i === 1 ? initialDelay : 0); // Add initial delay for the first circle

        setTimeout(() => {
            const startTime = performance.now();
            pulseCircle(x, y, i, startTime);
        }, delay);
    }
}
