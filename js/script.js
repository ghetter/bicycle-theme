$(document).ready(function(){
    $('.icon-menu').click(function(event){
    $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu__body').toggleClass('active');
        $('.header__logo').toggleClass('active');
        $('.menu__link').addClass('burgered');

});
    $('.menu__link').click(function(event){
        $('.icon-menu').removeClass('active');
        $('.menu__body').removeClass('active');
        $('.header__logo').removeClass('active');
        $('body').removeClass('lock');
    })
});

if ($('.menu__body').hasClass('active')){
    $('body').addClass('lock');
}
else {
    $('body').removeClass('lock');
}



function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';}}}
ibg();
