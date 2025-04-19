export function initHireModal() {
    setHireModalInfo();
    setHireModal();
}
function setHireModal() {
    $('[data-modal="hire-modal"]').on('click', showHireModal);
    $('.close-modal-btn').on('click', hideHireModal);
    $('.hire-form').on('submit', sendMessage);
}
function setHireModalInfo() {
    $('.card-toggle').on('click', function () {
        $('.card-toggle').removeClass('active');
        $(this).addClass('active');
        handleCardToggleClick($(this));
    });

    $('input,textarea').blur(function () {
        $(this)
            .parent()
            .toggleClass('filled', $(this).val().trim() !== '');
    });

    $('.hire-btn').on('click', function () {
        $('.contact-wrap').toggleClass('active');
    });

    $('.contact-wrap .close').on('click', function () {
        $('.contact-wrap').toggleClass('active');
        resetSendFormData();
    });

    const allCardToggleLinks = $('.card-toggle');
    allCardToggleLinks.on('mouseover', handleOverViewMouseOver);
    allCardToggleLinks.on('mouseout', handleMouseOut);

    function handleCardToggleClick(clickedToggle) {
        let isAnimating = false;
        if (!isAnimating) {
            isAnimating = true;
            deactivateAllCards();
            clickedToggle.siblings().css('z-index', 1);
            setTimeout(function () {
                activateClickedCard(clickedToggle);
                const isOverViewActive = $('.card--overview').hasClass('active');
                updateCardToggleStyles(isOverViewActive);
            }, 10);
        } else {
            return;
        }

        $('.card-toggle').on('mouseover', handleOverViewMouseOver);
        $('.card-toggle').on('mouseout', handleMouseOut);
        function deactivateAllCards() {
            $('.card').find('.card-content').css('z-index', 0);
            $('.card').removeClass('active');
        }

        function activateClickedCard(clickedToggle) {
            clickedToggle
                .parent()
                .toggleClass('active')
                .find('.card-content')
                .on('transitionend', function () {
                    isAnimating = false;
                });
        }
    }

    function updateCardToggleStyles(isOverViewActive) {
        const $cardToggleLinks = $('.card-toggle');

        $cardToggleLinks.each(function () {
            const $link = $(this);
            const $icon = $link.find('.card-toggle__icon');

            if (isOverViewActive) {
                updateStylesForOverView($link, $icon);
            } else {
                updateStylesForNormalView($link, $icon);
            }
        });
    }

    function updateStylesForOverView($link, $icon) {
        $link.css('border-color', 'transparent');
        $icon.css('color', '#161616');
        $link.on('mouseover', handleOverViewMouseOver);
        $link.on('mouseout', handleMouseOut);
    }

    function updateStylesForNormalView($link, $icon) {
        if (!$link.hasClass('active')) {
            $link.css('border-color', 'transparent');
            $icon.css('color', '#161616');
        } else {
            $link.css('border-color', '#fff');
            $icon.css('color', '#fff');
        }
        $link.off('mouseover', handleOverViewMouseOver);
        $link.off('mouseout', handleMouseOut);
        $link.on('mouseover', handleBlockMouseOver);
        $link.on('mouseout', handleMouseOut);
    }

    function handleOverViewMouseOver(event) {
        const $link = $(event.currentTarget);
        const $icon = $link.find('.card-toggle__icon');
        $icon.css('color', '#000');
        $link.css('border-color', '#000');
    }

    function handleMouseOut(event) {
        const $link = $(event.currentTarget);
        const $icon = $link.find('.card-toggle__icon');

        if (!$link.hasClass('active')) {
            $icon.css('color', '#161616');
            $link.css('border-color', 'transparent');
        }
    }

    function handleBlockMouseOver(event) {
        const $link = $(event.currentTarget);
        const $icon = $link.find('.card-toggle__icon');
        $icon.css('color', '#fff');
        $link.css('border-color', '#fff');
    }
}

function showHireModal() {
    $('.modal-backdrop-hire').fadeIn('slow', function () {
        $('body').addClass('modal-open');
    });
}

function hideHireModal() {
    $('.modal-backdrop-hire').fadeOut('slow', function () {
        $('body').removeClass('modal-open');
    });
}

function sendMessage(e) {
    e.preventDefault();
    const isValid = isFormValid();
    if (isValid) {
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(),
        };
        console.log('It should be formData sending here with obj : ', formData);

        hideHireModal();
        resetSendFormData();
        $('.contact-wrap').toggleClass('active');
    }
}

function isFormValid() {
    $('.error-message').text('');
    let hasError = false;
    hasError =
        validateField(
            '#name',
            'Name is required',
            'Name should have at least 2 characters',
        ) || hasError;
    hasError =
        validateField(
            '#email',
            'Email is required',
            'Invalid email address',
            isValidEmail,
        ) || hasError;
    hasError =
        validateField(
            '#phone',
            'Phone number is required',
            'Phone number should have 10 digits',
            isValidPhone,
        ) || hasError;
    hasError = validateField('#message', 'Message is required') || hasError;
    return !hasError;

    function validateField(
        selector,
        requiredError,
        formatError,
        validationFunction = null,
    ) {
        let fieldValue = $(selector).val().trim();

        if (fieldValue === '') {
            $(`${selector}-error`).text(requiredError);
            return true;
        }
        if (selector === '#name' && fieldValue.length < 2) {
            $(`${selector}-error`).text(formatError);
            return true;
        }

        if (validationFunction && !validationFunction(fieldValue)) {
            $(`${selector}-error`).text(formatError);
            return true;
        }

        return false;
    }

    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        let phoneRegex = /^\d{10,}$/;
        return phoneRegex.test(phone);
    }
}

function resetSendFormData() {
    $('#name').text('');
    $('#name').val('');
    $('#email').text('');
    $('#email').val('');
    $('#phone').text('');
    $('#phone').val('');
    $('#message').text('');
    $('#message').val('');
    $('.error-message').text('');
    $('.hire-form .control').removeClass('filled');
}
