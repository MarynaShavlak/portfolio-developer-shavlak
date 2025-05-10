import { reviewsData } from "../../data/reviewsData.js";

export function initReviewsSlider() {
  generateReviewsMarkup(reviewsData);
  $("#cloudCanvasReviews").Klouds({
    bgColor: "transparent",
    cloudColor2: "#FFffff",
    cloudColor1: "rgba(255, 194, 217, 0.8)",
    layerCount: 8,
    speed: 2,
  });
  setReviewsSlider();
}

function setReviewsSlider() {
  let intervalId;

  function nextSlide() {
    const activeSlide = $(".reviews__item--active");
    const activeSlideIndex = activeSlide.index();
    const totalSlides = $(".reviews__item").length;
    const nextSlideIndex = (activeSlideIndex + 1) % totalSlides;
    const nextSlide = $(".reviews__item").eq(nextSlideIndex);

    activeSlide.fadeOut(1000, function () {
      activeSlide.removeClass("reviews__item--active");
    });
    nextSlide.fadeIn(1000, function () {
      nextSlide.addClass("reviews__item--active");
    });
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 2000);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  $(".next-btn, .prev-btn").on("click", function () {
    stopSlider();
    nextSlide();
    startSlider();
  });

  $(".reviews__item").hover(
    function () {
      stopSlider();
    },
    function () {
      startSlider();
    },
  );

  startSlider();
}

function generateReviewsMarkup(data) {
  const $reviewsSlider = $(".reviews-slider");
  $.each(data, function (index, review) {
    const $reviewItem = generateReviewItem(index, review);
    $reviewsSlider.append($reviewItem);
  });

  function generateReviewItem(index, review) {
    const $reviewItem = $("<li>").addClass("reviews__item");
    if (index === 0) {
      $reviewItem.addClass("reviews__item--active");
    }

    const $reviewsDescr = generateReviewDescription(review.text);
    const $reviewsAuthor = generateReviewAuthor(review.author, review.company);
    const $reviewsRating = $("<ul>").addClass("reviews__rating");
    generateRatingStarList($reviewsRating, review.rating);

    $reviewItem.append($reviewsDescr, $reviewsAuthor.append($reviewsRating));
    return $reviewItem;
  }

  function generateReviewDescription(text) {
    const $reviewsDescr = $("<div>").addClass("reviews__descr");
    const $p = $("<p>").text(text);
    $reviewsDescr.append($p);
    return $reviewsDescr;
  }

  function generateReviewAuthor(author, company) {
    const $reviewsAuthor = $("<div>").addClass("reviews__author");
    const $reviewsPhotoWrap = $("<div>").addClass("reviews__photo-wrap");
    const $reviewsPhoto = $("<img>")
      .addClass("reviews__photo")
      .attr("src", "assets/images/Shavlak_Maryna_avatar.jpg")
      .attr("width", "15")
      .attr("height", "15")
      .attr("alt", "rating star");
    $reviewsPhotoWrap.append($reviewsPhoto);
    $reviewsAuthor.append($reviewsPhotoWrap);
    const $reviewsName = $("<p>").addClass("reviews__name").text(author);
    const $reviewsText = $("<p>").addClass("reviews__text").text(company);
    $reviewsAuthor.append($reviewsName, $reviewsText);
    return $reviewsAuthor;
  }

  function generateRatingStarList($reviewsRating, rating) {
    for (let i = 1; i <= 5; i++) {
      const $ratingItem = $("<li>").addClass("rating__item");
      const $star = $("<img>")
        .addClass("reviews__star")
        .attr("src", "../assets/images/star.svg")
        .attr("alt", "Avatar of person");

      if (i > rating) {
        $star.addClass("reviews__star--unactive");
      }

      $ratingItem.append($star);
      $reviewsRating.append($ratingItem);
    }
  }
}
