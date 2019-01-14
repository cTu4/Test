
$(function () {

    $('.menu').click(function () {
        $('.toggle').slideToggle(300,function () {
            if($(this).css('display')==='none') {
                $(this).removeAttr('style');
            }
        });
    });





    $('.kek').click(function () {
        $('.menu').slideToggle(300);
    })
})


