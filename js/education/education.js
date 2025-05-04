import {getRoadPath} from "./canvas/getRoadPath.js";
import {computePathPoints} from "./canvas/computePathPoints.js";
import {drawAnimationFrame} from "./canvas/drawAnimationFrame.js";
import {computeSpeed} from "./canvas/computeSpeed.js";
import {drawFinalFrame} from "./canvas/drawFinalFrame.js";
import {createOffscreenCanvas} from "./canvas/createOffscreenCanvas.js";
import {drawNumberedPoints} from "./canvas/drawNumberedPoints.js";
import {educationData} from "../../data/educationData.js";




export function initEducationSection() {
    const canvas = document.getElementById('roadCanvas');
    const ctx = canvas.getContext('2d');
    const SCALE = 0.8357;
    const FRAME_DURATION = 16;
    const roadPath = getRoadPath(SCALE);
    const pathPoints = computePathPoints(roadPath, 100);// More points = smoother animation
    let currentPointIndex = 0;
    let animationId;
    let lastFrameTime = 0;



    function animate(timestamp) {
        if (shouldAdvanceFrame(timestamp)) {
            updateAnimationState(timestamp);
        } else {
            animationId = requestAnimationFrame(animate);
        }
    }


    function shouldAdvanceFrame(timestamp) {
        return !lastFrameTime || timestamp - lastFrameTime > FRAME_DURATION;
    }

    function updateAnimationState(timestamp) {
        lastFrameTime = timestamp;
        drawAnimationFrame(ctx, pathPoints, currentPointIndex, canvas, SCALE);

        if (currentPointIndex < pathPoints.length + 50) {
            currentPointIndex += Math.round(computeSpeed(pathPoints, currentPointIndex));
            currentPointIndex = Math.min(currentPointIndex, pathPoints.length + 50);
            animationId = requestAnimationFrame(animate);
        } else {
            drawFinalFrame(ctx, pathPoints, SCALE, canvas);
            cancelAnimationFrame(animationId);
        }
    }


    function resetAnimationState() {
        currentPointIndex = 0;
        if (animationId) cancelAnimationFrame(animationId);
        lastFrameTime = 0;
    }

    function startAnimation() {
        resetAnimationState();
        animationId = requestAnimationFrame(animate);
    }

    startAnimation();
    drawNumberedPoints(pathPoints, SCALE);
    const  EDUCATION__ICONS = {
        bank: '<i class="fa-solid fa-building-columns"></i>',
        science: '<i class="fa-solid fa-user-graduate"></i>',
        goIT: '<img src="../../assets/images/education/goIT.webp" >',
        itBanda: '<img src="../../assets/images/education/itBanda.png" >',
        stepAcademy : '<img src="../../assets/images/education/stepAcademy.jpg" >',
    }

    educationData.forEach(data => {
        // Create the container div
        const educationItem = $('<li>').addClass('education-item');
        const iconText = EDUCATION__ICONS[data.icon] || 'icon'

        // Create the left part (icon)
        const icon = $('<div>').addClass('education-icon').html(`${iconText}`);

        // Create the right part (organization, period, speciality)
        const rightPart = $('<div>').addClass('education-details')
            .append(`<p class="organization">${data.organization}</p>`)
            .append(`<p class="period">${data.period}</p>`)
            .append(`<p class="speciality">${data.speciality}</p>`);

        // Append icon and right part to the container
        educationItem.append(icon).append(rightPart);

        // Append the container to the body (or any other container you want)
        $('.education__tooltips__container').append(educationItem);
    });
    return startAnimation;
}
