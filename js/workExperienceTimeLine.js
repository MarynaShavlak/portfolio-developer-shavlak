export function workExperienceTimeLine() {
    // Detect CSS animation support and add .cssanimations class
    if (typeof window.CSS && CSS.supports('animation')) {
        document.documentElement.classList.add('cssanimations');
    }

    var $timeline_block = $('.cd-timeline-block');

    // Hide timeline blocks outside the viewport
    $timeline_block.each(function () {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    // Show/animate timeline blocks when they enter the viewport
    $(window).on('scroll', function () {
        $timeline_block.each(function () {
            if (
                $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 &&
                $(this).find('.cd-timeline-img').hasClass('is-hidden')
            ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
}
