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

    //увеличение картинок

    let imgBlock = document.querySelector('.works__img-block'),
        img = document.querySelectorAll('.min_img'),
        bigImg = document.querySelectorAll('.big_img-work');

    imgBlock.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('min_img')) {
            for (let i = 0; i < img.length; i++) {
                if (target == img[i]) {
                    bigImg[i].style.display = "block";
                    overlay.appendChild(bigImg[i]);
                    overlay.style.display = 'flex';
                    document.body.style.overflow = "hidden";
                }
            }
        }
    });

    bigImg.forEach(function (item) {
        window.addEventListener('click', function (event) {
            if (event.target && event.target == overlay) {
                overlay.style.display = 'none';
                document.body.style.overflow = "";
                item.style.display = 'none';
            }
        });
    });

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

    let decorTabLink = document.querySelectorAll('.decoration_links'),
        decorTab = document.querySelectorAll('.decoration_link-wrap'),
        decorTabParent = document.querySelector('.decoration_slider'),
        decorTabContent = document.querySelectorAll('.decoration_types');

    let decorHideTabContent = (a) => {
        for (let i = a; i < decorTabContent.length; i++) {
            decorTabContent[i].classList.remove('show');
            decorTabContent[i].classList.add('hide');
            decorTab[i].classList.remove('after_click');
        }
    };

    decorHideTabContent(1);

    let decorShowTabContent = (b) => {
        if (decorTabContent[b].classList.contains('hide')) {
            decorTabContent[b].classList.remove('hide');
            decorTabContent[b].classList.add('show');
            decorTab[b].classList.add('after_click');
        }
    };

    decorTabParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('decoration_links')) {
            for (let i = 0; i < decorTabLink.length; i++) {
                if (target == decorTabLink[i]) {
                    decorHideTabContent(0);
                    decorShowTabContent(i);
                }
            }
        }
    });

    //timer

    let deadline = '2019-07-04';

    function getTimeRemaining(endtime) {
        let dateDiff = (new Date()).getTimezoneOffset() / 60;
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

    //form

    let massage = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        faliure: 'Что-то пошло не так...'
    };

    let contactForm = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div');
    contactForm.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            let formData = new FormData(item),
                input = item.getElementsByTagName('input');

            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            let postData = (data) => {
                return new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(data);
                });
            };

            postData(json)
                .then(() => statusMessage.innerHTML = massage.loading)
                .then(() => statusMessage.innerHTML = massage.success)
                .catch(() => statusMessage.innerHTML = massage.faliure)
                .then(clearInput);


            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                    setTimeout(() => {
                        statusMessage.innerHTML = "";
                    }, 3000);
                }
            }

        });
    });

    let inputPhones = document.querySelectorAll('[type = tel]');

    inputPhones.forEach((item) => {
        item.addEventListener('input', () => {
            if (!checkPhone(item.value)) {
                item.value = item.value.slice(0, -1);
            }
        });
    });

    let checkPhone = (text) => /^\d+$/.test(text);


    //calk

    let glazzingBtn = document.querySelectorAll('.glazing_price_btn'),
        popupCloseCalc = document.querySelector('.popup_calc_close'),
        pupupCalc = document.querySelector('.popup_calc');


    glazzingBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            pupupCalc.style.display = 'block';
            document.body.style.overflow = "hidden";
        });
    });

    popupCloseCalc.addEventListener('click', function () {
        pupupCalc.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = "";
    });

    // let balconIcons = document.querySelector('.balcon_icons'),
    //     icons = balconIcons.getElementsByTagName('img'),
    //     bigImg = document.querySelectorAll('.big_img');


    // let reduceIcon = (a) => {
    //     for (let i = a; i < icons.length; i++) {
    //        icons[a].classList.remove('do_image_more');
    //     icons[a].classList.add('balcon_icons');
    //     }
    // };
    // reduceIcon(1);



    // let zoomIcon = (i) => {
    //         icons[i].classList.remove('balcon_icons');
    //         icons[i].classList.add('do_image_more');
    // };

    // balconIcons.addEventListener('click', (event) => {
    //     for (let i = 0; i < icons.length; i++) {
    //         if (event.target.tagName == 'IMG' && event.target == icons[i]) {
    //             reduceIcon(0);
    //             zoomIcon(i);
    //         }

});