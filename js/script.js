window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //popup engineer

    let button = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelectorAll('.popup_close'),
        phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup');

    let timerPopup = setTimeout(showModal, 60000, popup);

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

    button.addEventListener('click', function () {
        showModal(popupEngineer);
    });

    phoneLink.forEach(function (item) {
        item.addEventListener('click', function () {
            showModal(popup);
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target == popupEngineer) {
            hideModal(popupEngineer);
        } else if (event.target == popup) {
            hideModal(popup);
            clearTimeout(timerPopup);
        }
    });

    popupClose.forEach(function (item) {
        item.addEventListener('click', function (event) {
            if (event.currentTarget == popupClose[1]) {
                hideModal(popupEngineer);
            } else if (event.currentTarget == popupClose[0]) {
                hideModal(popup);
                clearTimeout(timerPopup);
            }
        });
    });

});