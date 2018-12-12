window.addEventListener('DOMContentLoaded', () => {
    'use strict';

//popup engineer
    
let button = document.querySelector('.header_btn'),
    popupEngineer = document.querySelector('.popup_engineer'),
    overlay = document.querySelector('.overlay'),
    popupEngClose = document.getElementsByClassName('popup_close')[1];


button.addEventListener('click', function () {
    overlay.style.display = 'block';
    popupEngineer.style.display = 'block';
    document.body.style.overflow = "hidden";

});

popupEngClose.addEventListener('click', function () {
    popupEngineer.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = "";
    });

});




