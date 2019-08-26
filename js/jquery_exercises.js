"use strict";

$(document).ready(function() {

    // alert('We have finished loading!');
    // alert($('#panda-disc').html());
    // $('.codeup').css('border', 'solid 1px red');
    // $('li').css('font-size', '20px');
    // $('li').css('background-color', 'yellow');
    // $('h1').css('background-color', 'yellow');
    // $('p').css('background-color', 'yellow');
    // $('li, h1, p').css('background-color', 'yellow');
    // alert($('h1').html());
// next exercise ---------------------------------------

    $('h1').click(function(){
        $(this).css('background', 'red');
    });

    $('p').dblclick(function () {
        $(this).css('font-size','18px')
    });

    $('li').hover (
        function() {
            $(this).css('color','red');
        },
        function (){
        $(this).css('color','black');
    }
    );
});

