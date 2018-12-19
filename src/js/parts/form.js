function form() {
    let massage = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        faliure: 'Что-то пошло не так...'
    };

    let contactForm = document.querySelectorAll('.form-main'),
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
}
export default form;
