function timer() {

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
}

export default timer;