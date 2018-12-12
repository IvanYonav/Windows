window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //popup engineer

    let button = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelectorAll('.popup_close'),
        phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup');

    function showModal(popupName) {
        overlay.style.display = 'block';
        popupName.style.display = 'block';
        document.body.style.overflow = "hidden";
    }

    function hideModal(popupName) {
        popupName.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = "";
    }

    button.addEventListener('click', function() {
        showModal(popupEngineer);
    });

    phoneLink.forEach(function(item) {
        item.addEventListener('click', function () {
            showModal(popup);
        });
    });

    popupClose[1].addEventListener('click', function () {
        hideModal(popupEngineer);
    });

    popupClose[0].addEventListener('click', function () {
        hideModal(popup);
    });

});