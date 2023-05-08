export function buttonShowMore(initialHeight, maxHeight) {

    const main = document.querySelector('main')
    const button = document.querySelector('#store > button')

    main.style.height = `${initialHeight}px`

    button.addEventListener('click', () => {

        if (initialHeight < maxHeight) {
            initialHeight += 800
            initialHeight = initialHeight <= maxHeight ? initialHeight : maxHeight
            main.style.height = `${initialHeight}px`
        }
    });

    window.addEventListener('scroll', function () {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition + windowHeight >= fullHeight) {
            button.style.display = 'flex'
        }

        if (scrollPosition + windowHeight < fullHeight || initialHeight >= maxHeight) {
            button.style.display = 'none'
        }
    });
}