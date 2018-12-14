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


    // увеличение картинок

    // let imgBlock = document.querySelector('.works__img-block');

    // imgBlock.addEventListener('click', (event) => {
    //     if (event.target && event.target.matches('img')) {
    //         console.log('клик');
    //     }
    // });


    //табы с окнами

    let tabLink = document.querySelectorAll('.glazing_links'),
        tabBlock = document.querySelectorAll('.glazing_block'),
        tabImg = document.querySelectorAll('.glazing_img'),
        tabParent = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('.glazing_types');


    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabBlock[i].classList.remove('active');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabBlock[b].classList.add('active');
        }
    };

    function sortTab(tabName, target) {
        for (let i = 0; i < tabName.length; i++) {
            if (target == tabName[i]) {
                hideTabContent(0);
                showTabContent(i);
            }
        }
    }

    tabParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('glazing_links')) {
            sortTab(tabLink, target);
        } else if (target && target.classList.contains('glazing_block')) {
            sortTab(tabBlock, target);
        } else if (target && target.classList.contains('glazing_img')) {
            sortTab(tabImg, target);
        }
    });

    //табы с отделкой

    let decorTab = document.querySelectorAll('.decoration_item'),
        decorTabLink = document.querySelectorAll('.decoration_links'),
        decorTabParent = document.querySelector('.decoration_slider'),
        decorTabContent = document.querySelectorAll('.decoration_types');

    let decorHideTabContent = (a) => {
        for (let i = a; i < decorTabContent.length; i++) {
            decorTabContent[i].classList.remove('show');
            decorTabContent[i].classList.add('hide');
        }
    };
    decorHideTabContent(1);

    let decorShowTabContent = (b) => {
        if (decorTabContent[b].classList.contains('hide')) {
            decorTabContent[b].classList.remove('hide');
            decorTabContent[b].classList.add('show');
        }
    };

    function decorSortTab(tabName, target) {
        for (let i = 0; i < tabName.length; i++) {
            if (target == tabName[i]) {
                decorHideTabContent(0);
                decorShowTabContent(i);
            }
        }
    }

    decorTabParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('decoration_item')) {
            decorSortTab(decorTab, target);
        } else if (target && target.classList.contains('decoration_links')) {
            decorSortTab(decorTabLink, target);
        }

    });

    //timer

    let deadline = '2019-07-04';

    function getTimeRemaining(endtime) {
        let dateDiff = (new Date()).getTimezoneOffset() * 60 * 1000;
        let t = Date.parse(endtime) - Date.parse(new Date()) + dateDiff,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 * 60 * 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };
    }

    let timeFormat = (time) => {
        let result = time;
        if (time < 0) {
            result = '00';
        } else if (time < 10) {
            result = '0' + time;
        }
        return result;
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            days = timer.querySelector('#days'),
            seconds = timer.querySelector('#seconds'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),

            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = timeFormat(t.hours);
            minutes.textContent = timeFormat(t.minutes);
            seconds.textContent = timeFormat(t.seconds);
            days.textContent = timeFormat(t.days);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('timer', deadline);

});