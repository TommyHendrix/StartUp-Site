$('.become_member_link').click(function () {
    $('.menu_ul').toggleClass('active')
});
// $document.ready(function () {

// });
$('.card_description').hide();

$('.number_card_fath').click(function () {
    $('.card_description').toggle(500);
    $('.plus_icon').toggleClass('active')
});

$('.card_description2').hide();

$('.number_card_fath2').click(function () {
    $('.card_description2').toggle(500);
    $('.plus_icon2').toggleClass('active')
});

$('.card_description3').hide();

$('.number_card_fath3').click(function () {
    $('.card_description3').toggle(500);
    $('.plus_icon3').toggleClass('active')
});

$('.card_description4').hide();

$('.number_card_fath4').click(function () {
    $('.card_description4').toggle(500);
    $('.plus_icon4').toggleClass('active')
});

$('.card_description5').hide();

$('.number_card_fath5').click(function () {
    $('.card_description5').toggle(500);
    $('.plus_icon5').toggleClass('active')
});

$('#chanb1').click(function () {
    $('#chan1').toggleClass('active');
    $('#chan2').removeClass('active');
    $('#chan3').removeClass('active');
    $(this).toggleClass('active');
    $('#chanb2').removeClass('active');
    $('#chanb3').removeClass('active');
});

$('#chanb2').click(function () {
    $('#chan2').toggleClass('active');
    $('#chan1').removeClass('active');
    $('#chan3').removeClass('active');
    $(this).toggleClass('active');
    $('#chanb1').removeClass('active');
    $('#chanb3').removeClass('active');
});
    
$('#chanb3').click(function () {
    $('#chan3').toggleClass('active');
    $('#chan2').removeClass('active');
    $('#chan1').removeClass('active');
    $(this).toggleClass('active');
    $('#chanb2').removeClass('active');
    $('#chanb1').removeClass('active');
});