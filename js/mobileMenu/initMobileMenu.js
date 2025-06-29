export function initMobileMenu() {
  const $menu = $(".header__mobile-menu");

  $(".nav__mobile-menu-toggle").on("click", function () {
    if ($menu.is(":visible")) {
      $menu.animate({ right: "-250px" }, 300, function () {
        $menu.hide();
      });
    } else {
      $menu
        .css({ right: "-250px", display: "block" })
        .animate({ right: "0" }, 300);
    }
  });
  $(".close-mobile-btn").on("click", function () {
    $menu.animate({ right: "-250px" }, 300, function () {
      $menu.hide();
    });
  });

  $(".header__mobile-menu .nav__link").on("click", function () {
    $menu.animate({ right: "-250px" }, 300, function () {
      $menu.hide();
    });
  });
}
