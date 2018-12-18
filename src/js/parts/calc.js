function calc() {
    let glazzingBtn = document.querySelectorAll('.glazing_price_btn'),
        popupCloseCalc = document.querySelectorAll('.popup_calc_close'),
        pupupCalc = document.querySelector('.popup_calc');

    let balconIcons = document.querySelector('.balcon_icons'),
        balconIconsItems = document.querySelectorAll('.balcon_icons-items'),
        balconIconsBig = document.querySelectorAll('.big_img-item');

    let width = document.getElementById('width'),
        height = document.getElementById('height'),
        formControl = document.getElementById('view_type');


    function showPopup(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = "hidden";
    }

    glazzingBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            showPopup(pupupCalc);
        });
    });

    function hideCalc(i) {
        i.style.display = 'none';
    }

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
        if (event.target && event.target.classList.contains('balcon_icons-items')) {
            for (let i = 0; i < balconIconsItems.length; i++) {
                if (event.target == balconIconsItems[i]) {
                    hideBigImg(0);
                    showBigImg(i);
                }
            }
        }
    });

    let calcBtn = document.querySelector('.popup_calc_button'),
        popupProfile = document.querySelector('.popup_calc_profile'),
        profileBtn = document.querySelector('.popup_calc_profile_button'),
        popupEnd = document.querySelector('.popup_calc_end');

    calcBtn.addEventListener('click', () => {
        showPopup(popupProfile);
        hideCalc(pupupCalc);
    });

    profileBtn.addEventListener('click', () => {
        showPopup(popupEnd);
        hideCalc(popupProfile);
    });

    let checkCalc = (text) => /^\d+$/.test(text),
        inputCounter = document.querySelectorAll('.form-control');

    inputCounter.forEach((item) => {
        item.addEventListener('input', () => {
            if (!checkCalc(item.value)) {
                item.value = item.value.slice(0, -1);
            }
        });
    });

    popupCloseCalc.forEach(function (item) {
        item.addEventListener('click', function () {
            hideModal(pupupCalc);
            hideModal(popupEnd);
            hideModal(popupProfile);
        });
    });
}

export default calc;