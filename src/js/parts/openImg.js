function openImg() {

    let imgBlock = document.querySelector('.works__img-block'),
        overlay = document.querySelector('.overlay'),
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
}

export default openImg;
