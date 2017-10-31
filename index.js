$(function(){
    $('li').fadeOut('fast').delay(600).fadeIn(800);
    });
    $('li').hover(function(){
        $(this).fadeTo('fast', .25);
    });
    $('li').mouseout(function(){
        $(this).fadeTo('fast', 1);
    });
    $('li').click(function(){
        $(this).toggleClass('button-pink'),
        $('a', this).toggle();
        $('span', this).toggle();
});


//HOVER FUNCTION: 
// $(function(){
//     $('li').funtion(){
//     } $(this).fadeTo('fast' , '.25')
//     });function(){
//     $(this).fadeTo('fast' , '1')
// });

// SPAN = class to remove the actual funcitons.. (add to CSS under class span)


//.append just adds to the existing text on the buttons.
//You can also assign a new color on .click with .css('background' , 'rgb colors')