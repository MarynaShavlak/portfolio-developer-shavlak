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
    $('.contact-form').toggleClass('active');
  });

  $('.contact-form button[type=submit], .contact-form .close').on(
    'click',
    function (e) {
      e.preventDefault();
      $('.contact-form').toggleClass('active');
    },
  );

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
  }

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
