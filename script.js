$(document).ready(function() {
    $('nav a').hover(function() {
        $(this).css('color', '#ff0000');
    }, function() {
        $(this).css('color', '#fff');
    });
});