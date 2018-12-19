function calc() {
    let glazzingBtn = document.querySelectorAll('.glazing_price_btn'),
        popupCloseCalc = document.querySelectorAll('.popup_calc_close'),
        pupupCalc = document.querySelector('.popup_calc');

    let balconIcons = document.querySelector('.balcon_icons'),
        balconIconsItems = document.querySelectorAll('.balcon_icons-items'),
        balconIconsBig = document.querySelectorAll('.big_img-item');

    let calcBtn = document.querySelector('.popup_calc_button'),
        popupProfile = document.querySelector('.popup_calc_profile'),
        popupEnd = document.querySelector('.popup_calc_end');


    let widthInput = document.querySelector('#width'),
        heightInput = document.querySelector('#height'),
        statusInput = document.createElement('div'),
        formControl = document.querySelector('#view_type'),
        checkBox = document.querySelectorAll('input[type="checkbox"]');

    let windowData = {};

    let hideBigImg = (a) => {
        for (let i = a; i < balconIconsBig.length; i++) {
            balconIconsBig[i].classList.remove('calc_show');
            balconIconsBig[i].classList.add('calc_hide');
            balconIconsItems[i].classList.remove('do_image_more');
        }
    };
    hideBigImg(1);

    let showBigImg = (b) => {
        if (balconIconsBig[b].classList.contains('calc_hide')) {
            balconIconsBig[b].classList.remove('calc_hide');
            balconIconsBig[b].classList.add('calc_show');
            balconIconsItems[b].classList.add('do_image_more');
        }
    };

    balconIcons.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target && event.target.classList.contains('balcon_icons-items')) {
            for (let i = 0; i < balconIconsItems.length; i++) {
                if (event.target == balconIconsItems[i]) {
                    hideBigImg(0);
                    showBigImg(i);
                    windowData.construction = document.querySelector('.balcon_icons .do_image_more').alt;
                    break;
                }
            }
        }
    });

    function showPopup(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideCalc(popupName) {
        popupName.style.display = 'none';
    }

    popupCloseCalc.forEach(function (item) {
        item.addEventListener('click', function (event) {
            if (event.currentTarget == popupCloseCalc[0]) {
                hideCalc(pupupCalc);
            } else if (event.currentTarget == popupCloseCalc[1]) {
                hideCalc(popupProfile);
            } else if (event.currentTarget == popupCloseCalc[2]) {
                hideCalc(popupEnd);
            }
        });
    });

    glazzingBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            showPopup(pupupCalc);
        });
    });


    calcBtn.addEventListener('click', () => {
        if (widthInput.value == '' || heightInput.value == '' || widthInput.value == '0' || height.value == '0') {
            let showError = document.querySelector('.popup_calc_content');
            showError.appendChild(statusInput);
            statusInput.innerHTML = 'Укажите размеры вашего балкона';
        } else {
            showPopup(popupProfile);
            hideCalc(pupupCalc);
            windowData.height = heightInput.value;
            windowData.width = widthInput.value;
        }
        clear();
    });

    let checkBoxValue = () => {
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                windowData.checkBox = checkBox[i].dataset.describe;
            }
        }
    };

    let formControlValue = () => {
        for (let i = 0; i < formControl.windowData.length; i++) {
            if (formControl.windowData[i].selected) {
                windowData.view = formControl.windowData[i].value;
            }
        }
    };

    let checkBoxSelect = () => {
        checkBox[1].addEventListener('change', function () {
            checkBox[0].checked = !checkBox[1].checked;
        });
        checkBox[0].addEventListener('change', function () {
            checkBox[1].checked = !checkBox[0].checked;
        });
    };

    let deleteOptions = () => {
        for (let key in windowData) {
            delete windowData[key];
        }
    };

    popupProfile.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'button popup_calc_profile_button' && checkBox[0].checked != false) {
            showPopup(popupEnd);
            hideCalc(popupProfile);
            checkBoxValue();
            formControlValue();
        } else if (target.className == 'button popup_calc_profile_button' && checkBox[1].checked != false) {
            showPopup(popupEnd);
            hideCalc(popupProfile);
            checkBoxValue();
            formControlValue();
        } else if (target.className == 'button popup_calc_profile_button') {
            let showError = document.querySelector('.popup_calc_profile_content');
            showError.appendChild(statusInput);
            statusInput.innerHTML = 'Вы не выбрали тип остекления и его профиль';
        }
        clear();
    });


    popupEnd.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className == 'popup_calc_end_close' || target.className == 'closed') {
            hideCalc(popupEnd);
            deleteOptions();
        }
    });

    function clear() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            setTimeout(() => {
                statusInput.innerHTML = "";
            }, 3000);
        }
    }

    let form = document.querySelectorAll('form')[8],
        input = document.querySelectorAll('input');



        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let request = new XMLHttpRequest();
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            let formData = new FormData(form);


            formData.forEach(function (value, key) {
                windowData[key] = value;
            });

            let json = JSON.stringify(windowData);

            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    let showError = document.querySelector('.form_and');
                    showError.appendChild(statusInput);
                    statusInput.innerHTML = 'Идет отправка';
                } else if (request.readyState === 4 && request.status == 200) {
                    let showError = document.querySelector('.form_and');
                    showError.appendChild(statusInput);
                    statusInput.innerHTML = 'Отправлено!';
                    clear();
                    deleteOptions();
                } else {
                     let showError = document.querySelector('.form_and');
                     showError.appendChild(statusInput);
                     statusInput.innerHTML = 'Ошибка!';
                    clear();
                    deleteOptions();
                }
            });

        });

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('keypress', function (e) {
            let key = e.keyCode;
            let atributeName = input[i].getAttribute('name'),
                inputId = input[i].id;

            if (atributeName == 'user_phone' || inputId == 'width' || inputId == 'height') {
                if (key < 48 || key > 57) {
                    e.preventDefault();
                }
            }
        });
    }

    checkBoxSelect();
}


export default calc;