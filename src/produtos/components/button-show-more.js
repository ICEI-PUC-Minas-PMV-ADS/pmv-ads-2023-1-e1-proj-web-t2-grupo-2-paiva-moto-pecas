export function buttonShowMore(fullLength, initialHeight) {
    const button = document.querySelector('#button-show-more button')

    window.addEventListener('scroll', function () {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition + windowHeight >= fullHeight) {
            console.log('chegou ao final da página')
        }

        if (scrollPosition + windowHeight < fullHeight || initialHeight >= windowHeight) {
            console.log('ainda não chegou ao final da página');
            // button.style.display = 'none'
        }
    });

}