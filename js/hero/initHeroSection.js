export  function initHeroSection() {
    $('#cloudCanvas').Klouds({
        bgColor: '#FFFFFF',
        cloudColor2: 'rgba(255, 194, 217, 0.8)',
        cloudColor1: '#ffffff',
        layerCount: 8,
    })

    $('#cloudCanvas2').Klouds({
        bgColor: 'transparent',
        cloudColor2: '#FFffff',
        cloudColor1: 'rgba(255, 194, 217, 0.8)',
        layerCount: 8,
        speed:2,
    })
    $('#copyEmail').click(function(e) {
        const email = $(this).text().trim();
        navigator.clipboard.writeText(email).then(() => {
            const $link = $(this);
            $link.addClass('show-tooltip');

            setTimeout(() => {
                $link.removeClass('show-tooltip');
            }, 1500); // Tooltip stays visible for 1.5 seconds
        });
    });
}
