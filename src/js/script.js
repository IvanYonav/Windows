    import calc from './parts/calc.js';
    import form from './parts/form.js';
    import modal from './parts/modal.js';
    import timer from './parts/timer.js';
    import tabs from './parts/tabs.js';
    import openImg from './parts/openImg.js';

    window.addEventListener('DOMContentLoaded', () => {
        'use strict';
        calc();
        form();
        modal();
        timer();
        tabs();
        openImg();
    });