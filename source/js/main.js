const tabs = () => {
    const headerContainerElement = document.querySelector(`.countries__headers`);
    const tabElements = document.querySelectorAll(`.countries__main`);
    const headerElements = document.querySelectorAll(`.countries__header`);

    function hideTabElements (itemAttr) {
        tabElements.forEach((item) => {

            item.classList.add(`visually-hidden`);

            if (itemAttr === item.getAttribute(`data-country`)) {
                item.classList.remove(`visually-hidden`);
            }
        });
    }

    function removeActiveClass () {
        headerElements.forEach((item) => {
            item.classList.remove(`countries__header--active`);
        });
    }

    headerContainerElement.addEventListener(`click`, (evt) => {
        const target = evt.target;

        if (target.classList.contains(`countries__header`) ||
            target.parentNode.classList.contains(`countries__header`)) {
                removeActiveClass();
        
                hideTabElements(target.id);
        
                target.classList.add(`countries__header--active`);
        }

    })
};

const menu = () => {
    const button = document.querySelector(`.site-nav__button`);
    const nav = document.querySelector(`.site-nav__list`);

    button.addEventListener(`click`, () => {
        const buttonAtr = button.getAttribute(`data-opened`);

        if (buttonAtr === `false`) {
            nav.style.display = `flex`;
            button.setAttribute(`data-opened`, `true`);
            return;
        }

        nav.style.display = `none`;
        button.setAttribute(`data-opened`, `false`);
    });
};

tabs();
menu();