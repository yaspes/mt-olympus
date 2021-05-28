"use strict";

$(function() {
    $('.carousel').carousel({ interval: 2500 });
    $('#loginButton').on('click', function() {
        $('#loginModal').modal('show');
    });
});