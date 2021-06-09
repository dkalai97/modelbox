$(function () {
  $("img").on("click", function () {
    var imagesrc = $(this).attr("src");
    $(".dialogbox").css("display", "block");
    $(".dialogboxcontent")
      .find(".imageholder")
      .html("<img src='" + imagesrc + "'/>");
  });

  $(".close").on("click", function () {
    $(".dialogbox").css("display", "none");
  });

  $(".dialogbox").on("click", function () {
    $(".dialogbox").css("display", "none");
  });

  $(".dialogboxcontent").on("click", function (event) {
    event.stopPropagation();
  });

  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
