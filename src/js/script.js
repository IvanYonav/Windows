    import calc from './parts/calc.js';
    import form from './parts/form.js';
    import modal from './parts/modal.js';
    import timer from './parts/timer.js';
    import tabsGlazing from './parts/tabsGlazing.js';
    import openImg from './parts/openImg.js';
    import tabsDecor from './parts/tabsDecor.js';

    window.addEventListener('DOMContentLoaded', () => {
        'use strict';
        calc();
        form();
        modal();
        timer();
        tabsGlazing();
        tabsDecor();
        openImg();
    });