$(function () {
    $('img').on('click', function () {
        var imagesrc = $(this).attr('src');
        $('.dialogbox').css('display', 'block');
        $('.dialogboxcontent').find(".imageholder").
html("<img src='" + imagesrc + "'/>");
    });

    $('.close').on('click', function () {
        $('.dialogbox').css('display', 'none');
    })

    $('.dialogbox').on('click', function () {
        $('.dialogbox').css('display', 'none');
    });

    $('.dialogboxcontent').on('click', function (event) {
        event.stopPropagation();
    });
})