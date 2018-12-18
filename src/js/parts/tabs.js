function tabs() {
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
export default tabs;