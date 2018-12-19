function tabsDecor() {
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
}
export default tabsDecor;